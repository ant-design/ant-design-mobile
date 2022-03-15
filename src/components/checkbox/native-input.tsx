import React, { FC, useEffect, useRef } from 'react'

interface Props {
  type: 'checkbox' | 'radio'
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
  id?: string
}

export const NativeInput: FC<Props> = props => {
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (props.disabled) return
    if (!inputRef.current) return
    const input = inputRef.current
    function handleClick(e: MouseEvent) {
      e.stopPropagation()
      e.stopImmediatePropagation()
      props.onChange(input.checked)
    }
    input.addEventListener('click', handleClick)
    return () => {
      input.removeEventListener('click', handleClick)
    }
  }, [props.disabled, props.onChange])

  return (
    <input
      ref={inputRef}
      type='checkbox'
      checked={props.checked}
      onChange={() => {}}
      disabled={props.disabled}
      id={props.id}
    />
  )
}

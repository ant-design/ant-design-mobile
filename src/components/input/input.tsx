import React, { useState, forwardRef, useImperativeHandle, useRef } from 'react'
import classNames from 'classnames'
import { useControllableValue } from 'ahooks'
import { CloseCircleFilled } from '@ant-design/icons'
import { ElementProps } from '../../utils/element-props'

const classPrefix = `am-input`

export type InputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  'onChange'
> & {
  onChange?: (val: string) => void
} & {
  clearable?: boolean
  onClear?: () => void
} & ElementProps<
    '--font-size' | '--color' | '--placeholder-color' | '--disabled-color'
  >

export type InputRef = {
  clear: () => void
  focus: () => void
  blur: () => void
}

export const Input = forwardRef<InputRef, InputProps>((props, ref) => {
  const {
    clearable,
    onClear,
    className,
    style,
    defaultValue: outerDefaultValue,
    value: outerValue,
    onChange: outerOnChange,
    ...inputProps
  } = props
  const [value, setValue] = useControllableValue<string>(props, {
    defaultValue: '',
  })
  const [hasFocus, setHasFocus] = useState(false)
  const nativeInputRef = useRef<HTMLInputElement>(null)

  useImperativeHandle(ref, () => ({
    clear: () => {
      setValue('')
    },
    focus: () => {
      nativeInputRef.current?.focus()
    },
    blur: () => {
      nativeInputRef.current?.blur()
    },
  }))

  return (
    <div
      className={classNames(`${classPrefix}-wrapper`, className)}
      style={style}
    >
      <input
        ref={nativeInputRef}
        {...inputProps}
        className={classPrefix}
        value={value}
        onChange={e => {
          setValue(e.target.value)
        }}
        onFocus={e => {
          setHasFocus(true)
          props.onFocus?.(e)
        }}
        onBlur={e => {
          setHasFocus(false)
          props.onBlur?.(e)
        }}
      />
      {props.clearable && !!value && hasFocus && (
        <div
          className={`${classPrefix}-clear`}
          onMouseDown={e => {
            e.preventDefault()
          }}
          onClick={() => {
            setValue('')
            props.onClear?.()
          }}
        >
          <CloseCircleFilled />
        </div>
      )}
    </div>
  )
})

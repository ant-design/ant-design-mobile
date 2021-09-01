import React, { useState, forwardRef, useImperativeHandle, useRef } from 'react'
import classNames from 'classnames'
import { useNewControllableValue } from '../../utils/use-controllable-value'
import { CloseCircleFilled } from '@ant-design/icons'
import { ElementProps } from '../../utils/element-props'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-input`

export type InputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  'onChange'
> & {
  value?: string
  defaultValue?: string
  onChange?: (val: string) => void
} & {
  clearable?: boolean
  onClear?: () => void
} & ElementProps<
    '--font-size' | '--color' | '--placeholder-color' | '--disabled-color'
  >

const defaultProps = {
  defaultValue: '',
}

export type InputRef = {
  clear: () => void
  focus: () => void
  blur: () => void
}

export const Input = forwardRef<InputRef, InputProps>((p, ref) => {
  const props = mergeProps(defaultProps, p)
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
  const [value, setValue] = useNewControllableValue(props)
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

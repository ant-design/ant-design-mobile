import React, { useState, forwardRef, useImperativeHandle, useRef } from 'react'
import classNames from 'classnames'
import { useNewControllableValue } from '../../utils/use-controllable-value'
import { CloseCircleFilled } from '@ant-design/icons'
import { ElementProps, withElementProps } from '../../utils/element-props'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-input`

export type InputProps = Pick<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  | 'maxLength'
  | 'autoComplete'
  | 'enterKeyHint'
  | 'pattern'
  | 'type'
  | 'onFocus'
  | 'onBlur'
> & {
  value?: string
  defaultValue?: string
  onChange?: (val: string) => void
  placeholder?: string
  disabled?: boolean
  readOnly?: boolean
  clearable?: boolean
  onClear?: () => void
  id?: string
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

  return withElementProps(
    props,
    <div className={`${classPrefix}-wrapper`}>
      <input
        ref={nativeInputRef}
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
        id={props.id}
        placeholder={props.placeholder}
        disabled={props.disabled}
        readOnly={props.readOnly}
        maxLength={props.maxLength}
        autoComplete={props.autoComplete}
        enterKeyHint={props.enterKeyHint}
        pattern={props.pattern}
        type={props.type}
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

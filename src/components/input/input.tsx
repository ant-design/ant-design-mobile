import React, { useState, forwardRef, useImperativeHandle, useRef } from 'react'
import { usePropsValue } from '../../utils/use-props-value'
import { CloseCircleFill } from 'antd-mobile-icons'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-input`

type NativeInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

type EnterKeyHintProps = NativeInputProps extends { enterKeyHint?: unknown }
  ? {
      enterKeyHint?: NativeInputProps['enterKeyHint']
    }
  : {}

export type InputProps = Pick<
  NativeInputProps,
  | 'maxLength'
  | 'minLength'
  | 'max'
  | 'min'
  | 'autoComplete'
  | 'pattern'
  | 'type'
  | 'onFocus'
  | 'onBlur'
  | 'autoCapitalize'
  | 'autoCorrect'
  | 'onKeyDown'
  | 'onKeyUp'
> &
  EnterKeyHintProps & {
    value?: string
    defaultValue?: string
    onChange?: (val: string) => void
    placeholder?: string
    disabled?: boolean
    readOnly?: boolean
    clearable?: boolean
    onClear?: () => void
    id?: string
    onEnterPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  } & NativeProps<
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
  const [value, setValue] = usePropsValue(props)
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

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (props.onEnterPress && (e.code === 'Enter' || e.keyCode === 13)) {
      props.onEnterPress(e)
    }
    props.onKeyDown?.(e)
  }

  return withNativeProps(
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
        minLength={props.minLength}
        max={props.max}
        min={props.min}
        autoComplete={props.autoComplete}
        enterKeyHint={props.enterKeyHint}
        pattern={props.pattern}
        type={props.type}
        autoCapitalize={props.autoCapitalize}
        autoCorrect={props.autoCorrect}
        onKeyDown={handleKeydown}
        onKeyUp={props.onKeyUp}
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
          <CloseCircleFill />
        </div>
      )}
    </div>
  )
})

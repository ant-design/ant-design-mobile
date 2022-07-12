import React, { useState, forwardRef, useImperativeHandle, useRef } from 'react'
import { usePropsValue } from '../../utils/use-props-value'
import { CloseCircleFill } from 'antd-mobile-icons'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import classNames from 'classnames'
import { useIsomorphicLayoutEffect } from 'ahooks'
import { bound } from '../../utils/bound'
import { isIOS } from '../../utils/validate'

const classPrefix = `adm-input`

type NativeInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

type AriaProps = {
  // These props currently are only used internally. They are not exported to users:
  role?: string
}

export type InputProps = Pick<
  NativeInputProps,
  | 'maxLength'
  | 'minLength'
  | 'autoComplete'
  | 'autoFocus'
  | 'pattern'
  | 'inputMode'
  | 'type'
  | 'name'
  | 'onFocus'
  | 'onBlur'
  | 'autoCapitalize'
  | 'autoCorrect'
  | 'onKeyDown'
  | 'onKeyUp'
  | 'onCompositionStart'
  | 'onCompositionEnd'
  | 'onClick'
  | 'step'
> & {
  value?: string
  defaultValue?: string
  onChange?: (val: string) => void
  placeholder?: string
  disabled?: boolean
  readOnly?: boolean
  clearable?: boolean
  onlyShowClearWhenFocus?: boolean
  onClear?: () => void
  id?: string
  onEnterPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  enterKeyHint?:
    | 'enter'
    | 'done'
    | 'go'
    | 'next'
    | 'previous'
    | 'search'
    | 'send'
  min?: number
  max?: number
} & NativeProps<
    '--font-size' | '--color' | '--placeholder-color' | '--text-align'
  > &
  AriaProps

const defaultProps = {
  defaultValue: '',
  onlyShowClearWhenFocus: true,
}

export type InputRef = {
  clear: () => void
  focus: () => void
  blur: () => void
  nativeElement: HTMLInputElement | null
}

export const Input = forwardRef<InputRef, InputProps>((p, ref) => {
  const props = mergeProps(defaultProps, p)
  const [value, setValue] = usePropsValue(props)
  const [hasFocus, setHasFocus] = useState(false)
  const compositionStartRef = useRef(false)
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
    get nativeElement() {
      return nativeInputRef.current
    },
  }))

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (props.onEnterPress && (e.code === 'Enter' || e.keyCode === 13)) {
      props.onEnterPress(e)
    }
    props.onKeyDown?.(e)
  }

  useIsomorphicLayoutEffect(() => {
    if (!props.enterKeyHint) return
    nativeInputRef.current?.setAttribute('enterkeyhint', props.enterKeyHint)
    return () => {
      nativeInputRef.current?.removeAttribute('enterkeyhint')
    }
  }, [props.enterKeyHint])

  function checkValue() {
    let nextValue = value
    if (props.type === 'number') {
      nextValue =
        nextValue &&
        bound(parseFloat(nextValue), props.min, props.max).toString()
    }
    if (nextValue !== value) {
      setValue(nextValue)
    }
  }

  const shouldShowClear = (() => {
    if (!props.clearable || !value || props.readOnly) return false
    if (props.onlyShowClearWhenFocus) {
      return hasFocus
    } else {
      return true
    }
  })()

  return withNativeProps(
    props,
    <div
      className={classNames(
        `${classPrefix}`,
        props.disabled && `${classPrefix}-disabled`
      )}
    >
      <input
        ref={nativeInputRef}
        className={`${classPrefix}-element`}
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
          checkValue()
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
        autoFocus={props.autoFocus}
        pattern={props.pattern}
        inputMode={props.inputMode}
        type={props.type}
        name={props.name}
        autoCapitalize={props.autoCapitalize}
        autoCorrect={props.autoCorrect}
        onKeyDown={handleKeydown}
        onKeyUp={props.onKeyUp}
        onCompositionStart={e => {
          compositionStartRef.current = true
          props.onCompositionStart?.(e)
        }}
        onCompositionEnd={e => {
          compositionStartRef.current = false
          props.onCompositionEnd?.(e)
        }}
        onClick={props.onClick}
        role={props.role}
        aria-valuenow={props['aria-valuenow']}
        aria-valuemax={props['aria-valuemax']}
        aria-valuemin={props['aria-valuemin']}
      />
      {shouldShowClear && (
        <div
          className={`${classPrefix}-clear`}
          onMouseDown={e => {
            e.preventDefault()
          }}
          onClick={() => {
            setValue('')
            props.onClear?.()

            // https://github.com/ant-design/ant-design-mobile/issues/5212
            if (isIOS() && compositionStartRef.current) {
              compositionStartRef.current = false
              nativeInputRef.current?.blur()
            }
          }}
        >
          <CloseCircleFill />
        </div>
      )}
    </div>
  )
})

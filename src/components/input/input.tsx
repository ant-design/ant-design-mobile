import React, { useState, forwardRef, useImperativeHandle, useRef } from 'react'
import { usePropsValue } from '../../utils/use-props-value'
import { CloseCircleFill } from 'antd-mobile-icons'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import classNames from 'classnames'
import { bound } from '../../utils/bound'
import { isIOS } from '../../utils/validate'
import { useConfig } from '../config-provider'
import useInputHandleKeyDown from './useInputHandleKeyDown'

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
  | 'id'
  | 'placeholder'
  | 'readOnly'
  | 'disabled'
  | 'enterKeyHint'
> & {
  value?: string
  defaultValue?: string
  onChange?: (val: string) => void
  clearable?: boolean
  onlyShowClearWhenFocus?: boolean
  onClear?: () => void
  onEnterPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void
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
  const { locale } = useConfig()
  const handleKeydown = useInputHandleKeyDown({
    onEnterPress: props.onEnterPress,
    onKeyDown: props.onKeyDown,
    nativeInputRef,
    enterKeyHint: props.enterKeyHint,
  })

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

  function checkValue() {
    let nextValue = value
    if (props.type === 'number') {
      const boundValue =
        nextValue &&
        bound(parseFloat(nextValue), props.min, props.max).toString()
      // fix the display issue of numbers starting with 0
      if (Number(nextValue) !== Number(boundValue)) {
        nextValue = boundValue
      }
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
        enterKeyHint={props.enterKeyHint}
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
        step={props.step}
        role={props.role}
        aria-valuenow={props['aria-valuenow']}
        aria-valuemax={props['aria-valuemax']}
        aria-valuemin={props['aria-valuemin']}
        aria-label={props['aria-label']}
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
          aria-label={locale.Input.clear}
        >
          <CloseCircleFill />
        </div>
      )}
    </div>
  )
})

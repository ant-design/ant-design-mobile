import { CloseCircleFill } from 'antd-mobile-icons'
import classNames from 'classnames'
import React, {
  ReactNode,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { bound } from '../../utils/bound'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { usePropsValue } from '../../utils/use-props-value'
import { isIOS } from '../../utils/validate'
import { mergeProps } from '../../utils/with-default-props'
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
  | 'onPaste'
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
  clearIcon?: ReactNode
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
  clearIcon: <CloseCircleFill />,
  onlyShowClearWhenFocus: true,
}

export type InputRef = {
  clear: () => void
  focus: () => void
  blur: () => void
  nativeElement: HTMLInputElement | null
}

export const Input = forwardRef<InputRef, InputProps>((props, ref) => {
  const { locale, input: componentConfig = {} } = useConfig()
  const mergedProps = mergeProps(defaultProps, componentConfig, props)
  const [value, setValue] = usePropsValue(mergedProps)
  const [hasFocus, setHasFocus] = useState(false)
  const compositionStartRef = useRef(false)
  const nativeInputRef = useRef<HTMLInputElement>(null)

  const handleKeydown = useInputHandleKeyDown({
    onEnterPress: mergedProps.onEnterPress,
    onKeyDown: mergedProps.onKeyDown,
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
    if (mergedProps.type === 'number') {
      const boundValue =
        nextValue &&
        bound(
          parseFloat(nextValue),
          mergedProps.min,
          mergedProps.max
        ).toString()
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
    if (!mergedProps.clearable || !value || mergedProps.readOnly) return false
    if (mergedProps.onlyShowClearWhenFocus) {
      return hasFocus
    } else {
      return true
    }
  })()

  return withNativeProps(
    mergedProps,
    <div
      className={classNames(
        `${classPrefix}`,
        mergedProps.disabled && `${classPrefix}-disabled`
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
          mergedProps.onFocus?.(e)
        }}
        onBlur={e => {
          setHasFocus(false)
          checkValue()
          mergedProps.onBlur?.(e)
        }}
        onPaste={mergedProps.onPaste}
        id={mergedProps.id}
        placeholder={mergedProps.placeholder}
        disabled={mergedProps.disabled}
        readOnly={mergedProps.readOnly}
        maxLength={mergedProps.maxLength}
        minLength={mergedProps.minLength}
        max={mergedProps.max}
        min={mergedProps.min}
        autoComplete={mergedProps.autoComplete}
        enterKeyHint={mergedProps.enterKeyHint}
        autoFocus={mergedProps.autoFocus}
        pattern={mergedProps.pattern}
        inputMode={mergedProps.inputMode}
        type={mergedProps.type}
        name={mergedProps.name}
        autoCapitalize={mergedProps.autoCapitalize}
        autoCorrect={mergedProps.autoCorrect}
        onKeyDown={handleKeydown}
        onKeyUp={mergedProps.onKeyUp}
        onCompositionStart={e => {
          compositionStartRef.current = true
          mergedProps.onCompositionStart?.(e)
        }}
        onCompositionEnd={e => {
          compositionStartRef.current = false
          mergedProps.onCompositionEnd?.(e)
        }}
        onClick={mergedProps.onClick}
        step={mergedProps.step}
        role={mergedProps.role}
        aria-valuenow={mergedProps['aria-valuenow']}
        aria-valuemax={mergedProps['aria-valuemax']}
        aria-valuemin={mergedProps['aria-valuemin']}
        aria-label={mergedProps['aria-label']}
      />
      {shouldShowClear && (
        <div
          className={`${classPrefix}-clear`}
          onMouseDown={e => {
            e.preventDefault()
          }}
          onClick={() => {
            setValue('')
            mergedProps.onClear?.()

            // https://github.com/ant-design/ant-design-mobile/issues/5212
            if (isIOS() && compositionStartRef.current) {
              compositionStartRef.current = false
              nativeInputRef.current?.blur()
            }
          }}
          aria-label={locale.Input.clear}
        >
          {mergedProps.clearIcon}
        </div>
      )}
    </div>
  )
})

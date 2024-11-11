import classNames from 'classnames'
import type { ReactElement } from 'react'
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { bound } from '../../utils/bound'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { usePropsValue } from '../../utils/use-props-value'
import { mergeProps } from '../../utils/with-default-props'
import { useConfig } from '../config-provider'
import type { NumberKeyboardProps } from '../number-keyboard'

export type PasscodeInputProps = {
  value?: string
  defaultValue?: string
  length?: number
  plain?: boolean
  error?: boolean
  caret?: boolean
  seperated?: boolean
  keyboard?: ReactElement<NumberKeyboardProps>
  inputMode?: 'numeric' | 'text'
  onBlur?: () => void
  onFocus?: () => void
  onChange?: (val: string) => void
  onFill?: (val: string) => void
} & NativeProps<
  | '--cell-gap'
  | '--cell-size'
  | '--dot-size'
  | '--border-color'
  | '--border-radius'
>

export type PasscodeInputRef = {
  focus: () => void
  blur: () => void
}

const classPrefix = 'adm-passcode-input'

const defaultProps = {
  defaultValue: '',
  length: 6,
  plain: false,
  error: false,
  seperated: false,
  caret: true,
  inputMode: 'numeric',
}

export const PasscodeInput = forwardRef<PasscodeInputRef, PasscodeInputProps>(
  (p: PasscodeInputProps, ref) => {
    const props = mergeProps(defaultProps, p)
    // 防止 length 值不合法
    const cellLength =
      props.length > 0 && props.length < Infinity
        ? Math.floor(props.length)
        : defaultProps.length
    const { locale } = useConfig()

    const [focused, setFocused] = useState(false)
    const [value, setValue] = usePropsValue(props)

    const rootRef = useRef<HTMLDivElement>(null)
    const nativeInputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
      if (value.length >= cellLength) {
        props.onFill?.(value)
      }
    }, [value, cellLength])

    const onFocus = () => {
      if (!props.keyboard) {
        nativeInputRef.current?.focus()
      }
      setFocused(true)
      props.onFocus?.()
    }

    useEffect(() => {
      if (!focused) return
      const timeout = window.setTimeout(() => {
        rootRef.current?.scrollIntoView({
          block: 'center',
          inline: 'center',
          behavior: 'smooth',
        })
      }, 100)
      return () => {
        window.clearTimeout(timeout)
      }
    }, [focused])

    const onBlur = () => {
      setFocused(false)
      props.onBlur?.()
    }

    useImperativeHandle(ref, () => ({
      focus: () => rootRef.current?.focus(),
      blur: () => {
        rootRef.current?.blur()
        nativeInputRef.current?.blur()
      },
    }))

    const renderCells = () => {
      const cells: ReactElement[] = []

      const chars = value.split('')
      const caretIndex = chars.length // 光标位置index等于当前文字长度
      const focusedIndex = bound(chars.length, 0, cellLength - 1)

      for (let i = 0; i < cellLength; i++) {
        cells.push(
          <div
            className={classNames(`${classPrefix}-cell`, {
              [`${classPrefix}-cell-caret`]:
                props.caret && caretIndex === i && focused,
              [`${classPrefix}-cell-focused`]: focusedIndex === i && focused,
              [`${classPrefix}-cell-dot`]: !props.plain && chars[i],
            })}
            key={i}
          >
            {chars[i] && props.plain ? chars[i] : ''}
          </div>
        )
      }
      return cells
    }

    const cls = classNames(classPrefix, {
      [`${classPrefix}-focused`]: focused,
      [`${classPrefix}-error`]: props.error,
      [`${classPrefix}-seperated`]: props.seperated,
    })

    return (
      <>
        {withNativeProps(
          props,
          <div
            ref={rootRef}
            tabIndex={0}
            className={cls}
            onFocus={onFocus}
            onBlur={onBlur}
            role='button'
            aria-label={locale.PasscodeInput.name}
          >
            <div className={`${classPrefix}-cell-container`}>
              {renderCells()}
            </div>
            <input
              ref={nativeInputRef}
              className={`${classPrefix}-native-input`}
              value={value}
              type='text'
              pattern='[0-9]*'
              inputMode={props.inputMode}
              onChange={e => {
                setValue(e.target.value.slice(0, props.length))
              }}
              aria-hidden
            />
          </div>
        )}
        {props.keyboard &&
          React.cloneElement(props.keyboard, {
            visible: focused,
            onInput: v => {
              if (value.length < cellLength) {
                setValue((value + v).slice(0, props.length))
              }
            },
            onDelete: () => {
              setValue(value.slice(0, -1))
            },
            onClose: () => {
              rootRef.current?.blur()
            },
          } as NumberKeyboardProps)}
      </>
    )
  }
)

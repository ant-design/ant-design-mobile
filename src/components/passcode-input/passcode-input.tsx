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
  onChange?: (val: string) => void
  length?: number
  plain?: boolean
  error?: boolean
  caret?: boolean
  seperated?: boolean
  onBlur?: () => void
  onFocus?: () => void
  keyboard?: ReactElement<NumberKeyboardProps>
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
}

export const PasscodeInput = forwardRef<PasscodeInputRef, PasscodeInputProps>(
  (props: PasscodeInputProps, ref) => {
    const mergedProps = mergeProps(defaultProps, props)
    // 防止 length 值不合法
    const cellLength =
      mergedProps.length > 0 && mergedProps.length < Infinity
        ? Math.floor(mergedProps.length)
        : defaultProps.length
    const { locale } = useConfig()

    const [focused, setFocused] = useState(false)
    const [value, setValue] = usePropsValue(mergedProps)

    const rootRef = useRef<HTMLDivElement>(null)
    const nativeInputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
      if (value.length >= cellLength) {
        mergedProps.onFill?.(value)
      }
    }, [value, cellLength])

    const onFocus = () => {
      if (!mergedProps.keyboard) {
        nativeInputRef.current?.focus()
      }
      setFocused(true)
      mergedProps.onFocus?.()
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
      mergedProps.onBlur?.()
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
                mergedProps.caret && caretIndex === i && focused,
              [`${classPrefix}-cell-focused`]: focusedIndex === i && focused,
              [`${classPrefix}-cell-dot`]: !mergedProps.plain && chars[i],
            })}
            key={i}
          >
            {chars[i] && mergedProps.plain ? chars[i] : ''}
          </div>
        )
      }
      return cells
    }

    const cls = classNames(classPrefix, {
      [`${classPrefix}-focused`]: focused,
      [`${classPrefix}-error`]: mergedProps.error,
      [`${classPrefix}-seperated`]: mergedProps.seperated,
    })

    return (
      <>
        {withNativeProps(
          mergedProps,
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
              inputMode='numeric'
              onChange={e => {
                setValue(e.target.value.slice(0, mergedProps.length))
              }}
              aria-hidden
            />
          </div>
        )}
        {mergedProps.keyboard &&
          React.cloneElement(mergedProps.keyboard, {
            visible: focused,
            onInput: v => {
              if (value.length < cellLength) {
                setValue((value + v).slice(0, mergedProps.length))
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

import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
  ReactElement,
} from 'react'
import { useControllableValue } from 'ahooks'
import { mergeProps } from '../../utils/with-default-props'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import type { InputProps } from '../input'
import type { NumberKeyboardProps } from '../number-keyboard'
import classNames from 'classnames'
import { bound } from '../../utils/bound'

export type PasscodeInputProps = {
  length?: number
  plain?: boolean
  error?: boolean
  caret?: boolean
  seperated?: boolean
  onBlur?: () => void
  onFocus?: () => void
  keyboard?: ReactElement<NumberKeyboardProps>
  onFill?: (val: string) => void
} & Pick<InputProps, 'value' | 'defaultValue' | 'onChange'> &
  NativeProps<'--cell-gap' | '--cell-size'>

export type PasscodeInputRef = {
  focus: () => void
  blur: () => void
}

const classPrefix = 'adm-passcode-input'

const defaultProps = {
  length: 6,
  plain: false,
  error: false,
  seperated: false,
  caret: true,
}

export const PasscodeInput = forwardRef<PasscodeInputRef, PasscodeInputProps>(
  (p: PasscodeInputProps, ref) => {
    const props = mergeProps(defaultProps, p)
    // 防止 length 值不合法
    const cellLength =
      props.length > 0 && props.length < Infinity
        ? Math.floor(props.length)
        : defaultProps.length

    const [focused, setFocused] = useState(false)
    const [value, setValue] = useControllableValue(props, {
      defaultValue: '',
    })
    const rootRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
      if (value.length >= cellLength) {
        props.onFill?.(value)
      }
    }, [props.onFill, value, cellLength])

    const onFocus = () => {
      !props.keyboard && inputRef.current?.focus()
      setFocused(true)
      props.onFocus?.()
    }

    const onBlur = () => {
      setFocused(false)
      props.onBlur?.()
    }

    useImperativeHandle(ref, () => ({
      focus: () => rootRef.current?.focus(),
      blur: () => rootRef.current?.blur(),
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
              caret: props.caret && caretIndex === i && focused,
              focused: focusedIndex === i && focused,
              dot: !props.plain && chars[i],
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
      focused: focused,
      error: props.error,
      seperated: props.seperated,
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
          >
            {renderCells()}
          </div>
        )}
        {props.keyboard &&
          React.cloneElement(props.keyboard, {
            visible: focused,
            onInput: v => {
              if (value.length < cellLength) {
                setValue(value + v)
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

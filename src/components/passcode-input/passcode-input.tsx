import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
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

export type PasscodeInputProps = {
  length?: number
  plain?: boolean
  error?: boolean
  caret?: boolean
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

    useEffect(() => {
      if (value.length >= cellLength) {
        props.onFill?.(value)
      }
    }, [props.onFill, value, cellLength])

    const onFocus = useCallback(() => {
      setFocused(true)
      props.onFocus?.()
    }, [focused, props.onFocus])

    const onBlur = useCallback(() => {
      setFocused(false)
      props.onBlur?.()
    }, [focused, props.onBlur])

    useImperativeHandle(ref, () => ({
      focus: () => rootRef.current?.focus(),
      blur: () => rootRef.current?.blur(),
    }))

    const renderCell = () => {
      const cells: JSX.Element[] = []

      const chars = value.split('')
      const caretIndex = chars.length // 光标位置index等于当前文字长度

      for (let i = 0; i < cellLength; i++) {
        const content = chars[i] && props.plain ? chars[i] : ''
        const cls = classNames(`${classPrefix}-cell`, {
          caret: caretIndex === i && focused,
          dot: !props.plain && chars[i],
        })

        cells.push(
          <div className={cls} key={i}>
            {content}
          </div>
        )
      }
      return cells
    }

    const gap = parseFloat(props.style?.['--cell-gap'] || '0')
    const cls = classNames(classPrefix, {
      focus: focused,
      error: props.error,
      'with-gap': gap > 0,
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
            {renderCell()}
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
              console.log('onClose', rootRef.current)
              rootRef.current?.blur()
            },
          } as NumberKeyboardProps)}
      </>
    )
  }
)

import React, {
  forwardRef,
  ReactElement,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import type { InputProps } from '../input'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import { NumberKeyboardProps } from '../number-keyboard'
import { usePropsValue } from '../../utils/use-props-value'

const classPrefix = 'adm-virtual-input'

export type VirtualInputProps = {
  onFocus?: () => void
  onBlur?: () => void
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
  keyboard?: ReactElement<NumberKeyboardProps>
} & Pick<InputProps, 'value' | 'onChange' | 'placeholder'> &
  NativeProps<'--text-align'>

const defaultProps = {
  defaultValue: '',
}

export type VirtualInputRef = {
  focus: () => void
  blur: () => void
}

export const VirtualInput = forwardRef<VirtualInputRef, VirtualInputProps>(
  (p, ref) => {
    const props = mergeProps(defaultProps, p)
    const [value, setValue] = usePropsValue(props)
    const rootRef = useRef<HTMLDivElement>(null)
    const [keyboardVisible, setKeyboardVisible] = useState(false)

    useLayoutEffect(() => {
      const root = rootRef.current
      if (!root) return
      if (document.activeElement !== root) {
        return
      }
      root.scrollTo({
        left: root.clientWidth,
      })
    }, [value])

    useImperativeHandle(ref, () => ({
      focus: () => {
        rootRef.current?.focus()
      },
      blur: () => {
        rootRef.current?.blur()
      },
    }))

    function onBlur() {
      setKeyboardVisible(false)
      props.onBlur?.()
    }

    return withNativeProps(
      props,
      <div
        ref={rootRef}
        className={classPrefix}
        tabIndex={0}
        onFocus={() => {
          setKeyboardVisible(true)
          props.onFocus?.()
        }}
        onBlur={onBlur}
        onClick={props.onClick}
      >
        <div className={`${classPrefix}-content`}>
          {value}
          <div className={`${classPrefix}-caret-container`}>
            <div className={`${classPrefix}-caret`} />
          </div>
        </div>
        {!value && (
          <div className={`${classPrefix}-placeholder`}>
            {props.placeholder}
          </div>
        )}
        {props.keyboard &&
          React.cloneElement(props.keyboard, {
            onInput: v => {
              setValue(value + v)
            },
            onDelete: () => {
              setValue(value.slice(0, -1))
            },
            visible: keyboardVisible,
            onClose: onBlur,
          } as NumberKeyboardProps)}
      </div>
    )
  }
)

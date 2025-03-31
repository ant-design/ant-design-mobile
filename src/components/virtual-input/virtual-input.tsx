import { useIsomorphicLayoutEffect } from 'ahooks'
import { CloseCircleFill } from 'antd-mobile-icons'
import classNames from 'classnames'
import type { ReactElement } from 'react'
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { usePropsValue } from '../../utils/use-props-value'
import { mergeProp, mergeProps } from '../../utils/with-default-props'
import { useConfig } from '../config-provider'
import type { InputProps } from '../input'
import { NumberKeyboardProps } from '../number-keyboard'

const classPrefix = 'adm-virtual-input'

export type VirtualInputProps = {
  onFocus?: () => void
  onBlur?: () => void
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
  keyboard?: ReactElement<NumberKeyboardProps>
  clearable?: boolean
  onClear?: () => void
} & Pick<
  InputProps,
  'value' | 'onChange' | 'placeholder' | 'disabled' | 'clearIcon'
> &
  NativeProps<
    | '--font-size'
    | '--color'
    | '--placeholder-color'
    | '--disabled-color'
    | '--text-align'
    | '--caret-width'
    | '--caret-color'
  >

const defaultProps = {
  defaultValue: '',
}

export type VirtualInputRef = {
  focus: () => void
  blur: () => void
}

export const VirtualInput = forwardRef<VirtualInputRef, VirtualInputProps>(
  (props, ref) => {
    const { locale, input: componentConfig = {} } = useConfig()
    const mergedProps = mergeProps(defaultProps, componentConfig, props)
    const [value, setValue] = usePropsValue(mergedProps)
    const rootRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const [hasFocus, setHasFocus] = useState(false)
    const [caretPosition, setCaretPosition] = useState(value.length) // 光标位置，从 0 开始，如值是 2 则表示光标在顺序下标为 2 的数字之前

    const clearIcon = mergeProp(
      <CloseCircleFill />,
      componentConfig.clearIcon,
      props.clearIcon
    )

    function scrollToEnd() {
      const root = rootRef.current
      if (!root) return
      if (document.activeElement !== root) {
        return
      }
      const content = contentRef.current
      if (!content) return
      content.scrollLeft = content.clientWidth
    }

    useIsomorphicLayoutEffect(() => {
      scrollToEnd()
    }, [value])
    useEffect(() => {
      if (hasFocus) {
        scrollToEnd()
      }
    }, [hasFocus])

    useImperativeHandle(ref, () => ({
      focus: () => {
        rootRef.current?.focus()
      },
      blur: () => {
        rootRef.current?.blur()
      },
    }))

    function onFocus() {
      setHasFocus(true)
      mergedProps.onFocus?.()
    }

    function onBlur() {
      setHasFocus(false)
      mergedProps.onBlur?.()
    }

    const keyboard = mergedProps.keyboard
    const keyboardElement =
      keyboard &&
      React.cloneElement(keyboard, {
        onInput: v => {
          const newValue =
            value.substring(0, caretPosition) +
            v +
            value.substring(caretPosition)
          setValue(newValue)
          setCaretPosition((c: number) => c + 1)
          keyboard.props.onInput?.(v)
        },
        onDelete: () => {
          if (caretPosition === 0) return
          const newValue =
            value.substring(0, caretPosition - 1) +
            value.substring(caretPosition)
          setValue(newValue)
          setCaretPosition(caretPosition - 1)
          keyboard.props.onDelete?.()
        },
        visible: hasFocus,
        onClose: () => {
          const activeElement = document.activeElement as HTMLElement

          // Long press makes `activeElement` to be the child of rootRef
          // We will trigger blur on the child element instead
          if (activeElement && rootRef.current?.contains(activeElement)) {
            activeElement.blur()
          } else {
            rootRef.current?.blur()
          }

          keyboard.props.onClose?.()
        },
        getContainer: null,
      } as NumberKeyboardProps)

    // 每个字符点击后，将光标置于其之后
    // 点击容器时，将光标置于最后
    const changeCaretPosition = (index: number) => (e: React.MouseEvent) => {
      e.stopPropagation()
      setCaretPosition(index + 1)
    }

    const chars = (value + '').split('')

    return withNativeProps(
      mergedProps,
      <div
        ref={rootRef}
        className={classNames(classPrefix, {
          [`${classPrefix}-disabled`]: mergedProps.disabled,
        })}
        tabIndex={mergedProps.disabled ? undefined : 0}
        role='textbox'
        onFocus={onFocus}
        onBlur={onBlur}
        onClick={mergedProps.onClick}
      >
        <div
          className={`${classPrefix}-content`}
          ref={contentRef}
          aria-disabled={mergedProps.disabled}
          aria-label={mergedProps.placeholder}
          onClick={changeCaretPosition(value.length - 1)}
        >
          {chars.slice(0, caretPosition).map((i: string, index: number) => (
            <span key={index} onClick={changeCaretPosition(index)}>
              {i}
            </span>
          ))}
          <div className={`${classPrefix}-caret-container`}>
            {hasFocus && <div className={`${classPrefix}-caret`} />}
          </div>
          {chars.slice(caretPosition).map((i: string, index: number) => (
            <span
              key={index}
              onClick={changeCaretPosition(index + caretPosition)}
            >
              {i}
            </span>
          ))}
        </div>
        {mergedProps.clearable && !!value && hasFocus && (
          <div
            className={`${classPrefix}-clear`}
            onClick={e => {
              e.stopPropagation()
              setValue('')
              setCaretPosition(0)
              mergedProps.onClear?.()
            }}
            role='button'
            aria-label={locale.Input.clear}
          >
            {clearIcon}
          </div>
        )}
        {[undefined, null, ''].includes(value) && (
          <div className={`${classPrefix}-placeholder`}>
            {mergedProps.placeholder}
          </div>
        )}
        {keyboardElement}
      </div>
    )
  }
)

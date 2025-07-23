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

export type Cursor = {
  movable?: boolean
  onMove?: (position: number) => void
}

export type VirtualInputProps = {
  onFocus?: () => void
  onBlur?: () => void
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
  keyboard?: ReactElement<NumberKeyboardProps>
  clearable?: boolean
  onClear?: () => void
  cursor?: Cursor
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
  cursor: { movable: false },
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
    const keyboardDataRef = useRef<{
      newValue?: string
      mode?: 'input' | 'delete'
    }>({}) // 临时记录虚拟键盘输入，在下次更新时用于判断光标位置如何调整
    const touchDataRef = useRef<{
      startX: number
      startCaretPosition: number
    } | null>() // 记录上一次 touch 时的坐标位置
    const charRef = useRef<HTMLElement>(null) // 第一个字符的 DOM
    const charWidthRef = useRef<number>(0) // 单个字符宽度
    const caretRef = useRef<HTMLDivElement>(null) // 光标的 DOM
    const [isCaretDragging, setIsCaretDragging] = useState<boolean>(false)
    const touchMoveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>()

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

    useEffect(() => {
      // 记录单个字符的宽度，用于光标移动时的计算
      if (charRef.current) {
        charWidthRef.current = charRef.current.getBoundingClientRect().width
      }
    }, [value])

    useEffect(() => {
      // 经过外部受控逻辑后，再调整光标位置，如果受控逻辑改动了值则光标放到最后
      if (value === keyboardDataRef.current.newValue) {
        if (keyboardDataRef.current.mode === 'input') {
          setCaretPosition(c => c + 1)
        } else if (keyboardDataRef.current.mode === 'delete') {
          setCaretPosition(c => c - 1)
        }
      } else {
        setCaretPosition(value.length)
      }
    }, [value])

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
          // 临时记录，用于后续光标位置
          keyboardDataRef.current = { newValue, mode: 'input' }
          setValue(newValue)
          keyboard.props.onInput?.(v)
        },
        onDelete: () => {
          if (caretPosition === 0) return
          const newValue =
            value.substring(0, caretPosition - 1) +
            value.substring(caretPosition)
          // 临时记录，用于后续光标位置
          keyboardDataRef.current = { newValue, mode: 'delete' }
          setValue(newValue)
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

    // 点击输入框时，将光标置于最后
    const setCaretPositionToEnd = () => {
      if (caretPosition !== value.length) {
        setCaretPosition(value.length)
        mergedProps.cursor?.onMove?.(value.length)
      }
    }

    // 点击单个字符时，根据点击位置置于字符前或后
    const changeCaretPosition = (index: number) => (e: React.MouseEvent) => {
      if (mergedProps.disabled || !mergedProps.cursor?.movable) return

      e.stopPropagation()
      const rect = (e.target as HTMLElement).getBoundingClientRect()
      const midX = rect.left + rect.width / 2
      const clickX = e.clientX
      // 点击区域是否偏右
      const isRight = clickX > midX

      const newCaretPosition = isRight ? index + 1 : index
      setCaretPosition(newCaretPosition)
      mergedProps.cursor?.onMove?.(newCaretPosition)
    }

    // 在光标附近 touchmove 时也可以调整光标位置
    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
      if (mergedProps.disabled || !mergedProps.cursor?.movable) return
      if (!caretRef.current) return

      const touch = e.touches[0]
      const caretRect = caretRef.current.getBoundingClientRect()
      const distance = Math.abs(
        touch.clientX - (caretRect.left + caretRect.width / 2)
      )
      if (distance < 20) {
        // 20px 阈值可调整
        touchDataRef.current = {
          startX: touch.clientX,
          startCaretPosition: caretPosition,
        }
      } else {
        touchDataRef.current = null
      }
    }

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
      if (!touchDataRef.current || !mergedProps.cursor?.movable) return

      setIsCaretDragging(true)

      const touch = e.touches[0]
      const deltaX = touch.clientX - touchDataRef.current.startX

      const charWidth = charWidthRef.current
      const moveChars = Math.round(deltaX / charWidth)
      let newCaretPosition = touchDataRef.current.startCaretPosition + moveChars
      // 边界处理
      newCaretPosition = Math.max(0, Math.min(newCaretPosition, value.length))
      setCaretPosition(newCaretPosition)
      mergedProps.cursor?.onMove?.(newCaretPosition)

      // 防止 touchend 不触发
      if (touchMoveTimeoutRef.current) {
        clearTimeout(touchMoveTimeoutRef.current)
      }
      touchMoveTimeoutRef.current = setTimeout(() => {
        setIsCaretDragging(false)
        touchMoveTimeoutRef.current = null
      }, 500)
    }

    const handleTouchEnd = () => {
      touchDataRef.current = null
      setIsCaretDragging(false)

      if (touchMoveTimeoutRef.current) {
        clearTimeout(touchMoveTimeoutRef.current)
        touchMoveTimeoutRef.current = null
      }
    }

    const chars = (value + '').split('')

    return withNativeProps(
      mergedProps,
      <div
        ref={rootRef}
        className={classNames(classPrefix, {
          [`${classPrefix}-disabled`]: mergedProps.disabled,
          [`${classPrefix}-caret-dragging`]: isCaretDragging,
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
          onClick={setCaretPositionToEnd}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {chars.slice(0, caretPosition).map((i: string, index: number) => (
            <span
              ref={index === 0 ? charRef : undefined}
              key={index}
              onClick={changeCaretPosition(index)}
            >
              {i}
            </span>
          ))}
          <div className={`${classPrefix}-caret-container`}>
            {hasFocus && (
              <div ref={caretRef} className={`${classPrefix}-caret`} />
            )}
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

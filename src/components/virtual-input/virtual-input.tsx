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
    const [caretPosition, setCaretPosition] = useState(value.length) // Cursor position, starting from 0. For example, value 2 means cursor is before the character at index 2
    const keyboardDataRef = useRef<{
      newValue?: string
      mode?: 'input' | 'delete'
    }>({}) // Temporarily stores virtual keyboard input to determine how to adjust cursor position in next update
    const touchDataRef = useRef<{
      startX: number
      startCaretPosition: number
    } | null>() // Records the coordinate position of the last touch
    const charRef = useRef<HTMLElement>(null) // DOM of the first character
    const charWidthRef = useRef<number>(0) // Width of a single character
    const caretRef = useRef<HTMLDivElement>(null) // DOM of the cursor
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
      // Record the width of a single character for cursor movement calculation
      if (charRef.current) {
        charWidthRef.current = charRef.current.getBoundingClientRect().width
      }
    }, [value])

    useEffect(() => {
      // After external controlled logic, adjust cursor position. If controlled logic changes the value, move cursor to end
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
          // Temporarily store for subsequent cursor positioning
          keyboardDataRef.current = { newValue, mode: 'input' }
          setValue(newValue)
          keyboard.props.onInput?.(v)
        },
        onDelete: () => {
          if (caretPosition === 0) return
          const newValue =
            value.substring(0, caretPosition - 1) +
            value.substring(caretPosition)
          // Temporarily store for subsequent cursor positioning
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

    // When clicking input box, place cursor at the end
    const setCaretPositionToEnd = () => {
      if (caretPosition !== value.length) {
        setCaretPosition(value.length)
        mergedProps.cursor?.onMove?.(value.length)
      }
    }

    // When clicking character, position cursor before or after based on click position
    const changeCaretPosition = (index: number) => (e: React.MouseEvent) => {
      if (mergedProps.disabled || !mergedProps.cursor?.movable) return
      e.stopPropagation()
      if (index === 0) {
        setCaretPosition(value.length)
        return
      }

      const rect = (e.target as HTMLElement).getBoundingClientRect()
      const midX = rect.left + rect.width / 2
      const clickX = e.clientX
      // Check if click area is right-biased
      const isRight = clickX > midX

      const newCaretPosition = isRight ? index + 1 : index
      setCaretPosition(newCaretPosition)
      mergedProps.cursor?.onMove?.(newCaretPosition)
    }

    // Can also adjust cursor position when touchmoving near the cursor
    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
      if (mergedProps.disabled || !mergedProps.cursor?.movable) return
      if (!caretRef.current) return

      const touch = e.touches[0]
      const caretRect = caretRef.current.getBoundingClientRect()
      const distance = Math.abs(
        touch.clientX - (caretRect.left + caretRect.width / 2)
      )
      if (distance < 20) {
        // 20px threshold can be adjusted
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
      // Boundary handling
      newCaretPosition = Math.max(0, Math.min(newCaretPosition, value.length))
      setCaretPosition(newCaretPosition)
      mergedProps.cursor?.onMove?.(newCaretPosition)

      // Prevent touchend from not triggering
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
          role='textbox'
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
          {hasFocus && (
            <div className={`${classPrefix}-caret-container`}>
              <div ref={caretRef} className={`${classPrefix}-caret`} />
            </div>
          )}
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

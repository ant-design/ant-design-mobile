import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  MouseEvent,
  useState,
  useCallback,
} from 'react'
import type { ReactElement } from 'react'
import type { InputProps } from '../input'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import { NumberKeyboardProps } from '../number-keyboard'
import { usePropsValue } from '../../utils/use-props-value'
import classNames from 'classnames'
import { CloseCircleFill } from 'antd-mobile-icons'
import { useIsomorphicLayoutEffect } from 'ahooks'
import { useConfig } from '../config-provider'

const classPrefix = 'adm-virtual-input'

export type VirtualInputProps = {
  onFocus?: () => void
  onBlur?: () => void
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
  keyboard?: ReactElement<NumberKeyboardProps>
  clearable?: boolean
  onClear?: () => void
} & Pick<InputProps, 'value' | 'onChange' | 'placeholder' | 'disabled'> &
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
  (p, ref) => {
    const props = mergeProps(defaultProps, p)
    const [value, setValue] = usePropsValue(props)
    const rootRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const [hasFocus, setHasFocus] = useState(false)
    const { locale } = useConfig()
    const propsCacheRef = useRef({ props })
    propsCacheRef.current.props = props

    const blurHandlerRef = useRef({
      blurHandler: () => {},
      addBlurListener: () => {
        blurHandlerRef.current.blurHandler = () => {
          setHasFocus(false)
          propsCacheRef.current.props.onBlur?.()
        }
        document.addEventListener('click', blurHandlerRef.current.blurHandler)
      },
      removeBlurListener: () => {
        document.removeEventListener(
          'click',
          blurHandlerRef.current.blurHandler
        )
      },
    })

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

    const handleFocus = useCallback(() => {
      setHasFocus(true)
      props?.onFocus?.()
    }, [props.onFocus])

    const handleBlur = useCallback(() => {
      setHasFocus(false)
      props?.onBlur?.()
    }, [props.onBlur])

    useImperativeHandle(ref, () => ({
      focus: () => {
        handleFocus()
      },
      blur: () => {
        handleBlur()
      },
    }))

    // unmount: remove blurListener
    useEffect(
      () => () => {
        blurHandlerRef.current.removeBlurListener()
      },
      []
    )

    function handleInputClick(e: MouseEvent<HTMLDivElement>) {
      if (props.disabled) {
        return
      }
      if (!hasFocus) {
        blurHandlerRef.current.removeBlurListener()
        handleFocus()
        setTimeout(() => {
          blurHandlerRef.current.addBlurListener()
        }, 50)
      }
      props.onClick?.(e)
    }

    const keyboard = props.keyboard
    const keyboardElement =
      keyboard &&
      React.cloneElement(keyboard, {
        onInput: v => {
          setValue(value + v)
          keyboard.props.onInput?.(v)
        },
        onDelete: () => {
          setValue(value.slice(0, -1))
          keyboard.props.onDelete?.()
        },
        visible: hasFocus,
        onClose: () => {
          handleBlur()
          keyboard.props.onClose?.()
        },
        getContainer: null,
      } as NumberKeyboardProps)

    return withNativeProps(
      props,
      <div
        ref={rootRef}
        className={classNames(classPrefix, {
          [`${classPrefix}-disabled`]: props.disabled,
        })}
        tabIndex={props.disabled ? undefined : 0}
        role='option'
        onClick={handleInputClick}
      >
        <div
          className={`${classPrefix}-content`}
          ref={contentRef}
          aria-disabled={props.disabled}
          aria-label={props.placeholder}
        >
          {value}
          <div className={`${classPrefix}-caret-container`}>
            {hasFocus && <div className={`${classPrefix}-caret`} />}
          </div>
        </div>
        {props.clearable && !!value && hasFocus && (
          <div
            className={`${classPrefix}-clear`}
            onClick={e => {
              e.stopPropagation()
              setValue('')
              props.onClear?.()
            }}
            role='button'
            aria-label={locale.Input.clear}
          >
            <CloseCircleFill />
          </div>
        )}
        {[undefined, null, ''].includes(value) && (
          <div className={`${classPrefix}-placeholder`}>
            {props.placeholder}
          </div>
        )}
        {keyboardElement}
      </div>
    )
  }
)

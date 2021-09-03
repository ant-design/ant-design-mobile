import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react'
import classNames from 'classnames'
import { NativeProps } from '../../utils/native-props'
import { useNewControllableValue } from '../../utils/use-controllable-value'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = 'adm-text-area'

export type TextAreaProps = Pick<
  React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >,
  'autoComplete' | 'disabled' | 'readOnly' | 'onFocus' | 'onBlur'
> & {
  onChange?: (val: string) => void
  value?: string
  defaultValue?: string
  placeholder?: string
  rows?: number
  maxLength?: number
  showCount?: boolean
  autoSize?:
    | boolean
    | {
        minRows?: number
        maxRows?: number
      }
  id?: string
} & NativeProps<
    '--font-size' | '--color' | '--placeholder-color' | '--disabled-color'
  >

export type TextAreaRef = {
  clear: () => void
  focus: () => void
  blur: () => void
}

const defaultProps = {
  rows: 2,
  showCount: false,
  autoSize: false,
  defaultValue: '',
}

export const TextArea = forwardRef<TextAreaRef, TextAreaProps>(
  (p: TextAreaProps, ref) => {
    const props = mergeProps(defaultProps, p)
    const {
      className,
      style,
      defaultValue: outerDefaultValue,
      value: outerValue,
      onChange: outerOnChange,
      rows: rows,
      autoSize: autoSize,
      showCount,
      ...textAreaProps
    } = props
    const [value, setValue] = useNewControllableValue(props)
    const nativeTextAreaRef = useRef<HTMLTextAreaElement>(null)

    useImperativeHandle(ref, () => ({
      clear: () => {
        setValue('')
      },
      focus: () => {
        nativeTextAreaRef.current?.focus()
      },
      blur: () => {
        nativeTextAreaRef.current?.blur()
      },
    }))

    useEffect(() => {
      if (!autoSize) return
      const textArea = nativeTextAreaRef.current
      if (!textArea) return
      textArea.style.height = 'auto'
      let height = textArea.scrollHeight
      if (typeof autoSize === 'object') {
        const computedStyle = window.getComputedStyle(textArea)
        const lineHeight = parseFloat(computedStyle.lineHeight)
        if (autoSize.minRows) {
          height = Math.max(height, autoSize.minRows * lineHeight)
        }
        if (autoSize.maxRows) {
          height = Math.min(height, autoSize.maxRows * lineHeight)
        }
      }
      textArea.style.height = `${height}px`
    }, [value, autoSize])

    return (
      <div
        className={classNames(`${classPrefix}-wrapper`, className)}
        style={style}
      >
        <textarea
          ref={nativeTextAreaRef}
          {...textAreaProps}
          className={classPrefix}
          rows={rows}
          value={value}
          onChange={e => {
            setValue(e.target.value)
          }}
          onFocus={e => {
            props.onFocus?.(e)
          }}
          onBlur={e => {
            props.onBlur?.(e)
          }}
          id={props.id}
        />
        {showCount && (
          <div className={`${classPrefix}-count`}>
            {props.maxLength === undefined
              ? value.length
              : value.length + '/' + props.maxLength}
          </div>
        )}
      </div>
    )
  }
)

TextArea.defaultProps = defaultProps

import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  ReactNode,
} from 'react'
import classNames from 'classnames'
import Input, { InputRef, InputProps } from '../input'
import Button from '../button'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import { SearchOutline } from 'antd-mobile-icons'
import { usePropsValue } from '../../utils/use-props-value'
import { useConfig } from '../config-provider'

const classPrefix = `adm-search-bar`

export type SearchBarRef = InputRef

export type SearchBarProps = Pick<
  InputProps,
  'onFocus' | 'onBlur' | 'onClear'
> & {
  value?: string
  defaultValue?: string
  maxLength?: number
  placeholder?: string
  clearable?: boolean
  onlyShowClearWhenFocus?: boolean
  showCancelButton?: boolean | ((focus: boolean, value: string) => boolean)
  cancelText?: string
  icon?: ReactNode
  clearOnCancel?: boolean
  onSearch?: (val: string) => void
  onChange?: (val: string) => void
  onCancel?: () => void
} & NativeProps<
    | '--background'
    | '--border-radius'
    | '--placeholder-color'
    | '--height'
    | '--padding-left'
  >

const defaultProps = {
  clearable: true,
  onlyShowClearWhenFocus: false,
  showCancelButton: false as NonNullable<SearchBarProps['showCancelButton']>,
  defaultValue: '',
  clearOnCancel: true,
  icon: <SearchOutline />,
}

export const SearchBar = forwardRef<SearchBarRef, SearchBarProps>((p, ref) => {
  const { locale } = useConfig()
  const props = mergeProps(
    defaultProps,
    {
      cancelText: locale.common.cancel,
    },
    p
  )
  const [value, setValue] = usePropsValue(props)
  const [hasFocus, setHasFocus] = useState(false)
  const inputRef = useRef<InputRef>(null)

  useImperativeHandle(ref, () => ({
    clear: () => inputRef.current?.clear(),
    focus: () => inputRef.current?.focus(),
    blur: () => inputRef.current?.blur(),
    get nativeElement() {
      return inputRef.current?.nativeElement ?? null
    },
  }))

  const renderCancelButton = () => {
    let isShowCancel = false

    if (typeof props.showCancelButton === 'function') {
      isShowCancel = props.showCancelButton(hasFocus, value)
    } else {
      isShowCancel = props.showCancelButton && hasFocus
    }

    return (
      isShowCancel && (
        <div
          className={`${classPrefix}-suffix`}
          onMouseDown={e => {
            e.preventDefault()
          }}
          onTouchStart={e => {
            e.preventDefault()
          }}
        >
          <Button
            fill='none'
            className={`${classPrefix}-cancel-button`}
            onClick={() => {
              if (props.clearOnCancel) {
                inputRef.current?.clear()
              }
              inputRef.current?.blur()
              props.onCancel?.()
            }}
          >
            {props.cancelText}
          </Button>
        </div>
      )
    )
  }

  return withNativeProps(
    props,
    <div
      className={classNames(classPrefix, {
        [`${classPrefix}-active`]: hasFocus,
      })}
    >
      <div className={`${classPrefix}-input-box`}>
        {props.icon && (
          <div className={`${classPrefix}-input-box-icon`}>{props.icon}</div>
        )}
        <Input
          ref={inputRef}
          className={classNames(`${classPrefix}-input`, {
            [`${classPrefix}-input-without-icon`]: !props.icon,
          })}
          value={value}
          onChange={setValue}
          maxLength={props.maxLength}
          placeholder={props.placeholder}
          clearable={props.clearable}
          onlyShowClearWhenFocus={props.onlyShowClearWhenFocus}
          onFocus={e => {
            setHasFocus(true)
            props.onFocus?.(e)
          }}
          onBlur={e => {
            setHasFocus(false)
            props.onBlur?.(e)
          }}
          onClear={props.onClear}
          type='search'
          enterKeyHint='search'
          onEnterPress={() => {
            inputRef.current?.blur()
            props.onSearch?.(value)
          }}
        />
      </div>
      {renderCancelButton()}
    </div>
  )
})

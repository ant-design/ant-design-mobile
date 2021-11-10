import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react'
import classNames from 'classnames'
import Input, { InputRef, InputProps } from '../input'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import { SearchOutline } from 'antd-mobile-icons'
import { usePropsValue } from '../../utils/use-props-value'
import { useConfig } from '../config-provider'

const classPrefix = `adm-search`

export type SearchRef = InputRef

export type SearchProps = Pick<InputProps, 'onFocus' | 'onBlur' | 'onClear'> & {
  value?: string
  defaultValue?: string
  maxLength?: number
  placeholder?: string
  clearable?: boolean
  showCancelButton?: boolean | ((focus: boolean, value: string) => boolean)
  cancelText?: string
  clearOnCancel?: boolean
  onSearch?: (val: string) => void
  onChange?: (val: string) => void
  onCancel?: () => void
} & NativeProps<'--background' | '--border-radius' | '--placeholder-color'>

const defaultProps = {
  clearable: true,
  showCancelButton: false,
  defaultValue: '',
  clearOnCancel: true,
}

export const Search = forwardRef<SearchRef, SearchProps>((p, ref) => {
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
        <div className={`${classPrefix}-suffix`}>
          <a
            onMouseDown={e => {
              e.preventDefault()
            }}
            onTouchStart={e => {
              e.preventDefault()
            }}
            onClick={() => {
              if (props.clearOnCancel) {
                inputRef.current?.clear()
              }
              inputRef.current?.blur()
              props.onCancel?.()
            }}
          >
            {props.cancelText}
          </a>
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
        <div className={`${classPrefix}-input-box-icon`}>
          <SearchOutline />
        </div>
        <Input
          ref={inputRef}
          className={`${classPrefix}-input`}
          value={value}
          onChange={setValue}
          maxLength={props.maxLength}
          placeholder={props.placeholder}
          clearable={props.clearable}
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

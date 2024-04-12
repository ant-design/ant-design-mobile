import { SearchOutline } from 'antd-mobile-icons'
import classNames from 'classnames'
import type { ReactNode } from 'react'
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { usePropsValue } from '../../utils/use-props-value'
import { mergeProps } from '../../utils/with-default-props'
import Button from '../button'
import { useConfig } from '../config-provider'
import Input, { InputProps, InputRef } from '../input'

const classPrefix = `adm-search-bar`

export type SearchBarRef = InputRef

export type SearchBarProps = Pick<
  InputProps,
  'onFocus' | 'onBlur' | 'onClear' | 'onCompositionStart' | 'onCompositionEnd'
> & {
  value?: string
  defaultValue?: string
  maxLength?: number
  placeholder?: string
  clearable?: boolean
  onlyShowClearWhenFocus?: boolean
  showCancelButton?: boolean | ((focus: boolean, value: string) => boolean)
  cancelText?: string
  searchIcon?: ReactNode
  /**
   * @deprecated use `searchIcon` instead
   */
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
  searchIcon: <SearchOutline />,
}

export const SearchBar = forwardRef<SearchBarRef, SearchBarProps>((p, ref) => {
  const { locale, searchBar: componentConfig = {} } = useConfig()
  const props = mergeProps(
    defaultProps,
    componentConfig,
    {
      cancelText: locale.common.cancel,
    },
    p
  )
  const [value, setValue] = usePropsValue(props)
  const [hasFocus, setHasFocus] = useState(false)
  const inputRef = useRef<InputRef>(null)
  const composingRef = useRef(false)

  useImperativeHandle(ref, () => ({
    clear: () => inputRef.current?.clear(),
    focus: () => inputRef.current?.focus(),
    blur: () => inputRef.current?.blur(),
    get nativeElement() {
      return inputRef.current?.nativeElement ?? null
    },
  }))

  const renderCancelButton = () => {
    let isShowCancel: boolean

    if (typeof props.showCancelButton === 'function') {
      isShowCancel = props.showCancelButton(hasFocus, value)
    } else {
      isShowCancel = props.showCancelButton && hasFocus
    }

    return (
      isShowCancel && (
        <div className={`${classPrefix}-suffix`}>
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
            onMouseDown={e => {
              e.preventDefault()
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
        {(props.searchIcon || props.icon) && (
          <div className={`${classPrefix}-input-box-icon`}>
            {props.searchIcon || props.icon}
          </div>
        )}
        <Input
          ref={inputRef}
          className={classNames(`${classPrefix}-input`, {
            [`${classPrefix}-input-without-icon`]:
              !props.searchIcon && !props.icon,
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
            if (!composingRef.current) {
              inputRef.current?.blur()
              props.onSearch?.(value)
            }
          }}
          aria-label={locale.SearchBar.name}
          onCompositionStart={e => {
            composingRef.current = true
            props.onCompositionStart?.(e)
          }}
          onCompositionEnd={e => {
            composingRef.current = false
            props.onCompositionEnd?.(e)
          }}
        />
      </div>
      {renderCancelButton()}
    </div>
  )
})

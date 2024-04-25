import { SearchOutline } from 'antd-mobile-icons'
import classNames from 'classnames'
import type { ReactNode } from 'react'
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { usePropsValue } from '../../utils/use-props-value'
import { mergeProp, mergeProps } from '../../utils/with-default-props'
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
}

export const SearchBar = forwardRef<SearchBarRef, SearchBarProps>(
  (props, ref) => {
    const { locale, searchBar: componentConfig = {} } = useConfig()
    const mergedProps = mergeProps(
      defaultProps,
      componentConfig,
      {
        cancelText: locale.common.cancel,
      },
      props
    )
    const searchIcon = mergeProp(
      <SearchOutline />,
      componentConfig.searchIcon,
      props.icon,
      props.searchIcon
    )
    const [value, setValue] = usePropsValue(mergedProps)
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

      if (typeof mergedProps.showCancelButton === 'function') {
        isShowCancel = mergedProps.showCancelButton(hasFocus, value)
      } else {
        isShowCancel = mergedProps.showCancelButton && hasFocus
      }

      return (
        isShowCancel && (
          <div className={`${classPrefix}-suffix`}>
            <Button
              fill='none'
              className={`${classPrefix}-cancel-button`}
              onClick={() => {
                if (mergedProps.clearOnCancel) {
                  inputRef.current?.clear()
                }
                inputRef.current?.blur()
                mergedProps.onCancel?.()
              }}
              onMouseDown={e => {
                e.preventDefault()
              }}
            >
              {mergedProps.cancelText}
            </Button>
          </div>
        )
      )
    }

    return withNativeProps(
      mergedProps,
      <div
        className={classNames(classPrefix, {
          [`${classPrefix}-active`]: hasFocus,
        })}
      >
        <div className={`${classPrefix}-input-box`}>
          {searchIcon && (
            <div className={`${classPrefix}-input-box-icon`}>{searchIcon}</div>
          )}
          <Input
            ref={inputRef}
            className={classNames(`${classPrefix}-input`, {
              [`${classPrefix}-input-without-icon`]: !searchIcon,
            })}
            value={value}
            onChange={setValue}
            maxLength={mergedProps.maxLength}
            placeholder={mergedProps.placeholder}
            clearable={mergedProps.clearable}
            onlyShowClearWhenFocus={mergedProps.onlyShowClearWhenFocus}
            onFocus={e => {
              setHasFocus(true)
              mergedProps.onFocus?.(e)
            }}
            onBlur={e => {
              setHasFocus(false)
              mergedProps.onBlur?.(e)
            }}
            onClear={mergedProps.onClear}
            type='search'
            enterKeyHint='search'
            onEnterPress={() => {
              if (!composingRef.current) {
                inputRef.current?.blur()
                mergedProps.onSearch?.(value)
              }
            }}
            aria-label={locale.SearchBar.name}
            onCompositionStart={e => {
              composingRef.current = true
              mergedProps.onCompositionStart?.(e)
            }}
            onCompositionEnd={e => {
              composingRef.current = false
              mergedProps.onCompositionEnd?.(e)
            }}
          />
        </div>
        {renderCancelButton()}
      </div>
    )
  }
)

import React, { useState, useRef } from 'react'
import classNames from 'classnames'
import Input, { InputRef } from '../input'
import { ElementProps } from '../../utils/element-props'
import { withDefaultProps } from '../../utils/with-default-props'
import { SearchOutlined } from '@ant-design/icons'
import { useControllableValue } from 'ahooks'

const classPrefix = `am-search`

export type SearchProps = {
  value?: string
  defaultValue?: string
  maxLength?: number
  placeholder?: string
  clearable?: boolean
  showCancelButton?: boolean
  onSearch?: (val: string) => void
  onChange?: (val: string) => void
  onFocus?: () => void
  onBlur?: () => void
  onClear?: () => void
  onCancel?: () => void
} & ElementProps

const defaultProps = {
  clearable: true,
  showCancelButton: false,
}

const Search = withDefaultProps(defaultProps)<SearchProps>(props => {
  const [value, setValue] = useControllableValue<string>(props, {
    defaultValue: '',
  })
  const [hasFocus, setHasFocus] = useState(false)
  const inputRef = useRef<InputRef>(null)

  return (
    <div
      className={classNames(classPrefix, props.className, {
        [`${classPrefix}-active`]: hasFocus,
      })}
      style={props.style}
    >
      <form
        className={`${classPrefix}-input-box`}
        action='/'
        onSubmit={e => {
          e.preventDefault()
          e.stopPropagation()
          inputRef.current?.blur()
          props.onSearch?.(value)
        }}
      >
        <div className={`${classPrefix}-input-box-icon`}>
          <SearchOutlined />
        </div>
        <Input
          ref={inputRef}
          className={`${classPrefix}-input`}
          value={value}
          onChange={setValue}
          maxLength={props.maxLength}
          placeholder={props.placeholder}
          clearable={props.clearable}
          onFocus={() => {
            setHasFocus(true)
            props.onFocus?.()
          }}
          onBlur={() => {
            setHasFocus(false)
            props.onBlur?.()
          }}
          onClear={props.onClear}
          type='search'
        />
      </form>
      {props.showCancelButton && hasFocus && (
        <div className={`${classPrefix}-suffix`}>
          <a
            onMouseDown={e => {
              e.preventDefault()
            }}
            onTouchStart={e => {
              e.preventDefault()
            }}
            onClick={() => {
              inputRef.current?.clear()
              inputRef.current?.blur()
              props.onCancel?.()
            }}
          >
            取消
          </a>
        </div>
      )}
    </div>
  )
})

export default Search

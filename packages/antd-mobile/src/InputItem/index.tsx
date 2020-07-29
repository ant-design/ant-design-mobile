import * as React from 'react'
import classname from 'classnames'
import { getDataAttr, renderIcon } from '../_internal'
import { Touchable, withError } from '../rmc'
import { useTracker } from '../hooks'
import { InputItemPropsType } from './PropsType'
import { CloseFill } from '@ant-design/mobile-icons'

import '@ant-design/mobile-styles/lib/InputItem'

const prefixCls = 'amd-input-item'

export const InputItem: React.FC<InputItemPropsType> = props => {
  const {
    className = '',
    label,
    extraClassName = '',
    placeholder = '',
    maxlength,
    disabled = false,
    extra,
    vertical,
    autoFocus,
    defaultValue,
    onPressExtra,
    value: inputValue,
  } = props || {}

  useTracker(InputItem.displayName)
  const dataProps = getDataAttr(props)
  const [focus, setFocus] = React.useState(false)
  const [clearFlag, setClearFlag] = React.useState(false)
  const [value, setValue] = React.useState(inputValue ?? defaultValue ?? '')
  React.useEffect(() => {
    // value 模式
    if (inputValue != null && value !== inputValue) {
      setValue(inputValue)
    }
  }, [inputValue])
  React.useLayoutEffect(() => {
    autoFocus && doFocus()
  }, [])
  const inputRef = React.useRef<any>(null)
  const onChange = () => {
    const v = inputRef.current?.value
    props.onChange && props.onChange!(v)
    if (!('value' in props)) {
      setValue(v)
    } else {
      inputValue && setValue(inputValue)
    }
    if (v && v.length) {
      setClearFlag(true)
    } else {
      setClearFlag(false)
    }
  }

  const doFocus = () => {
    const v = inputRef.current?.value
    inputRef.current?.focus()
    setFocus(true)
    props.onFocus && props.onFocus(v)
  }
  const doBlur = () => {
    if (focus) {
      inputRef.current?.blur()
      setFocus(false)
      props.onBlur && props.onBlur(value)
    }
  }

  const itemCls = classname(`${prefixCls}`, `${className}`, {
    [`${prefixCls}-vertical`]: vertical,
  })
  const id = `input-${+new Date()}`
  const wrapForVertical = () => {
    const labelComp = (
      <label htmlFor={id} className={`${prefixCls}-label`}>
        {label || ''}
      </label>
    )
    const inputComp = (
      <input
        id={id}
        ref={inputRef}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxlength}
        className={`${prefixCls}-input`}
        onBlur={doBlur}
        onFocus={doFocus}
        onChange={onChange}
      />
    )

    const extraCom = renderIcon(extra)
    const extraComp = extraCom ? (
      <Touchable onPress={onPressExtra}>
        <div className={`${prefixCls}-extra ${extraClassName}`}>{extraCom}</div>
      </Touchable>
    ) : null
    const showClear = clearFlag && value && value.length && focus
    const clearMarginCls = !extraComp ? `${prefixCls}-clear-no-extra` : ''
    const clearComp = showClear ? (
      <Touchable
        onPress={() => {
          setValue('')
          setTimeout(() => {
            doFocus()
          }, 100)
        }}
      >
        <div className={`${prefixCls}-clear ${clearMarginCls}`}>
          <CloseFill />
        </div>
      </Touchable>
    ) : null
    if (!vertical) {
      return (
        <div className={`${prefixCls}-wrap`}>
          {labelComp}
          {inputComp}
          {clearComp}
          {extraComp}
        </div>
      )
    }
    return (
      <div className={`${prefixCls}-wrap`}>
        <div className={`${prefixCls}-vertical-left`}>
          {labelComp}
          {inputComp}
        </div>
        <div className={`${prefixCls}-vertical-right`}>
          {clearComp}
          {extraComp}
        </div>
      </div>
    )
  }
  return (
    <div className={itemCls} {...dataProps}>
      {wrapForVertical()}
    </div>
  )
}

InputItem.displayName = 'InputItem'

export default withError(InputItem)

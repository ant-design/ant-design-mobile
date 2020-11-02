import * as React from 'react'
import classnames from 'classnames'
import { CloseFill } from '@ant-design/mobile-icons'
import { getDataAttr } from '../_internal'
import { withError } from '../rmc'
import { useTracker, useControlledByValue, useFocus } from '../hooks'
import { InputItemPropsType } from './PropsType'
import useCompositionChange from './useCompositionChange'

import '@ant-design/mobile-styles/lib/InputItem'

const prefixCls = 'amd-input-item'

export const InputItem: React.FC<InputItemPropsType> = props => {
  const {
    id,
    name,
    className,
    placeholder,
    disabled,
    autoFocus,
    clear,
    // provide by withError
    // @ts-ignore
    forwardRef,
  } = props

  useTracker(InputItem.displayName)
  const dataProps = getDataAttr(props)

  const { value, onChange } = useControlledByValue(props)

  const { focus, onFocus, onBlur } = useFocus(value, props)

  const inputRef = React.createRef<HTMLInputElement>()

  React.useImperativeHandle(forwardRef, () => ({
    focus: inputRef.current?.focus,
    blur: inputRef.current?.blur,
  }))

  const {
    value: fixedValue,
    onComposition,
    onChange: fixedOnChange,
  } = useCompositionChange(value, onChange)

  // 清除按钮
  const handleClear = () => {
    fixedOnChange('')
  }

  const showClear = clear && focus && value && value.length > 0

  const wrap = () => {
    const inputCls = classnames(`${prefixCls}-input`, {
      [`${prefixCls}-input-clear`]: showClear,
    })
    const inputComp = (
      <input
        id={id}
        name={name}
        ref={inputRef}
        value={fixedValue}
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        className={inputCls}
        autoFocus={autoFocus}
        onBlur={onBlur}
        onFocus={onFocus}
        onCompositionStart={onComposition}
        onCompositionEnd={onComposition}
        onChange={e => fixedOnChange(e.target.value)}
      />
    )

    const clearComp = showClear ? (
      <CloseFill
        className={`${prefixCls}-clear`}
        size="sm"
        onPress={handleClear}
      />
    ) : null

    return (
      <label>
        {inputComp}
        {clearComp}
      </label>
    )
  }

  const itemCls = classnames(prefixCls, className, {
    [`${prefixCls}-disabled`]: disabled,
  })

  return (
    <div className={itemCls} {...dataProps}>
      {wrap()}
    </div>
  )
}

InputItem.displayName = 'InputItem'

InputItem.defaultProps = {
  className: '',
  disabled: false,
  placeholder: '',
  autoFocus: false,
  defaultValue: '',
  clear: false,
}

export default withError(InputItem, {
  forwardRef: true,
})

import React, { FC, useContext } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import classNames from 'classnames'
import { CheckOutlined } from '@ant-design/icons'
import { CheckboxGroupContext } from './group-context'
import { useNewControllableValue } from '../../utils/use-controllable-value'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-checkbox`

export type CheckboxValue = string | number

export type CheckboxProps = {
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
  value?: CheckboxValue
  indeterminate?: boolean
  block?: boolean
  id?: string
} & NativeProps

const defaultProps = {
  defaultChecked: false,
}

export const Checkbox: FC<CheckboxProps> = p => {
  const props = mergeProps(defaultProps, p)
  const groupContext = useContext(CheckboxGroupContext)

  let [checked, setChecked] = useNewControllableValue({
    value: props.checked,
    defaultValue: props.defaultChecked,
    onChange: props.onChange,
  })
  let disabled = props.disabled

  const { value } = props
  if (groupContext && value !== undefined) {
    checked = groupContext.value.includes(value)
    setChecked = (checked: boolean) => {
      if (checked) {
        groupContext.check(value)
      } else {
        groupContext.uncheck(value)
      }
      props.onChange?.(checked)
    }
    disabled = disabled || groupContext.disabled
  }

  return withNativeProps(
    props,
    <label
      className={classNames(classPrefix, {
        [`${classPrefix}-checked`]: checked,
        [`${classPrefix}-indeterminate`]: props.indeterminate,
        [`${classPrefix}-disabled`]: disabled,
        [`${classPrefix}-block`]: props.block,
      })}
    >
      <input
        type='checkbox'
        checked={checked}
        onChange={e => {
          setChecked(e.target.checked)
        }}
        onClick={e => {
          e.stopPropagation()
          e.nativeEvent.stopImmediatePropagation()
        }}
        disabled={disabled}
        id={props.id}
      />
      <div className={`${classPrefix}-icon`}>
        <CheckOutlined className={`${classPrefix}-icon-checked`} />
        <div className={`${classPrefix}-indeterminate-checked`} />
      </div>
      {props.children && (
        <div className={`${classPrefix}-content`}>{props.children}</div>
      )}
    </label>
  )
}

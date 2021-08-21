import React, { FC, useContext } from 'react'
import { ElementProps } from '../../utils/element-props'
import classNames from 'classnames'
import { CheckOutlined } from '@ant-design/icons'
import { RadioGroupContext } from './group-context'
import { useNewControllableValue } from '../../utils/use-controllable-value'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `am-radio`

export type RadioValue = string | number

export type RadioProps = {
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
  value?: RadioValue
  block?: boolean
} & ElementProps

const defaultProps = {
  defaultChecked: false,
}

export const Radio: FC<RadioProps> = p => {
  const props = mergeProps(defaultProps, p)
  const groupContext = useContext(RadioGroupContext)

  let [checked, setChecked] = useNewControllableValue<boolean>({
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

  return (
    <label
      className={classNames(classPrefix, props.className, {
        [`${classPrefix}-checked`]: checked,
        [`${classPrefix}-disabled`]: disabled,
        [`${classPrefix}-block`]: props.block,
      })}
      style={props.style}
    >
      <input
        type='radio'
        checked={checked}
        onChange={e => {
          setChecked(e.target.checked)
        }}
        onClick={e => {
          e.stopPropagation()
          e.nativeEvent.stopImmediatePropagation()
        }}
        disabled={disabled}
      />
      <div className={`${classPrefix}-icon`}>
        <CheckOutlined className={`${classPrefix}-icon-checked`} />
      </div>
      {props.children && (
        <div className={`${classPrefix}-content`}>{props.children}</div>
      )}
    </label>
  )
}

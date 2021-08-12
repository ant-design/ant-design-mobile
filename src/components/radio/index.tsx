import React, { FC, useContext } from 'react'
import { ElementProps } from '../../utils/element-props'
import classNames from 'classnames'
import { useControllableValue } from 'ahooks'
import { CheckOutlined } from '@ant-design/icons'
import { Group } from './group'
import { RadioGroupContext } from './group-context'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'

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

const Radio: FC<RadioProps> = props => {
  const groupContext = useContext(RadioGroupContext)

  let [checked, setChecked] = useControllableValue<boolean>(props, {
    valuePropName: 'checked',
    defaultValuePropName: 'defaultChecked',
    defaultValue: false,
  })
  let disabled = props.disabled

  const { value } = props
  if (groupContext && value) {
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

export default attachPropertiesToComponent(Radio, {
  Group,
})

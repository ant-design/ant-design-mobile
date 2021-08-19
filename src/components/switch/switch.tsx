import { useControllableValue } from 'ahooks'
import classNames from 'classnames'
import React, { FC } from 'react'
import SpinIcon from '../../assets/spin.svg'
import { ElementProps } from '../../utils/element-props'

const classPrefix = `am-switch`

export type SwitchProps = {
  loading?: boolean
  disabled?: boolean
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
} & ElementProps

export const Switch: FC<SwitchProps> = props => {
  const disabled = props.disabled || props.loading || false

  const [checked, setChecked] = useControllableValue<boolean>(props, {
    valuePropName: 'checked',
    defaultValuePropName: 'defaultChecked',
    defaultValue: false,
  })

  return (
    <label
      className={classNames(
        classPrefix,
        {
          [`${classPrefix}-checked`]: checked,
          [`${classPrefix}-disabled`]: disabled,
        },
        props.className
      )}
      style={props.style}
    >
      <input
        type='checkbox'
        checked={checked}
        onChange={e => {
          disabled || setChecked(e.target.checked)
        }}
        disabled={disabled}
      />
      <div className={`${classPrefix}-checkbox`}>
        <div className={`${classPrefix}-handle`}>
          {
            // 禁用状态优先于加载状态
            props.disabled ||
              (props.loading && (
                <img src={SpinIcon} className={`${classPrefix}-icon`} />
              ))
          }
        </div>
      </div>
    </label>
  )
}

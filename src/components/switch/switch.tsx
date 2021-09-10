import classNames from 'classnames'
import React, { FC, ReactNode } from 'react'
import SpinIcon from '../../assets/spin.svg'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { useNewControllableValue } from '../../utils/use-controllable-value'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-switch`

export type SwitchProps = {
  loading?: boolean
  disabled?: boolean
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  checkedChildren?: ReactNode
  unCheckedChildren?: ReactNode
} & NativeProps

const defaultProps = {
  defaultChecked: false,
}

export const Switch: FC<SwitchProps> = p => {
  const props = mergeProps(defaultProps, p)
  const disabled = props.disabled || props.loading || false

  const [checked, setChecked] = useNewControllableValue({
    value: props.checked,
    defaultValue: props.defaultChecked,
    onChange: props.onChange,
  })

  return withNativeProps(
    props,
    <label
      className={classNames(classPrefix, {
        [`${classPrefix}-checked`]: checked,
        [`${classPrefix}-disabled`]: disabled,
      })}
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
        <div className={`${classPrefix}-inner`}>
          {checked ? props.checkedChildren : props.unCheckedChildren}
        </div>
      </div>
    </label>
  )
}

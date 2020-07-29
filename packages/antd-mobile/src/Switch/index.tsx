import * as React from 'react'
import classnames from 'classnames'
import { withError } from '../rmc'
import { getDataAttr } from '../_internal'
import { useTracker } from '../hooks'
import { SwitchPropsType } from './PropsType'

import '@ant-design/mobile-styles/lib/Switch'

const prefixCls = 'amd-switch'
export const Switch: React.FC<SwitchPropsType> = props => {
  useTracker(Switch.displayName)
  const { name, checked, disabled, className } = props
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked
    if (props.onChange) {
      props.onChange(checked)
    }
  }

  const wrapCls = classnames(prefixCls, className)

  const fakeInputCls = classnames('checkbox', {
    [`checkbox-disabled`]: disabled,
  })

  return (
    <label {...getDataAttr(props)} className={wrapCls}>
      <input
        type="checkbox"
        name={name}
        className={`${prefixCls}-checkbox`}
        disabled={disabled}
        checked={checked}
        onChange={handleChange}
        value={checked ? 'on' : 'off'}
      />
      <div className={fakeInputCls} />
    </label>
  )
}

Switch.displayName = 'Switch'
Switch.defaultProps = {
  name: '',
  checked: false,
  disabled: false,
}

export default withError(Switch)

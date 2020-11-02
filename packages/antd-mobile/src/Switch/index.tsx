import * as React from 'react'
import classnames from 'classnames'
import { withError, Labelable } from '../rmc'
import { getDataAttr } from '../_internal'
import { useTracker, useControlledByChecked } from '../hooks'
import { SwitchPropsType } from './PropsType'

import '@ant-design/mobile-styles/lib/Switch'

const prefixCls = 'amd-switch'
export const Switch: React.FC<SwitchPropsType> = props => {
  useTracker(Switch.displayName)
  const { disabled, value, className } = props

  const { checked, onChange } = useControlledByChecked(props)

  const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.checked
    onChange(v)
  }

  const wrapCls = classnames(prefixCls, className)

  const fakeInputCls = classnames(`${prefixCls}-fake`, {
    [`${prefixCls}-fake-disabled`]: disabled,
    [`${prefixCls}-fake-checked`]: checked,
  })

  return (
    <div className={wrapCls} {...getDataAttr(props)}>
      <Labelable
        onChange={handleLabelChange}
        {...Labelable.getProps(props)}
        value={value}
        checked={checked}
        type="checkbox"
      >
        <div className={fakeInputCls} />
      </Labelable>
    </div>
  )
}

Switch.displayName = 'Switch'
Switch.defaultProps = {
  disabled: false,
  defaultChecked: false,
}

export default withError(Switch)

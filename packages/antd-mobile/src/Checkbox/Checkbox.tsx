import * as React from 'react'
import classnames from 'classnames'
import { useControlledByChecked } from '../hooks'
import { Labelable } from '../rmc'
import { getDataAttr } from '../_internal'
import { CheckboxPropsType } from './PropsType'

const Checkbox: React.FC<CheckboxPropsType & {
  prefixCls: string
  type?: 'checkbox' | 'radio'
}> = props => {
  const { className, prefixCls, disabled } = props

  // hack，in checkbox, controlled/uncontrolled value mean checked
  const { checked, onChange } = useControlledByChecked(props)

  const handleLableChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.checked
    onChange(v)
  }

  const fakeCls = classnames(`${prefixCls}-fake`, {
    [`${prefixCls}-fake-disabled`]: disabled,
    [`${prefixCls}-fake-checked`]: checked,
  })

  return (
    <div className={classnames(prefixCls, className)} {...getDataAttr(props)}>
      <Labelable
        onChange={handleLableChange}
        {...Labelable.getProps(props)}
        checked={checked}
        value={props.value}
        type={props.type}
      >
        <div className={fakeCls}></div>

        {/* hack, this is only for Radio */}
        {props.children}
      </Labelable>
    </div>
  )
}

Checkbox.defaultProps = {
  defaultChecked: false,
  type: 'checkbox',
}

export default Checkbox

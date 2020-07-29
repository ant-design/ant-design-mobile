import * as React from 'react'
// @ts-ignore
import RcCheckbox from 'rc-checkbox'

import { withError } from '../rmc'
import { useTracker } from '../hooks'
import { CheckboxPropsType } from './PropsType'

import '@ant-design/mobile-styles/lib/Checkbox'

const prefixCls = 'amd-checkbox'

export const Checkbox: React.FC<CheckboxPropsType> = props => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return props.onChange?.(e.target.checked)
  }
  useTracker(Checkbox.displayName)
  // TODO: only transfer props in CheckboxPropsType

  // @ts-ignore
  // onChange with React.ChangeEvent<HTMLInputElement>
  return <RcCheckbox prefixCls={prefixCls} {...props} onChange={onChange} />
}

Checkbox.displayName = 'Checkbox'

export default withError(Checkbox)

import * as React from 'react'
import { withError } from '../rmc'
import { useTracker } from '../hooks'
import CheckboxCore from './Checkbox'
import Group from './Group'
import Item from './Item'
import { CheckboxPropsType } from './PropsType'

import '@ant-design/mobile-styles/lib/Checkbox'

export const Checkbox: React.FC<CheckboxPropsType> & {
  Group: typeof Group
  Item: typeof Item
} = props => {
  const { children, ...rest } = props
  useTracker(Checkbox.displayName)
  return <CheckboxCore {...rest} prefixCls="amd-checkbox" />
}

Checkbox.displayName = 'Checkbox'

Checkbox.Group = Group
Checkbox.Item = Item

export default withError(Checkbox)

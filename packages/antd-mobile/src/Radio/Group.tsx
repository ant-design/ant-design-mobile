import * as React from 'react'
import classnames from 'classnames'
import { withError } from '../rmc'
import { useTracker, useControlledByValue } from '../hooks'
import { RadioGroupPropsType } from './PropsType'
import List from '../List'

const prefixCls = 'amd-radio-group'
const Group: React.FC<RadioGroupPropsType> = props => {
  const {
    className,
    name,
    disabled,
    children,
    radius,
    renderHeader,
    renderFooter,
  } = props

  useTracker(Group.displayName)

  const { value, onChange } = useControlledByValue(props)

  const cls = classnames(prefixCls, className)
  return (
    <List
      radius={radius}
      renderHeader={renderHeader}
      renderFooter={renderFooter}
      className={cls}
    >
      {React.Children.map(children, (child, index) => {
        // 如果 child 不是 React.Element 直接报错
        return React.cloneElement(child as any, {
          name,
          onChange,
          checkedValue: value,
          // hack, 只有 disabled 的时候，才传下去
          ...(!!disabled ? { disabled } : {}),
        })
      })}
    </List>
  )
}

Group.displayName = 'RadioGroup'
Group.defaultProps = {
  defaultValue: '',
}

export default withError(Group)

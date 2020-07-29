import * as React from 'react'
import { withError } from '../rmc'
import { uuid } from '../_internal'
import { useTracker } from '../hooks'
import { RadioGroupPropsType } from './PropsType'
import List from '../List'
import Item from './Item'

import '@ant-design/mobile-styles/lib/Radio'

const Group: React.FC<RadioGroupPropsType> = props => {
  const { name, defaultValue, disabled, onChange, children, ...rest } = props

  useTracker(Group.displayName)
  const [checkedValue, setCheckedValue] = React.useState(defaultValue ?? '')
  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedValue(e.target.value)
    onChange?.(e.target.value)
  }

  return (
    <List {...rest}>
      {React.Children.map(children, child => {
        // 如果 child 不是 React.Element 直接报错
        return React.cloneElement(child as any, {
          // 默认给个 唯一的 name，用于不关心 name 的用法的时候
          name: name || uuid(),
          onChange: handleSelect,
          checkedValue,
          ...(typeof disabled !== 'undefined' ? { disabled } : {}),
        })
      })}
    </List>
  )
}

// 这里针对 Group 做特殊处理，取名 Radio，方便配置监控
Group.displayName = 'Radio'
Group.defaultProps = {}

export default {
  Group: withError(Group),
  Item,
}

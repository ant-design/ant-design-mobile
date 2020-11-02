import * as React from 'react'
import classnames from 'classnames'
import { withError } from '../rmc'
import { useTracker, useControlledByValue } from '../hooks'
import { CheckboxGroupPropsType } from './PropsType'
import List from '../List'

const prefixCls = 'amd-checkbox-group'
const Group: React.FC<CheckboxGroupPropsType> = props => {
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

  // 将 value 重新按 options 排序
  const sortValue = (v: any[]) => {
    const options =
      React.Children.map(children, child => {
        // @ts-ignore
        return child.props.value
      }) || []

    return options.filter(item => v.indexOf(item) !== -1)
  }

  const handleSelect = (v: any, selected: boolean) => {
    let nextValue: any[] = [...value]
    // 新增
    if (selected && value.indexOf(v) === -1) {
      nextValue.push(v)
    }

    // 删除
    if (!selected && value.indexOf(v) !== -1) {
      nextValue = nextValue.filter(item => item !== v)
    }

    nextValue = sortValue(nextValue)

    onChange(nextValue)
  }

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
          onChange: handleSelect,
          checkedValues: value,
          // hack, 只有 disabled 的时候，才传下去
          ...(!!disabled ? { disabled } : {}),
        })
      })}
    </List>
  )
}

Group.displayName = 'CheckboxGroup'
Group.defaultProps = {
  defaultValue: [],
}

export default withError(Group)

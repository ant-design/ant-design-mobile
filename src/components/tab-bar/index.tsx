import { FC, ReactNode, ReactElement, ComponentProps } from 'react'
import React from 'react'
import { useControllableValue } from 'ahooks'
import classNames from 'classnames'
import { ElementProps } from '../../utils/element-props'

const classPrefix = `am-tab-bar`

export type TabBarItemProps = {
  icon?: ReactNode
  title?: string
} & ElementProps

const TabBarItem: FC<TabBarItemProps> = () => {
  return null
}

export type TabBarProps = {
  activeKey?: string
  defaultActiveKey?: string
  onChange?: (key: string) => void
} & ElementProps

const TabBar: FC<TabBarProps> & {
  Item: typeof TabBarItem
} = props => {
  let firstActiveKey: string | undefined = undefined

  const items: ReactElement<ComponentProps<typeof TabBarItem>>[] = []

  React.Children.forEach(props.children, (child, index) => {
    if (!React.isValidElement(child)) return
    const key = child.key
    if (typeof key !== 'string') return
    if (index === 0) {
      firstActiveKey = key
    }
    items.push(child)
  })

  const [activeKey, setActiveKey] = useControllableValue<string>(props, {
    valuePropName: 'activeKey',
    defaultValuePropName: 'defaultActiveKey',
    defaultValue: firstActiveKey,
    trigger: 'onChange',
  })

  return (
    <div
      className={classNames(classPrefix, props.className)}
      style={props.style}
    >
      {items.map(item => (
        <div
          key={item.key}
          onClick={() => {
            const { key } = item
            if (key === undefined || key === null) return
            setActiveKey(key.toString())
          }}
          className={classNames(`${classPrefix}-item`, item.props.className, {
            [`${classPrefix}-item-active`]: item.key === activeKey,
          })}
        >
          {item.props.icon && (
            <div className={`${classPrefix}-item-icon`}>{item.props.icon}</div>
          )}
          {item.props.title && (
            <div className={`${classPrefix}-item-title`}>
              {item.props.title}
            </div>
          )}
          {item.props.children}
        </div>
      ))}
    </div>
  )
}

TabBar.Item = TabBarItem

export default TabBar

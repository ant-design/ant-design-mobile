import { FC, ReactNode, ReactElement, ComponentProps } from 'react'
import React from 'react'
import { useControllableValue } from 'ahooks'
import classNames from 'classnames'
import { ElementProps } from '../../utils/element-props'
import Badge from '../badge'

export type TabBarItemProps = {
  icon?: ReactNode
  title?: string
  badge?: ReactNode
} & ElementProps

export const TabBarItem: FC<TabBarItemProps> = () => {
  return null
}

export type TabBarProps = {
  activeKey?: string
  defaultActiveKey?: string
  onChange?: (key: string) => void
} & ElementProps

export const TabBar: FC<TabBarProps> = props => {
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
      className={classNames('am-tab-bar', props.className)}
      style={props.style}
    >
      {items.map(item => {
        function renderContent() {
          const iconElement = item.props.icon && (
            <div className='am-tab-bar-item-icon'>{item.props.icon}</div>
          )
          const titleElement = item.props.title && (
            <div className='am-tab-bar-item-title'>{item.props.title}</div>
          )
          if (item.props.badge !== undefined) {
            if (iconElement) {
              return (
                <>
                  <Badge content={item.props.badge} offset={[0, 6]}>
                    {iconElement}
                  </Badge>
                  {titleElement}
                </>
              )
            } else if (titleElement) {
              return (
                <>
                  <Badge content={item.props.badge} offset={[2, -2]}>
                    {titleElement}
                  </Badge>
                </>
              )
            }
          } else {
            return (
              <>
                {iconElement}
                {titleElement}
              </>
            )
          }
          return null
        }
        return (
          <div
            key={item.key}
            onClick={() => {
              const { key } = item
              if (key === undefined || key === null) return
              setActiveKey(key.toString())
            }}
            className={classNames('am-tab-bar-item', item.props.className, {
              'am-tab-bar-item-active': item.key === activeKey,
            })}
          >
            {renderContent()}
          </div>
        )
      })}
    </div>
  )
}

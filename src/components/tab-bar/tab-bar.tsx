import { FC, ReactNode, ReactElement, ComponentProps } from 'react'
import React from 'react'
import classNames from 'classnames'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import Badge, { BadgeProps } from '../badge'
import { usePropsValue } from '../../utils/use-props-value'

export type TabBarItemProps = {
  icon?: ReactNode | ((active: boolean) => ReactNode)
  title?: ReactNode
  badge?: BadgeProps['content']
} & NativeProps

export const TabBarItem: FC<TabBarItemProps> = () => {
  return null
}

export type TabBarProps = {
  activeKey?: string | null
  defaultActiveKey?: string | null
  onChange?: (key: string) => void
} & NativeProps

export const TabBar: FC<TabBarProps> = props => {
  let firstActiveKey: string | null = null

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

  const [activeKey, setActiveKey] = usePropsValue({
    value: props.activeKey,
    defaultValue: props.defaultActiveKey ?? firstActiveKey,
    onChange: props.onChange,
  })

  return withNativeProps(
    props,
    <div className='adm-tab-bar'>
      {items.map(item => {
        const active = item.key === activeKey
        function renderContent() {
          const iconElement = item.props.icon && (
            <div className='adm-tab-bar-item-icon'>
              {typeof item.props.icon === 'function'
                ? item.props.icon(active)
                : item.props.icon}
            </div>
          )
          const titleElement = item.props.title && (
            <div className='adm-tab-bar-item-title'>{item.props.title}</div>
          )
          if (iconElement) {
            return (
              <>
                <Badge
                  content={item.props.badge}
                  className='adm-tab-bar-icon-badge'
                >
                  {iconElement}
                </Badge>
                {titleElement}
              </>
            )
          } else if (titleElement) {
            return (
              <>
                <Badge
                  content={item.props.badge}
                  className='adm-tab-bar-title-badge'
                >
                  {titleElement}
                </Badge>
              </>
            )
          }
          return null
        }
        return withNativeProps(
          item.props,
          <div
            key={item.key}
            onClick={() => {
              const { key } = item
              if (key === undefined || key === null) return
              setActiveKey(key.toString())
            }}
            className={classNames('adm-tab-bar-item', {
              'adm-tab-bar-item-active': active,
            })}
          >
            {renderContent()}
          </div>
        )
      })}
    </div>
  )
}

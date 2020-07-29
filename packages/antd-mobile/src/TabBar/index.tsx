import * as React from 'react'
import classnames from 'classnames'
import { TabBarPropsType, TabBarItemPropsType } from './PropsType'
import { withError, Touchable } from '../rmc'
import { useTracker } from '../hooks'
import { renderIcon } from '../_internal'
import '@ant-design/mobile-styles/lib/TabBar'
import { useState } from 'react'

const prefixCls = 'amd-tabbar'
export const TabBar: React.FC<TabBarPropsType> & {
  Item: typeof Item
} = props => {
  const { maxTabBarCount = 5, className, onChange = () => {} } = props || {}

  let { children } = props

  useTracker(TabBar.displayName)

  if (!Array.isArray(children)) {
    return null
  }

  // 子组件数目是否超过允许显示的最大数目
  const isOverLength = children.length > maxTabBarCount
  const newChildren = isOverLength
    ? children.slice(0, maxTabBarCount)
    : children

  const wrapperClassName = classnames(
    'amd-tabBar',
    className,
    isOverLength && 'amd-tabBar-overLength',
  )

  let defaultIndex = 0
  newChildren.filter((i: any, index) => {
    if (i.props.active) {
      defaultIndex = index
      return true
    }
  })
  const [currentIndex, setCurrentIndex] = useState(defaultIndex)

  const getChNode = (child: any, index: number) => {
    if (child.props.active && currentIndex !== index) {
      setCurrentIndex(index)
      onChange(index)
    }
    return child
  }
  const getChNodeContent = (child: any, index: number) => {
    if (
      child &&
      typeof child !== 'string' &&
      typeof child !== 'number' &&
      child.type &&
      (child.type as any).displayName === 'TabBarItem'
    ) {
      const active = child.props.active
      const contentClassName = classnames(
        `${prefixCls}-content-item`,
        active && `${prefixCls}-content-item-active`,
      )
      if (child.props.children) {
        return (
          <div className={contentClassName} key={index}>
            {child.props.children}
          </div>
        )
      }
    }
  }

  const itemList = newChildren.map((item, index) => getChNode(item, index))
  const ItemContent = newChildren.map((item, index) =>
    getChNodeContent(item, index),
  )

  return (
    <div className="amd-tabbar-container">
      {ItemContent.length > 0 && (
        <div className="amd-tabbar-content-wrap">{ItemContent}</div>
      )}
      <div className="amd-tabbar-list">{itemList}</div>
    </div>
  )
}

const Item: React.FC<TabBarItemPropsType> = props => {
  const { title, icon, activeIcon, active, onPress, activeClassName } = props

  const cls = classnames(`${prefixCls}-item`, {
    [`${prefixCls}-item-active`]: active,
    [`${activeClassName}`]: active,
  })

  // @ts-ignore
  const iconImg: any = active ? activeIcon : icon
  const isIconImg = /^http/.test(String(iconImg))

  return (
    <Touchable onPress={onPress}>
      <div className={cls}>
        <div className={`${prefixCls}-item-container`}>
          {isIconImg ? (
            <span className={`${prefixCls}-item-icon`}>
              <img src={iconImg} alt="" />
            </span>
          ) : (
            <span className={`${prefixCls}-item-icon`} aria-hidden="true">
              {renderIcon(iconImg)}
            </span>
          )}
          <span className={`${prefixCls}-item-title`}>{title}</span>
        </div>
      </div>
    </Touchable>
  )
}
Item.displayName = 'TabBarItem'
TabBar.displayName = 'TabBar'
TabBar.Item = Item
export default withError(TabBar)

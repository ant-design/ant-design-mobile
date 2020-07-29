import * as React from 'react'
import classnames from 'classnames'
import {
  TabsPropsType,
  handleTabPress,
  TabItemPropsType,
  TabPanePropsType,
} from './PropsType'
import { useState, useRef, useEffect } from 'react'
import { Touchable, withError } from '../rmc'
import { useTracker } from '../hooks'
import SwipeableViews from 'react-swipeable-views'
import { BasisTabItem, CapsuleTabItem, MixinTabItem } from './items'

import '@ant-design/mobile-styles/lib/Tabs'

const Tabs: React.FC<TabsPropsType> & { Item: typeof Item } = ({
  children,
  type = 'basis',
  index = 0,
  maxTabCount = 4.5,
  enableEdgeFadeOut = true,
  className,
  activeClassName,
  onChange = () => {},
  onTabPress = () => {},
  disabled = false,
  animateTransitions = true,
}) => {
  useTracker(Tabs.displayName)
  if (!Array.isArray(children)) {
    return null
  }
  const tabBarItems = children.map(item => {
    // @ts-ignore
    let tabItem = item?.props?.tab

    if (!tabItem) {
      return { title: '' }
    }
    if (typeof tabItem === 'string') {
      return { title: tabItem }
    }
    return tabItem
  })

  const [currentIndex, setCurrentIndex] = useState(index)
  const [showFadeEl, setShowFadeEl] = useState([0, 0])
  let scrollTimer: number | null = null

  const tabListEl = useRef(null)

  // 当被选中标签改变时触发
  useEffect(() => {
    onChange(currentIndex)
  }, [index, currentIndex])

  // componentDidMount
  useEffect(() => {
    setFadeElStatus(tabListEl.current)
  }, [])

  // 子组件数目是否超过允许显示的最大数目
  const isOverLength = tabBarItems.length > maxTabCount

  const wrapperClassName = classnames(
    'amd-tabs',
    `amd-tabs-${type}-wrap`,
    className,
    isOverLength && 'amd-tabs-overLength',
  )

  /**
   * 控制滚动条两侧半透明区块显隐
   * @param el tabBar 组件引用
   */
  const setFadeElStatus = (el: HTMLElement | null) => {
    if (!el) {
      return
    }
    if (enableEdgeFadeOut === false) {
      return
    }

    const { scrollLeft, offsetWidth, scrollWidth } = el
    const currentShowFadeEl = showFadeEl
    let newShowFadeFadeEl = [0, 0]
    if (scrollLeft > 0) {
      newShowFadeFadeEl[0] = 1
    }
    if (scrollLeft + offsetWidth < scrollWidth) {
      newShowFadeFadeEl[1] = 1
    }

    if (
      newShowFadeFadeEl[0] !== currentShowFadeEl[0] ||
      newShowFadeFadeEl[1] !== currentShowFadeEl[1]
    ) {
      setShowFadeEl(newShowFadeFadeEl)
    }
  }

  const handleTabPress: handleTabPress = index => e => {
    const tabPressCallback = onTabPress(index, e)
    if (index === currentIndex) {
      return
    }
    if (tabPressCallback === false) {
      return
    }

    setCurrentIndex(index)
  }

  const handleTabScroll = (ev: React.UIEvent<HTMLDivElement>) => {
    if (scrollTimer) {
      return
    }
    const target = ev.target as HTMLDivElement
    setFadeElStatus(target)
    scrollTimer = window.setTimeout(() => {
      scrollTimer = null
      setFadeElStatus(target)
    }, 100)
  }

  const handleChangeIndex = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className={wrapperClassName}>
      <div className="amd-tabs-container">
        <div className={getFadeElClassName('left', showFadeEl[0])} />
        <div className={getFadeElClassName('right', showFadeEl[1])} />
        <div
          className="amd-tabs-list"
          onScroll={handleTabScroll}
          ref={tabListEl}
        >
          {tabBarItems.map((content, index: number) => {
            return (
              <TabItem
                type={type}
                activeClassName={activeClassName}
                onPress={handleTabPress(index)}
                key={index}
                active={index === currentIndex}
                item={content}
              />
            )
          })}
        </div>
      </div>
      {Array.isArray(children) && (
        <SwipeableViews
          index={currentIndex}
          onChangeIndex={handleChangeIndex}
          disabled={disabled}
          animateTransitions={animateTransitions}
        >
          {children.map((item, index) => (
            <div key={index} className="amd-tabs-item">
              {item}
            </div>
          ))}
        </SwipeableViews>
      )}
    </div>
  )
}

const TabItem: React.FC<TabItemPropsType> = ({
  type,
  item,
  active,
  onPress,
  minTabWidth,
  activeClassName,
}) => {
  const tabItemClassName = classnames(
    'amd-tabs-item',
    active && 'amd-tabs-item-active',
    active && activeClassName,
  )

  let TabType
  if (type === 'capsule') {
    TabType = CapsuleTabItem
  } else if (type === 'mixin') {
    TabType = MixinTabItem
  } else {
    TabType = BasisTabItem
  }

  return (
    <Touchable onPress={onPress}>
      <div className={tabItemClassName} style={{ flexBasis: minTabWidth }}>
        <TabType item={item} />
      </div>
    </Touchable>
  )
}

const Item: React.FC<TabPanePropsType> = ({ tab, children, className }) => {
  return <div className={className}>{children}</div>
}

Tabs.displayName = 'Tabs'

Tabs.Item = Item
export default withError(Tabs)

function getFadeElClassName(position: string, show: number) {
  return classnames(
    'amd-tabs-fade',
    `amd-tabs-fade-${position}`,
    show && 'amd-tabs-fade-show',
  )
}

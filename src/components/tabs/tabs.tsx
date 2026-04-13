import { animated, useSpring } from '@react-spring/web'
import { useIsomorphicLayoutEffect, useThrottleFn } from 'ahooks'
import classNames from 'classnames'
import type { FC, ReactElement, ReactNode } from 'react'
import React, { isValidElement, useEffect, useRef } from 'react'
import { bound } from '../../utils/bound'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { ShouldRender } from '../../utils/should-render'
import { traverseReactNode } from '../../utils/traverse-react-node'
import { useIsomorphicUpdateLayoutEffect } from '../../utils/use-isomorphic-update-layout-effect'
import { useMutationEffect } from '../../utils/use-mutation-effect'
import { usePropsValue } from '../../utils/use-props-value'
import { useResizeEffect } from '../../utils/use-resize-effect'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-tabs`

export type TabProps = {
  title: ReactNode
  disabled?: boolean
  forceRender?: boolean
  destroyOnClose?: boolean
  children?: ReactNode
} & NativeProps

export const Tab: FC<TabProps> = () => {
  return null
}

export type TabsProps = {
  activeKey?: string | null
  defaultActiveKey?: string | null
  activeLineMode?: 'auto' | 'full' | 'fixed'
  stretch?: boolean
  onChange?: (key: string) => void
  children?: ReactNode
  direction?: 'ltr' | 'rtl'
  /**
   * @experimental Support disabled auto scroll when Tabs header content change.
   * This API name or function may change in the future.
   * Please lock the version if you want to use it.
   */
  autoScroll?: boolean
} & NativeProps<
  | '--fixed-active-line-width'
  | '--active-line-height'
  | '--active-line-border-radius'
  | '--title-font-size'
  | '--content-padding'
  | '--active-title-color'
  | '--active-line-color'
>

const defaultProps = {
  activeLineMode: 'auto',
  stretch: true,
  direction: 'ltr',
}

export const Tabs: FC<TabsProps> = p => {
  const props = mergeProps(defaultProps, p)
  const tabListContainerRef = useRef<HTMLDivElement>(null)
  const activeLineRef = useRef<HTMLDivElement>(null)
  const tabRefs = useRef<Record<string, HTMLDivElement | null>>({})

  const keyToIndexRecord: Record<string, number> = {}
  let firstActiveKey: string | null = null

  const panes: ReactElement<TabProps>[] = []

  const isRTL = props.direction === 'rtl'

  traverseReactNode(props.children, (child, index) => {
    if (!isValidElement<TabProps>(child)) return

    const key = child.key
    if (typeof key !== 'string') return
    if (index === 0) {
      firstActiveKey = key
    }
    const length = panes.push(child)
    keyToIndexRecord[key] = length - 1
  })

  const [activeKey, setActiveKey] = usePropsValue({
    value: props.activeKey,
    defaultValue: props.defaultActiveKey ?? firstActiveKey,
    onChange: v => {
      if (v === null) return
      props.onChange?.(v)
    },
  })

  /** Save the keyboard click to make sure focus only trigger when by keyboard */
  const manuallyActiveRef = useRef<string | null>(null)

  const [{ x, width }, inkApi] = useSpring(() => ({
    x: 0,
    width: 0,
    config: { tension: 300, clamp: true },
  }))

  const [{ scrollLeft }, scrollApi] = useSpring(() => ({
    scrollLeft: 0,
    config: { tension: 300, clamp: true },
  }))

  const [{ leftMaskOpacity, rightMaskOpacity }, maskApi] = useSpring(() => ({
    leftMaskOpacity: 0,
    rightMaskOpacity: 0,
    config: { clamp: true },
  }))

  function animate(immediate = false, fromMutation = false) {
    const container = tabListContainerRef.current
    if (!container) return

    const activeIndex = keyToIndexRecord[activeKey as string]
    if (activeIndex === undefined) {
      inkApi.start({ x: 0, width: 0, immediate: true })
      return
    }
    const activeLine = activeLineRef.current
    if (!activeLine) return

    const activeTabWrapper = container.children.item(
      activeIndex + 1
    ) as HTMLDivElement
    const activeTab = activeTabWrapper.children.item(0) as HTMLDivElement
    const activeTabLeft = activeTab.offsetLeft
    const activeTabWidth = activeTab.offsetWidth
    const activeTabWrapperLeft = activeTabWrapper.offsetLeft
    const activeTabWrapperWidth = activeTabWrapper.offsetWidth

    const containerWidth = container.offsetWidth
    const containerScrollWidth = container.scrollWidth
    const containerScrollLeft = container.scrollLeft

    const activeLineWidth = activeLine.offsetWidth

    let x = 0
    let width = 0
    if (props.activeLineMode === 'auto') {
      x = activeTabLeft
      width = activeTabWidth
    } else if (props.activeLineMode === 'full') {
      x = activeTabWrapperLeft
      width = activeTabWrapperWidth
    } else {
      x = activeTabLeft + (activeTabWidth - activeLineWidth) / 2
    }

    if (isRTL) {
      /**
       * In RTL mode, x equals the container width minus the x-coordinate of the current tab minus the width of the current tab.
       * https://github.com/Fog3211/reproduce-codesandbox/blob/f0a3396a114cc00e88a51a67d3be60a746519b30/assets/images/antd_mobile_tabs_rtl_x.jpg?raw=true
       */
      const w = ['auto', 'full'].includes(props.activeLineMode)
        ? width
        : activeLineWidth
      x = -(containerWidth - x - w)
    }

    inkApi.start({ x, width, immediate })

    const maxScrollDistance = containerScrollWidth - containerWidth
    if (maxScrollDistance <= 0) return

    let nextScrollLeft = 0

    if (isRTL) {
      /**
       * 位移距离等于：activeTab的中心坐标距离容器中心坐标的距离，然后RTL取负数
       * containerWidth / 2 - (activeTabLeft + (activeTabWidth - activeLineWidth) / 2) - activeLineWidth / 2,
       */
      nextScrollLeft = -bound(
        containerWidth / 2 -
          activeTabLeft +
          activeTabWidth / 2 -
          activeLineWidth,
        0,
        maxScrollDistance
      )
    } else {
      nextScrollLeft = bound(
        activeTabLeft - (containerWidth - activeTabWidth) / 2,
        0,
        maxScrollDistance
      )
    }

    if (!fromMutation || props.autoScroll !== false) {
      scrollApi.start({
        scrollLeft: nextScrollLeft,
        from: { scrollLeft: containerScrollLeft },
        immediate,
      })
    }
  }

  useIsomorphicLayoutEffect(() => {
    animate(!x.isAnimating)
  }, [])

  useIsomorphicUpdateLayoutEffect(() => {
    animate()
  }, [activeKey, isRTL, props.activeLineMode])

  useResizeEffect(() => {
    animate(!x.isAnimating)
  }, tabListContainerRef)

  useMutationEffect(
    () => {
      animate(!x.isAnimating, true)
    },
    tabListContainerRef,
    { subtree: true, childList: true, characterData: true }
  )

  const { run: updateMask } = useThrottleFn(
    immediate => {
      const container = tabListContainerRef.current
      if (!container) return

      const scrollLeft = container.scrollLeft
      let showLeftMask = false
      let showRightMask = false

      if (isRTL) {
        /**
         * RTL模式下，只要滑动过，scrollLeft就再也回不到0（chrome是0.5）
         * 所以要加round才能终止触发条件
         * round(443.5) + 375 < 819
         */
        showLeftMask =
          Math.round(-scrollLeft) + container.offsetWidth <
          container.scrollWidth
        showRightMask = scrollLeft < 0
      } else {
        showLeftMask = scrollLeft > 0
        showRightMask =
          scrollLeft + container.offsetWidth < container.scrollWidth
      }

      maskApi.start({
        leftMaskOpacity: showLeftMask ? 1 : 0,
        rightMaskOpacity: showRightMask ? 1 : 0,
        immediate,
      })
    },
    { wait: 100, trailing: true, leading: true }
  )

  useIsomorphicLayoutEffect(() => {
    updateMask(true)
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const keys = Object.keys(keyToIndexRecord)
    const currentIndex = keyToIndexRecord[activeKey as string]
    const isNext = isRTL ? e.key === 'ArrowLeft' : e.key === 'ArrowRight'
    const isPrev = isRTL ? e.key === 'ArrowRight' : e.key === 'ArrowLeft'
    const offsetDirection = isNext ? 1 : -1

    const findNextEnabledTab = (startIndex: number, direction: 1 | -1) => {
      const length = keys.length
      for (let i = 0; i < length; i++) {
        const index = (startIndex + direction * (i + 1) + length) % length
        const key = keys[index]
        const pane = panes.find(p => p.key === key)
        if (!pane?.props.disabled) return key
      }
      return keys[startIndex]
    }
    const currentKey = findNextEnabledTab(currentIndex, offsetDirection)
    if (isNext || isPrev) {
      e.preventDefault()
      manuallyActiveRef.current = currentKey
      setActiveKey(currentKey)
    }
  }

  useEffect(() => {
    if (
      activeKey &&
      tabRefs.current[activeKey] &&
      manuallyActiveRef.current === activeKey
    ) {
      tabRefs.current[activeKey]?.focus()
      manuallyActiveRef.current = null
    }
  }, [activeKey])

  return withNativeProps(
    props,
    <div className={classPrefix} style={{ direction: props.direction }}>
      <div className={`${classPrefix}-header`}>
        <animated.div
          className={classNames(
            `${classPrefix}-header-mask`,
            `${classPrefix}-header-mask-left`
          )}
          style={{ opacity: leftMaskOpacity }}
        />
        <animated.div
          className={classNames(
            `${classPrefix}-header-mask`,
            `${classPrefix}-header-mask-right`
          )}
          style={{ opacity: rightMaskOpacity }}
        />
        <animated.div
          className={`${classPrefix}-tab-list`}
          ref={tabListContainerRef}
          scrollLeft={scrollLeft}
          onScroll={updateMask}
          onKeyDown={handleKeyDown}
          role='tablist'
        >
          <animated.div
            ref={activeLineRef}
            className={`${classPrefix}-tab-line`}
            style={{
              width:
                props.activeLineMode === 'fixed'
                  ? 'var(--fixed-active-line-width, 30px)'
                  : width,
              x,
            }}
          />
          {panes.map(pane =>
            withNativeProps(
              pane.props,
              <div
                key={pane.key}
                className={classNames(`${classPrefix}-tab-wrapper`, {
                  [`${classPrefix}-tab-wrapper-stretch`]: props.stretch,
                })}
              >
                <div
                  role='tab'
                  aria-selected={pane.key === activeKey}
                  tabIndex={pane.key === activeKey ? 0 : -1}
                  ref={el => (tabRefs.current[pane.key as string] = el)}
                  onClick={() => {
                    const { key } = pane
                    if (pane.props.disabled) return
                    if (key === undefined || key === null) {
                      return
                    }
                    setActiveKey(key.toString())
                  }}
                  className={classNames(`${classPrefix}-tab`, {
                    [`${classPrefix}-tab-active`]: pane.key === activeKey,
                    [`${classPrefix}-tab-disabled`]: pane.props.disabled,
                  })}
                >
                  {pane.props.title}
                </div>
              </div>
            )
          )}
        </animated.div>
      </div>
      {panes.map(pane => {
        if (pane.props.children === undefined) {
          return null
        }
        const active = pane.key === activeKey
        return (
          <ShouldRender
            key={pane.key}
            active={active}
            forceRender={pane.props.forceRender}
            destroyOnClose={pane.props.destroyOnClose}
          >
            <div
              className={`${classPrefix}-content`}
              style={{ display: active ? 'block' : 'none' }}
            >
              {pane.props.children}
            </div>
          </ShouldRender>
        )
      })}
    </div>
  )
}

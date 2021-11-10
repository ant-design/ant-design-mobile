import React, {
  FC,
  ReactNode,
  ReactElement,
  ComponentProps,
  useRef,
  useLayoutEffect,
} from 'react'
import classNames from 'classnames'
import { useSpring, animated } from '@react-spring/web'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { usePropsValue } from '../../utils/use-props-value'
import { bound } from '../../utils/bound'
import { useUpdateLayoutEffect, useThrottleFn } from 'ahooks'
import { useMutationEffect } from '../../utils/use-mutation-effect'
import { useResizeEffect } from '../../utils/use-resize-effect'

const classPrefix = `adm-capsule-tabs`

export type CapsuleTabPaneProps = {
  title: ReactNode
  disabled?: boolean
  forceRender?: boolean
} & NativeProps

export const CapsuleTabPane: FC<CapsuleTabPaneProps> = () => {
  return null
}

export type CapsuleTabsProps = {
  activeKey?: string | null
  defaultActiveKey?: string | null
  onChange?: (key: string) => void
} & NativeProps

export const CapsuleTabs: FC<CapsuleTabsProps> = props => {
  const tabListContainerRef = useRef<HTMLDivElement>(null)
  const rootRef = useRef<HTMLDivElement>(null)
  const keyToIndexRecord: Record<string, number> = {}
  let firstActiveKey: string | null = null

  const panes: ReactElement<ComponentProps<typeof CapsuleTabPane>>[] = []

  React.Children.forEach(props.children, (child, index) => {
    if (!React.isValidElement(child)) return
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
    onChange: props.onChange,
  })

  const [{ scrollLeft }, scrollApi] = useSpring(() => ({
    scrollLeft: 0,
    config: {
      tension: 300,
      clamp: true,
    },
  }))

  const [{ leftMaskOpacity, rightMaskOpacity }, maskApi] = useSpring(() => ({
    leftMaskOpacity: 0,
    rightMaskOpacity: 0,
    config: {
      clamp: true,
    },
  }))

  function animate(immediate = false) {
    const container = tabListContainerRef.current
    if (!container) return
    const activeIndex = keyToIndexRecord[activeKey as string]
    if (activeIndex === undefined) {
      return
    }

    const activeTabWrapper = container.children.item(
      activeIndex
    ) as HTMLDivElement
    const activeTab = activeTabWrapper.children.item(0) as HTMLDivElement
    const activeTabLeft = activeTab.offsetLeft
    const activeTabWidth = activeTab.offsetWidth

    const containerWidth = container.offsetWidth
    const containerScrollWidth = container.scrollWidth
    const containerScrollLeft = container.scrollLeft

    const maxScrollDistance = containerScrollWidth - containerWidth
    if (maxScrollDistance <= 0) return

    const nextScrollLeft = bound(
      activeTabLeft - (containerWidth - activeTabWidth) / 2,
      0,
      containerScrollWidth - containerWidth
    )

    scrollApi.start({
      scrollLeft: nextScrollLeft,
      from: { scrollLeft: containerScrollLeft },
      immediate,
    })
  }

  useLayoutEffect(() => {
    animate(true)
  }, [])

  useUpdateLayoutEffect(() => {
    animate()
  }, [activeKey])

  useResizeEffect(() => {
    animate(true)
  }, rootRef)

  useMutationEffect(
    () => {
      animate(true)
    },
    tabListContainerRef,
    {
      subtree: true,
      childList: true,
      characterData: true,
    }
  )

  const { run: updateMask } = useThrottleFn(
    (immediate = false) => {
      const container = tabListContainerRef.current
      if (!container) return

      const scrollLeft = container.scrollLeft
      const showLeftMask = scrollLeft > 0
      const showRightMask =
        scrollLeft + container.offsetWidth < container.scrollWidth

      maskApi.start({
        leftMaskOpacity: showLeftMask ? 1 : 0,
        rightMaskOpacity: showRightMask ? 1 : 0,
        immediate,
      })
    },
    {
      wait: 100,
      trailing: true,
      leading: true,
    }
  )

  useLayoutEffect(() => {
    updateMask(true)
  }, [])

  return withNativeProps(
    props,
    <div className={classPrefix} ref={rootRef}>
      <div className={`${classPrefix}-header`}>
        <animated.div
          className={classNames(
            `${classPrefix}-header-mask`,
            `${classPrefix}-header-mask-left`
          )}
          style={{
            opacity: leftMaskOpacity,
          }}
        />
        <animated.div
          className={classNames(
            `${classPrefix}-header-mask`,
            `${classPrefix}-header-mask-right`
          )}
          style={{
            opacity: rightMaskOpacity,
          }}
        />
        <animated.div
          className={`${classPrefix}-tab-list`}
          ref={tabListContainerRef}
          scrollLeft={scrollLeft}
          onScroll={updateMask}
        >
          {panes.map(pane =>
            withNativeProps(
              pane.props,
              <div key={pane.key} className={`${classPrefix}-tab-wrapper`}>
                <div
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
        if (pane.key === activeKey) {
          return (
            <div key={pane.key} className={`${classPrefix}-content`}>
              {pane.props.children}
            </div>
          )
        }
        if (pane.props.forceRender) {
          return (
            <div key={pane.key} style={{ display: 'none' }}>
              {pane.props.children}
            </div>
          )
        }
        return null
      })}
    </div>
  )
}

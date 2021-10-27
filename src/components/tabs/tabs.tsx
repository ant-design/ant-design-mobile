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
import { useUpdateLayoutEffect } from 'ahooks'
import { useMutationEffect } from '../../utils/use-mutation-effect'
import { useResizeEffect } from '../../utils/use-resize-effect'

const classPrefix = `adm-tabs`

export type TabPaneProps = {
  title: ReactNode
  forceRender?: boolean
} & NativeProps

export const TabPane: FC<TabPaneProps> = () => {
  return null
}

export type TabsProps = {
  activeKey?: string | null
  defaultActiveKey?: string | null
  onChange?: (key: string) => void
} & NativeProps

export const Tabs: FC<TabsProps> = props => {
  const tabListContainerRef = useRef<HTMLDivElement>(null)
  const rootRef = useRef<HTMLDivElement>(null)
  const keyToIndexRecord: Record<string, number> = {}
  let firstActiveKey: string | null = null

  const panes: ReactElement<ComponentProps<typeof TabPane>>[] = []

  React.Children.forEach(props.children, (child, index) => {
    if (!React.isValidElement(child)) return
    const key = child.key
    if (typeof key !== 'string') return
    if (index === 0) {
      firstActiveKey = key
    }
    keyToIndexRecord[key] = index
    panes.push(child)
  })

  const [activeKey, setActiveKey] = usePropsValue({
    value: props.activeKey,
    defaultValue: props.defaultActiveKey ?? firstActiveKey,
    onChange: props.onChange,
  })

  const [{ x, width }, api] = useSpring(() => ({
    x: 0,
    width: 0,
    config: {
      tension: 300,
      clamp: true,
    },
  }))

  const [{ scrollLeft }, scrollApi] = useSpring(() => ({
    scrollLeft: 0,
    config: {
      tension: 300,
      clamp: true,
    },
  }))

  function animate(immediate = false) {
    const container = tabListContainerRef.current
    if (!container) return
    const activeIndex = keyToIndexRecord[activeKey as string]
    if (activeIndex === undefined) return

    const activeTabWrapper = container.children.item(
      activeIndex
    ) as HTMLDivElement
    const activeTab = activeTabWrapper.children.item(0) as HTMLDivElement
    const activeTabLeft = activeTab.offsetLeft
    const activeTabWidth = activeTab.offsetWidth

    const containerWidth = container.offsetWidth
    const containerScrollWidth = container.scrollWidth
    const containerScrollLeft = container.scrollLeft

    const x = activeTabLeft

    api.start({
      x,
      width: activeTabWidth,
      immediate,
    })

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
    console.log('resize')
    animate(true)
  }, rootRef)

  useMutationEffect(
    () => {
      console.log('mutation')
      animate(true)
    },
    tabListContainerRef,
    {
      subtree: true,
      childList: true,
      characterData: true,
    }
  )

  return withNativeProps(
    props,
    <div className={classPrefix} ref={rootRef}>
      <animated.div
        className={`${classPrefix}-tab-list`}
        ref={tabListContainerRef}
        scrollLeft={scrollLeft}
      >
        {panes.map(pane =>
          withNativeProps(
            pane.props,
            <div key={pane.key} className={`${classPrefix}-tab-wrapper`}>
              <div
                onClick={() => {
                  const { key } = pane
                  if (key === undefined || key === null) {
                    return
                  }
                  setActiveKey(key.toString())
                }}
                className={classNames(`${classPrefix}-tab`, {
                  [`${classPrefix}-tab-active`]: pane.key === activeKey,
                })}
              >
                {pane.props.title}
              </div>
            </div>
          )
        )}
        <animated.div
          className={`${classPrefix}-tab-line`}
          style={{
            width,
            x,
          }}
        />
      </animated.div>
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

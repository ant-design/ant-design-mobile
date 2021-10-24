import React, {
  FC,
  ReactNode,
  ReactElement,
  ComponentProps,
  useRef,
  useLayoutEffect,
  useEffect,
} from 'react'
import classNames from 'classnames'
import {
  useSpring,
  animated,
  AnimationResult,
  SpringValue,
} from '@react-spring/web'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { usePropsValue } from '../../utils/use-props-value'

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
  const containerRef = useRef<HTMLDivElement>(null)
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
      tension: 200,
    },
  }))

  const [, scrollApi] = useSpring(() => ({
    scrollLeft: 0,
    onChange: ({
      value: { scrollLeft },
    }: AnimationResult<SpringValue<{ scrollLeft: number }>>) => {
      if (scrollLeft === 0) return
      const containerDOM = containerRef.current as HTMLDivElement
      if (!containerDOM) return
      containerDOM.scrollLeft = scrollLeft
    },
  }))

  useLayoutEffect(() => {
    const containerDOM = containerRef.current
    if (!containerDOM) return
    const activeIndex = keyToIndexRecord[activeKey as string]
    if (activeIndex === undefined) return

    const activeTabWrapperDOM = containerDOM.children.item(
      activeIndex
    ) as HTMLDivElement
    const activeTabContentDOM = activeTabWrapperDOM.children.item(
      0
    ) as HTMLDivElement
    const activeTabLeft = activeTabWrapperDOM.offsetLeft
    const activeTabWidth = activeTabWrapperDOM.offsetWidth
    const activeTabContentWidth = activeTabContentDOM.offsetWidth

    const containerWidth = containerDOM.offsetWidth
    const containerScrollWidth = containerDOM.scrollWidth
    const containerScrollLeft = containerDOM.scrollLeft

    const x = activeTabLeft + (activeTabWidth - activeTabContentWidth) / 2
    const scrollLeft = activeTabLeft - (containerWidth - activeTabWidth) / 2
    const needScroll =
      containerScrollWidth !== containerWidth &&
      activeTabLeft + activeTabLeft / 2 > containerWidth / 2

    api.start({
      x,
      width: activeTabContentWidth,
    })

    if (needScroll) {
      scrollApi.start({
        scrollLeft,
        from: { scrollLeft: containerScrollLeft },
      })
    }
  }, [activeKey, props.children])

  return withNativeProps(
    props,
    <div className={classPrefix}>
      <div className={`${classPrefix}-tab-list`} ref={containerRef}>
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

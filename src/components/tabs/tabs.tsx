import {
  FC,
  ReactNode,
  ReactElement,
  ComponentProps,
  useState,
  useRef,
  useLayoutEffect,
} from 'react'
import React from 'react'
import classNames from 'classnames'
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { supportsPassive } from '../../utils/supports-passive'
import { bound } from '../../utils/bound'
import { useNewControllableValue } from '../../utils/use-controllable-value'

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
  const childrenRecord: Record<string, ReactNode> = {}

  const panes: ReactElement<ComponentProps<typeof TabPane>>[] = []

  React.Children.forEach(props.children, child => {
    if (!React.isValidElement(child)) return
    const { key } = child
    if (typeof key !== 'string') return

    childrenRecord[key] = child.props.children
    panes.push(child)
  })

  let activeCurrent = undefined
  let defaultCurrent = 0
  panes.forEach((child, index) => {
    if (child.key === props.activeKey) {
      activeCurrent = index
    }
    if (child.key === props.defaultActiveKey) {
      defaultCurrent = index
    }
  })

  const [current, setCurrent] = useNewControllableValue({
    value: activeCurrent,
    defaultValue: defaultCurrent,
    onChange: v => {
      props.onChange?.(panes[v]?.key as string)
    },
  })

  const trackRef = useRef<HTMLDivElement>(null)

  const [{ x }, api] = useSpring(() => ({
    x: 0,
    config: {
      tension: 200,
      friction: 30,
    },
  }))

  const [barStyle, barApi] = useSpring(() => ({
    x: 0,
    width: 0,
  }))

  const bind = useDrag(
    state => {
      if (!trackRef.current) return
      const tracker = trackRef.current

      const [offsetX] = state.offset

      if (!state.last) {
        api.start({
          x: offsetX,
          immediate: true,
        })
      } else {
        const { clientWidth, scrollWidth } = tracker
        api.start({
          x: bound(offsetX, clientWidth - scrollWidth, 0),
        })
      }
    },
    {
      from: () => [x.get(), 0],
      axis: 'x',
      preventScroll: true,
      pointer: {
        touch: true,
      },
      eventOptions: supportsPassive ? { passive: false } : false,
    }
  )

  useLayoutEffect(() => {
    if (!trackRef.current) return
    const tracker = trackRef.current

    const widthSum = Array.from(tracker.children)
      .slice(0, current)
      .reduce((p, c) => p + c.clientWidth, 0)

    const { clientWidth, scrollWidth } = tracker
    const { clientWidth: childWidth } = tracker.children[current]

    const offsetX = Math.max(0, (clientWidth - childWidth) / 2) - widthSum

    api.start({
      x: bound(offsetX, clientWidth - scrollWidth, 0),
    })

    barApi.start({
      x: widthSum,
      width: tracker.children[current].clientWidth,
      immediate: barStyle.width.get() === 0,
    })
  }, [current])

  return withNativeProps(
    props,
    <div className={classPrefix}>
      <div className={`${classPrefix}-list`} {...bind()}>
        <animated.div
          className={`${classPrefix}-list-track`}
          ref={trackRef}
          style={{ x }}
        >
          {panes.map((pane, index) =>
            withNativeProps(
              pane.props,
              <div key={pane.key} className={`${classPrefix}-tab-wrapper`}>
                <div
                  onClick={() => {
                    setCurrent(index)
                  }}
                  className={classNames(`${classPrefix}-tab`, {
                    [`${classPrefix}-tab-active`]: index === current,
                  })}
                >
                  {pane.props.title}
                </div>
              </div>
            )
          )}

          <animated.div
            className={`${classPrefix}-list-bar`}
            style={barStyle}
          />
        </animated.div>
      </div>

      {panes.map((pane, index) => {
        if (pane.props.children === undefined) {
          return null
        }
        if (index === current) {
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

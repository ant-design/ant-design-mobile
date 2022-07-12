import React, { FC, ReactElement, ComponentProps, useRef } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import List from '../list'
import { DownOutline } from 'antd-mobile-icons'
import classNames from 'classnames'
import { useSpring, animated } from '@react-spring/web'
import { usePropsValue } from '../../utils/use-props-value'
import { useMount } from 'ahooks'
import { useShouldRender } from '../../utils/should-render'
import { useIsomorphicUpdateLayoutEffect } from '../../utils/use-isomorphic-update-layout-effect'
import { traverseReactNode } from '../../utils/traverse-react-node'

const classPrefix = `adm-collapse`

export type CollapsePanelProps = {
  key: string
  title: React.ReactNode
  disabled?: boolean
  forceRender?: boolean
  destroyOnClose?: boolean
  onClick?: (event: React.MouseEvent<Element, MouseEvent>) => void
  arrow?: React.ReactNode | ((active: boolean) => React.ReactNode)
  children?: React.ReactNode
} & NativeProps

export const CollapsePanel: FC<CollapsePanelProps> = () => {
  return null
}

const CollapsePanelContent: FC<{
  visible: boolean
  forceRender: boolean
  destroyOnClose: boolean
  children?: React.ReactNode
}> = props => {
  const { visible } = props
  const innerRef = useRef<HTMLDivElement>(null)
  const shouldRender = useShouldRender(
    visible,
    props.forceRender,
    props.destroyOnClose
  )
  const [{ height }, api] = useSpring(() => ({
    from: { height: 0 },
    config: {
      precision: 0.01,
      mass: 1,
      tension: 200,
      friction: 25,
      clamp: true,
    },
  }))

  useMount(() => {
    if (!visible) return
    const inner = innerRef.current
    if (!inner) return
    api.start({
      height: inner.offsetHeight,
      immediate: true,
    })
  })

  useIsomorphicUpdateLayoutEffect(() => {
    const inner = innerRef.current
    if (!inner) return
    if (visible) {
      api.start({
        height: inner.offsetHeight,
      })
    } else {
      api.start({
        height: inner.offsetHeight,
        immediate: true,
      })
      api.start({
        height: 0,
      })
    }
  }, [visible])

  return (
    <animated.div
      className={`${classPrefix}-panel-content`}
      style={{
        height: height.to(v => {
          if (height.idle && visible) {
            return 'auto'
          } else {
            return v
          }
        }),
      }}
    >
      <div className={`${classPrefix}-panel-content-inner`} ref={innerRef}>
        <List.Item>{shouldRender && props.children}</List.Item>
      </div>
    </animated.div>
  )
}

type ValueProps<T> = {
  activeKey?: T
  defaultActiveKey?: T
  onChange?: (activeKey: T) => void
  arrow?: React.ReactNode | ((active: boolean) => React.ReactNode)
}

export type CollapseProps = (
  | ({
      accordion?: false
    } & ValueProps<string[]>)
  | ({
      accordion: true
    } & ValueProps<string | null>)
) & {
  children?: React.ReactNode
} & NativeProps

export const Collapse: FC<CollapseProps> = props => {
  const panels: ReactElement<ComponentProps<typeof CollapsePanel>>[] = []
  traverseReactNode(props.children, child => {
    if (!React.isValidElement(child)) return
    const key = child.key
    if (typeof key !== 'string') return
    panels.push(child)
  })

  const [activeKey, setActiveKey] = usePropsValue<string[]>(
    props.accordion
      ? {
          value:
            props.activeKey === undefined
              ? undefined
              : props.activeKey === null
              ? []
              : [props.activeKey],
          defaultValue:
            props.defaultActiveKey === undefined ||
            props.defaultActiveKey === null
              ? []
              : [props.defaultActiveKey],
          onChange: v => {
            props.onChange?.(v[0] ?? null)
          },
        }
      : {
          value: props.activeKey,
          defaultValue: props.defaultActiveKey ?? [],
          onChange: props.onChange,
        }
  )
  const activeKeyList =
    activeKey === null ? [] : Array.isArray(activeKey) ? activeKey : [activeKey]

  return withNativeProps(
    props,
    <div className={classPrefix}>
      <List>
        {panels.map(panel => {
          const key = panel.key as string
          const active = activeKeyList.includes(key)
          function handleClick(event: React.MouseEvent<Element, MouseEvent>) {
            if (props.accordion) {
              if (active) {
                setActiveKey([])
              } else {
                setActiveKey([key])
              }
            } else {
              if (active) {
                setActiveKey(activeKeyList.filter(v => v !== key))
              } else {
                setActiveKey([...activeKeyList, key])
              }
            }

            panel.props.onClick?.(event)
          }

          const renderArrow = () => {
            let arrow: CollapseProps['arrow'] = <DownOutline />
            if (props.arrow !== undefined) {
              arrow = props.arrow
            }
            if (panel.props.arrow !== undefined) {
              arrow = panel.props.arrow
            }
            return typeof arrow === 'function' ? (
              arrow(active)
            ) : (
              <div
                className={classNames(`${classPrefix}-arrow`, {
                  [`${classPrefix}-arrow-active`]: active,
                })}
              >
                {arrow}
              </div>
            )
          }

          return (
            <React.Fragment key={key}>
              {withNativeProps(
                panel.props,
                <List.Item
                  className={`${classPrefix}-panel-header`}
                  onClick={handleClick}
                  disabled={panel.props.disabled}
                  arrow={renderArrow()}
                >
                  {panel.props.title}
                </List.Item>
              )}
              <CollapsePanelContent
                visible={active}
                forceRender={!!panel.props.forceRender}
                destroyOnClose={!!panel.props.destroyOnClose}
              >
                {panel.props.children}
              </CollapsePanelContent>
            </React.Fragment>
          )
        })}
      </List>
    </div>
  )
}

import { animated, useSpring } from '@react-spring/web'
import { useMount } from 'ahooks'
import { DownOutline } from 'antd-mobile-icons'
import classNames from 'classnames'
import type { FC, ReactElement, ReactNode } from 'react'
import React, { isValidElement, useRef } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { useShouldRender } from '../../utils/should-render'
import { traverseReactNode } from '../../utils/traverse-react-node'
import { useIsomorphicUpdateLayoutEffect } from '../../utils/use-isomorphic-update-layout-effect'
import { observe } from '../../utils/use-mutation-effect'
import { usePropsValue } from '../../utils/use-props-value'
import List from '../list'

const classPrefix = `adm-collapse`

export type CollapsePanelProps = {
  key: string
  title: ReactNode
  disabled?: boolean
  forceRender?: boolean
  destroyOnClose?: boolean
  onClick?: (event: React.MouseEvent<Element, MouseEvent>) => void
  arrow?: ReactNode | ((active: boolean) => ReactNode)
  children?: ReactNode
} & NativeProps

export const CollapsePanel: FC<CollapsePanelProps> = () => {
  return null
}

const CollapsePanelContent: FC<{
  visible: boolean
  forceRender: boolean
  destroyOnClose: boolean
  children?: ReactNode
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
      let lastMotionId = 0
      let cancelObserve: VoidFunction = () => {}

      const handleMotion = () => {
        lastMotionId += 1
        const motionId = lastMotionId

        api.start({ height: inner.offsetHeight })[0].then(() => {
          if (motionId === lastMotionId) {
            cancelObserve()
          }
        })
      }

      cancelObserve = observe(
        inner,
        { childList: true, subtree: true },
        handleMotion
      )
      handleMotion()
      return cancelObserve
    } else {
      api.start({ height: inner.offsetHeight, immediate: true })
      api.start({ height: 0 })
    }
  }, [visible])

  return (
    <animated.div
      className={classNames(`${classPrefix}-panel-content`, {
        [`${classPrefix}-panel-content-active`]: visible,
      })}
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
  arrow?: ReactNode | ((active: boolean) => ReactNode)
}

export type CollapseProps = (
  | ({
      accordion?: false
    } & ValueProps<string[]>)
  | ({
      accordion: true
    } & ValueProps<string | null>)
) & {
  children?: ReactNode
} & NativeProps

export const Collapse: FC<CollapseProps> = props => {
  const panels: ReactElement<CollapsePanelProps>[] = []
  traverseReactNode(props.children, child => {
    if (!isValidElement<CollapsePanelProps>(child)) return
    const key = child.key
    if (typeof key !== 'string') return

    panels.push(child)
  })

  const handlePropsValue = () => {
    if (!props.accordion) {
      return {
        value: props.activeKey,
        defaultValue: props.defaultActiveKey ?? [],
        onChange: props.onChange,
      }
    }

    const initValue: {
      value?: string[]
      defaultValue: string[]
      onChange: (v: string[]) => void
    } = {
      value: [],
      defaultValue: [],
      onChange: v => {
        props.onChange?.(v[0] ?? null)
      },
    }

    if (props.activeKey === undefined) {
      initValue.value = undefined
    } else if (props.activeKey !== null) {
      initValue.value = [props.activeKey]
    }

    if (
      ![null, undefined].includes(props.defaultActiveKey as null | undefined)
    ) {
      initValue.defaultValue = [props.defaultActiveKey as string]
    }

    return initValue
  }

  const [activeKey, setActiveKey] = usePropsValue<string[]>(handlePropsValue())

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

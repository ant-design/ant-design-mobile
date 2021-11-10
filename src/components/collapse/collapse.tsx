import React, { FC, ReactElement, ComponentProps, useRef } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import List from '../list'
import { RightOutline } from 'antd-mobile-icons'
import classNames from 'classnames'
import { useSpring, animated } from '@react-spring/web'
import { usePropsValue } from '../../utils/use-props-value'
import { useMount, useUpdateLayoutEffect } from 'ahooks'
import { useShouldRender } from '../../utils/use-should-render'

const classPrefix = `adm-collapse`

export type CollapsePanelProps = {
  key: string
  title: React.ReactNode
  disabled?: boolean
  forceRender?: boolean
  destroyOnClose?: boolean
  onClick?: (event: React.MouseEvent<Element, MouseEvent>) => void
} & NativeProps

export const CollapsePanel: FC<CollapsePanelProps> = () => {
  return null
}

const CollapsePanelContent: FC<{
  visible: boolean
  forceRender: boolean
  destroyOnClose: boolean
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

  useUpdateLayoutEffect(() => {
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
}

export type CollapseProps = (
  | ({
      accordion?: false
    } & ValueProps<string[]>)
  | ({
      accordion: true
    } & ValueProps<string | null>)
) &
  NativeProps

export const Collapse: FC<CollapseProps> = props => {
  const panels: ReactElement<ComponentProps<typeof CollapsePanel>>[] = []
  React.Children.forEach(props.children, child => {
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

          return (
            <React.Fragment key={key}>
              {withNativeProps(
                panel.props,
                <List.Item
                  className={classNames(`${classPrefix}-panel-header`, {
                    [`${classPrefix}-panel-header-disabled`]:
                      panel.props.disabled,
                  })}
                  onClick={panel.props.disabled ? undefined : handleClick}
                  arrow={
                    <div
                      className={classNames(`${classPrefix}-arrow`, {
                        [`${classPrefix}-arrow-active`]: active,
                      })}
                    >
                      <RightOutline />
                    </div>
                  }
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

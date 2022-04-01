import React, { FC, useCallback, useRef } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import List from '../list'
import { useSpring, animated } from '@react-spring/web'
import { useMount } from 'ahooks'
import { useShouldRender } from '../../utils/should-render'
import { useIsomorphicUpdateLayoutEffect } from '../../utils/use-isomorphic-update-layout-effect'
import classNames from 'classnames'
import { DownOutline } from 'antd-mobile-icons'
import { useCollapseContext } from './collapse-context'
import { classPrefix } from './collapse'

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

export type CollapseInternalProps = {
  active: boolean
  panelKey: string
}

export type CollapsePanelProps = {
  key: string
  title: React.ReactNode
  disabled?: boolean
  forceRender?: boolean
  destroyOnClose?: boolean
  onClick?: (event: React.MouseEvent<Element, MouseEvent>) => void
  arrow?: React.ReactNode | ((active: boolean) => React.ReactNode)
} & NativeProps

export const CollapsePanel: FC<CollapsePanelProps> = props => {
  const { children, title, disabled, onClick, forceRender, destroyOnClose } =
    props
  const { active, panelKey: key } = props as unknown as CollapseInternalProps

  const { arrow, onCollapse } = useCollapseContext()

  function handleClick(event: React.MouseEvent<Element, MouseEvent>) {
    onCollapse(key)
    onClick?.(event)
  }

  const renderArrow = useCallback(() => {
    let arrowDom: React.ReactNode = <DownOutline />
    if (props.arrow !== undefined) {
      arrowDom = props.arrow
    }
    if (arrow !== undefined) {
      arrowDom = arrow
    }
    return typeof arrow === 'function' ? (
      arrow(active)
    ) : (
      <div
        className={classNames(`${classPrefix}-arrow`, {
          [`${classPrefix}-arrow-active`]: active,
        })}
      >
        {arrowDom}
      </div>
    )
  }, [active])

  return (
    <React.Fragment key={key}>
      {withNativeProps(
        props,
        <List.Item
          className={`${classPrefix}-panel-header`}
          onClick={handleClick}
          disabled={disabled}
          arrow={renderArrow()}
        >
          {title}
        </List.Item>
      )}
      <CollapsePanelContent
        visible={active}
        forceRender={!!forceRender}
        destroyOnClose={!!destroyOnClose}
      >
        {children}
      </CollapsePanelContent>
    </React.Fragment>
  )
}

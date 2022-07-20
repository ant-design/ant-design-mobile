import classNames from 'classnames'
import React, { useState, useRef, FC, PropsWithChildren } from 'react'
import { useIsomorphicLayoutEffect, useUnmountedRef } from 'ahooks'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import Mask from '../mask'
import { useLockScroll } from '../../utils/use-lock-scroll'
import { renderToContainer } from '../../utils/render-to-container'
import { useSpring, animated } from '@react-spring/web'
import { withStopPropagation } from '../../utils/with-stop-propagation'
import { ShouldRender } from '../../utils/should-render'
import { CloseOutline } from 'antd-mobile-icons'
import { defaultPopupBaseProps, PopupBaseProps } from './popup-base-props'
import { useInnerVisible } from '../../utils/use-inner-visible'

const classPrefix = `adm-popup`

export type PopupProps = PopupBaseProps &
  PropsWithChildren<{
    position?: 'bottom' | 'top' | 'left' | 'right'
  }> &
  NativeProps<'--z-index'>

const defaultProps = {
  ...defaultPopupBaseProps,
  position: 'bottom',
}

export const Popup: FC<PopupProps> = p => {
  const props = mergeProps(defaultProps, p)

  const bodyCls = classNames(
    `${classPrefix}-body`,
    props.bodyClassName,
    `${classPrefix}-body-position-${props.position}`
  )

  const [active, setActive] = useState(props.visible)
  useIsomorphicLayoutEffect(() => {
    if (props.visible) {
      setActive(true)
    }
  }, [props.visible])

  const ref = useRef<HTMLDivElement>(null)
  useLockScroll(ref, props.disableBodyScroll && active)

  const unmountedRef = useUnmountedRef()
  const { percent } = useSpring({
    percent: props.visible ? 0 : 100,
    config: {
      precision: 0.1,
      mass: 0.4,
      tension: 300,
      friction: 30,
    },
    onRest: () => {
      if (unmountedRef.current) return
      setActive(props.visible)
      if (props.visible) {
        props.afterShow?.()
      } else {
        props.afterClose?.()
      }
    },
  })

  const maskVisible = useInnerVisible(active && props.visible)

  const node = withStopPropagation(
    props.stopPropagation,
    withNativeProps(
      props,
      <div
        className={classPrefix}
        onClick={props.onClick}
        style={{ display: active ? undefined : 'none' }}
      >
        {props.mask && (
          <Mask
            visible={maskVisible}
            forceRender={props.forceRender}
            destroyOnClose={props.destroyOnClose}
            onMaskClick={e => {
              props.onMaskClick?.(e)
              if (props.closeOnMaskClick) {
                props.onClose?.()
              }
            }}
            className={props.maskClassName}
            style={props.maskStyle}
            disableBodyScroll={false}
            stopPropagation={props.stopPropagation}
          />
        )}
        <animated.div
          className={bodyCls}
          style={{
            ...props.bodyStyle,
            transform: percent.to(v => {
              if (props.position === 'bottom') {
                return `translate(0, ${v}%)`
              }
              if (props.position === 'top') {
                return `translate(0, -${v}%)`
              }
              if (props.position === 'left') {
                return `translate(-${v}%, 0)`
              }
              if (props.position === 'right') {
                return `translate(${v}%, 0)`
              }
              return 'none'
            }),
          }}
          ref={ref}
        >
          {props.showCloseButton && (
            <a
              className={classNames(
                `${classPrefix}-close-icon`,
                'adm-plain-anchor'
              )}
              onClick={() => {
                props.onClose?.()
              }}
            >
              <CloseOutline />
            </a>
          )}
          {props.children}
        </animated.div>
      </div>
    )
  )

  return (
    <ShouldRender
      active={active}
      forceRender={props.forceRender}
      destroyOnClose={props.destroyOnClose}
    >
      {renderToContainer(props.getContainer, node)}
    </ShouldRender>
  )
}

import React, { FC, PropsWithChildren, useRef, useState } from 'react'
import { renderToContainer } from '../../utils/render-to-container'
import Mask from '../mask'
import { withStopPropagation } from '../../utils/with-stop-propagation'
import { mergeProps } from '../../utils/with-default-props'
import { useIsomorphicLayoutEffect, useUnmountedRef } from 'ahooks'
import { animated, useSpring } from '@react-spring/web'
import { useInnerVisible } from '../../utils/use-inner-visible'
import classNames from 'classnames'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { ShouldRender } from '../../utils/should-render'
import { useLockScroll } from '../../utils/use-lock-scroll'
import { CloseOutline } from 'antd-mobile-icons'
import {
  defaultPopupBaseProps,
  PopupBaseProps,
} from '../popup/popup-base-props'

export type CenterPopupProps = PopupBaseProps &
  PropsWithChildren<{
    // These props currently are only used internally. They are not exported to users:
    role?: string
  }> &
  NativeProps<
    | '--background-color'
    | '--border-radius'
    | '--max-width'
    | '--min-width'
    | '--z-index'
  >

const defaultProps = {
  ...defaultPopupBaseProps,
  getContainer: null,
}

export const CenterPopup: FC<CenterPopupProps> = p => {
  const props = mergeProps(defaultProps, p)

  const unmountedRef = useUnmountedRef()
  const style = useSpring({
    scale: props.visible ? 1 : 0.8,
    opacity: props.visible ? 1 : 0,
    config: {
      mass: 1.2,
      tension: 200,
      friction: 25,
      clamp: true,
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

  const [active, setActive] = useState(props.visible)
  useIsomorphicLayoutEffect(() => {
    if (props.visible) {
      setActive(true)
    }
  }, [props.visible])

  const ref = useRef<HTMLDivElement>(null)
  useLockScroll(ref, props.disableBodyScroll && active)

  const maskVisible = useInnerVisible(active && props.visible)

  const body = (
    <div
      className={classNames('adm-center-popup-body', props.bodyClassName)}
      style={props.bodyStyle}
    >
      {props.children}
    </div>
  )

  const node = withStopPropagation(
    props.stopPropagation,
    withNativeProps(
      props,
      <div
        className='adm-center-popup'
        style={{
          display: active ? undefined : 'none',
          pointerEvents: active ? undefined : 'none',
        }}
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
            style={props.maskStyle}
            className={classNames('adm-center-popup-mask', props.maskClassName)}
            disableBodyScroll={false}
            stopPropagation={props.stopPropagation}
          />
        )}
        <div
          className='adm-center-popup-wrap'
          role={props.role}
          aria-label={props['aria-label']}
        >
          <animated.div style={style} ref={ref}>
            {props.showCloseButton && (
              <a
                className={classNames(
                  'adm-center-popup-close',
                  'adm-plain-anchor'
                )}
                onClick={() => {
                  props.onClose?.()
                }}
              >
                <CloseOutline />
              </a>
            )}
            {body}
          </animated.div>
        </div>
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

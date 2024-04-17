import { animated, useSpring } from '@react-spring/web'
import { useIsomorphicLayoutEffect, useUnmountedRef } from 'ahooks'
import classNames from 'classnames'
import type { FC, PropsWithChildren } from 'react'
import React, { useRef, useState } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { renderToContainer } from '../../utils/render-to-container'
import { ShouldRender } from '../../utils/should-render'
import { useInnerVisible } from '../../utils/use-inner-visible'
import { useLockScroll } from '../../utils/use-lock-scroll'
import { mergeProps } from '../../utils/with-default-props'
import { withStopPropagation } from '../../utils/with-stop-propagation'
import { useConfig } from '../config-provider'
import Mask from '../mask'
import {
  PopupBaseProps,
  defaultPopupBaseProps,
} from '../popup/popup-base-props'

const classPrefix = 'adm-center-popup'

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

export const CenterPopup: FC<CenterPopupProps> = props => {
  const { popup: componentConfig = {} } = useConfig()
  const mergedProps = mergeProps(defaultProps, componentConfig, props)

  const unmountedRef = useUnmountedRef()
  const style = useSpring({
    scale: mergedProps.visible ? 1 : 0.8,
    opacity: mergedProps.visible ? 1 : 0,
    config: {
      mass: 1.2,
      tension: 200,
      friction: 25,
      clamp: true,
    },
    onRest: () => {
      if (unmountedRef.current) return
      setActive(mergedProps.visible)
      if (mergedProps.visible) {
        mergedProps.afterShow?.()
      } else {
        mergedProps.afterClose?.()
      }
    },
  })

  const [active, setActive] = useState(mergedProps.visible)
  useIsomorphicLayoutEffect(() => {
    if (mergedProps.visible) {
      setActive(true)
    }
  }, [mergedProps.visible])

  const ref = useRef<HTMLDivElement>(null)
  useLockScroll(ref, mergedProps.disableBodyScroll && active)

  const maskVisible = useInnerVisible(active && mergedProps.visible)

  const body = (
    <div
      className={classNames(`${classPrefix}-body`, mergedProps.bodyClassName)}
      style={mergedProps.bodyStyle}
    >
      {mergedProps.children}
    </div>
  )

  const node = withStopPropagation(
    mergedProps.stopPropagation,
    withNativeProps(
      mergedProps,
      <div
        className={classPrefix}
        style={{
          display: active ? undefined : 'none',
          pointerEvents: active ? undefined : 'none',
        }}
      >
        {mergedProps.mask && (
          <Mask
            visible={maskVisible}
            forceRender={mergedProps.forceRender}
            destroyOnClose={mergedProps.destroyOnClose}
            onMaskClick={e => {
              mergedProps.onMaskClick?.(e)
              if (mergedProps.closeOnMaskClick) {
                mergedProps.onClose?.()
              }
            }}
            style={mergedProps.maskStyle}
            className={classNames(
              `${classPrefix}-mask`,
              mergedProps.maskClassName
            )}
            disableBodyScroll={false}
            stopPropagation={mergedProps.stopPropagation}
          />
        )}
        <div
          className={`${classPrefix}-wrap`}
          role={mergedProps.role}
          aria-label={mergedProps['aria-label']}
        >
          <animated.div
            style={{
              ...style,
              pointerEvents: style.opacity.to(v =>
                v === 1 ? 'unset' : 'none'
              ),
            }}
            ref={ref}
          >
            {mergedProps.showCloseButton && (
              <a
                className={classNames(
                  `${classPrefix}-close`,
                  'adm-plain-anchor'
                )}
                onClick={() => {
                  mergedProps.onClose?.()
                }}
              >
                {mergedProps.closeIcon}
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
      forceRender={mergedProps.forceRender}
      destroyOnClose={mergedProps.destroyOnClose}
    >
      {renderToContainer(mergedProps.getContainer, node)}
    </ShouldRender>
  )
}

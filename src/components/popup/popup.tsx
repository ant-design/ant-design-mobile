import { animated, useSpring } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
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
import { PopupBaseProps, defaultPopupBaseProps } from './popup-base-props'

const classPrefix = `adm-popup`

export type PopupProps = PopupBaseProps &
  PropsWithChildren<{
    position?: 'bottom' | 'top' | 'left' | 'right'
    closeOnSwipe?: boolean
  }> &
  NativeProps<'--z-index'>

const defaultProps = {
  ...defaultPopupBaseProps,
  closeOnSwipe: false,
  position: 'bottom',
}

export const Popup: FC<PopupProps> = props => {
  const { locale, popup: componentConfig = {} } = useConfig()
  const mergedProps = mergeProps(defaultProps, componentConfig, props)

  const bodyCls = classNames(
    `${classPrefix}-body`,
    mergedProps.bodyClassName,
    `${classPrefix}-body-position-${mergedProps.position}`
  )

  const [active, setActive] = useState(mergedProps.visible)
  const ref = useRef<HTMLDivElement>(null)
  useLockScroll(ref, mergedProps.disableBodyScroll && active ? 'strict' : false)

  useIsomorphicLayoutEffect(() => {
    if (mergedProps.visible) {
      setActive(true)
    }
  }, [mergedProps.visible])

  const unmountedRef = useUnmountedRef()
  const { percent } = useSpring({
    percent: mergedProps.visible ? 0 : 100,
    config: {
      precision: 0.1,
      mass: 0.4,
      tension: 300,
      friction: 30,
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

  const bind = useDrag(
    ({ swipe: [, swipeY] }) => {
      if (!mergedProps.closeOnSwipe) return
      if (
        (swipeY === 1 && mergedProps.position === 'bottom') ||
        (swipeY === -1 && mergedProps.position === 'top')
      ) {
        mergedProps.onClose?.()
      }
    },
    {
      axis: 'y',
      enabled: ['top', 'bottom'].includes(mergedProps.position),
    }
  )

  const maskVisible = useInnerVisible(active && mergedProps.visible)

  const node = withStopPropagation(
    mergedProps.stopPropagation,
    withNativeProps(
      mergedProps,
      <div
        className={classPrefix}
        onClick={mergedProps.onClick}
        style={{
          display: active ? undefined : 'none',
          touchAction: ['top', 'bottom'].includes(mergedProps.position)
            ? 'none'
            : 'auto',
        }}
        {...bind()}
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
            className={mergedProps.maskClassName}
            style={mergedProps.maskStyle}
            disableBodyScroll={false}
            stopPropagation={mergedProps.stopPropagation}
          />
        )}
        <animated.div
          className={bodyCls}
          style={{
            ...mergedProps.bodyStyle,
            pointerEvents: percent.to(v => (v === 0 ? 'unset' : 'none')),
            transform: percent.to(v => {
              if (mergedProps.position === 'bottom') {
                return `translate(0, ${v}%)`
              }
              if (mergedProps.position === 'top') {
                return `translate(0, -${v}%)`
              }
              if (mergedProps.position === 'left') {
                return `translate(-${v}%, 0)`
              }
              if (mergedProps.position === 'right') {
                return `translate(${v}%, 0)`
              }
              return 'none'
            }),
          }}
          ref={ref}
        >
          {mergedProps.showCloseButton && (
            <a
              className={classNames(
                `${classPrefix}-close-icon`,
                'adm-plain-anchor'
              )}
              onClick={() => {
                mergedProps.onClose?.()
              }}
              role='button'
              aria-label={locale.common.close}
            >
              {mergedProps.closeIcon}
            </a>
          )}
          {mergedProps.children}
        </animated.div>
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

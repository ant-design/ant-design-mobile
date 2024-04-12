import classNames from 'classnames'
import React, { useState, useRef } from 'react'
import type { FC, PropsWithChildren } from 'react'
import { useIsomorphicLayoutEffect, useUnmountedRef } from 'ahooks'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import Mask from '../mask'
import { useLockScroll } from '../../utils/use-lock-scroll'
import { renderToContainer } from '../../utils/render-to-container'
import { useSpring, animated } from '@react-spring/web'
import { withStopPropagation } from '../../utils/with-stop-propagation'
import { ShouldRender } from '../../utils/should-render'
import { defaultPopupBaseProps, PopupBaseProps } from './popup-base-props'
import { useInnerVisible } from '../../utils/use-inner-visible'
import { useConfig } from '../config-provider'
import { useDrag } from '@use-gesture/react'

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

export const Popup: FC<PopupProps> = p => {
  const { locale, popup: componentConfig = {} } = useConfig()
  const props = mergeProps(defaultProps, componentConfig, p)

  const bodyCls = classNames(
    `${classPrefix}-body`,
    props.bodyClassName,
    `${classPrefix}-body-position-${props.position}`
  )

  const [active, setActive] = useState(props.visible)
  const ref = useRef<HTMLDivElement>(null)
  useLockScroll(ref, props.disableBodyScroll && active ? 'strict' : false)

  useIsomorphicLayoutEffect(() => {
    if (props.visible) {
      setActive(true)
    }
  }, [props.visible])

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

  const bind = useDrag(
    ({ swipe: [, swipeY] }) => {
      if (!props.closeOnSwipe) return
      if (
        (swipeY === 1 && props.position === 'bottom') ||
        (swipeY === -1 && props.position === 'top')
      ) {
        props.onClose?.()
      }
    },
    {
      axis: 'y',
      enabled: ['top', 'bottom'].includes(props.position),
    }
  )

  const maskVisible = useInnerVisible(active && props.visible)

  const node = withStopPropagation(
    props.stopPropagation,
    withNativeProps(
      props,
      <div
        className={classPrefix}
        onClick={props.onClick}
        style={{
          display: active ? undefined : 'none',
          touchAction: ['top', 'bottom'].includes(props.position)
            ? 'none'
            : 'auto',
        }}
        {...bind()}
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
            pointerEvents: percent.to(v => (v === 0 ? 'unset' : 'none')),
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
              role='button'
              aria-label={locale.common.close}
            >
              {props.closeIcon}
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

import classNames from 'classnames'
import React, {
  useState,
  useRef,
  FC,
  PropsWithChildren,
  useEffect,
} from 'react'
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
import { useConfig } from '../config-provider'
import { useDrag } from '@use-gesture/react'

const classPrefix = `adm-popup`

export type PopupProps = PopupBaseProps &
  PropsWithChildren<{
    position?: 'bottom' | 'top' | 'left' | 'right'
    closeWhenSwipe?: boolean
  }> &
  NativeProps<'--z-index'>

const defaultProps = {
  ...defaultPopupBaseProps,
  position: 'bottom',
  closeWhenSwipe: false,
}

export const Popup: FC<PopupProps> = p => {
  const props = mergeProps(defaultProps, p)
  const { locale } = useConfig()

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
  useLockScroll(ref, props.disableBodyScroll && active ? 'strict' : false)

  const unmountedRef = useUnmountedRef()
  const [{ percent }, api] = useSpring(
    () => ({
      percent: 0,
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
    }),
    [props.visible, props.afterShow, props.afterClose]
  )

  const bind = useDrag(
    ({ swipe: [swipeX, swipeY] }) => {
      if (!props.closeWhenSwipe) return
      if (
        (swipeY === 1 && props.position === 'bottom') ||
        (swipeY === -1 && props.position === 'top') ||
        (swipeX === -1 && props.position === 'left') ||
        (swipeX === 1 && props.position === 'right')
      ) {
        props.onClose?.()
      }
    },
    {
      axis: ['bottom', 'top'].includes(props.position) ? 'y' : 'x',
      swipe: {
        velocity: [0.01, 0.01],
      },
    }
  )

  useEffect(() => {
    if (props.visible) {
      api.start({ percent: 0 })
    } else {
      api.start({ percent: 100 })
    }
  }, [props.visible])

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
          {...bind()}
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

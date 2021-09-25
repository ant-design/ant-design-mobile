import classNames from 'classnames'
import React, { useState, useRef, FC } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { useInitialized } from '../../utils/use-initialized'
import { mergeProps } from '../../utils/with-default-props'
import Mask from '../mask'
import { useLockScroll } from '../../utils/use-lock-scroll'
import {
  GetContainer,
  renderToContainer,
} from '../../utils/render-to-container'
import { useSpring, animated } from '@react-spring/web'

const classPrefix = `adm-popup`

export type PopupProps = {
  visible?: boolean
  mask?: boolean
  onMaskClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  destroyOnClose?: boolean
  forceRender?: boolean
  getContainer?: GetContainer
  afterShow?: () => void
  afterClose?: () => void
  position?: 'bottom' | 'top' | 'left' | 'right'
  bodyClassName?: string
  bodyStyle?: React.CSSProperties
  maskClassName?: string
  maskStyle?: React.CSSProperties
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
} & NativeProps

const defaultProps = {
  position: 'bottom',
  visible: false,
  getContainer: () => document.body,
  mask: true,
}

export const Popup: FC<PopupProps> = p => {
  const props = mergeProps(defaultProps, p)

  const bodyCls = classNames(
    `${classPrefix}-body`,
    props.bodyClassName,
    {
      [`${classPrefix}-body-hidden`]: !props.visible,
    },
    `${classPrefix}-body-position-${props.position}`
  )

  const initialized = useInitialized(props.visible || props.forceRender)

  const ref = useRef<HTMLDivElement>(null)

  useLockScroll(ref, props.visible)

  const [animating, setAnimating] = useState(false)
  const exited = !animating && !props.visible

  const { percent } = useSpring({
    percent: props.visible ? 0 : 100,
    config: {
      precision: 0.1,
      mass: 0.4,
      tension: 300,
      friction: 30,
    },
    onStart: () => {
      setAnimating(true)
    },
    onRest: () => {
      setAnimating(false)
      if (props.visible) {
        props.afterShow?.()
      } else {
        props.afterClose?.()
      }
    },
  })

  const node = withNativeProps(
    props,
    <div onClick={props.onClick} style={{ display: exited ? 'none' : 'unset' }}>
      {props.mask && (
        <Mask
          visible={props.visible}
          onMaskClick={props.onMaskClick}
          className={props.maskClassName}
          style={props.maskStyle}
          disableBodyScroll={false}
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
        {initialized && !(props.destroyOnClose && exited) && props.children}
      </animated.div>
    </div>
  )

  return renderToContainer(props.getContainer, node)
}

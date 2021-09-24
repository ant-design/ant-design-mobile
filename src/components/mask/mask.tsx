import { NativeProps, withNativeProps } from '../../utils/native-props'
import { useInitialized } from '../../utils/use-initialized'
import React, { useEffect, useMemo, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useLockScroll } from '../../utils/use-lock-scroll'
import { useSpring, animated } from '@react-spring/web'

const classPrefix = `adm-mask`

export type MaskProps = {
  visible?: boolean
  onMaskClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  destroyOnClose?: boolean
  forceRender?: boolean
  disableBodyScroll?: boolean
  opacity?: 'default' | 'dark' | number
  getContainer?: HTMLElement | (() => HTMLElement) | undefined
  afterClose?: () => void
} & NativeProps

export const Mask: React.FC<MaskProps> = props => {
  const initialized = useInitialized(props.visible || props.forceRender)

  const ref = useRef<HTMLDivElement>(null)

  useLockScroll(ref, !!(props.visible && props.disableBodyScroll))

  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (e.currentTarget === e.target) {
      props.onMaskClick?.(e)
    }
  }

  const background = useMemo(() => {
    const opacity =
      props.opacity === 'default'
        ? 0.55
        : props.opacity === 'dark'
        ? 0.75
        : props.opacity
    return `rgba(0, 0, 0, ${opacity})`
  }, [props.opacity])

  const [styles, api] = useSpring(() => ({
    from: { opacity: 0 },
  }))

  useEffect(() => {
    api.start({
      opacity: props.visible ? 1 : 0,
    })
  }, [props.visible])

  const node = withNativeProps(
    props,
    <animated.div
      className={classPrefix}
      onClick={handleClick}
      ref={ref}
      style={{
        ...props.style,
        background,
        opacity: styles.opacity,
        display: styles.opacity.to(v => (v === 0 ? 'none' : 'unset')),
      }}
    >
      {initialized && props.children}
    </animated.div>
  )

  if (props.getContainer) {
    const container =
      typeof props.getContainer === 'function'
        ? props.getContainer()
        : props.getContainer
    return createPortal(node, container)
  }
  return node
}

Mask.defaultProps = {
  visible: true,
  destroyOnClose: false,
  forceRender: false,
  opacity: 'default',
  disableBodyScroll: true,
}

import { NativeProps, withNativeProps } from '../../utils/native-props'
import { useInitialized } from '../../utils/use-initialized'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useLockScroll } from '../../utils/use-lock-scroll'
import { useSpring, animated } from '@react-spring/web'
import { renderToContainer } from '../../utils/render-to-container'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-mask`

export type MaskProps = {
  visible?: boolean
  onMaskClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  destroyOnClose?: boolean
  forceRender?: boolean
  disableBodyScroll?: boolean
  opacity?: 'default' | 'dark' | number
  getContainer?: HTMLElement | (() => HTMLElement) | null
  afterClose?: () => void
} & NativeProps

const defaultProps = {
  visible: true,
  destroyOnClose: false,
  forceRender: false,
  opacity: 'default',
  disableBodyScroll: true,
  getContainer: null,
}

export const Mask: React.FC<MaskProps> = p => {
  const props = mergeProps(defaultProps, p)
  const initialized = useInitialized(props.visible || props.forceRender)

  const ref = useRef<HTMLDivElement>(null)

  useLockScroll(ref, props.visible && props.disableBodyScroll)

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

  const [animating, setAnimating] = useState(false)

  const styles = useSpring({
    opacity: props.visible ? 1 : 0,
    onStart: () => {
      setAnimating(true)
    },
    onRest: () => {
      setAnimating(false)
    },
  })

  const exited = !animating && !props.visible

  useEffect(() => {
    if (exited) {
      props.afterClose?.()
    }
  }, [exited])

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
        display: exited ? 'none' : 'unset',
      }}
    >
      {initialized && !(props.destroyOnClose && exited) && props.children}
    </animated.div>
  )

  return renderToContainer(props.getContainer, node)
}

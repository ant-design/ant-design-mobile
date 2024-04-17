import { animated, useSpring } from '@react-spring/web'
import { useUnmountedRef } from 'ahooks'
import type { FC, ReactNode } from 'react'
import React, { useMemo, useRef, useState } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import {
  GetContainer,
  renderToContainer,
} from '../../utils/render-to-container'
import { ShouldRender } from '../../utils/should-render'
import { useLockScroll } from '../../utils/use-lock-scroll'
import { mergeProps } from '../../utils/with-default-props'
import {
  PropagationEvent,
  withStopPropagation,
} from '../../utils/with-stop-propagation'
import { useConfig } from '../config-provider'

const classPrefix = `adm-mask`

const opacityRecord = {
  default: 0.55,
  thin: 0.35,
  thick: 0.75,
}
const colorRecord: Record<string, string> = {
  black: '0, 0, 0',
  white: '255, 255, 255',
}

export type MaskProps = {
  visible?: boolean
  onMaskClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  destroyOnClose?: boolean
  forceRender?: boolean
  disableBodyScroll?: boolean
  color?: 'white' | 'black' | (string & {})
  opacity?: 'default' | 'thin' | 'thick' | number
  getContainer?: GetContainer
  afterShow?: () => void
  afterClose?: () => void
  stopPropagation?: PropagationEvent[]
  children?: ReactNode
} & NativeProps<'--z-index'>

const defaultProps = {
  visible: true,
  destroyOnClose: false,
  forceRender: false,
  color: 'black',
  opacity: 'default',
  disableBodyScroll: true,
  getContainer: null,
  stopPropagation: ['click'],
}

export const Mask: FC<MaskProps> = props => {
  const mergedProps = mergeProps(defaultProps, props)
  const { locale } = useConfig()

  const ref = useRef<HTMLDivElement>(null)

  useLockScroll(ref, mergedProps.visible && mergedProps.disableBodyScroll)

  const background = useMemo(() => {
    const opacity = opacityRecord[mergedProps.opacity] ?? mergedProps.opacity
    const rgb = colorRecord[mergedProps.color]
    return rgb ? `rgba(${rgb}, ${opacity})` : mergedProps.color
  }, [mergedProps.color, mergedProps.opacity])

  const [active, setActive] = useState(mergedProps.visible)

  const unmountedRef = useUnmountedRef()
  const { opacity } = useSpring({
    opacity: mergedProps.visible ? 1 : 0,
    config: {
      precision: 0.01,
      mass: 1,
      tension: 250,
      friction: 30,
      clamp: true,
    },
    onStart: () => {
      setActive(true)
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

  const node = withStopPropagation(
    mergedProps.stopPropagation,
    withNativeProps(
      mergedProps,
      <animated.div
        className={classPrefix}
        ref={ref}
        aria-hidden
        style={{
          ...mergedProps.style,
          background,
          opacity,
          display: active ? undefined : 'none',
        }}
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          if (e.target === e.currentTarget) {
            mergedProps.onMaskClick?.(e)
          }
        }}
      >
        {mergedProps.onMaskClick && (
          <div
            className={`${classPrefix}-aria-button`}
            role='button'
            aria-label={locale.Mask.name}
            onClick={mergedProps.onMaskClick}
          />
        )}
        <div className={`${classPrefix}-content`}>{mergedProps.children}</div>
      </animated.div>
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

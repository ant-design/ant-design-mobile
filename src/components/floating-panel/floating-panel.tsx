import { animated, useSpring } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import { useMemoizedFn } from 'ahooks'
import classNames from 'classnames'
import type { ReactNode } from 'react'
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { nearest } from '../../utils/nearest'
import { supportsPassive } from '../../utils/supports-passive'
import { useLockScroll } from '../../utils/use-lock-scroll'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = 'adm-floating-panel'

export type FloatingPanelRef = {
  setHeight: (
    height: number,
    options?: {
      immediate?: boolean
    }
  ) => void
}

export type FloatingPanelProps = {
  anchors: number[]
  children: ReactNode
  onHeightChange?: (height: number, animating: boolean) => void
  handleDraggingOfContent?: boolean
  placement?: 'bottom' | 'top'
} & NativeProps<'--border-radius' | '--z-index' | '--header-height'>

const defaultProps = {
  handleDraggingOfContent: true,
}

export const FloatingPanel = forwardRef<FloatingPanelRef, FloatingPanelProps>(
  (p, ref) => {
    const props = mergeProps(defaultProps, p)
    const { anchors, placement = 'bottom' } = props
    const maxHeight = anchors[anchors.length - 1] ?? window.innerHeight

    const isBottomPlacement = placement !== 'top'
    const possibles = isBottomPlacement ? anchors.map(x => -x) : anchors

    const elementRef = useRef<HTMLDivElement>(null)
    const headerRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const [pulling, setPulling] = useState(false)
    const pullingRef = useRef(false)

    const bounds = {
      top: Math.min(...possibles),
      bottom: Math.max(...possibles),
    }

    const onHeightChange = useMemoizedFn(props.onHeightChange ?? (() => {}))

    const [{ y }, api] = useSpring(() => ({
      y: isBottomPlacement ? bounds.bottom : bounds.top,
      config: { tension: 300 },
      onChange: result => {
        onHeightChange(-result.value.y, y.isAnimating)
      },
    }))

    useDrag(
      state => {
        const [, offsetY] = state.offset
        if (state.first) {
          const target = state.event.target as Element
          const header = headerRef.current
          if (header === target || header?.contains(target)) {
            pullingRef.current = true
          } else {
            if (!props.handleDraggingOfContent) return
            const reachedTop = y.goal <= bounds.top
            const content = contentRef.current
            if (!content) return
            if (reachedTop) {
              if (content.scrollTop <= 0 && state.direction[1] > 0) {
                pullingRef.current = true
              }
            } else {
              pullingRef.current = true
            }
          }
        }
        setPulling(pullingRef.current)
        if (!pullingRef.current) return
        const { event } = state
        if (event.cancelable && supportsPassive) {
          event.preventDefault()
        }
        event.stopPropagation()
        let nextY = offsetY
        if (state.last) {
          pullingRef.current = false
          setPulling(false)
          nextY = nearest(possibles, offsetY)
        }
        api.start({
          y: nextY,
        })
      },
      {
        axis: 'y',
        bounds,
        rubberband: true,
        from: () => [0, y.get()],
        pointer: { touch: true },
        target: elementRef,
        eventOptions: supportsPassive ? { passive: false } : undefined,
      }
    )

    useImperativeHandle(
      ref,
      () => ({
        setHeight: (
          height: number,
          options?: {
            immediate?: boolean
          }
        ) => {
          api.start({
            y: -height,
            immediate: options?.immediate,
          })
        },
      }),
      [api]
    )

    useLockScroll(elementRef, true)

    const HeaderNode: ReactNode = (
      <div className={`${classPrefix}-header`} ref={headerRef}>
        <div className={`${classPrefix}-bar`} />
      </div>
    )

    return withNativeProps(
      props,
      <animated.div
        ref={elementRef}
        className={classNames(classPrefix, `${classPrefix}-${placement}`)}
        style={{
          height: Math.round(maxHeight),
          translateY: y.to(y => {
            if (isBottomPlacement) {
              return `calc(100% + (${Math.round(y)}px))`
            }
            if (placement === 'top') {
              return `calc(-100% + (${Math.round(y)}px))`
            }
            return y
          }),
        }}
      >
        <div
          className={`${classPrefix}-mask`}
          style={{
            display: pulling ? 'block' : 'none',
          }}
        />
        {isBottomPlacement && HeaderNode}
        <div className={`${classPrefix}-content`} ref={contentRef}>
          {props.children}
        </div>
        {placement === 'top' && HeaderNode}
      </animated.div>
    )
  }
)

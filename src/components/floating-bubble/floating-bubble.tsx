import { animated, to, useSpring } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import type { FC, ReactNode } from 'react'
import React, { useEffect, useRef, useState } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-floating-bubble`

type Offset = { x: number; y: number }

export type FloatingBubbleProps = {
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  axis?: 'x' | 'y' | 'xy' | 'lock'
  magnetic?: 'x' | 'y'
  children?: ReactNode
  offset?: Offset
  defaultOffset?: Offset
  onOffsetChange?: (offset: Offset) => void
} & NativeProps<
  | '--initial-position-left'
  | '--initial-position-right'
  | '--initial-position-top'
  | '--initial-position-bottom'
  | '--z-index'
  | '--edge-distance'
  | '--size'
  | '--border-radius'
  | '--background'
>

const defaultProps = {
  axis: 'y',
  defaultOffset: { x: 0, y: 0 },
}

export const FloatingBubble: FC<FloatingBubbleProps> = props => {
  const mergedProps = mergeProps(defaultProps, props)

  const boundaryRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)

  const [innerValue, setInnerValue] = useState<Offset>(
    mergedProps.offset === undefined
      ? mergedProps.defaultOffset
      : mergedProps.offset
  )

  useEffect(() => {
    if (mergedProps.offset === undefined) return
    api.start({ x: mergedProps.offset.x, y: mergedProps.offset.y })
  }, [mergedProps.offset])

  /**
   * memoize the `to` function
   * inside a component that renders frequently
   * to prevent an unintended restart
   */
  const [{ x, y, opacity }, api] = useSpring(() => ({
    x: innerValue.x,
    y: innerValue.y,
    opacity: 1,
  }))

  const bind = useDrag(
    state => {
      let nextX = state.offset[0]
      let nextY = state.offset[1]

      if (state.last && mergedProps.magnetic) {
        const boundary = boundaryRef.current
        const button = buttonRef.current
        if (!boundary || !button) return
        const boundaryRect = boundary.getBoundingClientRect()
        const buttonRect = button.getBoundingClientRect()
        if (mergedProps.magnetic === 'x') {
          const compensation = x.goal - x.get()
          const leftDistance =
            buttonRect.left + compensation - boundaryRect.left
          const rightDistance =
            boundaryRect.right - (buttonRect.right + compensation)
          if (rightDistance <= leftDistance) {
            nextX += rightDistance
          } else {
            nextX -= leftDistance
          }
        } else if (mergedProps.magnetic === 'y') {
          const compensation = y.goal - y.get()
          const topDistance = buttonRect.top + compensation - boundaryRect.top
          const bottomDistance =
            boundaryRect.bottom - (buttonRect.bottom + compensation)
          if (bottomDistance <= topDistance) {
            nextY += bottomDistance
          } else {
            nextY -= topDistance
          }
        }
      }

      const nextOffest = { x: nextX, y: nextY }
      if (mergedProps.offset === undefined) {
        // Uncontrolled mode
        api.start(nextOffest)
      } else {
        setInnerValue(nextOffest)
      }
      mergedProps.onOffsetChange?.(nextOffest)

      // active status
      api.start({
        opacity: state.active ? 0.8 : 1,
      })
    },
    {
      axis: mergedProps.axis === 'xy' ? undefined : mergedProps.axis,
      pointer: {
        touch: true,
      },
      // the component won't trigger drag logic if the user just clicked on the component.
      filterTaps: true,
      // set constraints to the user gesture
      bounds: boundaryRef,
      from: () => [x.get(), y.get()],
    }
  )

  return withNativeProps(
    mergedProps,
    <div className={classPrefix}>
      <div className={`${classPrefix}-boundary-outer`}>
        <div className={`${classPrefix}-boundary`} ref={boundaryRef} />
      </div>
      <animated.div
        {...bind()}
        style={{
          opacity,
          transform: to([x, y], (x, y) => `translate(${x}px, ${y}px)`),
        }}
        onClick={mergedProps.onClick}
        className={`${classPrefix}-button`}
        ref={buttonRef}
      >
        {mergedProps.children}
      </animated.div>
    </div>
  )
}

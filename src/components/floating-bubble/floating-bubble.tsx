import React, { FC, useRef } from 'react'
import { useSpring, animated, to } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import { mergeProps } from '../../utils/with-default-props'
import { NativeProps, withNativeProps } from '../../utils/native-props'

const classPrefix = `adm-floating-bubble`

export type FloatingBubbleProps = {
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  axis?: 'x' | 'y' | 'xy' | 'lock'
  magnetic?: 'x' | 'y'
  children?: React.ReactNode
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
}

export const FloatingBubble: FC<FloatingBubbleProps> = p => {
  const props = mergeProps(defaultProps, p)

  const boundaryRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)

  /**
   * memoize the `to` function
   * inside a component that renders frequently
   * to prevent an unintended restart
   */
  const [{ x, y, opacity }, api] = useSpring(() => ({
    x: 0,
    y: 0,
    opacity: 1,
  }))
  const bind = useDrag(
    state => {
      let nextX = state.offset[0]
      let nextY = state.offset[1]
      if (state.last && props.magnetic) {
        const boundary = boundaryRef.current
        const button = buttonRef.current
        if (!boundary || !button) return
        const boundaryRect = boundary.getBoundingClientRect()
        const buttonRect = button.getBoundingClientRect()
        if (props.magnetic === 'x') {
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
        } else if (props.magnetic === 'y') {
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
      api.start({
        x: nextX,
        y: nextY,
      })
      // active status
      api.start({
        opacity: state.active ? 0.8 : 1,
      })
    },
    {
      axis: props.axis === 'xy' ? undefined : props.axis,
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
    props,
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
        onClick={props.onClick}
        className={`${classPrefix}-button`}
        ref={buttonRef}
      >
        {props.children}
      </animated.div>
    </div>
  )
}

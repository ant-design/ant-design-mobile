import React, { FC, useRef } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import { mergeProps } from '../../utils/with-default-props'
import { NativeProps, withNativeProps } from '../../utils/native-props'

const classPrefix = `adm-floating-bubble`

export type FloatingBubbleProps = {
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
} & NativeProps<
  | '--initial-position-left'
  | '--initial-position-right'
  | '--initial-position-top'
  | '--initial-position-bottom'
  | '--z-index'
  | '--edge-distance'
  | '--size'
  | '--border-radius'
>

const defaultProps = {}

export const FloatingBubble: FC<FloatingBubbleProps> = p => {
  const props = mergeProps(defaultProps, p)

  const boundaryRef = useRef<HTMLDivElement>(null)

  /**
   * memoize the `to` function
   * inside a component that renders frequently
   * to prevent an unintended restart
   */
  const [animationStyles, animation] = useSpring(() => ({
    y: 0,
    scale: 1,
    opacity: 1,
  }))
  const bind = useDrag(
    state => {
      if (state.down) {
        // be movable in y axis
        animation.start({
          y: state.offset[1],
        })
      }
      // active status
      animation.start({
        scale: state.active ? 1.1 : 1,
        opacity: state.active ? 0.8 : 1,
      })
    },
    {
      // only trigger if a movement is detected on the specified axis.
      axis: 'y',
      pointer: {
        touch: true,
      },
      // the component won't trigger drag logic if the user just clicked on the component.
      filterTaps: true,
      // set constraints to the user gesture
      bounds: boundaryRef,
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
        style={{ ...animationStyles }}
        onClick={props.onClick}
        className={`${classPrefix}-button`}
      >
        {props.children}
      </animated.div>
    </div>
  )
}

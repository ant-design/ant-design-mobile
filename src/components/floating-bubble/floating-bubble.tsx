import React, { FC } from 'react'
import classNames from 'classnames'
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import { mergeProps } from '../../utils/with-default-props'
import { NativeProps, withNativeProps } from '../../utils/native-props'

const classPrefix = `adm-floating-bubble`

export type FloatingBubbleProps = {
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  bounds?:
    | HTMLElement
    | { top: number; left: number; right: number; bottom: number }
} & NativeProps<
  | '--initial-position-left'
  | '--initial-position-right'
  | '--initial-position-top'
  | '--initial-position-bottom'
>

const defaultProps = {}

export const FloatingBubble: FC<FloatingBubbleProps> = p => {
  const props = mergeProps(defaultProps, p)

  /**
   * memoize the `to` function
   * inside a component that renders frequently
   * to prevent an unintended restart
   */
  const [animationStyles, animation] = useSpring(() => ({
    translateY: 0,
    scale: 1,
    opacity: 1,
  }))
  const bind = useDrag(
    state => {
      if (state.down) {
        // be movable in y axis
        animation.start({
          translateY: state.offset[1],
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
      // the drag will be triggered after the duration of the delay (in ms)
      // and will prevent window scrolling
      preventScroll: 20,
      // the component won't trigger drag logic if the user just clicked on the component.
      filterTaps: true,
      // set constraints to the user gesture
      bounds: props.bounds,
    }
  )

  return withNativeProps(
    props,
    <animated.div
      {...bind()}
      style={{ ...animationStyles }}
      onClick={props.onClick}
      className={classNames(classPrefix)}
    >
      {props.children}
    </animated.div>
  )
}

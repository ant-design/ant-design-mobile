import React, { FC, ReactNode, RefObject, useRef } from 'react'
import { mergeProps } from '../../utils/with-default-props'
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'
import Button from '../button'
import { nearest } from '../../utils/nearest'
import { NativeProps, withNativeProps } from '../../utils/native-props'

type ActionColor =
  | 'light'
  | 'weak'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'

export type Action = {
  key: string | number
  text: ReactNode
  color?: ActionColor | string
  onClick?: () => void
}

export type SwipeActionProps = {
  rightActions?: Action[]
  leftActions?: Action[]
  onAction?: (action: Action) => void
  autoClose?: boolean
} & NativeProps<'--background'>

const defaultProps = {
  rightActions: [] as Action[],
  leftActions: [] as Action[],
  autoClose: true,
}

export const SwipeAction: FC<SwipeActionProps> = p => {
  const props = mergeProps(defaultProps, p)

  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  function getWidth(ref: RefObject<HTMLDivElement>) {
    const element = ref.current
    if (!element) return 0
    return element.offsetWidth
  }
  function getLeftWidth() {
    return getWidth(leftRef)
  }
  function getRightWidth() {
    return getWidth(rightRef)
  }

  const [{ x }, api] = useSpring(
    () => ({
      x: 0,
      config: { tension: 200, friction: 30 },
    }),
    []
  )

  const bind = useDrag(
    state => {
      const [mx] = state.movement
      if (state.last) {
        const leftWidth = getLeftWidth()
        const rightWidth = getRightWidth()
        api.start({
          x: nearest([-rightWidth, 0, leftWidth], mx),
        })
      } else {
        api.start({
          x: mx,
          immediate: true,
        })
      }
    },
    {
      initial: () => [x.get(), 0],
      bounds: () => {
        const leftWidth = getLeftWidth()
        const rightWidth = getRightWidth()
        return {
          left: -rightWidth,
          right: leftWidth,
        }
      },
      rubberband: true,
      axis: 'x',
      experimental_preventWindowScrollY: true,
    }
  )

  function renderAction(action: Action) {
    const color = action.color ?? 'light'
    return (
      <Button
        key={action.key}
        className='adm-swipe-action-action-button'
        style={{
          '--background-color': colorRecord[color] ?? color,
        }}
      >
        {action.text}
      </Button>
    )
  }

  return withNativeProps(
    props,
    <div className='adm-swipe-action' {...bind()}>
      <animated.div className='adm-swipe-action-track' style={{ x }}>
        <div
          className='adm-swipe-action-actions adm-swipe-action-actions-left'
          ref={leftRef}
        >
          {props.leftActions.map(renderAction)}
        </div>
        <div className='adm-swipe-action-content'>{props.children}</div>
        <div
          className='adm-swipe-action-actions adm-swipe-action-actions-right'
          ref={rightRef}
        >
          {props.rightActions.map(renderAction)}
        </div>
      </animated.div>
    </div>
  )
}

const colorRecord: Record<string, string> = {
  light: 'var(--adm-color-light)',
  weak: 'var(--adm-color-weak)',
  primary: 'var(--adm-color-primary)',
  success: 'var(--adm-color-success)',
  warning: 'var(--adm-color-warning)',
  danger: 'var(--adm-color-danger)',
}

import { animated, useSpring } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import type { ReactNode } from 'react'
import React, {
  forwardRef,
  RefObject,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { nearest } from '../../utils/nearest'
import { mergeProps } from '../../utils/with-default-props'
import {
  PropagationEvent,
  withStopPropagation,
} from '../../utils/with-stop-propagation'
import Button from '../button'

const classPrefix = `adm-swipe-action`

type SideType = 'left' | 'right'

export type SwipeActionRef = {
  close: () => void
  show: (side?: SideType) => void
}

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
  onClick?: (e: React.MouseEvent) => void
}

export type SwipeActionProps = {
  rightActions?: Action[]
  leftActions?: Action[]
  onAction?: (action: Action, e: React.MouseEvent) => void
  closeOnTouchOutside?: boolean
  closeOnAction?: boolean
  children: ReactNode
  stopPropagation?: PropagationEvent[]
  onActionsReveal?: (side: SideType) => void
  onClose?: () => void
} & NativeProps<'--background'>

const defaultProps = {
  rightActions: [] as Action[],
  leftActions: [] as Action[],
  closeOnTouchOutside: true,
  closeOnAction: true,
  stopPropagation: [],
}

export const SwipeAction = forwardRef<SwipeActionRef, SwipeActionProps>(
  (p, ref) => {
    const props = mergeProps(defaultProps, p)

    const rootRef = useRef<HTMLDivElement>(null)

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

    const draggingRef = useRef(false)

    const dragCancelRef = useRef<(() => void) | null>(null)
    function forceCancelDrag() {
      dragCancelRef.current?.()
      draggingRef.current = false
    }

    const bind = useDrag(
      state => {
        dragCancelRef.current = state.cancel
        if (!state.intentional) return
        if (state.down) {
          draggingRef.current = true
        }
        if (!draggingRef.current) return
        const [offsetX] = state.offset
        if (state.last) {
          const leftWidth = getLeftWidth()
          const rightWidth = getRightWidth()
          let position = offsetX + state.velocity[0] * state.direction[0] * 50
          if (offsetX > 0) {
            position = Math.max(0, position)
          } else if (offsetX < 0) {
            position = Math.min(0, position)
          } else {
            position = 0
          }
          const targetX = nearest([-rightWidth, 0, leftWidth], position)
          api.start({
            x: targetX,
          })
          if (targetX !== 0) {
            p.onActionsReveal?.(targetX > 0 ? 'left' : 'right')
          }
          window.setTimeout(() => {
            draggingRef.current = false
          })
        } else {
          api.start({
            x: offsetX,
            immediate: true,
          })
        }
      },
      {
        from: () => [x.get(), 0],
        bounds: () => {
          const leftWidth = getLeftWidth()
          const rightWidth = getRightWidth()
          return {
            left: -rightWidth,
            right: leftWidth,
          }
        },
        axis: 'x',
        preventScroll: true,
        pointer: { touch: true },
        triggerAllEvents: true,
      }
    )

    const close = () => {
      api.start({
        x: 0,
      })
      forceCancelDrag()
      props.onClose?.()
    }

    useImperativeHandle(ref, () => ({
      show: (side: SideType = 'right') => {
        if (side === 'right') {
          api.start({
            x: -getRightWidth(),
          })
        } else if (side === 'left') {
          api.start({
            x: getLeftWidth(),
          })
        }
        p.onActionsReveal?.(side)
      },
      close,
    }))

    useEffect(() => {
      if (!props.closeOnTouchOutside) return
      function handle(e: Event) {
        if (x.get() === 0) {
          return
        }
        const root = rootRef.current
        if (root && !root.contains(e.target as Node)) {
          close()
        }
      }
      document.addEventListener('touchstart', handle)
      return () => {
        document.removeEventListener('touchstart', handle)
      }
    }, [props.closeOnTouchOutside])

    function renderAction(action: Action) {
      const color = action.color ?? 'light'
      return (
        <Button
          key={action.key}
          className={`${classPrefix}-action-button`}
          style={{
            '--background-color': colorRecord[color] ?? color,
          }}
          onClick={e => {
            if (props.closeOnAction) {
              close()
            }
            action.onClick?.(e)
            props.onAction?.(action, e)
          }}
        >
          {action.text}
        </Button>
      )
    }

    return withNativeProps(
      props,
      <div
        className={classPrefix}
        {...bind()}
        ref={rootRef}
        onClickCapture={e => {
          if (draggingRef.current) {
            e.stopPropagation()
            e.preventDefault()
          }
        }}
      >
        <animated.div className={`${classPrefix}-track`} style={{ x }}>
          {withStopPropagation(
            props.stopPropagation,
            <div
              className={`${classPrefix}-actions ${classPrefix}-actions-left`}
              ref={leftRef}
            >
              {props.leftActions.map(renderAction)}
            </div>
          )}
          <div
            className={`${classPrefix}-content`}
            onClickCapture={e => {
              if (x.goal !== 0) {
                e.preventDefault()
                e.stopPropagation()
                close()
              }
            }}
          >
            <animated.div
              style={{
                pointerEvents: x.to(v =>
                  v !== 0 && x.goal !== 0 ? 'none' : 'auto'
                ),
              }}
            >
              {props.children}
            </animated.div>
          </div>
          {withStopPropagation(
            props.stopPropagation,
            <div
              className={`${classPrefix}-actions ${classPrefix}-actions-right`}
              ref={rightRef}
            >
              {props.rightActions.map(renderAction)}
            </div>
          )}
        </animated.div>
      </div>
    )
  }
)

const colorRecord: Record<string, string> = {
  light: 'var(--adm-color-light)',
  weak: 'var(--adm-color-weak)',
  primary: 'var(--adm-color-primary)',
  success: 'var(--adm-color-success)',
  warning: 'var(--adm-color-warning)',
  danger: 'var(--adm-color-danger)',
}

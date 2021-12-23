import React, {
  forwardRef,
  ReactNode,
  RefObject,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react'
import { mergeProps } from '../../utils/with-default-props'
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import Button from '../button'
import { nearest } from '../../utils/nearest'
import { NativeProps, withNativeProps } from '../../utils/native-props'

export type SwipeActionRef = {
  close: () => void
  show: (side?: 'left' | 'right') => void
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
  onAction?: (action: Action) => void
  closeOnTouchOutside?: boolean
  closeOnAction?: boolean
  children: ReactNode
} & NativeProps<'--background'>

const defaultProps = {
  rightActions: [] as Action[],
  leftActions: [] as Action[],
  closeOnTouchOutside: true,
  closeOnAction: true,
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

    const bind = useDrag(
      state => {
        draggingRef.current = true
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
          api.start({
            x: nearest([-rightWidth, 0, leftWidth], position),
          })
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
        // rubberband: true,
        axis: 'x',
        preventScroll: true,
        pointer: { touch: true },
      }
    )

    function close() {
      api.start({
        x: 0,
      })
    }

    useImperativeHandle(ref, () => ({
      show: (side: 'left' | 'right' = 'right') => {
        if (side === 'right') {
          api.start({
            x: -getRightWidth(),
          })
        } else if (side === 'left') {
          api.start({
            x: getLeftWidth(),
          })
        }
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
          className='adm-swipe-action-action-button'
          style={{
            '--background-color': colorRecord[color] ?? color,
          }}
          onClick={e => {
            if (props.closeOnAction) {
              close()
            }
            action.onClick?.(e)
            props.onAction?.(action)
          }}
        >
          {action.text}
        </Button>
      )
    }

    return withNativeProps(
      props,
      <div
        className='adm-swipe-action'
        {...bind()}
        ref={rootRef}
        onClickCapture={e => {
          if (draggingRef.current) {
            e.stopPropagation()
            e.preventDefault()
          }
        }}
      >
        <animated.div className='adm-swipe-action-track' style={{ x }}>
          <div
            className='adm-swipe-action-actions adm-swipe-action-actions-left'
            ref={leftRef}
          >
            {props.leftActions.map(renderAction)}
          </div>
          <div
            className='adm-swipe-action-content'
            onClickCapture={e => {
              if (x.goal !== 0) {
                e.preventDefault()
                e.stopPropagation()
                api.start({
                  x: 0,
                })
              }
            }}
          >
            <animated.div
              style={{
                pointerEvents: x.to(v =>
                  v !== 0 && x.goal !== 0 ? 'none' : 'unset'
                ),
              }}
            >
              {props.children}
            </animated.div>
          </div>
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
)

const colorRecord: Record<string, string> = {
  light: 'var(--adm-color-light)',
  weak: 'var(--adm-color-weak)',
  primary: 'var(--adm-color-primary)',
  success: 'var(--adm-color-success)',
  warning: 'var(--adm-color-warning)',
  danger: 'var(--adm-color-danger)',
}

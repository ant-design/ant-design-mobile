import React, {
  forwardRef,
  ReactNode,
  useImperativeHandle,
  useRef,
} from 'react'
import { ElementProps } from '../../utils/element-props'
import classNames from 'classnames'
import { useDrag } from 'react-use-gesture'
import { useSpring, animated } from '@react-spring/web'
import { supportsPassive } from '../../utils/supports-passive'
import { nearest } from '../../utils/nearest'

export type FloatingPanelProps = {
  anchors: number[]
  children: ReactNode
} & ElementProps<{
  '--border-radius': string
}>

export type FloatingPanelRef = {
  setHeight: (
    height: number,
    options?: {
      immediate?: boolean
    }
  ) => void
}

const FloatingPanel = forwardRef<FloatingPanelRef, FloatingPanelProps>(
  (props, ref) => {
    const { anchors } = props
    const maxHeight = anchors[anchors.length - 1] ?? window.innerHeight

    const possibles = anchors.map(x => -x)

    const elementRef = useRef<HTMLDivElement>(null)
    const headerRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const pullingRef = useRef(false)

    const bounds = {
      top: possibles[possibles.length - 1],
      bottom: possibles[0],
    }

    const [{ y }, api] = useSpring(() => ({
      y: bounds.bottom,
      config: { tension: 300 },
    }))

    useDrag(
      state => {
        const [_, movementY] = state.movement

        if (state.first) {
          const target = state.event.target as Element
          const header = headerRef.current
          if (header === target || header?.contains(target)) {
            pullingRef.current = true
          } else {
            const reachedTop = y.get() <= bounds.top
            const content = contentRef.current
            if (!content) return
            if (reachedTop) {
              if (content.scrollTop <= 0 && state.vxvy[1] > 0) {
                pullingRef.current = true
              }
            } else {
              pullingRef.current = true
            }
          }
        }
        if (!pullingRef.current) return
        const { event } = state
        if (event.cancelable) {
          event.preventDefault()
        }
        event.stopPropagation()

        let nextY = movementY
        if (state.last) {
          pullingRef.current = false
          nextY = nearest(possibles, movementY)
        }
        api.start({
          y: nextY,
        })
      },
      {
        axis: 'y',
        bounds,
        rubberband: true,
        initial: () => [0, y.get()],
        useTouch: true,
        domTarget: elementRef,
        eventOptions: supportsPassive ? { passive: false } : false,
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

    return (
      <animated.div
        ref={elementRef}
        className={classNames('am-drawer', props.className)}
        style={{
          ...props.style,
          height: maxHeight,
          y,
        }}
      >
        <div className='am-drawer-header' ref={headerRef}>
          <div className='am-drawer-bar' />
        </div>
        <div className='am-drawer-content' ref={contentRef}>
          {props.children}
        </div>
      </animated.div>
    )
  }
)

export default FloatingPanel

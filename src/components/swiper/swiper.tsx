import React, {
  forwardRef,
  ReactElement,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import classNames from 'classnames'
import { SwiperItem } from './swiper-item'
import { devWarning } from '../../utils/dev-log'
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import PageIndicator, { PageIndicatorProps } from '../page-indicator'
import { staged } from 'staged-components'
import { useRefState } from '../../utils/use-ref-state'
import { bound } from '../../utils/bound'

export type SwiperRef = {
  swipeTo: (index: number) => void
  swipeNext: () => void
  swipePrev: () => void
}

export type SwiperProps = {
  defaultIndex?: number
  allowTouchMove?: boolean
  autoplay?: boolean
  autoplayInterval?: number
  loop?: boolean
  direction?: 'horizontal' | 'vertical'
  onIndexChange?: (index: number) => void
  indicatorProps?: Pick<PageIndicatorProps, 'color' | 'style' | 'className'>
  indicator?: (total: number, current: number) => ReactNode
  children?: ReactElement | ReactElement[]
} & NativeProps<
  | '--height'
  | '--width'
  | '--slide-width'
  | '--slide-height'
  | '--border-radius'
  | '--track-padding'
  | '--track-offset'
>

const defaultProps = {
  defaultIndex: 0,
  allowTouchMove: true,
  autoplay: false,
  autoplayInterval: 3000,
  loop: true,
  direction: 'horizontal',
}

export const Swiper = forwardRef(
  staged<SwiperProps, SwiperRef>((p, ref) => {
    const props = mergeProps(defaultProps, p)

    const isVertical = props.direction === 'vertical'

    const { validChildren, count } = useMemo(() => {
      let count = 0
      const validChildren = React.Children.map(props.children, child => {
        if (!React.isValidElement(child)) return null
        if (child.type !== SwiperItem) {
          devWarning(
            'Swiper',
            'The children of `Swiper` must be `Swiper.Item` components.'
          )
          return null
        }
        count++
        return child
      })
      return {
        validChildren,
        count,
      }
    }, [props.children])

    if (count === 0) {
      devWarning('Swiper', '`Swiper` needs at least one child.')
      return null
    }

    return () => {
      let loop = props.loop
      if (count === 1 && loop) {
        devWarning(
          'Swiper',
          '`Swiper` needs at least two children to enable loop.'
        )
        loop = false
      }
      const trackRef = useRef<HTMLDivElement>(null)
      function getSize() {
        const track = trackRef.current
        if (!track) return 0
        return isVertical ? track.offsetHeight : track.offsetWidth
      }

      const [current, setCurrent] = useState(props.defaultIndex)

      const [dragging, setDragging, draggingRef] = useRefState(false)

      const [{ position }, api] = useSpring(
        () => ({
          position: bound(current, 0, count - 1) * 100,
          config: { tension: 200, friction: 30 },
          onRest: () => {
            if (draggingRef.current) return
            const rawX = position.get()
            const totalWidth = 100 * count
            const standardPosition = modulus(rawX, totalWidth)
            if (standardPosition === rawX) return
            api.start({
              position: standardPosition,
              immediate: true,
            })
          },
        }),
        [count]
      )

      const bind = useDrag(
        state => {
          const size = getSize()
          if (!size) return
          const paramIndex = isVertical ? 1 : 0
          const offset = state.offset[paramIndex]
          const direction = state.direction[paramIndex]
          const velocity = state.velocity[paramIndex]
          setDragging(true)
          if (!state.last) {
            api.start({
              position: (offset * 100) / size,
              immediate: true,
            })
          } else {
            const index = Math.round(
              (offset + Math.min(velocity * 2000, size) * direction) / size
            )
            swipeTo(index)
            window.setTimeout(() => {
              setDragging(false)
            })
          }
        },
        {
          transform: ([x, y]) => [-x, -y],
          from: () => {
            const size = getSize()
            return [
              (position.get() / 100) * size,
              (position.get() / 100) * size,
            ]
          },
          bounds: () => {
            if (loop) return {}
            const size = getSize()
            return isVertical
              ? {
                  top: 0,
                  bottom: (count - 1) * size,
                }
              : {
                  left: 0,
                  right: (count - 1) * size,
                }
          },
          rubberband: true,
          axis: isVertical ? 'y' : 'x',
          preventScroll: !isVertical,
          pointer: {
            touch: true,
          },
        }
      )

      function swipeTo(index: number) {
        if (loop) {
          const i = modulus(index, count)
          setCurrent(i)
          props.onIndexChange?.(i)
          api.start({
            position: index * 100,
          })
        } else {
          const i = bound(index, 0, count - 1)
          setCurrent(i)
          props.onIndexChange?.(i)
          api.start({
            position: i * 100,
          })
        }
      }

      function swipeNext() {
        swipeTo(Math.round(position.get() / 100) + 1)
      }

      function swipePrev() {
        swipeTo(Math.round(position.get() / 100) - 1)
      }

      useImperativeHandle(ref, () => ({
        swipeTo,
        swipeNext,
        swipePrev,
      }))

      const { autoplay, autoplayInterval } = props
      useEffect(() => {
        if (!autoplay || dragging) return
        const interval = window.setInterval(() => {
          swipeNext()
        }, autoplayInterval)
        return () => {
          window.clearInterval(interval)
        }
      }, [autoplay, autoplayInterval, dragging])

      return withNativeProps(
        props,
        <div
          className={classNames('adm-swiper', `adm-swiper-${props.direction}`)}
        >
          <div
            className={classNames('adm-swiper-track', {
              'adm-swiper-track-allow-touch-move': props.allowTouchMove,
            })}
            onClickCapture={e => {
              if (draggingRef.current) {
                e.stopPropagation()
              }
            }}
            {...(props.allowTouchMove ? bind() : {})}
          >
            <div className='adm-swiper-track-inner' ref={trackRef}>
              {React.Children.map(validChildren, (child, index) => {
                return (
                  <animated.div
                    className='adm-swiper-slide'
                    style={{
                      [isVertical ? 'y' : 'x']: position.to(position => {
                        let finalPosition = -position + index * 100
                        if (loop) {
                          const totalWidth = count * 100
                          const flagWidth = totalWidth / 2 - 10
                          finalPosition =
                            modulus(finalPosition + flagWidth, totalWidth) -
                            flagWidth
                        }
                        return `${finalPosition}%`
                      }),
                      left: `-${index * 100}%`,
                    }}
                  >
                    {child}
                  </animated.div>
                )
              })}
            </div>
          </div>
          {props.indicator === undefined ? (
            <div className='adm-swiper-indicator'>
              <PageIndicator
                {...props.indicatorProps}
                total={count}
                current={current}
                direction={props.direction}
              />
            </div>
          ) : (
            props.indicator(count, current)
          )}
        </div>
      )
    }
  })
)

function modulus(value: number, division: number) {
  const remainder = value % division
  return remainder < 0 ? remainder + division : remainder
}

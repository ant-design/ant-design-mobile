import React, {
  forwardRef,
  ReactElement,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
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
  slideSize?: number
  trackOffset?: number
  stuckAtBoundary?: boolean
  children?: ReactElement | ReactElement[]
} & NativeProps<'--height' | '--width' | '--border-radius' | '--track-padding'>

const defaultProps = {
  defaultIndex: 0,
  allowTouchMove: true,
  autoplay: false,
  autoplayInterval: 3000,
  loop: true,
  direction: 'horizontal',
  slideSize: 100,
  trackOffset: 0,
  stuckAtBoundary: false,
}

export const Swiper = forwardRef(
  staged<SwiperProps, SwiperRef>((p, ref) => {
    const props = mergeProps(defaultProps, p)

    const isVertical = props.direction === 'vertical'

    const slideRatio = props.slideSize / 100
    const offsetRatio = props.trackOffset / 100

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

    if (count === 0 || !validChildren) {
      devWarning('Swiper', '`Swiper` needs at least one child.')
      return null
    }

    return () => {
      let loop = props.loop
      if (slideRatio * (count - 1) < 1) {
        loop = false
      }
      const trackRef = useRef<HTMLDivElement>(null)

      function getSlidePixels() {
        const track = trackRef.current
        if (!track) return 0
        const trackPixels = isVertical ? track.offsetHeight : track.offsetWidth
        return (trackPixels * props.slideSize) / 100
      }

      const [current, setCurrent] = useState(props.defaultIndex)

      const [dragging, setDragging, draggingRef] = useRefState(false)

      function boundIndex(current: number) {
        let min = 0
        let max = count - 1
        if (props.stuckAtBoundary) {
          min += (1 - slideRatio - offsetRatio) / slideRatio
          max -= (1 - slideRatio - offsetRatio) / slideRatio
        }
        return bound(current, min, max)
      }

      const [{ position }, api] = useSpring(
        () => ({
          position: boundIndex(current) * 100,
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
          const slidePixels = getSlidePixels()
          if (!slidePixels) return
          const paramIndex = isVertical ? 1 : 0
          const offset = state.offset[paramIndex]
          const direction = state.direction[paramIndex]
          const velocity = state.velocity[paramIndex]
          setDragging(true)
          if (!state.last) {
            api.start({
              position: (offset * 100) / slidePixels,
              immediate: true,
            })
          } else {
            const index = Math.round(
              (offset + Math.min(velocity * 2000, slidePixels) * direction) /
                slidePixels
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
            const slidePixels = getSlidePixels()
            return [
              (position.get() / 100) * slidePixels,
              (position.get() / 100) * slidePixels,
            ]
          },
          bounds: () => {
            if (loop) return {}
            const slidePixels = getSlidePixels()
            const lowerBound = boundIndex(0) * slidePixels
            const upperBound = boundIndex(count - 1) * slidePixels
            return isVertical
              ? {
                  top: lowerBound,
                  bottom: upperBound,
                }
              : {
                  left: lowerBound,
                  right: upperBound,
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

      function swipeTo(index: number, immediate = false) {
        if (loop) {
          const i = modulus(index, count)
          setCurrent(i)
          props.onIndexChange?.(i)
          api.start({
            position: index * 100,
            immediate,
          })
        } else {
          const i = bound(index, 0, count - 1)
          setCurrent(i)
          props.onIndexChange?.(i)
          api.start({
            position: boundIndex(i) * 100,
            immediate,
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

      useLayoutEffect(() => {
        const maxIndex = validChildren.length - 1
        if (current > maxIndex) {
          swipeTo(maxIndex, true)
        }
      })

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

      function renderTrackInner() {
        if (loop) {
          return (
            <div className='adm-swiper-track-inner'>
              {React.Children.map(validChildren, (child, index) => {
                return (
                  <animated.div
                    className='adm-swiper-slide'
                    style={{
                      [isVertical ? 'y' : 'x']: position.to(position => {
                        let finalPosition = -position + index * 100
                        const totalWidth = count * 100
                        const flagWidth = totalWidth / 2
                        finalPosition =
                          modulus(finalPosition + flagWidth, totalWidth) -
                          flagWidth
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
          )
        } else {
          return (
            <animated.div
              className='adm-swiper-track-inner'
              style={{
                [isVertical ? 'y' : 'x']: position.to(
                  position => `${-position}%`
                ),
              }}
            >
              {React.Children.map(validChildren, (child, index) => {
                return <div className='adm-swiper-slide'>{child}</div>
              })}
            </animated.div>
          )
        }
      }

      const style: any = {
        '--slide-size': `${props.slideSize}%`,
        '--track-offset': `${props.trackOffset}%`,
      }

      return withNativeProps(
        props,
        <div
          className={classNames('adm-swiper', `adm-swiper-${props.direction}`)}
          style={style}
        >
          <div
            ref={trackRef}
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
            {renderTrackInner()}
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

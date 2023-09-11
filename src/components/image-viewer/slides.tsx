import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { useDrag } from '@use-gesture/react'
import type { FullGestureState } from '@use-gesture/react'
import { useSpring, animated } from '@react-spring/web'
import { Slide } from './slide'
import { convertPx } from '../../utils/convert-px'
import { bound } from '../../utils/bound'

const classPrefix = `adm-image-viewer`

export type SlidesType = {
  images: string[]
  onTap?: () => void
  maxZoom: number
  defaultIndex: number
  onIndexChange?: (index: number) => void
}
export type SlidesRef = {
  swipeTo: (index: number, immediate?: boolean) => void
}

export const Slides = forwardRef<SlidesRef, SlidesType>((props, ref) => {
  const slideWidth = window.innerWidth + convertPx(16)

  const [{ x }, api] = useSpring(() => ({
    x: props.defaultIndex * slideWidth,
    config: { tension: 250, clamp: true },
  }))

  const count = props.images.length

  function swipeTo(index: number, immediate = false) {
    const i = bound(index, 0, count - 1)
    props.onIndexChange?.(i)
    api.start({
      x: i * slideWidth,
      immediate,
    })
  }

  useImperativeHandle(ref, () => ({
    swipeTo,
  }))

  const handleGestureState = (
    state: Omit<FullGestureState<'drag'>, 'event'>
  ) => {
    const {
      last,
      offset: [offsetX],
      direction: [direction],
      velocity: [velocity],
    } = state
    return {
      last,
      offsetX,
      direction,
      velocity,
    }
  }

  const bind = useDrag(
    state => {
      const { last, offsetX, direction, velocity } = handleGestureState(state)

      if (last) {
        const minIndex = Math.floor(offsetX / slideWidth)
        const maxIndex = minIndex + 1
        const velocityOffset = Math.min(velocity * 2000, slideWidth) * direction

        swipeTo(
          bound(
            Math.round((offsetX + velocityOffset) / slideWidth),
            minIndex,
            maxIndex
          )
        )
      } else {
        api.start({
          x: offsetX,
          immediate: true,
        })
      }
    },
    {
      transform: ([x, y]) => [-x, y],
      from: () => [x.get(), 0],
      bounds: () => ({
        left: 0,
        right: (count - 1) * slideWidth,
      }),
      rubberband: true,
      axis: 'x',
      pointer: { touch: true },
    }
  )

  return (
    <div className={`${classPrefix}-slides`} {...bind()}>
      <animated.div className={`${classPrefix}-indicator`}>
        {x.to(v => {
          const index: number = bound(Math.round(v / slideWidth), 0, count - 1)
          return `${index + 1} / ${count}`
        })}
      </animated.div>
      <animated.div
        className={`${classPrefix}-slides-inner`}
        style={{ x: x.to(x => -x) }}
      >
        {props.images.map((image, index) => (
          <Slide
            key={index}
            image={image}
            onTap={props.onTap}
            maxZoom={props.maxZoom}
            onZoomChange={zoom => {
              if (zoom !== 1) {
                const index: number = Math.round(x.get() / slideWidth)
                api.start({
                  x: index * slideWidth,
                })
              }
            }}
          />
        ))}
      </animated.div>
    </div>
  )
})

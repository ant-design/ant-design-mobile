import React, { FC } from 'react'
import { useDrag } from 'react-use-gesture'
import { useSpring, animated } from '@react-spring/web'
import { Slide } from './slide'
import { convertPx } from '../../utils/convert-px'
import { bound } from '../../utils/rubberband'

const classPrefix = `adm-image-viewer`

export const Slides: FC<{
  images: string[]
  onTap: () => void
  maxZoom: number
  defaultIndex: number
  onIndexChange?: (index: number) => void
}> = props => {
  const slideWidth = window.innerWidth + convertPx(16)

  const [{ x }, api] = useSpring(() => ({
    x: -props.defaultIndex * slideWidth,
    config: { tension: 300 },
  }))

  const count = props.images.length

  const bind = useDrag(
    state => {
      const [mx] = state.movement
      if (state.last) {
        const index = bound(
          -Math.round((mx + state.vxvy[0] * 100) / slideWidth),
          0,
          count - 1
        )
        api.start({
          x: index * -slideWidth,
        })
      } else {
        api.start({
          x: mx,
        })
      }
    },
    {
      initial: () => [x.get(), 0],
      bounds: () => {
        const index: number = -Math.round(x.get() / slideWidth)
        return {
          right: Math.max(index - 1, 0) * -slideWidth,
          left: Math.min(index + 1, count - 1) * -slideWidth,
        }
      },
      rubberband: true,
      axis: 'x',
    }
  )

  return (
    <div className={`${classPrefix}-slides`} {...bind()}>
      <animated.div className={`${classPrefix}-indicator`}>
        {x.to(v => {
          const index: number = -Math.round(v / slideWidth)
          return `${index + 1} / ${count}`
        })}
      </animated.div>
      <animated.div className={`${classPrefix}-slides-inner`} style={{ x }}>
        {props.images.map(image => (
          <Slide
            key={image}
            image={image}
            onTap={props.onTap}
            maxZoom={props.maxZoom}
            onZoomChange={zoom => {
              if (zoom !== 1) {
                const index: number = -Math.round(x.get() / slideWidth)
                api.start({
                  x: index * -slideWidth,
                })
              }
            }}
          />
        ))}
      </animated.div>
    </div>
  )
}

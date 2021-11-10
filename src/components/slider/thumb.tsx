import React, { FC, useRef, RefObject } from 'react'
import { useDrag } from '@use-gesture/react'

const classPrefix = `adm-slider`

type ThumbProps = {
  value: number
  min: number
  max: number
  disabled: boolean
  onDrag: (value: number, first: boolean, last: boolean) => void
  trackRef: RefObject<HTMLDivElement>
}

const Thumb: FC<ThumbProps> = props => {
  const { value, min, max, disabled, onDrag } = props
  const prevValue = useRef(value)

  const currentPosition = () => {
    return {
      left: `${((value - min) / (max - min)) * 100}%`,
      right: 'auto',
    }
  }

  const bind = useDrag(
    state => {
      if (disabled) return
      if (state.first) {
        prevValue.current = value
      }
      const x = state.xy[0] - state.initial[0]
      const sliderOffsetWith = props.trackRef.current?.offsetWidth
      if (!sliderOffsetWith) return
      const diff = (x / Math.ceil(sliderOffsetWith)) * (max - min)
      onDrag(prevValue.current + diff, state.first, state.last)
    },
    {
      axis: 'x',
      pointer: { touch: true },
    }
  )

  return (
    <div
      className={`${classPrefix}-thumb-container`}
      style={currentPosition()}
      {...bind()}
    >
      <div className={`${classPrefix}-thumb`} />
    </div>
  )
}

export default Thumb

import React, { FC, useRef, RefObject, useState, ReactNode } from 'react'
import { useDrag } from '@use-gesture/react'
import { ThumbIcon } from './thumb-icon'
import { Popover } from '../popover/popover'
import { useConfig } from '../config-provider'
import { NativeProps } from '../../utils/native-props'

const classPrefix = `adm-slider`

type ThumbProps = {
  value: number
  min: number
  max: number
  disabled: boolean
  onDrag: (value: number, first: boolean, last: boolean) => void
  trackRef: RefObject<HTMLDivElement>
  icon?: React.ReactNode
  popover: boolean | ((value: number) => ReactNode)
} & NativeProps

const Thumb: FC<ThumbProps> = props => {
  const { value, min, max, disabled, onDrag, icon } = props
  const prevValue = useRef(value)
  const { locale } = useConfig()

  const currentPosition = () => {
    return {
      left: `${((value - min) / (max - min)) * 100}%`,
      right: 'auto',
    }
  }

  const [dragging, setDragging] = useState(false)

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
      setDragging(!state.last)
    },
    {
      axis: 'x',
      pointer: { touch: true },
    }
  )

  const renderPopoverContent =
    typeof props.popover === 'function'
      ? props.popover
      : props.popover
      ? (value: number) => value.toString()
      : null

  const thumbElement = (
    <div className={`${classPrefix}-thumb`}>
      {icon ? icon : <ThumbIcon className={`${classPrefix}-thumb-icon`} />}
    </div>
  )

  return (
    <div
      className={`${classPrefix}-thumb-container`}
      style={currentPosition()}
      {...bind()}
      role='slider'
      aria-label={props['aria-label'] || locale.Slider.name}
      aria-valuemax={max}
      aria-valuemin={min}
      aria-valuenow={value}
      aria-disabled={disabled}
    >
      {renderPopoverContent ? (
        <Popover
          content={renderPopoverContent(value)}
          placement='top'
          visible={dragging}
          getContainer={null}
          mode='dark'
        >
          {thumbElement}
        </Popover>
      ) : (
        thumbElement
      )}
    </div>
  )
}

export default Thumb

import {FC, useRef, RefObject} from 'react'
import {useDrag, subV} from 'react-use-gesture'

const classPrefix = `am-slider`

type ThumbProps = {
  value: number
  min: number
  max: number
  disabled: boolean
  onDrag: (value: number, first: boolean, last: boolean) => void
  trackRef: RefObject<HTMLDivElement>
}

const Thumb: FC<ThumbProps> = props => {
  const {value, min, max, disabled, onDrag} = props
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
      const [x] = subV(state.xy, state.initial)
      const sliderOffsetWith = props.trackRef.current?.offsetWidth
      if (!sliderOffsetWith) return
      const diff = (x / Math.ceil(sliderOffsetWith!)) * (max - min)
      onDrag(prevValue.current + diff, state.first, state.last)
    },
    {
      axis: 'x',
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

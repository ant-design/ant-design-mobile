import React, { FC, useEffect } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'
import type { PickerColumnItem, PickerValue } from './index'
import { convertPx } from '../../utils/convert-px'
import { rubberbandIfOutOfBounds, bound } from '../../utils/rubberband'

const classPrefix = `am-picker`

interface Props {
  column: PickerColumnItem[]
  value: PickerValue
  onSelect: (value: PickerValue) => void
}

export const Column: FC<Props> = props => {
  const itemHeight = convertPx(34)
  const { value, onSelect, column } = props
  const [{ y }, api] = useSpring(() => ({
    from: { y: 0 },
    config: {
      tension: 400,
      mass: 0.8,
    },
  }))

  useEffect(() => {
    if (!value) {
      return
    }
    const targetIndex = column.findIndex(item => item.value === value)
    const finalPosition = targetIndex * -itemHeight
    if (finalPosition === y.get()) {
      return
    }
    api.start({ y: finalPosition, immediate: y.idle })
  }, [value])

  useEffect(() => {
    if (column.length === 0) {
      if (value !== null) {
        props.onSelect(null)
      }
    } else {
      if (!column.some(item => item.value === value)) {
        const firstItem = column[0]
        props.onSelect(firstItem.value)
      }
    }
  })

  const bind = useDrag(
    state => {
      const min = -((column.length - 1) * itemHeight)
      const max = 0
      if (state.last) {
        const position = state.movement[1] + state.vxvy[1] * 50
        const targetIndex = -Math.round(bound(position, min, max) / itemHeight)
        const finalPosition = targetIndex * -itemHeight
        api.start({ y: finalPosition })
        onSelect(column[targetIndex].value)
      } else {
        const position = state.movement[1]
        api.start({
          y: rubberbandIfOutOfBounds(position, min, max, itemHeight * 50, 0.2),
        })
      }
    },
    {
      axis: 'y',
      initial: () => [0, y.get()],
      filterTaps: true,
    }
  )

  return (
    <div className={`${classPrefix}-column`} {...bind()}>
      <animated.div style={{ y }} className={`${classPrefix}-column-wheel`}>
        {column.map((item, index) => {
          function handleClick() {
            const finalPosition = index * -itemHeight
            api.start({ y: finalPosition })
            onSelect(column[index].value)
          }
          return (
            <div
              key={item.value}
              className={`${classPrefix}-column-item`}
              onClick={handleClick}
            >
              <div className={`${classPrefix}-column-item-label`}>
                {item.label}
              </div>
            </div>
          )
        })}
      </animated.div>
    </div>
  )
}

import React, { FC, useLayoutEffect, useRef, useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import { convertPx } from '../../utils/convert-px'
import { rubberbandIfOutOfBounds } from '../../utils/rubberband'
import { bound } from '../../utils/bound'
import { PickerColumnItem, PickerValue } from './index'
import { useDebounceFn } from 'ahooks'

const classPrefix = `adm-picker-view`

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

  const draggingRef = useRef(false)

  const [flag, setFlag] = useState({})

  useLayoutEffect(() => {
    if (draggingRef.current) return
    if (!value) return
    const targetIndex = column.findIndex(item => item.value === value)
    if (targetIndex < 0) return
    const finalPosition = targetIndex * -itemHeight
    api.start({ y: finalPosition, immediate: y.idle })
  }, [value, column, flag])

  useLayoutEffect(() => {
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
  }, [column, value])

  const { run: debouncedUpdateFlag } = useDebounceFn(
    () => {
      setFlag({})
    },
    {
      wait: 1000,
      leading: false,
      trailing: true,
    }
  )

  function scrollSelect(index: number) {
    const finalPosition = index * -itemHeight
    api.start({ y: finalPosition })
    onSelect(column[index].value)
    debouncedUpdateFlag()
  }

  const bind = useDrag(
    state => {
      draggingRef.current = true
      const min = -((column.length - 1) * itemHeight)
      const max = 0
      if (state.last) {
        draggingRef.current = false
        const position =
          state.offset[1] + state.velocity[1] * state.direction[1] * 50
        const targetIndex = -Math.round(bound(position, min, max) / itemHeight)
        scrollSelect(targetIndex)
      } else {
        const position = state.offset[1]
        api.start({
          y: rubberbandIfOutOfBounds(position, min, max, itemHeight * 50, 0.2),
        })
      }
    },
    {
      axis: 'y',
      from: () => [0, y.get()],
      filterTaps: true,
      pointer: { touch: true },
    }
  )

  return (
    <div className={`${classPrefix}-column`} {...bind()}>
      <animated.div style={{ y }} className={`${classPrefix}-column-wheel`}>
        {column.map((item, index) => {
          function handleClick() {
            draggingRef.current = false
            scrollSelect(index)
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

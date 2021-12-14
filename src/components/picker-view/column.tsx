import React, { FC, useLayoutEffect, useRef } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import { convertPx } from '../../utils/convert-px'
import { rubberbandIfOutOfBounds } from '../../utils/rubberband'
import { bound } from '../../utils/bound'
import { PickerColumnItem, PickerValue } from './index'

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

  useLayoutEffect(() => {
    if (draggingRef.current) return
    if (!value) return
    const targetIndex = column.findIndex(item => item.value === value)
    if (targetIndex < 0) return
    const finalPosition = targetIndex * -itemHeight
    api.start({ y: finalPosition, immediate: y.idle })
  }, [value, column])

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

  function scrollSelect(index: number) {
    const finalPosition = index * -itemHeight
    api.start({ y: finalPosition })
    onSelect(column[index].value)
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

  let selectedIndex: number | null = null

  function renderAccessible() {
    console.log('selectedIndex', selectedIndex)
    if (selectedIndex === null) {
      return null
    }
    const current = column[selectedIndex]
    const previousIndex = selectedIndex - 1
    const nextIndex = selectedIndex + 1
    const previous = column[previousIndex]
    const next = column[nextIndex]
    return (
      <div className='adm-picker-view-column-accessible'>
        <div
          className='adm-picker-view-column-accessible-current'
          role='button'
          aria-label={current ? `当前选择的是：${current.label}` : '当前未选择'}
        >
          -
        </div>
        <div>
          {previous && (
            <div
              className='adm-picker-view-column-accessible-button'
              onClick={() => {
                scrollSelect(previousIndex)
              }}
              role='button'
              aria-label={`选择上一项：${previous.label}`}
            >
              -
            </div>
          )}
        </div>
        <div>
          {next && (
            <div
              className='adm-picker-view-column-accessible-button'
              onClick={() => {
                scrollSelect(nextIndex)
              }}
              role='button'
              aria-label={`选择下一项：${next.label}`}
            >
              -
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className={`${classPrefix}-column`} {...bind()}>
      <animated.div
        style={{ y }}
        className={`${classPrefix}-column-wheel`}
        aria-hidden
      >
        {column.map((item, index) => {
          const selected = props.value === item.value
          if (selected) selectedIndex = index
          function handleClick() {
            draggingRef.current = false
            scrollSelect(index)
          }
          return (
            <div
              key={item.value}
              data-selected={item.value === value}
              className={`${classPrefix}-column-item`}
              onClick={handleClick}
              aria-hidden={!selected}
              aria-label={selected ? 'active' : ''}
            >
              <div className={`${classPrefix}-column-item-label`}>
                {item.label}
              </div>
            </div>
          )
        })}
      </animated.div>
      {renderAccessible()}
    </div>
  )
}

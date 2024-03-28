import React, { memo, useRef } from 'react'
import type { ReactNode } from 'react'
import { useSpring, animated } from '@react-spring/web'
import {
  EventTypes,
  FullGestureState,
  useDrag,
  useWheel,
} from '@use-gesture/react'
import { rubberbandIfOutOfBounds } from '../../utils/rubberband'
import { bound } from '../../utils/bound'
import { PickerColumnItem, PickerValue } from './index'
import isEqual from 'react-fast-compare'
import { useIsomorphicLayoutEffect } from 'ahooks'
import { measureCSSLength } from '../../utils/measure-css-length'
import { supportsPassive } from '../../utils/supports-passive'
import classNames from 'classnames'

const classPrefix = `adm-picker-view`

type Props = {
  index: number
  column: PickerColumnItem[]
  value: PickerValue
  onSelect: (value: PickerValue, index: number) => void
  renderLabel: (item: PickerColumnItem) => ReactNode
  mouseWheel: boolean
}

export const Wheel = memo<Props>(
  props => {
    const { value, column, renderLabel } = props
    function onSelect(val: PickerValue) {
      props.onSelect(val, props.index)
    }

    const [{ y }, api] = useSpring(() => ({
      from: { y: 0 },
      config: {
        tension: 400,
        mass: 0.8,
      },
    }))

    const draggingRef = useRef(false)

    const rootRef = useRef<HTMLDivElement>(null)

    const itemHeightMeasureRef = useRef<HTMLDivElement>(null)
    const itemHeight = useRef<number>(34)

    useIsomorphicLayoutEffect(() => {
      const itemHeightMeasure = itemHeightMeasureRef.current
      if (!itemHeightMeasure) return
      itemHeight.current = measureCSSLength(
        window.getComputedStyle(itemHeightMeasure).getPropertyValue('height')
      )
    })

    useIsomorphicLayoutEffect(() => {
      if (draggingRef.current) return
      if (value === null) return
      const targetIndex = column.findIndex(item => item.value === value)
      if (targetIndex < 0) return
      const finalPosition = targetIndex * -itemHeight.current
      api.start({ y: finalPosition, immediate: y.goal !== finalPosition })
    }, [value, column])

    useIsomorphicLayoutEffect(() => {
      if (column.length === 0) {
        if (value !== null) {
          onSelect(null)
        }
      } else {
        if (!column.some(item => item.value === value)) {
          const firstItem = column[0]
          onSelect(firstItem.value)
        }
      }
    }, [column, value])

    function scrollSelect(index: number) {
      const finalPosition = index * -itemHeight.current
      api.start({ y: finalPosition })
      const item = column[index]
      if (!item) return
      onSelect(item.value)
    }

    const handleGestureState = (
      state:
        | (Omit<FullGestureState<'wheel'>, 'event'> & {
            event: EventTypes['wheel']
          })
        | (Omit<FullGestureState<'drag'>, 'event'> & {
            event: EventTypes['drag']
          })
    ) => {
      const {
        direction: [, direction],
        distance: [, distance],
        velocity: [, velocity],
        offset: [, offset],
        last,
      } = state
      return {
        direction,
        distance,
        velocity,
        offset,
        last,
      }
    }

    const handleDrag = (
      state: Omit<FullGestureState<'drag'>, 'event'> & {
        event: EventTypes['drag']
      }
    ) => {
      draggingRef.current = true
      const min = -((column.length - 1) * itemHeight.current)
      const max = 0
      const { direction, last, velocity, offset } = handleGestureState(state)

      if (last) {
        draggingRef.current = false

        const position = offset + velocity * direction * 50
        const boundNum = bound(position, min, max)
        const targetIndex = -Math.round(boundNum / itemHeight.current)

        scrollSelect(targetIndex)
      } else {
        const position = offset

        api.start({
          y: rubberbandIfOutOfBounds(
            position,
            min,
            max,
            itemHeight.current * 50,
            0.2
          ),
        })
      }
    }
    const handleWheel = (
      state: Omit<FullGestureState<'wheel'>, 'event'> & {
        event: EventTypes['wheel']
      }
    ) => {
      draggingRef.current = true
      const min = -((column.length - 1) * itemHeight.current)
      const max = 0
      const { direction, last, velocity, distance } = handleGestureState(state)
      const whellDir = -direction // 取反
      const scrollY = y.get()

      if (last) {
        draggingRef.current = false

        const speed = velocity * whellDir * 50
        const position = scrollY + distance * whellDir + speed
        const boundNum = bound(position, min, max)
        const targetIndex = -Math.round(boundNum / itemHeight.current)

        scrollSelect(targetIndex)
      } else {
        const position = scrollY + distance * whellDir

        api.start({
          y: rubberbandIfOutOfBounds(
            position,
            min,
            max,
            itemHeight.current * 50,
            0.2
          ),
        })
      }
    }
    useDrag(
      state => {
        state.event.stopPropagation()
        handleDrag(state)
      },
      {
        axis: 'y',
        from: () => [0, y.get()],
        filterTaps: true,
        pointer: { touch: true },
        target: rootRef,
      }
    )

    useWheel(
      state => {
        state.event.stopPropagation()
        handleWheel(state)
      },
      {
        target: props.mouseWheel ? rootRef : undefined,
        axis: 'y',
        from: () => [0, y.get()],
        preventDefault: true,
        eventOptions: supportsPassive ? { passive: false } : undefined,
      }
    )

    let selectedIndex: number | null = null

    function renderAccessible() {
      if (selectedIndex === null) {
        return null
      }
      const current = column[selectedIndex]
      const previousIndex = selectedIndex - 1
      const nextIndex = selectedIndex + 1
      const previous = column[previousIndex]
      const next = column[nextIndex]
      return (
        <div className={`${classPrefix}-column-accessible`}>
          <div
            className={`${classPrefix}-column-accessible-current`}
            role='button'
            aria-label={
              current ? `当前选择的是：${current.label}` : '当前未选择'
            }
          >
            -
          </div>
          <div
            className={`${classPrefix}-column-accessible-button`}
            onClick={() => {
              if (!previous) return
              scrollSelect(previousIndex)
            }}
            role={previous ? 'button' : 'text'}
            aria-label={
              !previous ? '没有上一项' : `选择上一项：${previous.label}`
            }
          >
            -
          </div>
          <div
            className={`${classPrefix}-column-accessible-button`}
            onClick={() => {
              if (!next) return
              scrollSelect(nextIndex)
            }}
            role={next ? 'button' : 'text'}
            aria-label={!next ? '没有下一项' : `选择下一项：${next.label}`}
          >
            -
          </div>
        </div>
      )
    }

    return (
      <div className={`${classPrefix}-column`}>
        <div
          className={`${classPrefix}-item-height-measure`}
          ref={itemHeightMeasureRef}
        />
        <animated.div
          ref={rootRef}
          style={{ translateY: y }}
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
                key={item.key ?? item.value}
                data-selected={selected}
                className={classNames(`${classPrefix}-column-item`, {
                  [`${classPrefix}-column-item-active`]: selected,
                })}
                onClick={handleClick}
                aria-hidden={!selected}
                aria-label={selected ? 'active' : ''}
              >
                <div className={`${classPrefix}-column-item-label`}>
                  {renderLabel(item)}
                </div>
              </div>
            )
          })}
        </animated.div>
        {renderAccessible()}
      </div>
    )
  },
  (prev, next) => {
    if (prev.index !== next.index) return false
    if (prev.value !== next.value) return false
    if (prev.onSelect !== next.onSelect) return false
    if (prev.renderLabel !== next.renderLabel) return false
    if (prev.mouseWheel !== next.mouseWheel) return false
    if (!isEqual(prev.column, next.column)) return false

    return true
  }
)

Wheel.displayName = 'Wheel'

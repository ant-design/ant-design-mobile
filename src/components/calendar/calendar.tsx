import React, { FC, ReactNode, useLayoutEffect, useMemo, useState } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import dayjs, { Dayjs } from 'dayjs'
import classNames from 'classnames'
import { mergeProps } from '../../utils/with-default-props'
import { ArrowLeft } from './arrow-left'
import { ArrowLeftDouble } from './arrow-left-double'
import { useConfig } from '../config-provider'
import isoWeek from 'dayjs/plugin/isoWeek'

dayjs.extend(isoWeek)

const classPrefix = 'adm-calendar'

export type CalendarProps = {
  weekStartsOn?: 'Monday' | 'Sunday'
  renderLabel?: (date: Date) => string | null | undefined
} & (
  | {
      selectionMode?: undefined
      value?: undefined
      defaultValue?: undefined
      onChange?: undefined
    }
  | {
      selectionMode: 'single'
      value?: Date | null
      defaultValue?: Date | null
      onChange?: (val: Date) => void
    }
  | {
      selectionMode: 'range'
      value?: [Date, Date] | null
      defaultValue?: [Date, Date] | null
      onChange?: (val: [Date, Date]) => void
    }
) &
  NativeProps

const defaultProps = {
  weekStartsOn: 'Sunday',
}

export const Calendar: FC<CalendarProps> = p => {
  const today = dayjs()
  const props = mergeProps(defaultProps, p)
  const { locale } = useConfig()
  const markItems = [...locale.Calendar.markItems]
  if (props.weekStartsOn === 'Sunday') {
    const item = markItems.pop()
    if (item) markItems.unshift(item)
  }

  const [current, setCurrent] = useState(() => dayjs().date(1))
  const header = (
    <div className={`${classPrefix}-header`}>
      <a
        className={`${classPrefix}-arrow-button`}
        onClick={() => {
          setCurrent(current.subtract(1, 'year'))
        }}
      >
        <ArrowLeftDouble />
      </a>
      <a
        className={`${classPrefix}-arrow-button`}
        onClick={() => {
          setCurrent(current.subtract(1, 'month'))
        }}
      >
        <ArrowLeft />
      </a>
      <div className={`${classPrefix}-title`}>
        {locale.Calendar.renderYearAndMonth(
          current.year(),
          current.month() + 1
        )}
      </div>
      <a
        className={`${classPrefix}-arrow-button ${classPrefix}-arrow-button-right`}
        onClick={() => {
          setCurrent(current.add(1, 'month'))
        }}
      >
        <ArrowLeft />
      </a>
      <a
        className={`${classPrefix}-arrow-button ${classPrefix}-arrow-button-right`}
        onClick={() => {
          setCurrent(current.add(1, 'year'))
        }}
      >
        <ArrowLeftDouble />
      </a>
    </div>
  )

  const dateRange = useMemo<[Date | null, Date | null]>(() => {
    if (props.selectionMode === 'single') {
      const value = props.value ?? props.defaultValue ?? null
      return [value, value]
    } else if (props.selectionMode === 'range') {
      return props.value ?? props.defaultValue ?? [null, null]
    } else {
      return [null, null]
    }
  }, [props.selectionMode, props.value, props.defaultValue])

  const [begin, setBegin] = useState<Dayjs | null>(null)
  const [end, setEnd] = useState<Dayjs | null>(null)
  useLayoutEffect(() => {
    setBegin(dateRange[0] ? dayjs(dateRange[0]) : null)
    setEnd(dateRange[1] ? dayjs(dateRange[1]) : null)
  }, [dateRange[0], dateRange[1]])

  function renderCells() {
    const cells: ReactNode[] = []
    let iterator = current.subtract(current.isoWeekday(), 'day')
    if (props.weekStartsOn === 'Monday') {
      iterator = iterator.add(1, 'day')
    }
    while (cells.length < 6 * 7) {
      const d = iterator
      const isSelect = (() => {
        if (!begin) return false
        if (d.isSame(begin, 'day')) return true
        if (!end) return false
        if (d.isSame(end, 'day')) return true
        return d.isAfter(begin, 'day') && d.isBefore(end, 'day')
      })()
      const inThisMonth = d.month() === current.month()
      cells.push(
        <div
          key={d.valueOf()}
          className={classNames(
            `${classPrefix}-cell`,
            inThisMonth ? `${classPrefix}-cell-in` : `${classPrefix}-cell-out`,
            inThisMonth && {
              [`${classPrefix}-cell-today`]: d.isSame(today, 'day'),
              [`${classPrefix}-cell-selected`]: isSelect,
              [`${classPrefix}-cell-selected-begin`]:
                isSelect && d.isSame(begin, 'day'),
              [`${classPrefix}-cell-selected-end`]:
                isSelect && (!end || d.isSame(end, 'day')),
            }
          )}
          onClick={() => {
            if (!props.selectionMode) return
            if (props.selectionMode === 'single') {
              setBegin(d)
              setEnd(d)
              props.onChange?.(d.toDate())
            } else if (props.selectionMode === 'range') {
              if (begin !== null && end === null) {
                if (d.isBefore(begin)) {
                  setEnd(begin)
                  setBegin(d)
                  props.onChange?.([d.toDate(), begin.toDate()])
                } else {
                  setEnd(d)
                  props.onChange?.([begin.toDate(), d.toDate()])
                }
              } else {
                setBegin(d)
                setEnd(null)
              }
            }
            if (!inThisMonth) {
              setCurrent(d.clone().date(1))
            }
          }}
        >
          <div className={`${classPrefix}-cell-top`}>{d.date()}</div>
          <div className={`${classPrefix}-cell-bottom`}>
            {props.renderLabel?.(d.toDate())}
          </div>
        </div>
      )
      iterator = iterator.add(1, 'day')
    }
    return cells
  }
  const body = <div className={`${classPrefix}-cells`}>{renderCells()}</div>

  const mark = (
    <div className={`${classPrefix}-mark`}>
      {markItems.map(item => (
        <div key={item} className={`${classPrefix}-mark-cell`}>
          {item}
        </div>
      ))}
    </div>
  )

  return withNativeProps(
    props,
    <div className={classPrefix}>
      {header}
      {mark}
      {body}
    </div>
  )
}

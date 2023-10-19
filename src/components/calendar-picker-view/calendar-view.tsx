import React, {
  forwardRef,
  useState,
  useImperativeHandle,
  useMemo,
} from 'react'
import type { ReactNode } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import dayjs from 'dayjs'
import classNames from 'classnames'
import { mergeProps } from '../../utils/with-default-props'
import { useConfig } from '../config-provider'
import isoWeek from 'dayjs/plugin/isoWeek'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import { usePropsValue } from '../../utils/use-props-value'
import {
  convertValueToRange,
  convertPageToDayjs,
  DateRange,
  Page,
} from './convert'

dayjs.extend(isoWeek)
dayjs.extend(isSameOrBefore)

const classPrefix = 'adm-calendar-view'

export type CalendarViewRef = {
  jumpTo: (page: Page | ((page: Page) => Page)) => void
  jumpToToday: () => void
  getDateRange: () => DateRange
}

export type CalendarViewProps = {
  title?: React.ReactNode
  confirmText?: string
  weekStartsOn?: 'Monday' | 'Sunday'
  renderTop?: (date: Date) => React.ReactNode
  renderDate?: (date: Date) => React.ReactNode
  renderBottom?: (date: Date) => React.ReactNode
  allowClear?: boolean
  max?: Date
  min?: Date
  shouldDisableDate?: (date: Date) => boolean
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
      onChange?: (val: Date | null) => void
    }
  | {
      selectionMode: 'range'
      value?: [Date, Date] | null
      defaultValue?: [Date, Date] | null
      onChange?: (val: [Date, Date] | null) => void
    }
) &
  NativeProps

const defaultProps = {
  weekStartsOn: 'Sunday',
  defaultValue: null,
  allowClear: true,
  usePopup: true,
  selectionMode: 'single',
}

export const CalendarView = forwardRef<CalendarViewRef, CalendarViewProps>(
  (p, ref) => {
    const today = dayjs()
    const props = mergeProps(defaultProps, p)
    const { locale } = useConfig()
    const markItems = [...locale.Calendar.markItems]
    if (props.weekStartsOn === 'Sunday') {
      const item = markItems.pop()
      if (item) markItems.unshift(item)
    }

    const [dateRange, setDateRange] = usePropsValue<DateRange>({
      value:
        props.value === undefined
          ? undefined
          : convertValueToRange(props.selectionMode, props.value),
      defaultValue: convertValueToRange(
        props.selectionMode,
        props.defaultValue
      ),
      onChange: v => {
        if (props.selectionMode === 'single') {
          props.onChange?.(v ? v[0] : null)
        } else if (props.selectionMode === 'range') {
          props.onChange?.(v)
        }
      },
    })

    const [intermediate, setIntermediate] = useState(false)

    const [current, setCurrent] = useState(() =>
      dayjs(dateRange ? dateRange[0] : today).date(1)
    )

    useImperativeHandle(ref, () => ({
      jumpTo: pageOrPageGenerator => {
        let page: Page
        if (typeof pageOrPageGenerator === 'function') {
          page = pageOrPageGenerator({
            year: current.year(),
            month: current.month() + 1,
          })
        } else {
          page = pageOrPageGenerator
        }
        setCurrent(convertPageToDayjs(page))
      },
      jumpToToday: () => {
        setCurrent(dayjs().date(1))
      },
      getDateRange: () => dateRange,
    }))

    const header = (
      <div className={`${classPrefix}-header`}>
        <div className={`${classPrefix}-title`}>
          {props.title ?? locale.Calendar.title}
        </div>
      </div>
    )

    const maxDay = useMemo(
      () => (props.max ? dayjs(props.max) : current.add(6, 'month')),
      [props.max, current]
    )
    const minDay = useMemo(
      () => (props.min ? dayjs(props.min) : current),
      [props.min, current]
    )

    function renderBody() {
      const cells: ReactNode[] = []
      let monthIterator = minDay
      // 遍历月份
      while (monthIterator.isSameOrBefore(maxDay, 'month')) {
        const year = monthIterator.year()
        const month = monthIterator.month()
        const renderMap = {
          year,
          month: month + 1,
        }

        cells.push(
          <div key={`${year}-${month}`}>
            <div className={`${classPrefix}-title`}>
              {locale.Calendar.yearAndMonth?.replace(
                /\${(.*?)}/g,
                (_, variable: keyof typeof renderMap) => {
                  return renderMap[variable]?.toString()
                }
              )}
            </div>
            <div className={`${classPrefix}-cells`}>
              {/* 空格填充 */}
              {Array(
                props.weekStartsOn === 'Monday'
                  ? monthIterator.date(1).isoWeekday() - 1
                  : monthIterator.date(1).isoWeekday()
              )
                .fill(null)
                .map((_, index) => (
                  <div key={index} className={`${classPrefix}-cell`}></div>
                ))}
              {/* 遍历每月 */}
              {Array(monthIterator.daysInMonth())
                .fill(null)
                .map((_, index) => {
                  const d = monthIterator.date(index + 1)
                  let isSelect = false
                  let isBegin = false
                  let isEnd = false
                  let isSelectRowBegin = false
                  let isSelectRowEnd = false
                  if (dateRange) {
                    const [begin, end] = dateRange
                    isBegin = d.isSame(begin, 'day')
                    isEnd = d.isSame(end, 'day')
                    isSelect =
                      isBegin ||
                      isEnd ||
                      (d.isAfter(begin, 'day') && d.isBefore(end, 'day'))
                    if (isSelect) {
                      isSelectRowBegin =
                        (cells.length % 7 === 0 ||
                          d.isSame(d.startOf('month'), 'day')) &&
                        !isBegin
                      isSelectRowEnd =
                        (cells.length % 7 === 6 ||
                          d.isSame(d.endOf('month'), 'day')) &&
                        !isEnd
                    }
                  }
                  const disabled = props.shouldDisableDate
                    ? props.shouldDisableDate(d.toDate())
                    : (maxDay && d.isAfter(maxDay, 'day')) ||
                      (minDay && d.isBefore(minDay, 'day'))

                  const renderTop = () => {
                    const top = props.renderTop?.(d.toDate())

                    if (top) {
                      return top
                    }

                    if (props.selectionMode === 'range') {
                      if (isBegin) {
                        return locale.Calendar.start
                      }

                      if (isEnd) {
                        return locale.Calendar.end
                      }
                    }

                    if (d.isSame(today, 'day') && !isSelect) {
                      return locale.Calendar.today
                    }
                  }
                  return (
                    <div
                      key={d.valueOf()}
                      className={classNames(`${classPrefix}-cell`, {
                        [`${classPrefix}-cell-today`]: d.isSame(today, 'day'),
                        [`${classPrefix}-cell-selected`]: isSelect,
                        [`${classPrefix}-cell-selected-begin`]: isBegin,
                        [`${classPrefix}-cell-selected-end`]: isEnd,
                        [`${classPrefix}-cell-selected-row-begin`]:
                          isSelectRowBegin,
                        [`${classPrefix}-cell-selected-row-end`]:
                          isSelectRowEnd,
                        [`${classPrefix}-cell-disabled`]: !!disabled,
                      })}
                      onClick={() => {
                        if (!props.selectionMode) return
                        if (disabled) return
                        const date = d.toDate()
                        function shouldClear() {
                          if (!props.allowClear) return false
                          if (!dateRange) return false
                          const [begin, end] = dateRange
                          return d.isSame(begin, 'date') && d.isSame(end, 'day')
                        }
                        if (props.selectionMode === 'single') {
                          if (props.allowClear && shouldClear()) {
                            setDateRange(null)
                            return
                          }
                          setDateRange([date, date])
                        } else if (props.selectionMode === 'range') {
                          if (!dateRange) {
                            setDateRange([date, date])
                            setIntermediate(true)
                            return
                          }
                          if (shouldClear()) {
                            setDateRange(null)
                            setIntermediate(false)
                            return
                          }
                          if (intermediate) {
                            const another = dateRange[0]
                            setDateRange(
                              another > date ? [date, another] : [another, date]
                            )
                            setIntermediate(false)
                          } else {
                            setDateRange([date, date])
                            setIntermediate(true)
                          }
                        }
                      }}
                    >
                      <div className={`${classPrefix}-cell-top`}>
                        {renderTop()}
                      </div>
                      <div className={`${classPrefix}-cell-date`}>
                        {props.renderDate
                          ? props.renderDate(d.toDate())
                          : d.date()}
                      </div>
                      <div className={`${classPrefix}-cell-bottom`}>
                        {props.renderBottom?.(d.toDate())}
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        )

        monthIterator = monthIterator.add(1, 'month')
      }

      return cells
    }
    const body = <div className={`${classPrefix}-body`}>{renderBody()}</div>

    const mark = (
      <div className={`${classPrefix}-mark`}>
        {markItems.map((item, index) => (
          <div key={index} className={`${classPrefix}-mark-cell`}>
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
)

import { useUpdateEffect } from 'ahooks'
import classNames from 'classnames'
import dayjs from 'dayjs'
import isoWeek from 'dayjs/plugin/isoWeek'
import React, {
  ReactNode,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react'
import { devWarning } from '../../utils/dev-log'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { replaceMessage } from '../../utils/replace-message'
import { usePropsValue } from '../../utils/use-props-value'
import { mergeProps } from '../../utils/with-default-props'
import { useConfig } from '../config-provider'
import { ArrowLeft } from './arrow-left'
import { ArrowLeftDouble } from './arrow-left-double'
import {
  DateRange,
  Page,
  convertPageToDayjs,
  convertValueToRange,
} from './convert'

dayjs.extend(isoWeek)

const classPrefix = 'adm-calendar'

export type CalendarRef = {
  jumpTo: (page: Page | ((page: Page) => Page)) => void
  jumpToToday: () => void
}

export type CalendarProps = {
  prevMonthButton?: React.ReactNode
  prevYearButton?: React.ReactNode
  nextMonthButton?: React.ReactNode
  nextYearButton?: React.ReactNode
  onPageChange?: (year: number, month: number) => void
  weekStartsOn?: 'Monday' | 'Sunday'
  renderLabel?: (date: Date) => React.ReactNode
  renderDate?: (date: Date) => React.ReactNode
  allowClear?: boolean
  max?: Date
  min?: Date
  shouldDisableDate?: (date: Date) => boolean
  minPage?: Page
  maxPage?: Page
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
  prevMonthButton: <ArrowLeft />,
  prevYearButton: <ArrowLeftDouble />,
  nextMonthButton: <ArrowLeft />,
  nextYearButton: <ArrowLeftDouble />,
}

export const Calendar = forwardRef<CalendarRef, CalendarProps>((props, ref) => {
  const today = dayjs()
  const mergedProps = mergeProps(defaultProps, props)
  const { locale } = useConfig()
  const markItems = [...locale.Calendar.markItems]
  if (mergedProps.weekStartsOn === 'Sunday') {
    const item = markItems.pop()
    if (item) markItems.unshift(item)
  }

  const [dateRange, setDateRange] = usePropsValue<DateRange>({
    value:
      mergedProps.value === undefined
        ? undefined
        : convertValueToRange(mergedProps.selectionMode, mergedProps.value),
    defaultValue: convertValueToRange(
      mergedProps.selectionMode,
      mergedProps.defaultValue
    ),
    onChange: v => {
      if (mergedProps.selectionMode === 'single') {
        mergedProps.onChange?.(v ? v[0] : null)
      } else if (mergedProps.selectionMode === 'range') {
        mergedProps.onChange?.(v)
      }
    },
  })

  const [intermediate, setIntermediate] = useState(false)

  const [current, setCurrent] = useState(() =>
    dayjs(dateRange ? dateRange[0] : today).date(1)
  )

  useUpdateEffect(() => {
    mergedProps.onPageChange?.(current.year(), current.month() + 1)
  }, [current])

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
  }))

  const handlePageChange = (
    action: 'subtract' | 'add',
    num: number,
    type: 'month' | 'year'
  ) => {
    const nxtCurrent = current[action](num, type)
    if (action === 'subtract' && mergedProps.minPage) {
      const minPage = convertPageToDayjs(mergedProps.minPage)
      if (nxtCurrent.isBefore(minPage, type)) {
        return
      }
    }
    if (action === 'add' && mergedProps.maxPage) {
      const maxPage = convertPageToDayjs(mergedProps.maxPage)
      if (nxtCurrent.isAfter(maxPage, type)) {
        return
      }
    }
    setCurrent(nxtCurrent)
  }

  const header = (
    <div className={`${classPrefix}-header`}>
      <a
        className={`${classPrefix}-arrow-button ${classPrefix}-arrow-button-year`}
        onClick={() => {
          handlePageChange('subtract', 1, 'year')
        }}
      >
        {mergedProps.prevYearButton}
      </a>
      <a
        className={`${classPrefix}-arrow-button ${classPrefix}-arrow-button-month`}
        onClick={() => {
          handlePageChange('subtract', 1, 'month')
        }}
      >
        {mergedProps.prevMonthButton}
      </a>
      <div className={`${classPrefix}-title`}>
        {replaceMessage(locale.Calendar.yearAndMonth, {
          year: current.year().toString(),
          month: (current.month() + 1).toString(),
        })}
      </div>
      <a
        className={classNames(
          `${classPrefix}-arrow-button`,
          `${classPrefix}-arrow-button-right`,
          `${classPrefix}-arrow-button-right-month`
        )}
        onClick={() => {
          handlePageChange('add', 1, 'month')
        }}
      >
        {mergedProps.nextMonthButton}
      </a>
      <a
        className={classNames(
          `${classPrefix}-arrow-button`,
          `${classPrefix}-arrow-button-right`,
          `${classPrefix}-arrow-button-right-year`
        )}
        onClick={() => {
          handlePageChange('add', 1, 'year')
        }}
      >
        {mergedProps.nextYearButton}
      </a>
    </div>
  )

  const maxDay = useMemo(
    () => mergedProps.max && dayjs(mergedProps.max),
    [mergedProps.max]
  )
  const minDay = useMemo(
    () => mergedProps.min && dayjs(mergedProps.min),
    [mergedProps.min]
  )

  function renderCells() {
    const cells: ReactNode[] = []
    let iterator = current.subtract(current.isoWeekday(), 'day')
    if (mergedProps.weekStartsOn === 'Monday') {
      iterator = iterator.add(1, 'day')
    }
    while (cells.length < 6 * 7) {
      const d = iterator
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
            (cells.length % 7 === 0 || d.isSame(d.startOf('month'), 'day')) &&
            !isBegin
          isSelectRowEnd =
            (cells.length % 7 === 6 || d.isSame(d.endOf('month'), 'day')) &&
            !isEnd
        }
      }
      const inThisMonth = d.month() === current.month()
      const disabled = mergedProps.shouldDisableDate
        ? mergedProps.shouldDisableDate(d.toDate())
        : (maxDay && d.isAfter(maxDay, 'day')) ||
          (minDay && d.isBefore(minDay, 'day'))
      cells.push(
        <div
          key={d.valueOf()}
          className={classNames(
            `${classPrefix}-cell`,
            (disabled || !inThisMonth) && `${classPrefix}-cell-disabled`,
            inThisMonth && {
              [`${classPrefix}-cell-today`]: d.isSame(today, 'day'),
              [`${classPrefix}-cell-selected`]: isSelect,
              [`${classPrefix}-cell-selected-begin`]: isBegin,
              [`${classPrefix}-cell-selected-end`]: isEnd,
              [`${classPrefix}-cell-selected-row-begin`]: isSelectRowBegin,
              [`${classPrefix}-cell-selected-row-end`]: isSelectRowEnd,
            }
          )}
          onClick={() => {
            if (!mergedProps.selectionMode) return
            if (disabled) return
            const date = d.toDate()
            if (!inThisMonth) {
              setCurrent(d.clone().date(1))
            }
            function shouldClear() {
              if (!mergedProps.allowClear) return false
              if (!dateRange) return false
              const [begin, end] = dateRange
              return d.isSame(begin, 'date') && d.isSame(end, 'day')
            }
            if (mergedProps.selectionMode === 'single') {
              if (mergedProps.allowClear && shouldClear()) {
                setDateRange(null)
                return
              }
              setDateRange([date, date])
            } else if (mergedProps.selectionMode === 'range') {
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
                setDateRange(another > date ? [date, another] : [another, date])
                setIntermediate(false)
              } else {
                setDateRange([date, date])
                setIntermediate(true)
              }
            }
          }}
        >
          <div className={`${classPrefix}-cell-top`}>
            {mergedProps.renderDate
              ? mergedProps.renderDate(d.toDate())
              : d.date()}
          </div>
          <div className={`${classPrefix}-cell-bottom`}>
            {mergedProps.renderLabel?.(d.toDate())}
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
      {markItems.map((item, index) => (
        <div key={index} className={`${classPrefix}-mark-cell`}>
          {item}
        </div>
      ))}
    </div>
  )

  // Dev only warning
  if (process.env.NODE_ENV !== 'production') {
    useEffect(() => {
      devWarning(
        'Calendar',
        'Calendar will be removed in the future, please use CalendarPickerView instead.'
      )
    }, [])
  }

  return withNativeProps(
    mergedProps,
    <div className={classPrefix}>
      {header}
      {mark}
      {body}
    </div>
  )
})

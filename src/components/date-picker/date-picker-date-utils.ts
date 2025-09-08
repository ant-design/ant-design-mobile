import dayjs from 'dayjs'
import isLeapYear from 'dayjs/plugin/isLeapYear'
import isoWeek from 'dayjs/plugin/isoWeek'
import isoWeeksInYear from 'dayjs/plugin/isoWeeksInYear'
import { RenderLabel } from '../date-picker-view/date-picker-view'
import { PickerColumn } from '../picker'
import type { DatePickerFilter } from './date-picker-utils'
import {
  DateColumnType,
  DAY_COLUMN,
  HOUR_COLUMN,
  MINUTE_COLUMN,
  MONTH_COLUMN,
  SECOND_COLUMN,
  TILL_NOW,
  YEAR_COLUMN,
} from './util'

dayjs.extend(isoWeek)
dayjs.extend(isoWeeksInYear)
dayjs.extend(isLeapYear)

export type DatePrecision =
  | 'year'
  | 'month'
  | 'day'
  | 'hour'
  | 'minute'
  | 'second'

const precisionRankRecord: Record<DatePrecision, number> = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5,
}

const columnToPrecisionMap: Record<DateColumnType, DatePrecision> = {
  [YEAR_COLUMN]: 'year',
  [MONTH_COLUMN]: 'month',
  [DAY_COLUMN]: 'day',
  [HOUR_COLUMN]: 'hour',
  [MINUTE_COLUMN]: 'minute',
  [SECOND_COLUMN]: 'second',
}

export function generateDatePickerColumns(
  selected: string[],
  min: Date,
  max: Date,
  precision: DatePrecision,
  renderLabel: RenderLabel,
  filter: DatePickerFilter | undefined,
  tillNow?: boolean,
  columns?: DateColumnType[]
) {
  const ret: PickerColumn[] = []

  const minYear = min.getFullYear()
  const minMonth = min.getMonth() + 1
  const minDay = min.getDate()
  const minHour = min.getHours()
  const minMinute = min.getMinutes()
  const minSecond = min.getSeconds()

  const maxYear = max.getFullYear()
  const maxMonth = max.getMonth() + 1
  const maxDay = max.getDate()
  const maxHour = max.getHours()
  const maxMinute = max.getMinutes()
  const maxSecond = max.getSeconds()

  const rank = precisionRankRecord[precision]
  const defaultColumns: DateColumnType[] = []
  Object.keys(columnToPrecisionMap).forEach(columnType => {
    const precision = columnToPrecisionMap[columnType as DateColumnType]
    if (rank >= precisionRankRecord[precision]) {
      defaultColumns.push(columnType as DateColumnType)
    }
  })

  const finalColumns = columns?.length ? columns : defaultColumns
  const renderedColumns = finalColumns.filter(columnType => {
    const columnPrecision = columnToPrecisionMap[columnType]
    return rank >= precisionRankRecord[columnPrecision]
  })
  function getValue(type: DateColumnType): number | null {
    const index = renderedColumns.indexOf(type)
    if (index >= 0 && index < selected.length) {
      const val = parseInt(selected[index], 10)
      return isNaN(val) ? null : val
    }
    return null
  }

  const selectedYear = getValue(YEAR_COLUMN) ?? min.getFullYear()
  const selectedMonth = getValue(MONTH_COLUMN) ?? 1
  const selectedDay = getValue(DAY_COLUMN) ?? 1
  const selectedHour = getValue(HOUR_COLUMN) ?? 0
  const selectedMinute = getValue(MINUTE_COLUMN) ?? 0
  const selectedSecond = getValue(SECOND_COLUMN) ?? 0
  const firstDayInSelectedMonth = dayjs(
    convertStringArrayToDate([selectedYear, selectedMonth, '1'])
  )

  const isInMinYear = selectedYear === minYear
  const isInMaxYear = selectedYear === maxYear
  const isInMinMonth = isInMinYear && selectedMonth === minMonth
  const isInMaxMonth = isInMaxYear && selectedMonth === maxMonth
  const isInMinDay = isInMinMonth && selectedDay === minDay
  const isInMaxDay = isInMaxMonth && selectedDay === maxDay
  const isInMinHour = isInMinDay && selectedHour === minHour
  const isInMaxHour = isInMaxDay && selectedHour === maxHour
  const isInMinMinute = isInMinHour && selectedMinute === minMinute
  const isInMaxMinute = isInMaxHour && selectedMinute === maxMinute

  const generateColumn = (
    from: number,
    to: number,
    precision: DatePrecision
  ) => {
    let column: number[] = []
    for (let i = from; i <= to; i++) {
      column.push(i)
    }
    const prefix = selected.slice(0, precisionRankRecord[precision])
    const currentFilter = filter?.[precision]
    if (currentFilter && typeof currentFilter === 'function') {
      column = column.filter(i =>
        currentFilter(i, {
          get date() {
            const stringArray = [...prefix, i.toString()]
            return convertStringArrayToDate(stringArray)
          },
        })
      )
    }
    return column
  }

  renderedColumns.forEach(columnType => {
    switch (columnType) {
      case YEAR_COLUMN: {
        const lower = minYear
        const upper = maxYear
        const years = generateColumn(lower, upper, 'year')
        ret.push(
          years.map(v => ({
            label: renderLabel('year', v, { selected: selectedYear === v }),
            value: v.toString(),
          }))
        )
        break
      }
      case MONTH_COLUMN: {
        const lowerMonth = isInMinYear ? minMonth : 1
        const upperMonth = isInMaxYear ? maxMonth : 12
        const months = generateColumn(lowerMonth, upperMonth, 'month')
        ret.push(
          months.map(v => ({
            label: renderLabel('month', v, { selected: selectedMonth === v }),
            value: v.toString(),
          }))
        )
        break
      }
      case DAY_COLUMN: {
        const lowerDay = isInMinMonth ? minDay : 1
        const upperDay = isInMaxMonth
          ? maxDay
          : firstDayInSelectedMonth.daysInMonth()
        const days = generateColumn(lowerDay, upperDay, 'day')
        ret.push(
          days.map(v => ({
            label: renderLabel('day', v, { selected: selectedDay === v }),
            value: v.toString(),
          }))
        )
        break
      }
      case HOUR_COLUMN: {
        const lowerHour = isInMinDay ? minHour : 0
        const upperHour = isInMaxDay ? maxHour : 23
        const hours = generateColumn(lowerHour, upperHour, 'hour')
        ret.push(
          hours.map(v => ({
            label: renderLabel('hour', v, { selected: selectedHour === v }),
            value: v.toString(),
          }))
        )
        break
      }
      case MINUTE_COLUMN: {
        const lowerMinute = isInMinHour ? minMinute : 0
        const upperMinute = isInMaxHour ? maxMinute : 59
        const minutes = generateColumn(lowerMinute, upperMinute, 'minute')
        ret.push(
          minutes.map(v => ({
            label: renderLabel('minute', v, { selected: selectedMinute === v }),
            value: v.toString(),
          }))
        )
        break
      }
      case SECOND_COLUMN: {
        const lowerSecond = isInMinMinute ? minSecond : 0
        const upperSecond = isInMaxMinute ? maxSecond : 59
        const seconds = generateColumn(lowerSecond, upperSecond, 'second')
        ret.push(
          seconds.map(v => ({
            label: renderLabel('second', v, { selected: selectedSecond === v }),
            value: v.toString(),
          }))
        )
        break
      }
    }
  })

  // Till Now
  if (tillNow && ret.length > 0) {
    ret[0].push({
      label: renderLabel('now', 0, { selected: selected[0] === TILL_NOW }),
      value: TILL_NOW,
    })

    if (TILL_NOW === selected?.[0]) {
      for (let i = 1; i < ret.length; i += 1) {
        ret[i] = []
      }
    }
  }

  return ret
}

export function convertDateToStringArray(
  date: Date | undefined | null
): string[] {
  if (!date) return []
  return [
    date.getFullYear().toString(),
    (date.getMonth() + 1).toString(),
    date.getDate().toString(),
    date.getHours().toString(),
    date.getMinutes().toString(),
    date.getSeconds().toString(),
  ]
}

export function convertStringArrayToDate<
  T extends string | number | null | undefined,
>(value: T[], columns?: DateColumnType[]): Date {
  const now = new Date()

  // 默认值
  let yearString = '1900'
  let monthString = '1'
  let dateString = '1'
  let hourString = '0'
  let minuteString = '0'
  let secondString = '0'

  if (columns && value.length > 0) {
    columns.forEach((columnType, index) => {
      const val = value[index]?.toString() ?? null

      switch (columnType) {
        case YEAR_COLUMN:
          if (val) yearString = val
          break
        case MONTH_COLUMN:
          if (val) monthString = val
          break
        case DAY_COLUMN:
          if (val) dateString = val
          break
        case HOUR_COLUMN:
          if (val) hourString = val
          break
        case MINUTE_COLUMN:
          if (val) minuteString = val
          break
        case SECOND_COLUMN:
          if (val) secondString = val
          break
      }
    })

    if (!columns.includes(YEAR_COLUMN))
      yearString = now.getFullYear().toString()
    if (!columns.includes(MONTH_COLUMN))
      monthString = (now.getMonth() + 1).toString()
    if (!columns.includes(DAY_COLUMN)) dateString = now.getDate().toString()
    if (!columns.includes(HOUR_COLUMN)) hourString = now.getHours().toString()
    if (!columns.includes(MINUTE_COLUMN))
      minuteString = now.getMinutes().toString()
    if (!columns.includes(SECOND_COLUMN))
      secondString = now.getSeconds().toString()
  } else {
    yearString = (value[0] ?? '1900').toString()
    monthString = (value[1] ?? '1').toString()
    dateString = (value[2] ?? '1').toString()
    hourString = (value[3] ?? '0').toString()
    minuteString = (value[4] ?? '0').toString()
    secondString = (value[5] ?? '0').toString()
  }

  return new Date(
    parseInt(yearString),
    parseInt(monthString) - 1,
    parseInt(dateString),
    parseInt(hourString),
    parseInt(minuteString),
    parseInt(secondString)
  )
}

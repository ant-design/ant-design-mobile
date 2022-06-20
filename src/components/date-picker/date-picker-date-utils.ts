import { ReactNode } from 'react'
import dayjs from 'dayjs'
import isoWeek from 'dayjs/plugin/isoWeek'
import isoWeeksInYear from 'dayjs/plugin/isoWeeksInYear'
import isLeapYear from 'dayjs/plugin/isLeapYear'
import { PickerColumn } from '../picker'
import type { DatePickerFilter } from './date-picker-utils'

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

export function defaultRenderLabel(type: DatePrecision, data: number) {
  switch (type) {
    case 'minute':
    case 'second':
    case 'hour':
      return ('0' + data.toString()).slice(-2)
    default:
      return data.toString()
  }
}

export function generateDatePickerColumns(
  selected: string[],
  min: Date,
  max: Date,
  precision: DatePrecision,
  renderLabel: (type: DatePrecision, data: number) => ReactNode,
  filter: DatePickerFilter | undefined
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

  const selectedYear = parseInt(selected[0])
  const firstDayInSelectedMonth = dayjs(
    convertStringArrayToDate([selected[0], selected[1], '1'])
  )
  const selectedMonth = parseInt(selected[1])
  const selectedDay = parseInt(selected[2])
  const selectedHour = parseInt(selected[3])
  const selectedMinute = parseInt(selected[4])

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

  if (rank >= precisionRankRecord.year) {
    const lower = minYear
    const upper = maxYear
    const years = generateColumn(lower, upper, 'year')
    ret.push(
      years.map(v => {
        return {
          label: renderLabel('year', v),
          value: v.toString(),
        }
      })
    )
  }

  if (rank >= precisionRankRecord.month) {
    const lower = isInMinYear ? minMonth : 1
    const upper = isInMaxYear ? maxMonth : 12
    const months = generateColumn(lower, upper, 'month')
    ret.push(
      months.map(v => {
        return {
          label: renderLabel('month', v),
          value: v.toString(),
        }
      })
    )
  }
  if (rank >= precisionRankRecord.day) {
    const lower = isInMinMonth ? minDay : 1
    const upper = isInMaxMonth ? maxDay : firstDayInSelectedMonth.daysInMonth()
    const days = generateColumn(lower, upper, 'day')
    ret.push(
      days.map(v => {
        return {
          label: renderLabel('day', v),
          value: v.toString(),
        }
      })
    )
  }
  if (rank >= precisionRankRecord.hour) {
    const lower = isInMinDay ? minHour : 0
    const upper = isInMaxDay ? maxHour : 23
    const hours = generateColumn(lower, upper, 'hour')
    ret.push(
      hours.map(v => {
        return {
          label: renderLabel('hour', v),
          value: v.toString(),
        }
      })
    )
  }
  if (rank >= precisionRankRecord.minute) {
    const lower = isInMinHour ? minMinute : 0
    const upper = isInMaxHour ? maxMinute : 59
    const minutes = generateColumn(lower, upper, 'minute')
    ret.push(
      minutes.map(v => {
        return {
          label: renderLabel('minute', v),
          value: v.toString(),
        }
      })
    )
  }
  if (rank >= precisionRankRecord.second) {
    const lower = isInMinMinute ? minSecond : 0
    const upper = isInMaxMinute ? maxSecond : 59
    const seconds = generateColumn(lower, upper, 'second')
    ret.push(
      seconds.map(v => {
        return {
          label: renderLabel('second', v),
          value: v.toString(),
        }
      })
    )
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

export function convertStringArrayToDate(
  value: (string | null | undefined)[]
): Date {
  const yearString = value[0] ?? '1900'
  const monthString = value[1] ?? '1'
  const dateString = value[2] ?? '1'
  const hourString = value[3] ?? '0'
  const minuteString = value[4] ?? '0'
  const secondString = value[5] ?? '0'
  return new Date(
    parseInt(yearString),
    parseInt(monthString) - 1,
    parseInt(dateString),
    parseInt(hourString),
    parseInt(minuteString),
    parseInt(secondString)
  )
}

import { PickerColumnItem } from '../picker-view'
import { ReactNode } from 'react'
import dayjs from 'dayjs'
import isoWeek from 'dayjs/plugin/isoWeek'
import isoWeeksInYear from 'dayjs/plugin/isoWeeksInYear'
import isLeapYear from 'dayjs/plugin/isLeapYear'
import { generateIntArray } from '../../utils/generate-int-array'
import { PickerColumn } from '../picker'

dayjs.extend(isoWeek)
dayjs.extend(isoWeeksInYear)
dayjs.extend(isLeapYear)

export type Precision =
  | 'year'
  | 'month'
  | 'day'
  | 'hour'
  | 'minute'
  | 'second'
  | 'week'
  | 'day-of-week'

const precisionRankRecord: Record<Precision, number> = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5,
  week: 10,
  'day-of-week': 11,
}

export function defaultRenderLabel(type: Precision, data: number) {
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
  precision: Precision,
  renderLabel: (type: Precision, data: number) => ReactNode
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

  if (rank >= precisionRankRecord.year) {
    const years: PickerColumnItem[] = []
    for (let i = minYear; i <= maxYear; i++) {
      const value = i.toString()
      years.push({
        label: renderLabel ? renderLabel('year', i) : value,
        value,
      })
    }
    ret.push(years)
  }

  const selectedYear = parseInt(selected[0])
  const isInMinYear = selectedYear === minYear
  const isInMaxYear = selectedYear === maxYear

  // rank >= 10 的情况：周选择
  if (rank >= 10) {
    const minDay = dayjs(min)
    const maxDay = dayjs(max)
    const minWeek = minDay.isoWeek()
    const maxWeek = maxDay.isoWeek()
    const minWeekday = minDay.isoWeekday()
    const maxWeekday = maxDay.isoWeekday()
    const selectedWeek = parseInt(selected[1])
    const isInMinWeek = isInMinYear && selectedWeek === minMonth
    const isInMaxWeek = isInMaxYear && selectedWeek === maxMonth
    const selectedYearWeeks = dayjs(`${selectedYear}-01-01`).isoWeeksInYear()

    if (rank >= precisionRankRecord.week) {
      const lower = isInMinYear ? minWeek : 1
      const upper = isInMaxYear ? maxWeek : selectedYearWeeks
      const weeks = generateIntArray(lower, upper)
      ret.push(
        weeks.map(v => {
          return {
            label: renderLabel('week', v),
            value: v.toString(),
          }
        })
      )
    }
    if (rank >= precisionRankRecord['day-of-week']) {
      const lower = isInMinWeek ? minWeekday : 1
      const upper = isInMaxWeek ? maxWeekday : 7
      const weeks = generateIntArray(lower, upper)
      ret.push(
        weeks.map(v => {
          return {
            label: renderLabel('day-of-week', v),
            value: v.toString(),
          }
        })
      )
    }

    return ret
  }

  // rank < 10 的情况：标准时间选择
  const firstDayInSelectedMonth = dayjs(
    convertStringArrayToDate([selected[0], selected[1], '1'], precision)
  )
  const selectedMonth = parseInt(selected[1])
  const selectedDay = parseInt(selected[2])
  const selectedHour = parseInt(selected[3])
  const selectedMinute = parseInt(selected[4])

  const isInMinMonth = isInMinYear && selectedMonth === minMonth
  const isInMaxMonth = isInMaxYear && selectedMonth === maxMonth
  const isInMinDay = isInMinMonth && selectedDay === minDay
  const isInMaxDay = isInMaxMonth && selectedDay === maxDay
  const isInMinHour = isInMinDay && selectedHour === minHour
  const isInMaxHour = isInMaxDay && selectedHour === maxHour
  const isInMinMinute = isInMinHour && selectedMinute === minMinute
  const isInMaxMinute = isInMaxHour && selectedMinute === maxMinute

  if (rank >= precisionRankRecord.month) {
    const lower = isInMinYear ? minMonth : 1
    const upper = isInMaxYear ? maxMonth : 12
    const months = generateIntArray(lower, upper)
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
    const days = generateIntArray(lower, upper)
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
    const hours = generateIntArray(lower, upper)
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
    const minutes = generateIntArray(lower, upper)
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
    const seconds = generateIntArray(lower, upper)
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
  date: Date | undefined | null,
  precision: Precision
): string[] {
  if (!date) return []
  if (precision.includes('week')) {
    const day = dayjs(date)
    return [
      date.getFullYear().toString(),
      day.isoWeek().toString(),
      day.isoWeekday().toString(),
    ]
  }
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
  value: (string | null | undefined)[],
  precision: Precision
): Date | null {
  if (value.length === 0) return null
  const yearString = value[0] ?? '1900'

  if (precision.includes('week')) {
    const weekString = value[1] ?? '1'
    const weekdayString = value[2] ?? '1'
    const day = dayjs()
      .year(parseInt(yearString))
      .isoWeek(parseInt(weekString))
      .isoWeekday(parseInt(weekdayString))
    return new Date(day.format('YYYY-MM-DD'))
  }
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

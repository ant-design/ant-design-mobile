import { PickerColumnItem } from '../picker-view'
import { ReactNode } from 'react'
import dayjs from 'dayjs'
import { generateIntArray } from '../../utils/generate-int-array'
import { PickerColumn } from '../picker'
import { useConfig } from '../config-provider'
import { Locale } from 'antd-mobile/src/locales/base'

export type Precision =
  | 'year'
  | 'month'
  | 'day'
  | 'halfDay'
  | 'hour'
  | 'minute'
  | 'second'

const AM_DEFAULT_HOUR = '10'
const PM_DEFAULT_HOUR = '14'
const AM_PM_BOUNDARY = 12

const precisionRankRecord: Record<Precision, number> = {
  year: 0,
  month: 1,
  day: 2,
  halfDay: 3,
  hour: 4,
  minute: 5,
  second: 6,
}

export function defaultRenderLabel(type: Precision, data: number | string) {
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
  renderLabel: (type: Precision, data: number | string) => ReactNode,
  halfDayItems: string[]
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

  const firstDayInSelectedMonth = dayjs(
    convertStringArrayToDate([selected[0], selected[1], '1'], halfDayItems)
  )
  const selectedYear = parseInt(selected[0])
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
  if (rank == precisionRankRecord.halfDay) {
    ret.push(
      halfDayItems.map(v => {
        return {
          label: renderLabel('halfDay', v),
          value: v.toString(),
        }
      })
    )
    return ret
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

function getAmPmLabel(date: Date, halfDayItems: string[]) {
  return date.getHours() <= AM_PM_BOUNDARY ? halfDayItems[0] : halfDayItems[1]
}

export function convertDateToStringArray(
  date: Date | undefined | null,
  precision: Precision,
  halfDayItems: string[]
): string[] {
  if (!date) return []
  const ret = [
    date.getFullYear().toString(),
    (date.getMonth() + 1).toString(),
    date.getDate().toString(),
  ]
  if (precision == 'halfDay') {
    ret.push(getAmPmLabel(date, halfDayItems))
  } else {
    ret.push.apply(ret, [
      date.getHours().toString(),
      date.getMinutes().toString(),
      date.getSeconds().toString(),
    ])
  }
  return ret
}

function convertAmPmToHour(
  halfDay: string | undefined | null,
  halfDayItems: string[]
) {
  if (!halfDay || !halfDayItems.includes(halfDay)) return halfDay ?? '0'
  return halfDayItems[0] === halfDay ? AM_DEFAULT_HOUR : PM_DEFAULT_HOUR
}

export function convertStringArrayToDate(
  value: (string | null | undefined)[],
  halfDayItems: string[]
): Date | null {
  if (value.length === 0) return null

  const yearString = value[0] ?? '1900'
  const monthString = value[1] ?? '1'
  const dateString = value[2] ?? '1'
  const hourString = convertAmPmToHour(value[3], halfDayItems)
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

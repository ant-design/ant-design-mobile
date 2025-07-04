import dayjs from 'dayjs'
import isLeapYear from 'dayjs/plugin/isLeapYear'
import isoWeek from 'dayjs/plugin/isoWeek'
import isoWeeksInYear from 'dayjs/plugin/isoWeeksInYear'
import type { ReactNode } from 'react'
import { PickerColumn } from '../picker'
import type { DatePickerFilter } from './date-picker-utils'

dayjs.extend(isoWeek)
dayjs.extend(isoWeeksInYear)
dayjs.extend(isLeapYear)

export type WeekPrecision = 'year' | 'week' | 'week-day'

const precisionRankRecord: Record<WeekPrecision, number> = {
  year: 0,
  week: 1,
  'week-day': 2,
}

export function generateDatePickerColumns(
  selected: string[],
  min: Date,
  max: Date,
  precision: WeekPrecision,
  renderLabel: (
    type: WeekPrecision,
    data: number,
    info: {
      selected: boolean
    }
  ) => ReactNode,
  filter: DatePickerFilter | undefined
) {
  const ret: PickerColumn[] = []

  const minYear = min.getFullYear()
  const maxYear = max.getFullYear()

  const rank = precisionRankRecord[precision]

  const selectedYear = parseInt(selected[0])
  const isInMinYear = selectedYear === minYear
  const isInMaxYear = selectedYear === maxYear

  const minDay = dayjs(min)
  const maxDay = dayjs(max)
  const minWeek = minDay.isoWeek()
  const maxWeek = maxDay.isoWeek()
  const minWeekday = minDay.isoWeekday()
  const maxWeekday = maxDay.isoWeekday()
  const selectedWeek = parseInt(selected[1])
  const selectedWeekday = parseInt(selected[2])
  const isInMinWeek = isInMinYear && selectedWeek === minWeek
  const isInMaxWeek = isInMaxYear && selectedWeek === maxWeek
  const selectedYearWeeks = dayjs(`${selectedYear}-01-01`).isoWeeksInYear()

  const generateColumn = (
    from: number,
    to: number,
    precision: WeekPrecision
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
      years.map(v => ({
        label: renderLabel('year', v, { selected: selectedYear === v }),
        value: v.toString(),
      }))
    )
  }

  if (rank >= precisionRankRecord.week) {
    const lower = isInMinYear ? minWeek : 1
    const upper = isInMaxYear ? maxWeek : selectedYearWeeks
    const weeks = generateColumn(lower, upper, 'week')
    ret.push(
      weeks.map(v => ({
        label: renderLabel('week', v, { selected: selectedWeek === v }),
        value: v.toString(),
      }))
    )
  }
  if (rank >= precisionRankRecord['week-day']) {
    const lower = isInMinWeek ? minWeekday : 1
    const upper = isInMaxWeek ? maxWeekday : 7
    const weeks = generateColumn(lower, upper, 'week-day')
    ret.push(
      weeks.map(v => ({
        label: renderLabel('week-day', v, { selected: selectedWeekday === v }),
        value: v.toString(),
      }))
    )
  }

  return ret
}

export function convertDateToStringArray(
  date: Date | undefined | null
): string[] {
  if (!date) return []
  const day = dayjs(date)
  return [
    day.isoWeekYear().toString(),
    day.isoWeek().toString(),
    day.isoWeekday().toString(),
  ]
}

export function convertStringArrayToDate<
  T extends string | number | null | undefined,
>(value: T[]): Date {
  const yearString = value[0] ?? '1900'
  const weekString = value[1] ?? '1'
  const weekdayString = value[2] ?? '1'
  // See https://github.com/ant-design/ant-design-mobile/issues/6905
  const day = dayjs(`${parseInt(yearString as string)}-01-04`)
    .isoWeek(parseInt(weekString as string))
    .isoWeekday(parseInt(weekdayString as string))
    .hour(0)
    .minute(0)
    .second(0)
  return day.toDate()
}

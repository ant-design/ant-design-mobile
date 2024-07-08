import dayjs from 'dayjs'
import quarterOfYear from 'dayjs/plugin/quarterOfYear'
import type { ReactNode } from 'react'
import { PickerColumn } from '../picker'
import type { DatePickerFilter } from './date-picker-utils'

dayjs.extend(quarterOfYear)

export type QuarterPrecision = 'year' | 'quarter'

const precisionRankRecord: Record<QuarterPrecision, number> = {
  year: 0,
  quarter: 1,
}

export function generateDatePickerColumns(
  selected: string[],
  min: Date,
  max: Date,
  precision: QuarterPrecision,
  renderLabel: (type: QuarterPrecision, data: number) => ReactNode,
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
  const minQuarter = minDay.quarter()
  const maxQuarter = maxDay.quarter()

  const generateColumn = (
    from: number,
    to: number,
    precision: QuarterPrecision
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
        label: renderLabel('year', v),
        value: v.toString(),
      }))
    )
  }

  if (rank >= precisionRankRecord.quarter) {
    const lower = isInMinYear ? minQuarter : 1
    const upper = isInMaxYear ? maxQuarter : 4
    const quarters = generateColumn(lower, upper, 'quarter')
    ret.push(
      quarters.map(v => ({
        label: renderLabel('quarter', v),
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
  return [day.year().toString(), day.quarter().toString()]
}

export function convertStringArrayToDate<
  T extends string | number | null | undefined,
>(value: T[]): Date {
  const yearString = value[0] ?? '1900'
  const quarterString = value[1] ?? '1'
  const day = dayjs()
    .year(parseInt(yearString as string))
    .quarter(parseInt(quarterString as string))
    .hour(0)
    .minute(0)
    .second(0)
  return day.toDate()
}

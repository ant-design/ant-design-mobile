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

function getDefaultColumns(precision: DatePrecision): DateColumnType[] {
  const rank = precisionRankRecord[precision]
  return (Object.keys(columnToPrecisionMap) as DateColumnType[]).filter(
    columnType => rank >= precisionRankRecord[columnToPrecisionMap[columnType]]
  )
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
  const defaultColumns = getDefaultColumns(precision)
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
    new Date(selectedYear, selectedMonth - 1, 1)
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
    precision: DatePrecision,
    columnType: DateColumnType
  ) => {
    let column: number[] = []
    for (let i = from; i <= to; i++) {
      column.push(i)
    }
    const pos = Math.max(0, renderedColumns.indexOf(columnType))
    const prefix = selected.slice(0, pos)
    const partialColumns = renderedColumns.slice(0, pos).concat(columnType)
    const currentFilter = filter?.[precision]
    if (currentFilter && typeof currentFilter === 'function') {
      column = column.filter(i =>
        currentFilter(i, {
          get date() {
            const stringArray = [...prefix, i.toString()]
            return convertStringArrayToDate(
              stringArray,
              partialColumns,
              precision
            )
          },
        })
      )
    }
    return column
  }

  const columnConfigs = {
    [YEAR_COLUMN]: {
      lower: minYear,
      upper: maxYear,
      selected: selectedYear,
      precision: 'year' as DatePrecision,
    },
    [MONTH_COLUMN]: {
      lower: isInMinYear ? minMonth : 1,
      upper: isInMaxYear ? maxMonth : 12,
      selected: selectedMonth,
      precision: 'month' as DatePrecision,
    },
    [DAY_COLUMN]: {
      lower: isInMinMonth ? minDay : 1,
      upper: isInMaxMonth ? maxDay : firstDayInSelectedMonth.daysInMonth(),
      selected: selectedDay,
      precision: 'day' as DatePrecision,
    },
    [HOUR_COLUMN]: {
      lower: isInMinDay ? minHour : 0,
      upper: isInMaxDay ? maxHour : 23,
      selected: selectedHour,
      precision: 'hour' as DatePrecision,
    },
    [MINUTE_COLUMN]: {
      lower: isInMinHour ? minMinute : 0,
      upper: isInMaxHour ? maxMinute : 59,
      selected: selectedMinute,
      precision: 'minute' as DatePrecision,
    },
    [SECOND_COLUMN]: {
      lower: isInMinMinute ? minSecond : 0,
      upper: isInMaxMinute ? maxSecond : 59,
      selected: selectedSecond,
      precision: 'second' as DatePrecision,
    },
  }

  renderedColumns.forEach(columnType => {
    const config = columnConfigs[columnType]
    if (!config) return

    const column = generateColumn(
      config.lower,
      config.upper,
      config.precision,
      columnType
    )
    ret.push(
      column.map(v => ({
        label: renderLabel(config.precision, v, {
          selected: config.selected === v,
        }),
        value: v.toString(),
      }))
    )
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
>(
  value: T[],
  columns: DateColumnType[] | undefined,
  precision: DatePrecision
): Date {
  let finalColumns = columns
  if (!finalColumns || finalColumns.length === 0) {
    finalColumns = getDefaultColumns(precision)
  }

  const now = new Date()
  const dateParts = {
    [YEAR_COLUMN]: now.getFullYear().toString(),
    [MONTH_COLUMN]: (now.getMonth() + 1).toString(),
    [DAY_COLUMN]: now.getDate().toString(),
    [HOUR_COLUMN]: now.getHours().toString(),
    [MINUTE_COLUMN]: now.getMinutes().toString(),
    [SECOND_COLUMN]: now.getSeconds().toString(),
  }

  finalColumns.forEach((columnType, index) => {
    const val = value[index]
    if (val !== null && val !== undefined) {
      dateParts[columnType] = val.toString()
    }
  })

  return new Date(
    parseInt(dateParts[YEAR_COLUMN]),
    parseInt(dateParts[MONTH_COLUMN]) - 1,
    parseInt(dateParts[DAY_COLUMN]),
    parseInt(dateParts[HOUR_COLUMN]),
    parseInt(dateParts[MINUTE_COLUMN]),
    parseInt(dateParts[SECOND_COLUMN])
  )
}

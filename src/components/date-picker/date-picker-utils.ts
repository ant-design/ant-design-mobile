import { RenderLabel } from '../date-picker-view/date-picker-view'
import type { DatePrecision } from './date-picker-date-utils'
import * as dateUtils from './date-picker-date-utils'
import type { QuarterPrecision } from './date-picker-quarter-utils'
import * as quarterUtils from './date-picker-quarter-utils'
import type { WeekPrecision } from './date-picker-week-utils'
import * as weekUtils from './date-picker-week-utils'
import type { DateColumnType, PickerDate } from './util'
import {
  DAY_COLUMN,
  HOUR_COLUMN,
  MINUTE_COLUMN,
  MONTH_COLUMN,
  SECOND_COLUMN,
  TILL_NOW,
  YEAR_COLUMN,
} from './util'

export type Precision = DatePrecision | WeekPrecision | QuarterPrecision

export type DatePickerFilter = Partial<
  Record<
    Precision,
    (
      val: number,
      extend: {
        date: Date
      }
    ) => boolean
  >
>

const precisionLengthRecord: Record<DatePrecision, number> = {
  year: 1,
  month: 2,
  day: 3,
  hour: 4,
  minute: 5,
  second: 6,
}

export const convertDateToStringArray = (
  date: Date | undefined | null,
  precision: Precision,
  columns?: DateColumnType[]
) => {
  if (!date) return []
  if (precision.includes('week')) {
    return weekUtils.convertDateToStringArray(date)
  } else if (precision.includes('quarter')) {
    return quarterUtils.convertDateToStringArray(date)
  }
  const datePrecision = precision as DatePrecision
  const standard = dateUtils.convertDateToStringArray(date)

  if (!columns?.length) {
    return standard.slice(0, precisionLengthRecord[datePrecision])
  }
  const map: Record<DateColumnType, string> = {
    [YEAR_COLUMN]: standard[0],
    [MONTH_COLUMN]: standard[1],
    [DAY_COLUMN]: standard[2],
    [HOUR_COLUMN]: standard[3],
    [MINUTE_COLUMN]: standard[4],
    [SECOND_COLUMN]: standard[5],
  }
  return columns.map(col => map[col])
}

export const convertStringArrayToDate = <
  T extends string | number | null | undefined,
>(
  value: T[],
  precision: Precision,
  columns?: DateColumnType[]
) => {
  // Special case for DATE_NOW
  if (value?.[0] === TILL_NOW) {
    const now: PickerDate = new Date()
    now.tillNow = true
    return now
  }

  if (precision.includes('week')) {
    return weekUtils.convertStringArrayToDate(value)
  } else if (precision.includes('quarter')) {
    return quarterUtils.convertStringArrayToDate(value)
  } else {
    return dateUtils.convertStringArrayToDate(value, columns)
  }
}

export const generateDatePickerColumns = (
  selected: string[],
  min: Date,
  max: Date,
  precision: Precision,
  renderLabel: RenderLabel,
  filter: DatePickerFilter | undefined,
  tillNow?: boolean,
  columns?: DateColumnType[]
) => {
  if (precision.startsWith('week')) {
    return weekUtils.generateDatePickerColumns(
      selected,
      min,
      max,
      precision as WeekPrecision,
      renderLabel,
      filter
    )
  } else if (precision.startsWith('quarter')) {
    return quarterUtils.generateDatePickerColumns(
      selected,
      min,
      max,
      precision as QuarterPrecision,
      renderLabel,
      filter
    )
  } else {
    return dateUtils.generateDatePickerColumns(
      selected,
      min,
      max,
      precision as DatePrecision,
      renderLabel,
      filter,
      tillNow,
      columns
    )
  }
}

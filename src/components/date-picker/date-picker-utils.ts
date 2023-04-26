import type { DatePrecision } from './date-picker-date-utils'
import type { WeekPrecision } from './date-picker-week-utils'
import * as dateUtils from './date-picker-date-utils'
import * as weekUtils from './date-picker-week-utils'
import { RenderLabel } from '../date-picker-view/date-picker-view'
import { TILL_NOW } from './util'
import type { PickerDate } from './util'

export type Precision = DatePrecision | WeekPrecision

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
  precision: Precision
) => {
  if (precision.includes('week')) {
    return weekUtils.convertDateToStringArray(date)
  } else {
    const datePrecision = precision as DatePrecision
    const stringArray = dateUtils.convertDateToStringArray(date)
    return stringArray.slice(0, precisionLengthRecord[datePrecision])
  }
}

export const convertStringArrayToDate = <
  T extends string | number | null | undefined
>(
  value: T[],
  precision: Precision
) => {
  // Special case for DATE_NOW
  if (value?.[0] === TILL_NOW) {
    const now: PickerDate = new Date()
    now.tillNow = true
    return now
  }

  if (precision.includes('week')) {
    return weekUtils.convertStringArrayToDate(value)
  } else {
    return dateUtils.convertStringArrayToDate(value)
  }
}

export const generateDatePickerColumns = (
  selected: string[],
  min: Date,
  max: Date,
  precision: Precision,
  renderLabel: RenderLabel,
  filter: DatePickerFilter | undefined,
  tillNow?: boolean
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
  } else {
    return dateUtils.generateDatePickerColumns(
      selected,
      min,
      max,
      precision as DatePrecision,
      renderLabel,
      filter,
      tillNow
    )
  }
}

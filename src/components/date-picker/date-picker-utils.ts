import { ReactNode } from 'react'
import type { DatePrecision } from './date-picker-date-utils'
import type { WeekPrecision } from './date-picker-week-utils'
import * as dateUtils from './date-picker-date-utils'
import * as weekUtils from './date-picker-week-utils'

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

export const convertDateToStringArray = (
  date: Date | undefined | null,
  precision: Precision
) => {
  if (precision.includes('week')) {
    return weekUtils.convertDateToStringArray(date)
  } else {
    return dateUtils.convertDateToStringArray(date)
  }
}

export const convertStringArrayToDate = (
  value: (string | null | undefined)[],
  precision: Precision
) => {
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
  renderLabel: (type: Precision, data: number) => ReactNode,
  filter: DatePickerFilter | undefined
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
      filter
    )
  }
}

export const defaultRenderLabel = (precision: Precision, data: number) => {
  if (precision.includes('week')) {
    return weekUtils.defaultRenderLabel(precision as WeekPrecision, data)
  } else {
    return dateUtils.defaultRenderLabel(precision as DatePrecision, data)
  }
}

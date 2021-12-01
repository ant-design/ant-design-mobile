import { ReactNode } from 'react'
import type { DatePrecision } from './date-picker-date-utils'
import type { WeekPrecision } from './date-picker-week-utils'
import {
  convertDateToStringArray as date_convertDateToStringArray,
  convertStringArrayToDate as date_convertStringArrayToDate,
  generateDatePickerColumns as date_generateDatePickerColumns,
  defaultRenderLabel as date_defaultRenderLabel,
} from './date-picker-date-utils'
import {
  convertDateToStringArray as week_convertDateToStringArray,
  convertStringArrayToDate as week_convertStringArrayToDate,
  generateDatePickerColumns as week_generateDatePickerColumns,
  defaultRenderLabel as week_defaultRenderLabel,
} from './date-picker-week-utils'

export type Precision = DatePrecision | WeekPrecision

export const convertDateToStringArray = (
  date: Date | undefined | null,
  precision: Precision
) => {
  if (precision.includes('week')) {
    return week_convertDateToStringArray(date)
  } else {
    return date_convertDateToStringArray(date)
  }
}

export const convertStringArrayToDate = (
  value: (string | null | undefined)[],
  precision: Precision
) => {
  if (precision.includes('week')) {
    return week_convertStringArrayToDate(value)
  } else {
    return date_convertStringArrayToDate(value)
  }
}

export const generateDatePickerColumns = (
  selected: string[],
  min: Date,
  max: Date,
  precision: Precision,
  renderLabel: (type: Precision, data: number) => ReactNode
) => {
  if (precision.includes('week')) {
    return week_generateDatePickerColumns(
      selected,
      min,
      max,
      precision as WeekPrecision,
      renderLabel
    )
  } else {
    return date_generateDatePickerColumns(
      selected,
      min,
      max,
      precision as DatePrecision,
      renderLabel
    )
  }
}

export const defaultRenderLabel = (precision: Precision, data: number) => {
  if (precision.includes('week')) {
    return week_defaultRenderLabel(precision as WeekPrecision, data)
  } else {
    return date_defaultRenderLabel(precision as DatePrecision, data)
  }
}

export const TILL_NOW = 'TILL_NOW'

export type PickerDate = Date & {
  tillNow?: boolean
}

export const YEAR_COLUMN = 'YEAR_COLUMN' as const
export const MONTH_COLUMN = 'MONTH_COLUMN' as const
export const DAY_COLUMN = 'DAY_COLUMN' as const
export const HOUR_COLUMN = 'HOUR_COLUMN' as const
export const MINUTE_COLUMN = 'MINUTE_COLUMN' as const
export const SECOND_COLUMN = 'SECOND_COLUMN' as const

export type DateColumnType =
  | typeof YEAR_COLUMN
  | typeof MONTH_COLUMN
  | typeof DAY_COLUMN
  | typeof HOUR_COLUMN
  | typeof MINUTE_COLUMN
  | typeof SECOND_COLUMN

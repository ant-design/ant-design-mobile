import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import { DatePicker } from './date-picker'
import './date-picker.less'
import { prompt } from './prompt'
import {
  DAY_COLUMN,
  HOUR_COLUMN,
  MINUTE_COLUMN,
  MONTH_COLUMN,
  SECOND_COLUMN,
  TILL_NOW,
  YEAR_COLUMN,
} from './util'

export type { DatePickerProps, DatePickerRef } from './date-picker'
export type { DatePickerFilter } from './date-picker-utils'
export type { DateColumnType } from './util'

export default attachPropertiesToComponent(DatePicker, {
  prompt,
  DATE_NOW: TILL_NOW,
  YEAR_COLUMN,
  MONTH_COLUMN,
  DAY_COLUMN,
  HOUR_COLUMN,
  MINUTE_COLUMN,
  SECOND_COLUMN,
})

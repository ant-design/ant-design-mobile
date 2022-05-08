import './date-picker.less'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import { DatePicker } from './date-picker'
import { prompt } from './prompt'

export type { DatePickerProps } from './date-picker'
export type { DatePickerFilter } from './date-picker-utils'
export type {
  Actions,
  Actions as DatePickerRef,
} from '../../utils/use-controllable-visible'

export default attachPropertiesToComponent(DatePicker, {
  prompt,
})

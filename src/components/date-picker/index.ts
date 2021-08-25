import './date-picker.less'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import { DatePicker } from './date-picker'
import { prompt } from './prompt'

export default attachPropertiesToComponent(DatePicker, {
  prompt,
})

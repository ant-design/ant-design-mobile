import './picker.less'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import { Picker } from './picker'
import { prompt } from './prompt'

export type {
  PickerValue,
  PickerColumnItem,
  PickerColumn,
  PickerProps,
} from './picker'

export default attachPropertiesToComponent(Picker, {
  prompt,
})

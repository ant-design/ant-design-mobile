import './picker.less'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import { Picker } from './picker'
import { prompt } from './prompt'

export type { PickerProps } from './picker'
export type {
  Actions,
  Actions as PickerRef,
} from '../../utils/use-controllable-visible'

export type {
  PickerValue,
  PickerColumnItem,
  PickerColumn,
  PickerValueExtend,
} from '../picker-view'

export default attachPropertiesToComponent(Picker, {
  prompt,
})

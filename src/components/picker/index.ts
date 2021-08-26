import './picker.less'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import { Cascader } from './cascader'
import { Picker } from './picker'
import { promptCascader } from './prompt-cascader'
import { prompt } from './prompt'

export type {
  PickerValue,
  PickerColumnItem,
  PickerColumn,
  PickerProps,
} from './picker'

export type { CascaderProps, CascaderOption } from './cascader'

export default attachPropertiesToComponent(Picker, {
  Cascader: attachPropertiesToComponent(Cascader, {
    prompt: promptCascader,
  }),
  prompt,
})

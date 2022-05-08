import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import { prompt } from './prompt'
import { CascadePicker } from './cascade-picker'

export type { CascadePickerProps, CascadePickerOption } from './cascade-picker'
export type {
  Actions,
  Actions as CascadePickerRef,
} from '../../utils/use-controllable-visible'

export default attachPropertiesToComponent(CascadePicker, {
  prompt,
})

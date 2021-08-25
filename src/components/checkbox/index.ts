import './checkbox.less'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import { Group } from './group'
import { Checkbox } from './checkbox'

export type { CheckboxValue, CheckboxProps } from './checkbox'
export type { CheckboxGroupProps } from './group'

export default attachPropertiesToComponent(Checkbox, {
  Group,
})

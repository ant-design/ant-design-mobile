import './radio.less'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import { Group } from './group'
import { Radio } from './radio'

export type { RadioProps, RadioValue } from './radio'
export type { RadioGroupProps } from './group'

export default attachPropertiesToComponent(Radio, {
  Group,
})

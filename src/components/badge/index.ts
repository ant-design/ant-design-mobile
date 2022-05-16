import './badge.less'
import { Badge, dot } from './badge'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
export type { BadgeProps } from './badge'

type Properties = {
  dot: typeof dot
}
const properties: Properties = { dot }
export default attachPropertiesToComponent(Badge, properties)

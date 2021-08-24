import './popover.less'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import { PopMenu } from './pop-menu'
import { Popover } from './popover'

export type { Action } from './pop-menu'

export default attachPropertiesToComponent(Popover, {
  Menu: PopMenu,
})

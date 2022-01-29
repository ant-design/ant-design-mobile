import './popover.less'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import { PopoverMenu } from './popover-menu'
import { Popover } from './popover'

export type { PopoverProps, PopoverRef } from './popover'
export type { PopoverMenuProps, Action } from './popover-menu'

export default attachPropertiesToComponent(Popover, {
  Menu: PopoverMenu,
})

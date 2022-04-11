import './popover.less'
import './popover-menu.less'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import { PopoverMenu } from './popover-menu'
import { Popover } from './popover'

export type { PopoverProps, PopoverRef } from './popover'
export type { PopoverMenuProps, Action } from './popover-menu'
export type Placement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'

export type DeprecatedPlacement =
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
  | 'leftTop'
  | 'leftBottom'
  | 'rightTop'
  | 'rightBottom'

export default attachPropertiesToComponent(Popover, {
  Menu: PopoverMenu,
})

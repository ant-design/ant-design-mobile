import './dropdown.less'
import Dropdown from './dropdown'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import Item from './item'

export type { DropdownProps, DropdownRef } from './dropdown'
export type { DropdownItemProps } from './item'

export default attachPropertiesToComponent(Dropdown, {
  Item,
})

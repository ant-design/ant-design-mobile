import './side-bar.less'
import { SideBar, SideBarItem } from './side-bar'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'

export type { SideBarProps, SideBarItemProps } from './side-bar'

export default attachPropertiesToComponent(SideBar, {
  Item: SideBarItem,
})

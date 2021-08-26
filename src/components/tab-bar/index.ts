import './tab-bar.less'
import { TabBar, TabBarItem } from './tab-bar'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'

export type { TabBarProps, TabBarItemProps } from './tab-bar'

export default attachPropertiesToComponent(TabBar, {
  Item: TabBarItem,
})

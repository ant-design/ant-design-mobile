import './tabs.less'
import { TabPane, Tabs } from './tabs'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'

export type { TabsProps, TabPaneProps } from './tabs'

export default attachPropertiesToComponent(Tabs, {
  TabPane,
})

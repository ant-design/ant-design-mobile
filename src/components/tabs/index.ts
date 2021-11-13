import './tabs.less'
import { Tab, Tabs } from './tabs'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'

export type { TabsProps, TabProps } from './tabs'

export default attachPropertiesToComponent(Tabs, {
  Tab,
})

import './jumbo-tabs.less'
import { JumboTabPane, JumboTabs } from './jumbo-tabs'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'

export type { JumboTabsProps, JumboTabPaneProps } from './jumbo-tabs'

export default attachPropertiesToComponent(JumboTabs, {
  JumboTabPane,
})

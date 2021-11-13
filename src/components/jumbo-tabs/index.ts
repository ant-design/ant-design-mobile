import './jumbo-tabs.less'
import { JumboTab, JumboTabs } from './jumbo-tabs'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'

export type { JumboTabsProps, JumboTabProps } from './jumbo-tabs'

export default attachPropertiesToComponent(JumboTabs, {
  Tab: JumboTab,
})

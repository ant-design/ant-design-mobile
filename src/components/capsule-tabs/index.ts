import './capsule-tabs.less'
import { CapsuleTabPane, CapsuleTabs } from './capsule-tabs'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'

export type { CapsuleTabsProps, CapsuleTabPaneProps } from './capsule-tabs'

export default attachPropertiesToComponent(CapsuleTabs, {
  CapsuleTabPane,
})

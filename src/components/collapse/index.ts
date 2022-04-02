import './collapse.less'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import { Collapse } from './collapse'
import { CollapsePanel } from './collapse-panel'

export type { CollapsePanelProps } from './collapse-panel'
export type { CollapseProps } from './collapse'

export default attachPropertiesToComponent(Collapse, {
  Panel: CollapsePanel,
})

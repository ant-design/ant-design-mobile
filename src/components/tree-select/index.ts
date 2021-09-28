import './tree-select.less'
import { TreeSelect } from './tree-select'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import { Multiple } from './multiple'

export type { TreeSelectProps, TreeSelectOption } from './tree-select'
export type { MultipleProps } from './multiple'

export default attachPropertiesToComponent(TreeSelect, {
  Multiple,
})

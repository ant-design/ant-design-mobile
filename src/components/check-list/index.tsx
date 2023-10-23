import './check-list.less'
import { CheckList } from './check-list'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import { CheckListItem } from './check-list-item'

export type { CheckListValue, CheckListProps } from './check-list'
export type { CheckListItemProps } from './check-list-item'

export default attachPropertiesToComponent(CheckList, {
  Item: CheckListItem,
})

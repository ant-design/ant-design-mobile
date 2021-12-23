import './action-sheet.less'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import { ActionSheet, showActionSheet } from './action-sheet'
export type { Action, ActionSheetProps, ActionSheetRef } from './action-sheet'

export default attachPropertiesToComponent(ActionSheet, {
  show: showActionSheet,
})

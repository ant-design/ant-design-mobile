import './modal.less'
import { show } from './show'
import { alert } from './alert'
import { confirm } from './confirm'
import { clear } from './clear'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import { Modal } from './modal'

export type { ModalProps } from './modal'
export type { Action } from './modal-action-button'
export type { ModalShowProps, ModalShowHandler } from './show'
export type { ModalAlertProps } from './alert'
export type { ModalConfirmProps } from './confirm'

export default attachPropertiesToComponent(Modal, {
  show,
  alert,
  confirm,
  clear,
})

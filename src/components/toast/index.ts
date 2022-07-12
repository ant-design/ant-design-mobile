import './toast.less'
import { clear, show, config } from './methods'

export type { ToastShowProps, ToastHandler } from './methods'

const Toast = {
  show,
  clear,
  config,
}

export default Toast

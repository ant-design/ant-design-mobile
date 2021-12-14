import './toast.less'
import { clear, show, config } from './methods'

export type { ToastShowProps } from './methods'

const Toast = {
  show,
  clear,
  config,
}

export default Toast

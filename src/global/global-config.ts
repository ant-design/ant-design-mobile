import { GetContainer } from '../utils/render-to-container'
import { ToastProps } from '../components/toast/toast'

export type GlobalConfig = {
  getContainer: GetContainer
  Toast?: ToastProps
}

export const globalConfig: GlobalConfig = {
  getContainer: document.body,
  Toast: {
    duration: 2000,
    position: 'center',
    maskClickable: true,
  },
}

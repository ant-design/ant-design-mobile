import './global.less'
import { canUseDom } from '../utils/can-use-dom'

if (canUseDom) {
  document.addEventListener('touchstart', () => {}, true)
}

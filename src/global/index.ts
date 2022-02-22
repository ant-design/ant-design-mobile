import './global.less'
import { canUseDom } from '../utils/can-use-dom'
// 支持ssr
if (canUseDom) {
  // 提高性能
  document.addEventListener('touchstart', () => {}, true)
}

import { closeFns } from './dialog'

export function clear() {
  while (closeFns.length) {
    const close = closeFns.pop()
    if (close) {
      close()
    }
  }
}

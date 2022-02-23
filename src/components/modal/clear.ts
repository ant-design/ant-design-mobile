import { closeFns } from './modal'

export function clear() {
  while (closeFns.length) {
    const close = closeFns.pop()
    if (close) {
      close()
    }
  }
}

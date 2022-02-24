import { closeFnSet } from './show'

export function clear() {
  closeFnSet.forEach(close => {
    close()
  })
}

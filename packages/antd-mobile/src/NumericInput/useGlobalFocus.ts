import * as React from 'react'
import { subscribe, unsubscribe } from './globalFocus'

export default (doBlur: () => void, focus: boolean) => {
  const uuid = React.useRef(`${Date.now() + Math.random()}`)
  React.useEffect(() => {
    // 仅 focus 的状态才需要监听被关闭
    if (focus) {
      // 这里针对同一个 uuid，不会有多个订阅，所以不用先 unsubscribe
      subscribe(uuid.current, f => {
        if (!f) {
          doBlur()
        }
      })

      return () => {
        unsubscribe(uuid.current)
      }
    } else {
      unsubscribe(uuid.current)
    }
  }, [doBlur, focus])

  return uuid.current
}

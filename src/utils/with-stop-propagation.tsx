import type { ReactElement } from 'react'
import React from 'react'
export type PropagationEvent = 'click' | 'touchstart'

const eventToPropRecord: Record<PropagationEvent, string> = {
  'click': 'onClick',
  'touchstart': 'onTouchStart',
}

export function withStopPropagation(
  events: PropagationEvent[],
  element: ReactElement
) {
  const props: Record<string, any> = { ...element.props }
  for (const key of events) {
    const prop = eventToPropRecord[key]
    props[prop] = function (e: React.SyntheticEvent) {
      e.stopPropagation()
      // react <=16 事件绑定在 document，因此上面的 stopPropagation 无法阻止事件冒泡到用原生方式监听的 document 的事件回调中
      // 增加 stopImmediatePropagation 可以阻止事件在**后绑定**的 document 上的回调执行
      // 专用于解决 VirtualInput useClickOutside 的问题
      // react >=17 则无此问题，事件会绑定在 React 根节点上
      e.nativeEvent.stopImmediatePropagation()
      element.props[prop]?.(e)
    }
  }
  return React.cloneElement(element, props)
}

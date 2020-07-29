// 用于像 NumericInput 这类，需要在键盘外部监听额外事件来关闭键盘的
// 需要保证键盘内部元素不能冒泡到外部

import * as React from 'react'

const EventInside: React.FC = props => {
  const vd = React.useRef<any>(null)
  const child = React.Children.only(props.children)
  const stopAll = (e: React.TouchEvent | React.MouseEvent) => {
    // 阻止冒泡, e.stopPropagation() 无效
    e.nativeEvent.stopImmediatePropagation()
  }

  // @ts-ignore
  return React.cloneElement(child, {
    onTouchEnd: stopAll,
    onMouseUp: stopAll,
  })
}

export default EventInside

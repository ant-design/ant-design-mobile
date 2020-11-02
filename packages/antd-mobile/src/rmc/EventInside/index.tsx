// 用于像 NumericInput 这类，在键盘上输入的时候，不触发 input 的 blur 方法
// 同时为了键盘本身是一个封闭空间，把冒泡也禁掉

import * as React from 'react'

const EventInside: React.FC = props => {
  const vd = React.useRef<any>(null)
  const child = React.Children.only(props.children)
  const stopAll = (e: React.TouchEvent | React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  // @ts-ignore
  return React.cloneElement(child, {
    // 移动端
    onTouchStart: stopAll,
    // pc 端
    onMouseDown: stopAll,
    onClick: stopAll,
    onContextMenu: stopAll,
    style: {
      touchAction: 'none',
    },
  })
}

export default EventInside

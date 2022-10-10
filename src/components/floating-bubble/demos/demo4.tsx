import React, { useState } from 'react'
import { FloatingBubble } from 'antd-mobile'
import { DemoDescription } from 'demos'
import { MessageFill } from 'antd-mobile-icons'

export default () => {
  // 偏移位置可做存储，支持记忆功能
  const [curOffset, setCurOffset] = useState({ x: -24, y: -24 })
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '50vh 32px 0',
      }}
    >
      <DemoDescription>
        <div>在 x 轴、y 轴方向上都允许拖动，拖动结束回调获取偏移位置</div>
        <div>拖动结束偏移位置x:{curOffset.x}</div>
        <div>拖动结束偏移位置y:{curOffset.y}</div>
      </DemoDescription>
      <FloatingBubble
        axis='xy'
        style={{
          '--initial-position-bottom': '0',
          '--initial-position-right': '0',
        }}
        defaultDragOffset={{ x: -24, y: -24 }}
        onDragEnd={offset => {
          setCurOffset(offset)
        }}
      >
        <MessageFill fontSize={32} />
      </FloatingBubble>
    </div>
  )
}

import React, { useEffect, useRef, useState } from 'react'
import { FloatingBubble, Button } from 'antd-mobile'
import { DemoDescription } from 'demos'
import { MessageFill } from 'antd-mobile-icons'
import { FloatingBubbleRef } from 'antd-mobile/es/components/floating-bubble/floating-bubble'

export default () => {
  // 偏移位置可做存储，支持记忆功能
  const [curOffset, setCurOffset] = useState({ x: -24, y: -24 })
  const floatingBubbleRef = useRef<FloatingBubbleRef>(null)

  const resetOffset = () => {
    floatingBubbleRef.current?.dragTo(-24, -24, true)
  }

  const getNewOffset = () => {
    setCurOffset(floatingBubbleRef.current!.curOffset)
  }

  return (
    <div
      style={{
        textAlign: 'center',
        padding: '50vh 32px 0',
      }}
    >
      <DemoDescription>
        <div>在 x 轴、y 轴方向上都允许拖动，拖动结束回调获取偏移位置</div>
        <div>
          <Button onClick={resetOffset}>位置重置</Button>
        </div>
        <div>
          <Button onClick={getNewOffset}>获取最新位置</Button>
        </div>
        <div>
          最新偏移位置 x:{curOffset.x},y:{curOffset.y}
        </div>
      </DemoDescription>
      <FloatingBubble
        axis='xy'
        style={{
          '--initial-position-bottom': '0',
          '--initial-position-right': '0',
        }}
        ref={floatingBubbleRef}
        defaultOffset={curOffset}
      >
        <MessageFill fontSize={32} />
      </FloatingBubble>
    </div>
  )
}

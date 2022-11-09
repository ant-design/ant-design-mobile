import React, { useRef, useState } from 'react'
import { FloatingBubble, Button, Divider } from 'antd-mobile'
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

  return (
    <div
      style={{
        padding: '12px',
      }}
    >
      <Button onClick={resetOffset}>位置重置</Button>
      <DemoDescription>根据 ref.dragTo 指定偏移位置</DemoDescription>
      <Divider />
      <Button
        onClick={() => {
          console.log(floatingBubbleRef.current?.offset)
        }}
      >
        打印当前位置
      </Button>
      <DemoDescription>根据 ref.current.offset 获取</DemoDescription>
      <Divider />

      <DemoDescription>根据 onDragEnd 获取偏移位置：</DemoDescription>
      <DemoDescription>
        x: {curOffset.x}, y: {curOffset.y}
      </DemoDescription>

      <FloatingBubble
        axis='xy'
        style={{
          '--initial-position-bottom': '0',
          '--initial-position-right': '0',
        }}
        ref={floatingBubbleRef}
        defaultOffset={curOffset}
        onDragEnd={offset => setCurOffset(offset)}
      >
        <MessageFill fontSize={32} />
      </FloatingBubble>
    </div>
  )
}

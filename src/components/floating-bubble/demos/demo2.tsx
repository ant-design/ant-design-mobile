import React from 'react'
import { FloatingBubble } from 'antd-mobile'
import { DemoDescription } from 'demos'
import { MessageFill } from 'antd-mobile-icons'

export default () => {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '50vh 32px 0',
      }}
    >
      <DemoDescription>
        在 x 轴、y 轴方向上都允许拖动，并且会自动磁吸到 x 轴方向上最近的一边
      </DemoDescription>
      <FloatingBubble
        axis='xy'
        magnetic='x'
        style={{
          '--initial-position-bottom': '24px',
          '--initial-position-right': '24px',
          '--edge-distance': '24px',
        }}
      >
        <MessageFill fontSize={32} />
      </FloatingBubble>
    </div>
  )
}

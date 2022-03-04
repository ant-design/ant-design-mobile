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
      <DemoDescription>只允许在左下角和右下角</DemoDescription>
      <FloatingBubble
        axis='x'
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

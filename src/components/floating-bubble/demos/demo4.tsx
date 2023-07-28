import React, { useState } from 'react'
import { FloatingBubble, Divider } from 'antd-mobile'
import { DemoDescription } from 'demos'
import { MessageFill } from 'antd-mobile-icons'

export default () => {
  const [offset, setOffset] = useState({ x: -24, y: -24 })

  return (
    <div
      style={{
        textAlign: 'center',
        padding: '50vh 32px 0',
      }}
    >
      <DemoDescription>受控模式</DemoDescription>
      <Divider />

      <DemoDescription>
        <div>x: {offset.x}</div>
        <div>y: {offset.y}</div>
      </DemoDescription>

      <FloatingBubble
        axis='xy'
        style={{
          '--initial-position-bottom': '0',
          '--initial-position-right': '0',
        }}
        onOffsetChange={offset => {
          setOffset(offset)
        }}
        offset={offset}
      >
        <MessageFill fontSize={32} />
      </FloatingBubble>
    </div>
  )
}

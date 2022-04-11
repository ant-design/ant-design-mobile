import React from 'react'
import { FloatingBubble, Toast } from 'antd-mobile'
import { DemoDescription } from 'demos'
import { MessageFill } from 'antd-mobile-icons'

export default () => {
  const onClick = () => {
    Toast.show('你点击了气泡')
  }
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '50vh 32px 0',
      }}
    >
      <DemoDescription>尝试拖拽和点击一下气泡吧</DemoDescription>
      <FloatingBubble
        style={{
          '--initial-position-bottom': '24px',
          '--initial-position-right': '24px',
          '--edge-distance': '24px',
        }}
        onClick={onClick}
      >
        <MessageFill fontSize={32} />
      </FloatingBubble>
    </div>
  )
}

import { Button, Modal } from 'antd-mobile'
import { DemoBlock } from 'demos'
import React from 'react'

export default () => {
  return (
    <DemoBlock title='关闭所有弹窗'>
      <Button block onClick={ContinuousShow}>
        连续展示弹窗
      </Button>
    </DemoBlock>
  )
}

function ContinuousShow() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      Modal.alert({
        content: <Button onClick={() => Modal.clear()}>close all</Button>,
        onConfirm: () => {
          console.log('Confirmed')
        },
      })
    }, i * 500)
  }
}

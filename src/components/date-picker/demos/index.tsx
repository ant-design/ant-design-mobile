import React, { useState } from 'react'
import { Button, DatePicker, Space, Toast } from 'antd-mobile'
import { DemoBlock } from '../../../demos/demo-block'

const now = new Date()

function BasicDemo() {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Button
        onClick={() => {
          setVisible(true)
        }}
      >
        选择
      </Button>
      <DatePicker
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
        defaultValue={now}
        max={now}
        onConfirm={val => {
          Toast.show({
            content: val.toDateString(),
          })
        }}
      />
    </>
  )
}

function RenderChildrenDemo() {
  const [visible, setVisible] = useState(false)
  return (
    <Space align='center'>
      <Button
        onClick={() => {
          setVisible(true)
        }}
      >
        选择
      </Button>
      <DatePicker
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
        defaultValue={now}
        max={now}
      >
        {value => value?.toDateString()}
      </DatePicker>
    </Space>
  )
}

export default () => {
  return (
    <>
      <DemoBlock title='基础用法'>
        <BasicDemo />
      </DemoBlock>
      <DemoBlock title='渲染所选值'>
        <RenderChildrenDemo />
      </DemoBlock>
    </>
  )
}

import React, { useState } from 'react'
import { Button, DatePicker, Space, Toast } from 'antd-mobile'
import { DemoBlock } from 'demos'

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
          Toast.show(val.toDateString())
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

function Precision() {
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  return (
    <Space wrap>
      <>
        <Button
          onClick={() => {
            setVisible1(true)
          }}
        >
          年-月
        </Button>
        <DatePicker
          visible={visible1}
          onClose={() => {
            setVisible1(false)
          }}
          precision='month'
          onConfirm={val => {
            Toast.show(val.toString())
          }}
        />
      </>
      <>
        <Button
          onClick={() => {
            setVisible2(true)
          }}
        >
          年-月-日-时-分
        </Button>
        <DatePicker
          visible={visible2}
          onClose={() => {
            setVisible2(false)
          }}
          precision='minute'
          onConfirm={val => {
            Toast.show(val.toString())
          }}
        />
      </>
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
      <DemoBlock title='控制选择精度'>
        <Precision />
      </DemoBlock>
    </>
  )
}

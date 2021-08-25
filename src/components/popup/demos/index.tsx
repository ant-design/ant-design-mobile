import React, { useState } from 'react'
import { DemoBlock } from 'demos'
import { Popup, Space, Button } from 'antd-mobile'

const Stack = () => {
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  return (
    <>
      <Button
        onClick={() => {
          setVisible1(true)
        }}
      >
        展开弹出层1
      </Button>
      <Popup
        visible={visible1}
        onMaskClick={() => {
          setVisible1(false)
        }}
        bodyStyle={{ height: '40vh' }}
      >
        <div style={{ padding: '24px' }}>
          <Space direction='vertical'>
            <div>这是弹出层1</div>
            <Button
              onClick={() => {
                setVisible2(true)
              }}
            >
              展开弹出层2
            </Button>
          </Space>
        </div>
      </Popup>
      <Popup
        visible={visible2}
        onMaskClick={() => {
          setVisible2(false)
        }}
        bodyStyle={{ height: '20vh' }}
      >
        <div style={{ padding: '24px' }}>
          <div>这是弹出层2</div>
        </div>
      </Popup>
    </>
  )
}

export default () => {
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)
  const [visible4, setVisible4] = useState(false)
  const [visible5, setVisible5] = useState(false)
  const [visible6, setVisible6] = useState(false)

  return (
    <>
      <DemoBlock title='不同位置'>
        <Space direction='vertical'>
          <>
            <Button
              onClick={() => {
                setVisible1(true)
              }}
            >
              底部弹出
            </Button>
            <Popup
              visible={visible1}
              onMaskClick={() => {
                setVisible1(false)
              }}
              bodyStyle={{ minHeight: '40vh' }}
            >
              Hello
            </Popup>
          </>
          <>
            <Button
              onClick={() => {
                setVisible2(true)
              }}
            >
              顶部弹出
            </Button>
            <Popup
              visible={visible2}
              onMaskClick={() => {
                setVisible2(false)
              }}
              position='top'
              bodyStyle={{ minHeight: '40vh' }}
            >
              Hello
            </Popup>
          </>
          <>
            <Button
              onClick={() => {
                setVisible3(true)
              }}
            >
              左侧弹出
            </Button>
            <Popup
              visible={visible3}
              onMaskClick={() => {
                setVisible3(false)
              }}
              position='left'
              bodyStyle={{ minWidth: '60vw' }}
            >
              Hello
            </Popup>
          </>
          <>
            <Button
              onClick={() => {
                setVisible4(true)
              }}
            >
              右侧弹出
            </Button>
            <Popup
              visible={visible4}
              onMaskClick={() => {
                setVisible4(false)
              }}
              position='right'
              bodyStyle={{ minWidth: '60vw' }}
            >
              Hello
            </Popup>
          </>
        </Space>
      </DemoBlock>
      <DemoBlock title='自定义样式'>
        <Space direction='vertical'>
          <>
            <Button
              onClick={() => {
                setVisible5(true)
              }}
            >
              圆角的弹出层
            </Button>
            <Popup
              visible={visible5}
              onMaskClick={() => {
                setVisible5(false)
              }}
              bodyStyle={{
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
                minHeight: '40vh',
              }}
            >
              Hello
            </Popup>
          </>
          <>
            <Button
              onClick={() => {
                setVisible6(true)
              }}
            >
              内容超长滚动
            </Button>
            <Popup
              visible={visible6}
              onMaskClick={() => {
                setVisible6(false)
              }}
            >
              <div style={{ height: '30vh', overflowY: 'scroll' }}>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
              </div>
            </Popup>
          </>
        </Space>
      </DemoBlock>
      <DemoBlock title='多层堆叠'>
        <Stack />
      </DemoBlock>
    </>
  )
}

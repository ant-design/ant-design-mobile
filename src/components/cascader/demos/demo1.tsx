import React, { useState } from 'react'
import { Cascader, Button, Space, Toast } from 'antd-mobile'
import { DemoBlock, DemoDescription } from 'demos'

import { options, longOptions } from './data'

// 基础用法
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
      <Cascader
        options={options}
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
      />
    </>
  )
}

// 渲染所选值
function RenderChildrenDemo() {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState<string[]>([])
  return (
    <Space align='center'>
      <Button
        onClick={() => {
          setVisible(true)
        }}
      >
        选择
      </Button>
      <Cascader
        options={options}
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
        value={value}
        onConfirm={setValue}
        onSelect={(val, extend) => {
          console.log('onSelect', val, extend.items)
        }}
      >
        {items => {
          if (items.every(item => item === null)) {
            return '未选择'
          } else {
            return items.map(item => item?.label ?? '未选择').join('-')
          }
        }}
      </Cascader>
    </Space>
  )
}

function ActionsDemo() {
  const [value, setValue] = useState<string[]>([])
  return (
    <Cascader
      options={options}
      value={value}
      onConfirm={v => {
        setValue(v)
      }}
    >
      {(_, actions) => <Button onClick={actions.open}>选择</Button>}
    </Cascader>
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

      <DemoBlock title='指令式调用'>
        <Button
          onClick={async () => {
            const value = await Cascader.prompt({
              options,
              title: '选择地址',
            })
            Toast.show(value ? `你选择了 ${value.join('-')}` : '你没有进行选择')
          }}
        >
          弹出 Cascader
        </Button>
      </DemoBlock>

      <DemoBlock title='长数据'>
        <Button
          onClick={async () => {
            const value = await Cascader.prompt({
              options: longOptions,
              placeholder: '请选择',
            })
            Toast.show(
              value ? `你选择了 ${value.join(' - ')}` : '你没有进行选择'
            )
          }}
        >
          选择
        </Button>
      </DemoBlock>

      <DemoBlock title='使用 actions 来控制显示/隐藏'>
        <Space direction='vertical' block>
          <ActionsDemo />
          <DemoDescription>
            在 children 渲染函数中，你可以使用第二个参数 actions
            来非常方便的控制 Picker 的显示或隐藏
          </DemoDescription>
        </Space>
      </DemoBlock>
    </>
  )
}

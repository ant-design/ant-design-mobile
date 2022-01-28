import React, { useState } from 'react'
import { Picker, Button, Space, Toast } from 'antd-mobile'
import { DemoBlock } from 'demos'
import { basicColumns } from './columns-data'

// 基础用法
function BasicDemo() {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState<(string | null)[]>(['M'])
  return (
    <>
      <Button
        onClick={() => {
          setVisible(true)
        }}
      >
        选择
      </Button>
      <Picker
        columns={basicColumns}
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
        value={value}
        onConfirm={v => {
          setValue(v)
        }}
      />
    </>
  )
}

// 渲染所选值
function RenderChildrenDemo() {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState<(string | null)[]>([])
  return (
    <Space align='center'>
      <Button
        onClick={() => {
          setVisible(true)
        }}
      >
        选择
      </Button>
      <Picker
        columns={basicColumns}
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
            return items.map(item => item?.label ?? '未选择').join(' - ')
          }
        }}
      </Picker>
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

      <DemoBlock title='指令式调用'>
        <Button
          onClick={async () => {
            const value = await Picker.prompt({
              columns: basicColumns,
            })
            Toast.show(`你选择了 ${value}`)
          }}
        >
          弹出 Picker
        </Button>
      </DemoBlock>
    </>
  )
}

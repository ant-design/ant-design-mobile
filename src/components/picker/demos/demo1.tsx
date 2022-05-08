import React, { useRef, useState } from 'react'
import { Picker, Button, Space, Toast } from 'antd-mobile'
import { DemoBlock } from 'demos'
import { basicColumns } from './columns-data'
import type { PickerRef } from 'antd-mobile/es/components/picker'

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

// 使用 ref 控制 visible
function RefDemo() {
  const ref = useRef<PickerRef>(null)
  const [value, setValue] = useState<(string | null)[]>(['M'])
  return (
    <Space>
      <Button
        onClick={() => {
          ref.current?.open()
        }}
      >
        选择
      </Button>
      <Picker
        ref={ref}
        columns={basicColumns}
        value={value}
        onConfirm={v => {
          setValue(v)
        }}
      />

      <Picker
        columns={basicColumns}
        value={value}
        onConfirm={v => {
          setValue(v)
        }}
      >
        {(items, { open }) => <Button onClick={open}>选择</Button>}
      </Picker>
    </Space>
  )
}

// 渲染所选值
function RenderChildrenDemo() {
  const [value, setValue] = useState<(string | null)[]>([])
  return (
    <Picker
      columns={basicColumns}
      value={value}
      onConfirm={setValue}
      onSelect={(val, extend) => {
        console.log('onSelect', val, extend.items)
      }}
    >
      {(items, { open }) => {
        return (
          <Space align='center'>
            <Button onClick={open}>选择</Button>
            {items.every(item => item === null)
              ? '未选择'
              : items.map(item => item?.label ?? '未选择').join(' - ')}
          </Space>
        )
      }}
    </Picker>
  )
}

export default () => {
  return (
    <>
      <DemoBlock title='基础用法'>
        <BasicDemo />
      </DemoBlock>

      <DemoBlock title='内部控制 visible'>
        <RefDemo />
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

import React, { useRef, useState } from 'react'
import { Button, CascadePicker, Space } from 'antd-mobile'
import { DemoBlock } from 'demos'

import { AsyncDemo } from './async-demo'
import { CascadePickerRef } from 'antd-mobile/es/components/cascade-picker'

const options = [
  {
    label: '浙江',
    value: '浙江',
    children: [
      {
        label: '杭州',
        value: '杭州',
      },
      {
        label: '宁波',
        value: '宁波',
        children: [
          {
            label: '街道',
            value: '街道',
            children: [
              {
                label: '小区1',
                value: '小区1',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: '江苏',
    value: '江苏',
    children: [
      {
        label: '南京',
        value: '南京',
      },
      {
        label: '苏州',
        value: '苏州',
        children: [
          {
            label: '街道',
            value: '街道',
            children: [
              {
                label: '小区2',
                value: '小区2',
              },
            ],
          },
        ],
      },
    ],
  },
]

// 级联选择
function CascadePickerDemo() {
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
      <CascadePicker
        title='级联选择'
        options={options}
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
        onConfirm={(val, extend) => {
          console.log('onConfirm', val, extend.items)
        }}
        onSelect={val => {
          console.log('onSelect', val)
        }}
      />
    </>
  )
}

function CascadePickerInnerVisibleDemo() {
  const ref = useRef<CascadePickerRef>(null)
  return (
    <Space>
      <Button onClick={() => ref.current?.open()}>选择</Button>
      <CascadePicker
        ref={ref}
        title='级联选择'
        options={options}
        onConfirm={(val, extend) => {
          console.log('onConfirm', val, extend.items)
        }}
        onSelect={val => {
          console.log('onSelect', val)
        }}
      />

      <CascadePicker
        ref={ref}
        title='级联选择'
        options={options}
        onConfirm={(val, extend) => {
          console.log('onConfirm', val, extend.items)
        }}
        onSelect={val => {
          console.log('onSelect', val)
        }}
      >
        {(items, { open }) => <Button onClick={open}>选择</Button>}
      </CascadePicker>
    </Space>
  )
}

export default () => {
  return (
    <>
      <DemoBlock title='级联选择'>
        <CascadePickerDemo />
      </DemoBlock>

      <DemoBlock title='内部控制 visible'>
        <CascadePickerInnerVisibleDemo />
      </DemoBlock>

      <DemoBlock title='异步获取选项'>
        <AsyncDemo />
      </DemoBlock>
    </>
  )
}

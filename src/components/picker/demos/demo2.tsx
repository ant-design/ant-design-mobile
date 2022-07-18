import React, { useState } from 'react'
import { Button, Picker, Space } from 'antd-mobile'
import type { PickerColumn } from 'antd-mobile/es/components/picker'
import { DemoBlock, DemoDescription } from 'demos'
import { basicColumns } from './columns-data'
import { mockRequest } from './mockRequest'

export default function () {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <DemoBlock title='自定义样式'>
        <Space direction='vertical' block>
          <Button
            onClick={() => {
              setVisible(true)
            }}
          >
            选择
          </Button>
          <DemoDescription>
            你可以通过 CSS 变量对 Picker 的字号等进行自定义，CascadePicker 和
            DatePicker 也同样支持自定义样式。
          </DemoDescription>
        </Space>
        <Picker
          style={{
            '--title-font-size': '13px',
            '--header-button-font-size': '13px',
            '--item-font-size': '13px',
            '--item-height': '30px',
          }}
          defaultValue={['Wed', 'pm']}
          columns={basicColumns}
          visible={visible}
          onClose={() => {
            setVisible(false)
          }}
        />
      </DemoBlock>
      <DemoBlock title='懒加载数据'>
        <LazyLoadColumnsDemo />
      </DemoBlock>
    </>
  )
}

function LazyLoadColumnsDemo() {
  const [visible, setVisible] = useState(false)
  const [columns, setColumns] = useState<PickerColumn[]>([])
  const [loading, setLoading] = useState(true)

  const handleClick = async () => {
    setVisible(true)
    if (!columns.length) {
      const data = await mockRequest({ delay: 2000 })
      setColumns(data)
      setLoading(false)
    }
  }

  return (
    <>
      <Space direction='vertical' block>
        <Button onClick={handleClick}>懒加载数据</Button>
        <DemoDescription>
          你可以在Picker显示时发起异步请求获取数据，提供了默认的骨架屏loading样式，CascadePicker
          和 DatePicker
          也同样支持，你也可以传入loadingContent自定义loading样式。
        </DemoDescription>
      </Space>
      <Picker
        loading={loading}
        columns={columns}
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
      />
    </>
  )
}

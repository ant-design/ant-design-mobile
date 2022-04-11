import React, { useState } from 'react'
import { Button, Picker, Space } from 'antd-mobile'
import { DemoBlock, DemoDescription } from 'demos'
import { basicColumns } from './columns-data'

export default function () {
  const [visible, setVisible] = useState(false)
  return (
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
  )
}

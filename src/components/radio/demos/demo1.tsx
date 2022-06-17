import React from 'react'
import { Radio, Space } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  return (
    <>
      <DemoBlock title='基础用法'>
        <Space direction='vertical'>
          <Radio />
          <Radio>有描述的单选框</Radio>
        </Space>
      </DemoBlock>

      <DemoBlock title='默认选中'>
        <Radio defaultChecked>默认选中</Radio>
      </DemoBlock>

      <DemoBlock title='占满整行宽度'>
        <Space direction='vertical' block>
          <Radio block>块级元素</Radio>
          <Radio>非块级元素</Radio>
        </Space>
      </DemoBlock>

      <DemoBlock title='禁用状态'>
        <Radio defaultChecked disabled>
          禁用状态
        </Radio>
      </DemoBlock>
    </>
  )
}

import { Radio } from 'antd-mobile'
import { DemoBlock } from 'demos'
import React from 'react'

export default () => {
  return (
    <DemoBlock title='自定义大小'>
      <Radio
        style={{
          '--icon-size': '18px',
          '--font-size': '14px',
          '--gap': '6px',
        }}
      >
        小号的单选框
      </Radio>
    </DemoBlock>
  )
}

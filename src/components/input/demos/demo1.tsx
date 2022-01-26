import React, { useState } from 'react'
import { Input } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  const [value, setValue] = useState('')
  return (
    <>
      <DemoBlock title='基本的输入框组件'>
        <Input
          placeholder='请输入内容'
          value={value}
          onChange={val => {
            setValue(val)
          }}
        />
      </DemoBlock>

      <DemoBlock title='带清除按钮'>
        <Input placeholder='请输入内容' clearable />
      </DemoBlock>

      <DemoBlock title='禁用状态'>
        <Input placeholder='请输入内容' value='被禁用的输入框' disabled />
      </DemoBlock>

      <DemoBlock title='只读状态'>
        <Input placeholder='请输入内容' value='只读模式的输入框' readOnly />
      </DemoBlock>

      <DemoBlock title='右侧对齐'>
        <Input
          placeholder='请输入验证码'
          style={{ '--text-align': 'right' }}
          clearable
        />
      </DemoBlock>
    </>
  )
}

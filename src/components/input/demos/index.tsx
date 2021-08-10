import React, { useState } from 'react'
import { Input, List } from 'antd-mobile'
import { DemoBlock } from 'antd-mobile/src/demos/demo-block'

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
      <DemoBlock title='配合 List 使用' padding='0' border='none'>
        <List>
          <List.Item title='用户名'>
            <Input placeholder='请输入用户名' clearable />
          </List.Item>
          <List.Item title='密码'>
            <Input placeholder='请输入密码' clearable type='password' />
          </List.Item>
        </List>
      </DemoBlock>
    </>
  )
}

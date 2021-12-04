import React from 'react'
import { NumberKeyboard, VirtualInput } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  return (
    <>
      <DemoBlock title='配合 NumberKeyboard 使用'>
        <VirtualInput placeholder='请输入内容' keyboard={<NumberKeyboard />} />
      </DemoBlock>

      <DemoBlock title='带清除按钮'>
        <VirtualInput
          placeholder='请输入内容'
          clearable
          keyboard={<NumberKeyboard />}
        />
      </DemoBlock>

      <DemoBlock title='禁用状态'>
        <VirtualInput
          value='这是一个被禁用的输入框'
          disabled
          keyboard={<NumberKeyboard />}
        />
      </DemoBlock>

      <DemoBlock title='右侧对齐'>
        <VirtualInput
          placeholder='请输入内容'
          keyboard={<NumberKeyboard />}
          style={{ '--text-align': 'right' }}
        />
      </DemoBlock>

      <DemoBlock title='自定义光标样式'>
        <VirtualInput
          placeholder='请输入内容'
          keyboard={<NumberKeyboard />}
          style={{ '--caret-width': '1px', '--caret-color': '#666666' }}
        />
      </DemoBlock>
    </>
  )
}

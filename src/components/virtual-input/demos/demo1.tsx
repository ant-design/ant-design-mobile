import React from 'react'
import { DemoBlock } from 'demos'
import { NumberKeyboard, VirtualInput } from 'antd-mobile'

export default () => {
  return (
    <>
      <DemoBlock title='配合 NumberKeyboard 使用'>
        <VirtualInput placeholder='请输入内容' keyboard={<NumberKeyboard />} />
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

import { NumberKeyboard, VirtualInput } from 'antd-mobile'
import { DemoBlock } from 'demos'
import React, { useState } from 'react'

export default () => {
  const [value, setValue] = useState()
  return (
    <>
      <DemoBlock title='配合 NumberKeyboard 使用'>
        <VirtualInput
          placeholder='请输入内容'
          //           value={`${value || '0'}`}
          //           onChange={val => {
          //                 val = val.replace(/^0(\d)$/, '$1');
          //                 // 2位小数
          // const TWO_DIGIT_NUMBER_REGEX = /^(([1-9]\d{0,11})|0)(\.\d{0,2}?)?$/;
          //   if (
          //         (TWO_DIGIT_NUMBER_REGEX && TWO_DIGIT_NUMBER_REGEX.test(val)) ||
          //         !val
          //       ) {
          //          setValue(val)
          //       }

          // }}
          keyboard={<NumberKeyboard confirmText='确定' customKey={'.'} />}
        />
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

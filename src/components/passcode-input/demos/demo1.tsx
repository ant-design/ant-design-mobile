import React, { useState } from 'react'
import { NumberKeyboard, PasscodeInput } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  const [error, setError] = useState(false)

  const onChange = (value: string) => {
    setError(value.length >= 6)
  }

  return (
    <>
      <DemoBlock title='基础用法'>
        <PasscodeInput length={4} keyboard={<NumberKeyboard />} />
      </DemoBlock>
      <DemoBlock title='显示明文'>
        <PasscodeInput plain keyboard={<NumberKeyboard />} />
      </DemoBlock>
      <DemoBlock title='错误控制(输入5个及以上字符报错)'>
        <PasscodeInput
          onChange={onChange}
          keyboard={<NumberKeyboard />}
          error={error}
        />
      </DemoBlock>
      <DemoBlock title='增加格间距'>
        <PasscodeInput
          style={{ '--cell-gap': '6px' }}
          keyboard={<NumberKeyboard />}
        />
      </DemoBlock>
      <DemoBlock title='原生键盘'>
        <PasscodeInput />
      </DemoBlock>
    </>
  )
}

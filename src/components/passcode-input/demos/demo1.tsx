import React, { useState } from 'react'
import { NumberKeyboard, PasscodeInput, Space } from 'antd-mobile'
import { DemoBlock, DemoDescription } from 'demos'

export default () => {
  const [error, setError] = useState(false)

  const onChange = (value: string) => {
    setError(value.length >= 6)
  }

  return (
    <>
      <DemoBlock title='基础用法'>
        <PasscodeInput keyboard={<NumberKeyboard />} />
      </DemoBlock>
      <DemoBlock title='显示明文'>
        <PasscodeInput length={4} plain keyboard={<NumberKeyboard />} />
      </DemoBlock>
      <DemoBlock title='错误状态'>
        <Space direction='vertical' block>
          <PasscodeInput
            onChange={onChange}
            keyboard={<NumberKeyboard />}
            error={error}
          />
          <DemoDescription>
            尝试输入一些内容吧，当你输入完成时会提示错误
          </DemoDescription>
        </Space>
      </DemoBlock>
      <DemoBlock title='格子间距'>
        <PasscodeInput seperated keyboard={<NumberKeyboard />} />
      </DemoBlock>
      <DemoBlock title='使用系统原生键盘'>
        <PasscodeInput plain />
      </DemoBlock>
    </>
  )
}

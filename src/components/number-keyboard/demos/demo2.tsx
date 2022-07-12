import React, { useState } from 'react'
import { List, NumberKeyboard } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  const [visible, setVisible] = useState<string>('')

  const openKeyboard = (name: string) => {
    setVisible(name)
  }

  const onClose = () => {
    setVisible('')
  }

  return (
    <>
      <DemoBlock title='自定义按钮' padding='0'>
        <List>
          <List.Item onClick={() => openKeyboard('demo1')}>
            自定义键盘
          </List.Item>
          <List.Item onClick={() => openKeyboard('demo2')}>
            多个自定义键盘
          </List.Item>
          <List.Item onClick={() => openKeyboard('demo3')}>
            带确认键盘
          </List.Item>
          <List.Item onClick={() => openKeyboard('demo4')}>
            多个自定义带确认键盘
          </List.Item>
        </List>
      </DemoBlock>
      <NumberKeyboard
        visible={visible === 'demo1'}
        onClose={onClose}
        customKey={'-'}
      />
      <NumberKeyboard
        visible={visible === 'demo2'}
        onClose={onClose}
        customKey={['-', '.']}
      />
      <NumberKeyboard
        visible={visible === 'demo3'}
        onClose={onClose}
        customKey={'-'}
        confirmText='确定'
      />
      <NumberKeyboard
        visible={visible === 'demo4'}
        onClose={onClose}
        customKey={['-', '.']}
        confirmText='确定'
      />
    </>
  )
}

import React, { useState } from 'react'
import { List, NumbericKeyboard, Toast } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  const [visible, setVisible] = useState<any>('')

  const openDefaultKeyboard = (e: Event) => {
    setVisible('demo1')
    e.stopPropagation()
  }

  const openTitledKeyBoard = (e: Event) => {
    setVisible('demo2')
    e.stopPropagation()
  }

  const openComfirmKeyBoard = (e: Event) => {
    setVisible('demo3')
    e.stopPropagation()
  }

  const openCustomKeyBoard = (e: Event) => {
    setVisible('demo4')
    e.stopPropagation()
  }

  const openRandomKeyBoard = (e: Event) => {
    setVisible('demo5')
    e.stopPropagation()
  }

  const onClose = (done: boolean) => {
    Toast.show({ content: done ? 'confirmed' : 'closed' })
    console.log(done ? 'confirmed' : 'closed')
    setVisible('')
  }

  const onInput = (key: string) => {
    Toast.show({ content: key })
  }

  const onDelete = () => {
    Toast.show({ content: 'delete' })
  }

  return (
    <>
      <DemoBlock title='基础用法' padding='0' border='none'>
        <List>
          <List.Item onClick={openDefaultKeyboard}>默认键盘</List.Item>
          <List.Item onClick={openTitledKeyBoard}>带标题键盘</List.Item>
          <List.Item onClick={openComfirmKeyBoard}>带确认键盘</List.Item>
          <List.Item onClick={openCustomKeyBoard}>带自定义键盘</List.Item>
          <List.Item onClick={openRandomKeyBoard}>乱序键盘</List.Item>
        </List>
      </DemoBlock>
      <NumbericKeyboard
        visible={visible === 'demo1'}
        onClose={onClose}
        onInput={onInput}
        onDelete={onDelete}
      />
      <NumbericKeyboard
        visible={visible === 'demo2'}
        onClose={onClose}
        onInput={onInput}
        onDelete={onDelete}
        title='数字键盘'
        customKey='-'
      />
      <NumbericKeyboard
        visible={visible === 'demo3'}
        onClose={onClose}
        onInput={onInput}
        onDelete={onDelete}
        showCloseButton={false}
        confirmText='确定'
      />
      <NumbericKeyboard
        visible={visible === 'demo4'}
        onClose={onClose}
        onInput={onInput}
        onDelete={onDelete}
        customKey='.'
        showCloseButton={false}
        confirmText='确定'
      />
      <NumbericKeyboard
        visible={visible === 'demo5'}
        onClose={onClose}
        onInput={onInput}
        onDelete={onDelete}
        randomOrder
        customKey='X'
        confirmText='确定'
      />
    </>
  )
}

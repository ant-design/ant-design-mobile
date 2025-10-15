import { Button, Dialog, Input, List, NumberKeyboard, Toast } from 'antd-mobile'
import { DemoBlock } from 'demos'
import React, { useState } from 'react'

export default () => {
  const [visible, setVisible] = useState<any>('')
  const [value, setValue] = useState('')

  const openKeyboard = (name: string) => {
    setVisible(name)
  }

  const actions = {
    onClose: () => {
      Toast.show('closed')
      setVisible('')
    },
    onInput: (key: string) => {
      Toast.show(key)
    },
    onDelete: () => {
      Toast.show('delete')
    },
  }

  const onInput = (value: string) => {
    setValue(v => v + value)
  }

  const onDelete = () => {
    setValue(v => v.slice(0, v.length - 1))
  }

  return (
    <>
      <DemoBlock title='基础用法' padding='0'>
        <List>
          <List.Item onClick={() => openKeyboard('demo1')}>默认键盘</List.Item>
          <List.Item onClick={() => openKeyboard('demo2')}>
            带标题键盘
          </List.Item>
          <List.Item onClick={() => openKeyboard('demo3')}>
            带确认键盘
          </List.Item>
          <List.Item onClick={() => openKeyboard('demo4')}>乱序键盘</List.Item>
          <List.Item
            onClick={e => {
              Dialog.alert({
                content: (
                  <Button
                    color='primary'
                    fill='outline'
                    onClick={() => openKeyboard('demo5')}
                  >
                    打开键盘
                  </Button>
                ),
              })
              setVisible('')
              e.stopPropagation()
            }}
          >
            弹窗内展示键盘
          </List.Item>
          <List.Item onClick={() => openKeyboard('demo6')} arrow={false}>
            {/* 添加 readOnly 阻止原生键盘弹出 */}
            <Input placeholder='请输入内容' value={value} readOnly />
          </List.Item>
          <List.Item onClick={() => openKeyboard('demo7')}>
            确认按钮文案支持换行
          </List.Item>
        </List>
      </DemoBlock>
      <NumberKeyboard
        visible={visible === 'demo1'}
        onClose={actions.onClose}
        onInput={actions.onInput}
        onDelete={actions.onDelete}
      />
      <NumberKeyboard
        visible={visible === 'demo2'}
        onClose={actions.onClose}
        onInput={actions.onInput}
        onDelete={actions.onDelete}
        title='数字键盘'
        customKey='-'
      />
      <NumberKeyboard
        visible={visible === 'demo3'}
        onClose={actions.onClose}
        onInput={actions.onInput}
        onDelete={actions.onDelete}
        showCloseButton={false}
        confirmText='确定'
      />
      <NumberKeyboard
        visible={visible === 'demo4'}
        onClose={actions.onClose}
        onInput={actions.onInput}
        onDelete={actions.onDelete}
        randomOrder
        customKey='X'
        confirmText='确定'
      />
      <NumberKeyboard
        visible={visible === 'demo5'}
        onClose={actions.onClose}
        onInput={actions.onInput}
        onDelete={actions.onDelete}
      />
      <NumberKeyboard
        visible={visible === 'demo6'}
        onClose={actions.onClose}
        onInput={onInput}
        onDelete={onDelete}
        customKey='X'
      />
      <NumberKeyboard
        visible={visible === 'demo7'}
        onClose={actions.onClose}
        onInput={actions.onInput}
        onDelete={actions.onDelete}
        showCloseButton={false}
        confirmText={'先签约\n再转入'} // {'\n'} 可以而 '\n' 不行，后者会被转义为 '\\n'
      />
    </>
  )
}

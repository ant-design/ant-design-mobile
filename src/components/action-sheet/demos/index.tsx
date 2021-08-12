import React, { useState } from 'react'
import { ActionSheet, Button, Dialog, Space, Toast } from 'antd-mobile'
import { DemoBlock } from 'antd-mobile/src/demos/demo-block'
import type { Action } from '..'

const actions: Action[] = [
  { text: '复制', key: 'copy' },
  { text: '修改', key: 'edit' },
  { text: '删除', key: 'delete' },
]

function Basic() {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Button onClick={() => setVisible(true)}>最简单的用法</Button>
      <ActionSheet
        visible={visible}
        actions={actions}
        onClose={() => setVisible(false)}
      />
    </>
  )
}

function WithCancelButtonAndDescription() {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Button onClick={() => setVisible(true)}>取消按钮和额外描述</Button>
      <ActionSheet
        extra='请选择你要进行的操作'
        cancelText='取消'
        visible={visible}
        actions={actions}
        onClose={() => setVisible(false)}
      />
    </>
  )
}

function ConfigActions() {
  const actions: Action[] = [
    { text: '复制', key: 'copy' },
    { text: '修改', key: 'edit', disabled: true },
    {
      text: '删除',
      key: 'delete',
      description: '删除后数据不可恢复',
      danger: true,
    },
  ]

  const [visible, setVisible] = useState(false)
  return (
    <>
      <Button onClick={() => setVisible(true)}>禁用和危险的选项</Button>
      <ActionSheet
        visible={visible}
        actions={actions}
        onClose={() => setVisible(false)}
      />
    </>
  )
}

function Events() {
  const actions: Action[] = [
    { text: '复制', key: 'copy' },
    { text: '修改', key: 'edit' },
    {
      text: '删除',
      key: 'delete',
      onClick: async () => {
        const result = await Dialog.confirm({ content: '确定要删除吗？' })
        if (result) {
          Toast.show({ content: `执行了删除操作` })
        }
      },
    },
  ]

  const [visible, setVisible] = useState(false)
  return (
    <>
      <Button onClick={() => setVisible(true)}>事件处理</Button>
      <ActionSheet
        visible={visible}
        actions={actions}
        onClose={() => setVisible(false)}
        onSelect={action => {
          if (action.key === 'edit' || action.key === 'copy') {
            Toast.show({ content: `点击了${action.text}` })
          }
        }}
        afterClose={() => {
          Toast.show({ content: `动作面板已关闭` })
        }}
      />
    </>
  )
}

function Imperative() {
  return (
    <Button
      onClick={() => {
        ActionSheet.show({
          actions,
        })
      }}
    >
      显示
    </Button>
  )
}

export default () => {
  return (
    <>
      <DemoBlock title='基础用法'>
        <Space wrap>
          <Basic />
          <WithCancelButtonAndDescription />
        </Space>
      </DemoBlock>
      <DemoBlock title='选项状态'>
        <ConfigActions />
      </DemoBlock>
      <DemoBlock title='事件处理'>
        <Events />
      </DemoBlock>
      <DemoBlock title='指令式'>
        <Imperative />
      </DemoBlock>
    </>
  )
}

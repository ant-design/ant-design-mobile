import React, { FC, useRef } from 'react'
import { Dialog, List, SwipeAction, Toast, Image } from 'antd-mobile'
import { DemoBlock } from 'demos'
import { Action, SwipeActionRef } from 'antd-mobile/es/components/swipe-action'

export default () => {
  return (
    <>
      <DemoBlock title='搭配列表使用' padding='0'>
        <WithList />
      </DemoBlock>

      <DemoBlock title='搭配图片使用' padding='0'>
        <CustomContent />
      </DemoBlock>

      <DemoBlock title='手动控制归位逻辑' padding='0'>
        <Manual />
      </DemoBlock>
    </>
  )
}

// 配合列表使用
const WithList: FC = () => {
  const leftActions: Action[] = [
    {
      key: 'pin',
      text: '置顶',
      color: 'primary',
    },
  ]
  const rightActions: Action[] = [
    {
      key: 'unsubscribe',
      text: '取消关注',
      color: 'light',
    },
    {
      key: 'mute',
      text: '免打扰',
      color: 'warning',
    },
    {
      key: 'delete',
      text: '删除',
      color: 'danger',
    },
  ]
  const items = ['A', 'B', 'C']
  return (
    <List>
      {items.map(item => (
        <SwipeAction
          key={item}
          leftActions={leftActions}
          rightActions={rightActions}
        >
          <List.Item>{item}</List.Item>
        </SwipeAction>
      ))}
    </List>
  )
}

const demoSrc =
  'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'

// 自定义内容
const CustomContent: FC = () => {
  return (
    <SwipeAction
      rightActions={[
        {
          key: 'delete',
          text: '删除',
          color: 'danger',
        },
      ]}
    >
      <Image src={demoSrc} />
    </SwipeAction>
  )
}

// 手动控制归位逻辑
const Manual: FC = () => {
  const ref = useRef<SwipeActionRef>(null)
  return (
    <List>
      <SwipeAction
        ref={ref}
        closeOnAction={false}
        closeOnTouchOutside={false}
        rightActions={[
          {
            key: 'delete',
            text: '删除',
            color: 'danger',
            onClick: async () => {
              await Dialog.confirm({
                content: '确定要删除吗？',
              })
              ref.current?.close()
            },
          },
        ]}
      >
        <List.Item
          onClick={() => {
            Toast.show('你点击了列表项')
          }}
        >
          A
        </List.Item>
      </SwipeAction>
    </List>
  )
}

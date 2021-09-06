import React, { FC } from 'react'
import { List, SwipeAction } from 'antd-mobile'
import { DemoBlock, lorem } from 'demos'
import { Action } from 'antd-mobile/src/components/swipe-action'

export default () => {
  return (
    <>
      <DemoBlock title='配合列表使用' padding='0' border='none'>
        <WithList />
      </DemoBlock>
      <DemoBlock title='自定义内容' padding='0' border='none'>
        <SwipeAction
          rightActions={[
            {
              key: 'delete',
              text: '删除',
              color: 'danger',
            },
          ]}
        >
          <div style={{ padding: 12 }}>{lorem.generateParagraphs(2)}</div>
        </SwipeAction>
      </DemoBlock>
      <DemoBlock title='手动控制归位逻辑' padding='0' border='none'>
        <List>
          <SwipeAction
            closeOnAction={false}
            closeOnTouchAway={false}
            rightActions={[
              {
                key: 'delete',
                text: '删除',
                color: 'danger',
              },
            ]}
          >
            <List.Item>A</List.Item>
          </SwipeAction>
        </List>
      </DemoBlock>
    </>
  )
}

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

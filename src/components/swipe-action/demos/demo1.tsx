import React from 'react'
import { List, SwipeAction } from 'antd-mobile'
import { DemoBlock } from 'demos'
import { Action } from 'antd-mobile/src/components/swipe-action'

export default () => {
  const leftActions: Action[] = [
    {
      key: 'pin',
      text: '置顶',
      color: 'primary',
    },
  ]
  const rightActions: Action[] = [
    {
      key: 'delete',
      text: '删除',
      color: 'danger',
    },
  ]
  const items = ['A', 'B', 'C']
  return (
    <>
      <DemoBlock title='配合列表使用' padding='0' border='none'>
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
      </DemoBlock>
    </>
  )
}

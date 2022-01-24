import { List } from 'antd-mobile'
import React from 'react'

export default () => {
  return (
    <List mode='card' header='卡片模式'>
      <List.Item title='这里是标题'>这里是主信息</List.Item>
      <List.Item title='这里是标题'>这里是主信息</List.Item>
    </List>
  )
}

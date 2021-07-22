import {List} from 'antd-mobile'
import React from 'react'
import './demo1.less'

export default () => {
  return (
    <div>
      <List>
        <List.Item
          onClick={() => {
            alert('hello')
          }}
          prefix={'123'}
          extra={'123'}
          title='这里是标题'
          description='这里是描述信息'
        >
          这里是主信息
        </List.Item>
        <List.Item
          onClick={() => {
            alert('hello')
          }}
          title='这里是标题'
        >
          这里是主信息
        </List.Item>
        <List.Item title='这里是标题'>这里是主信息</List.Item>
      </List>
      <div style={{background: '#eee', padding: '8px 0', marginTop: 24}}>
        <List mode='card'>
          <List.Item title='这里是标题'>这里是主信息</List.Item>
          <List.Item title='这里是标题'>这里是主信息</List.Item>
        </List>
      </div>
    </div>
  )
}

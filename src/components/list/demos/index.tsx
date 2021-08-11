import React from 'react'
import { Image, List } from 'antd-mobile'
import { DemoBlock } from 'antd-mobile/src/demos/demo-block'
import {
  MoneyCollectOutlined,
  ProfileOutlined,
  SettingOutlined,
} from '@ant-design/icons'

const users = [
  {
    avatar:
      'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    name: 'Novalee Spicer',
    description: 'Deserunt dolor ea eaque eos',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
    name: 'Sara Koivisto',
    description: 'Animi eius expedita, explicabo',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    name: 'Marco Gregg',
    description: 'Ab animi cumque eveniet ex harum nam odio omnis',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    name: 'Edith Koenig',
    description: 'Commodi earum exercitationem id numquam vitae',
  },
]

export default () => {
  return (
    <>
      <DemoBlock title='基础用法' padding='0' border='none'>
        <List>
          <List.Item>1</List.Item>
          <List.Item>2</List.Item>
          <List.Item>3</List.Item>
        </List>
      </DemoBlock>
      <DemoBlock title='可点击的功能列表' padding='0' border='none'>
        <List>
          <List.Item prefix={<ProfileOutlined />} onClick={() => {}}>
            账单
          </List.Item>
          <List.Item prefix={<MoneyCollectOutlined />} onClick={() => {}}>
            总资产
          </List.Item>
          <List.Item prefix={<SettingOutlined />} onClick={() => {}}>
            设置
          </List.Item>
        </List>
      </DemoBlock>
      <DemoBlock title='复杂布局' padding='0' border='none'>
        <List>
          <List.Item
            onClick={() => {
              alert('hello')
            }}
            extra='次要信息'
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
      </DemoBlock>
      <DemoBlock title='用户列表' padding='0' border='none'>
        <List>
          {users.map(user => (
            <List.Item
              prefix={
                <Image
                  src={user.avatar}
                  style={{ borderRadius: 20 }}
                  fit='cover'
                  width={40}
                  height={40}
                />
              }
              description={user.description}
            >
              {user.name}
            </List.Item>
          ))}
        </List>
      </DemoBlock>
      <DemoBlock title='卡片模式' padding='0' border='none'>
        <div style={{ background: '#eee', padding: '8px 0' }}>
          <List mode='card'>
            <List.Item title='这里是标题'>这里是主信息</List.Item>
            <List.Item title='这里是标题'>这里是主信息</List.Item>
          </List>
        </div>
      </DemoBlock>
    </>
  )
}

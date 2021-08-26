import { DemoBlock } from 'demos'
import { TabBar } from 'antd-mobile'
import React, { useState } from 'react'
import {
  HomeOutlined,
  MessageOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from '@ant-design/icons'

export default () => {
  const tabs = [
    {
      key: 'home',
      title: '首页',
      icon: <HomeOutlined />,
      badge: '',
    },
    {
      key: 'todo',
      title: '我的待办',
      icon: <UnorderedListOutlined />,
      badge: '5',
    },
    {
      key: 'message',
      title: '我的消息',
      icon: <MessageOutlined />,
      badge: '99+',
    },
    {
      key: 'personalCenter',
      title: '个人中心',
      icon: <UserOutlined />,
    },
  ]

  const [activeKey, setActiveKey] = useState('todo')

  const [activeKey1, setActiveKey1] = useState('home')

  return (
    <>
      <DemoBlock title='基本用法' padding='0'>
        <TabBar>
          {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </DemoBlock>
      <DemoBlock title='徽标' padding='0'>
        <TabBar>
          {tabs.map(item => (
            <TabBar.Item
              key={item.key}
              icon={item.icon}
              title={item.title}
              badge={item.badge}
            />
          ))}
        </TabBar>
      </DemoBlock>
      <DemoBlock title='仅图标' padding='0'>
        <TabBar>
          {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} />
          ))}
        </TabBar>
      </DemoBlock>
      <DemoBlock title='仅标题' padding='0'>
        <TabBar>
          {tabs.map(item => (
            <TabBar.Item key={item.key} title={item.title} />
          ))}
        </TabBar>
      </DemoBlock>
      <DemoBlock title='受控组件' padding='0'>
        <TabBar activeKey={activeKey} onChange={setActiveKey}>
          {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </DemoBlock>
    </>
  )
}

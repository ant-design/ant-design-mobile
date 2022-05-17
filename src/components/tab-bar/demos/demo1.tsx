import React, { useState } from 'react'
import { Badge, TabBar } from 'antd-mobile'
import { DemoBlock } from 'demos'
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'

export default () => {
  const tabs = [
    {
      key: 'home',
      title: '首页',
      icon: <AppOutline />,
      badge: Badge.dot,
    },
    {
      key: 'todo',
      title: '我的待办',
      icon: <UnorderedListOutline />,
      badge: '5',
    },
    {
      key: 'message',
      title: '我的消息',
      icon: (active: boolean) =>
        active ? <MessageFill /> : <MessageOutline />,
      badge: '99+',
    },
    {
      key: 'personalCenter',
      title: '个人中心',
      icon: <UserOutline />,
    },
  ]

  const [activeKey, setActiveKey] = useState('todo')

  return (
    <>
      <DemoBlock title='基础用法' padding='0'>
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

      <DemoBlock title='开启安全区' padding='0'>
        <TabBar safeArea>
          {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </DemoBlock>
    </>
  )
}

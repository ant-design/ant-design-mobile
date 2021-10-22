import { DemoBlock } from 'demos'
import { Badge, TabBar } from 'antd-mobile'
import React, { useState } from 'react'
import { Switch, Route, useHistory, useLocation } from 'react-router-dom'
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'

export default () => {
  const history = useHistory()
  const location = useLocation()
  const { pathname } = location
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

  const tabs1 = [
    {
      key: '/~demos/tab-bar-demos',
      title: '首页',
      icon: <AppOutline />,
      badge: Badge.dot,
    },
    {
      key: '/~demos/tab-bar-demos/todo',
      title: '我的待办',
      icon: <UnorderedListOutline />,
      badge: '5',
    },
    {
      key: '/~demos/tab-bar-demos/message',
      title: '我的消息',
      icon: (active: boolean) =>
        active ? <MessageFill /> : <MessageOutline />,
      badge: '99+',
    },
    {
      key: '/~demos/tab-bar-demos/personalCenter',
      title: '个人中心',
      icon: <UserOutline />,
    },
  ]

  const [activeKey, setActiveKey] = useState('todo')
  const setRouteActive = (value: string) => {
    history.push(value)
  }
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
      <Switch>
        <Route exact path='/~demos/tab-bar-demos'>
          <Home />
        </Route>
        <Route exact path='/~demos/tab-bar-demos/todo'>
          <Todo />
        </Route>
        <Route exact path='/~demos/tab-bar-demos/message'>
          <Message />
        </Route>
        <Route exact path='/~demos/tab-bar-demos/personalCenter'>
          <PersonalCenter />
        </Route>
      </Switch>
      <DemoBlock title='路由用法' padding='0'>
        <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
          {tabs1.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </DemoBlock>
    </>
  )
}

function Home() {
  return <h2>首页</h2>
}

function Todo() {
  return <h2>我的代办</h2>
}

function Message() {
  return <h2>我的消息</h2>
}

function PersonalCenter() {
  return <h2>个人中心</h2>
}

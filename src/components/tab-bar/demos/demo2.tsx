import React, { FC } from 'react'
import { NavBar, TabBar } from 'antd-mobile'
import {
  Route,
  Switch,
  useHistory,
  useLocation,
  MemoryRouter as Router,
} from 'react-router-dom'
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'

import styles from './demo2.less'

const Bottom: FC = () => {
  const history = useHistory()
  const location = useLocation()
  const { pathname } = location

  const setRouteActive = (value: string) => {
    history.push(value)
  }

  const tabs = [
    {
      key: '/home',
      title: '首页',
      icon: <AppOutline />,
    },
    {
      key: '/todo',
      title: '我的待办',
      icon: <UnorderedListOutline />,
    },
    {
      key: '/message',
      title: '我的消息',
      icon: <MessageOutline />,
    },
    {
      key: '/me',
      title: '个人中心',
      icon: <UserOutline />,
    },
  ]

  return (
    <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
      {tabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  )
}

export default () => {
  return (
    <Router initialEntries={['/home']}>
      <div className={styles.app}>
        <div className={styles.top}>
          <NavBar>配合路由使用</NavBar>
        </div>
        <div className={styles.body}>
          <Switch>
            <Route exact path='/home'>
              <Home />
            </Route>
            <Route exact path='/todo'>
              <Todo />
            </Route>
            <Route exact path='/message'>
              <Message />
            </Route>
            <Route exact path='/me'>
              <PersonalCenter />
            </Route>
          </Switch>
        </div>
        <div className={styles.bottom}>
          <Bottom />
        </div>
      </div>
    </Router>
  )
}

function Home() {
  return <div>首页</div>
}

function Todo() {
  return <div>我的待办</div>
}

function Message() {
  return <div>我的消息</div>
}

function PersonalCenter() {
  return <div>个人中心</div>
}

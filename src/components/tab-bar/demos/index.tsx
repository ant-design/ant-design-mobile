import { DemoBlock } from 'demos'
import { TabBar, Toast } from 'antd-mobile'
import React, { useState } from 'react'
import {
  HomeOutlined,
  MessageOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from '@ant-design/icons'
import styles from './index.less'
import classNames from 'classnames'

const showActiveKey = (key: string) => {
  Toast.show({
    content: `当前选中key为：${key}`,
  })
}

export default () => {
  const tabs = [
    {
      key: 'home',
      title: '首页',
      icon: <HomeOutlined />,
    },
    {
      key: 'todo',
      title: '我的待办',
      icon: <UnorderedListOutlined />,
    },
    {
      key: 'message',
      title: '我的消息',
      icon: <MessageOutlined />,
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
        <TabBar onChange={showActiveKey}>
          {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </DemoBlock>
      <DemoBlock title='没有图标' padding='0'>
        <TabBar onChange={showActiveKey}>
          {tabs.map(item => (
            <TabBar.Item key={item.key} title={item.title} />
          ))}
        </TabBar>
      </DemoBlock>
      <DemoBlock title='默认选中' padding='0'>
        <TabBar defaultActiveKey='personalCenter' onChange={showActiveKey}>
          {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
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
      <DemoBlock title='自定义渲染' padding='0'>
        <TabBar activeKey={activeKey1} onChange={setActiveKey1}>
          {tabs.map(item => (
            <TabBar.Item
              key={item.key}
              className={classNames({
                [styles.activeItem]: activeKey1 === item.key,
              })}
            >
              <div className={styles.content}>
                <div className={styles.icon}>
                  {item.icon}
                  {item.key === 'message' ? (
                    <span className={styles.msgNo}>5</span>
                  ) : null}
                </div>
                <div className={styles.title}>{item.title}</div>
              </div>
            </TabBar.Item>
          ))}
        </TabBar>
      </DemoBlock>
    </>
  )
}

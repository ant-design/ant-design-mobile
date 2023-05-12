import React, { useLayoutEffect, useState } from 'react'
import {
  Badge,
  Divider,
  JumboTabs,
  SearchBar,
  Slider,
  Space,
  Switch,
  TabBar,
} from 'antd-mobile'
import { DemoBlock } from 'demos'
import {
  AppOutline,
  MessageFill,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'

export default () => {
  const [enableDarkMode, setEnableDarkMode] = useState(true)
  useLayoutEffect(() => {
    document.documentElement.setAttribute(
      'data-prefers-color-scheme',
      enableDarkMode ? 'dark' : 'light'
    )
  }, [enableDarkMode])

  return (
    <>
      <DemoBlock title='Switch'>
        <Space align='center'>
          <div>Dark Mode</div>
          <Switch
            checked={enableDarkMode}
            onChange={v => {
              setEnableDarkMode(v)
            }}
          />
        </Space>
      </DemoBlock>
      <DemoBlock title='JumboTabs' padding='0'>
        <JumboTabs defaultActiveKey='1'>
          <JumboTabs.Tab title='Espresso' description='描述文案' key='1'>
            1
          </JumboTabs.Tab>
          <JumboTabs.Tab title='Coffee Latte' description='描述文案' key='2'>
            2
          </JumboTabs.Tab>
          <JumboTabs.Tab title='Cappuccino' description='描述文案' key='3'>
            3
          </JumboTabs.Tab>
          <JumboTabs.Tab title='Americano' description='描述文案' key='4'>
            4
          </JumboTabs.Tab>
          <JumboTabs.Tab title='Flat White' description='描述文案' key='5'>
            5
          </JumboTabs.Tab>
          <JumboTabs.Tab
            title='Caramel Macchiato'
            description='描述文案'
            key='6'
          >
            6
          </JumboTabs.Tab>
          <JumboTabs.Tab title='Cafe Mocha' description='描述文案' key='7'>
            7
          </JumboTabs.Tab>
        </JumboTabs>
      </DemoBlock>

      <DemoBlock title='Slider'>
        <Slider defaultValue={40} />
      </DemoBlock>

      <DemoBlock title='SearchBar'>
        <SearchBar placeholder='请输入内容' showCancelButton />
      </DemoBlock>

      <DemoBlock title='Tabs' padding='0'>
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

      <DemoBlock title='Divider'>
        <Divider>默认内容在中间</Divider>
      </DemoBlock>
    </>
  )
}

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
    icon: (active: boolean) => (active ? <MessageFill /> : <MessageOutline />),
    badge: '99+',
  },
  {
    key: 'personalCenter',
    title: '个人中心',
    icon: <UserOutline />,
  },
]

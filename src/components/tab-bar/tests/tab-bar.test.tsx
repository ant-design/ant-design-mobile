import React, { useState } from 'react'
import { render, testA11y, fireEvent } from 'testing'
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'
import TabBar from '..'
import { Badge } from 'antd-mobile'

const classPrefix = `adm-tab-bar`

const tabs = [
  {
    key: 'home',
    title: 'Home',
    icon: <AppOutline />,
    badge: Badge.dot,
  },
  {
    key: 'todo',
    title: 'Todo',
    icon: <UnorderedListOutline />,
    badge: '5',
  },
  {
    key: 'message',
    title: 'Message',
    icon: (active: boolean) => (active ? <MessageFill /> : <MessageOutline />),
    badge: '99+',
  },
  {
    key: 'personalCenter',
    title: 'PersonalCenter',
    icon: <UserOutline />,
  },
]
describe('TabBar', () => {
  test('a11y', async () => {
    await testA11y(
      <TabBar>
        {tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    )
  })

  test('basic usage', async () => {
    const onChange = jest.fn()
    const { getByText } = render(
      <TabBar onChange={onChange} defaultActiveKey='personalCenter'>
        {tabs.map(item => (
          <TabBar.Item
            key={item.key}
            icon={item.icon}
            title={item.title}
            badge={item.badge}
          />
        ))}
      </TabBar>
    )

    expect(getByText('PersonalCenter').parentElement).toHaveClass(
      `${classPrefix}-item-active`
    )
    fireEvent.click(getByText('Todo'))
    expect(getByText('Todo').parentElement).toHaveClass(
      `${classPrefix}-item-active`
    )
    expect(onChange).toBeCalledWith('todo')
  })

  test('controlled mode', async () => {
    const App = () => {
      const [activeKey, setActiveKey] = useState('todo')
      return (
        <TabBar activeKey={activeKey} onChange={setActiveKey}>
          {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      )
    }
    const { getByText } = render(<App />)

    expect(getByText('Todo').parentElement).toHaveClass(
      `${classPrefix}-item-active`
    )
    fireEvent.click(getByText('Message'))
    expect(getByText('Message').parentElement).toHaveClass(
      `${classPrefix}-item-active`
    )
  })

  test('safe area', async () => {
    render(
      <TabBar safeArea>
        {tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    )

    const el = document.querySelectorAll(`.adm-safe-area`)[0]
    expect(el).toBeInTheDocument()
  })

  test('the children should be react valid element', async () => {
    render(<TabBar>{1}</TabBar>)
    expect(
      document.querySelectorAll(`.${classPrefix}-wrap`)[0]
    ).toBeEmptyDOMElement()
  })

  test('item content', async () => {
    const { container } = render(
      <TabBar>
        <TabBar.Item key='icon' icon={<AppOutline />} />
        <TabBar.Item key='title' title='title' />
        <TabBar.Item key='empty' />
        <TabBar.Item />
      </TabBar>
    )

    expect(container).toMatchSnapshot()
  })
})

import React, { useState } from 'react'
import { render, testA11y, fireEvent } from 'testing'
import SideBar from '..'
import { Badge } from 'antd-mobile'

const classPrefix = `adm-side-bar`

const tabs = [
  {
    key: 'key1',
    title: 'item1',
    badge: Badge.dot,
  },
  {
    key: 'key2',
    title: 'item2',
    badge: '5',
  },
  {
    key: 'key3',
    title: 'item3',
    badge: '99+',
    disabled: true,
  },
]
describe('TabBar', () => {
  test('a11y', async () => {
    await testA11y(
      <SideBar>
        {tabs.map(item => (
          <SideBar.Item key={item.key} title={item.title} />
        ))}
      </SideBar>
    )
  })

  test('basic usage', async () => {
    const onChange = jest.fn()
    const { getByText } = render(
      <SideBar onChange={onChange} defaultActiveKey='key2'>
        {tabs.map(item => (
          <SideBar.Item key={item.key} title={item.title} badge={item.badge} />
        ))}
      </SideBar>
    )

    const items = document.querySelectorAll(`.${classPrefix}-item`)

    expect(items[1]).toHaveClass(`${classPrefix}-item-active`)
    fireEvent.click(getByText('item3'))
    expect(items[2]).toHaveClass(`${classPrefix}-item-active`)
    expect(onChange).toBeCalledWith('key3')
  })

  test('controlled mode', async () => {
    const App = () => {
      const [activeKey, setActiveKey] = useState('key3')
      return (
        <SideBar activeKey={activeKey} onChange={setActiveKey}>
          {tabs.map(item => (
            <SideBar.Item key={item.key} title={item.title} />
          ))}
        </SideBar>
      )
    }
    const { getByText } = render(<App />)
    const items = document.querySelectorAll(`.${classPrefix}-item`)
    expect(items[2]).toHaveClass(`${classPrefix}-item-active`)
    fireEvent.click(getByText('item1'))
    expect(items[0]).toHaveClass(`${classPrefix}-item-active`)
  })

  test('disabled item', async () => {
    const onChange = jest.fn()
    const { getByText } = render(
      <SideBar onChange={onChange}>
        {tabs.map(item => (
          <SideBar.Item
            key={item.key}
            title={item.title}
            disabled={item.disabled}
          />
        ))}
      </SideBar>
    )

    const items = document.querySelectorAll(`.${classPrefix}-item`)
    expect(items[2]).toHaveClass(`${classPrefix}-item-disabled`)
    fireEvent.click(getByText('item3'))
    expect(onChange).not.toBeCalled()
  })

  test('the children should be react valid element', async () => {
    render(<SideBar>{1}</SideBar>)
    expect(
      document.querySelectorAll(`.${classPrefix}-items`)[0]
    ).toBeEmptyDOMElement()
  })

  test('item content', async () => {
    const { container } = render(
      <SideBar>
        <SideBar.Item key='title' title='title' />
        <SideBar.Item key='empty' />
        <SideBar.Item />
      </SideBar>
    )

    expect(container).toMatchSnapshot()
  })
})

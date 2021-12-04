import React, { useState } from 'react'
import { Badge, SideBar } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  const tabs = [
    {
      key: 'key1',
      title: '选项一',
      badge: Badge.dot,
    },
    {
      key: 'key2',
      title: '选项二',
      badge: '5',
    },
    {
      key: 'key3',
      title: '选项三',
      badge: '99+',
      disabled: true,
    },
  ]

  const [activeKey, setActiveKey] = useState('key1')

  return (
    <>
      <DemoBlock title='基本用法' padding='0'>
        <SideBar>
          {tabs.map(item => (
            <SideBar.Item key={item.key} title={item.title} />
          ))}
        </SideBar>
      </DemoBlock>

      <DemoBlock title='配合 Badge 使用' padding='0'>
        <SideBar>
          {tabs.map(item => (
            <SideBar.Item
              key={item.key}
              title={item.title}
              badge={item.badge}
            />
          ))}
        </SideBar>
      </DemoBlock>

      <DemoBlock title='禁用某个选项' padding='0'>
        <SideBar>
          {tabs.map(item => (
            <SideBar.Item
              key={item.key}
              title={item.title}
              disabled={item.disabled}
            />
          ))}
        </SideBar>
      </DemoBlock>

      <DemoBlock title='受控组件' padding='0'>
        <div style={{ display: 'flex' }}>
          <div>
            <SideBar activeKey={activeKey} onChange={setActiveKey}>
              {tabs.map(item => (
                <SideBar.Item key={item.key} title={item.title} />
              ))}
            </SideBar>
          </div>
          <div>
            <div hidden={activeKey !== 'key1'}>A</div>
            <div hidden={activeKey !== 'key2'}>B</div>
            <div hidden={activeKey !== 'key3'}>C</div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock title='自定义宽度' padding='0'>
        <SideBar style={{ '--width': '120px' }}>
          {tabs.map(item => (
            <SideBar.Item key={item.key} title={item.title} />
          ))}
        </SideBar>
      </DemoBlock>

      <DemoBlock title='自定义选项圆角' padding='0'>
        <SideBar style={{ '--item-border-radius': '0' }}>
          {tabs.map(item => (
            <SideBar.Item key={item.key} title={item.title} />
          ))}
        </SideBar>
      </DemoBlock>
    </>
  )
}

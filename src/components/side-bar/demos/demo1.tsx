import React from 'react'
import { SideBar } from 'antd-mobile'
import { DemoBlock } from 'demos'
import { tabs } from './tabs'

export default () => {
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
    </>
  )
}

import React from 'react'
import { SideBar } from 'antd-mobile'
import { DemoBlock } from 'demos'
import { tabs } from './tabs'

export default () => {
  return (
    <>
      <DemoBlock title='基础用法' padding='0'>
        <SideBar>
          {tabs.map(item => (
            <SideBar.Item key={item.key} title={item.title} />
          ))}
        </SideBar>
      </DemoBlock>

      <DemoBlock title='搭配 Badge 使用' padding='0'>
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

      <DemoBlock title='禁用状态' padding='0'>
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

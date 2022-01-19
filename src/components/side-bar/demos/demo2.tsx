import React from 'react'
import { DemoBlock } from 'demos'
import { SideBar } from 'antd-mobile'
import { tabs } from './tabs'

export default () => {
  return (
    <>
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

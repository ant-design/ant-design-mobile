import React from 'react'
import { DemoBlock } from 'demos'
import { Tabs } from 'antd-mobile'

export default () => {
  return (
    <>
      <DemoBlock title='基本用法' padding='0'>
        <Tabs>
          <Tabs.TabPane title='水果' key='fruits'>
            菠萝
          </Tabs.TabPane>
          <Tabs.TabPane title='蔬菜' key='vegetables'>
            西红柿
          </Tabs.TabPane>
          <Tabs.TabPane title='动物' key='animals'>
            蚂蚁
          </Tabs.TabPane>
        </Tabs>
      </DemoBlock>
      <DemoBlock title='超长自动滚动' padding='0'>
        <Tabs defaultActiveKey='1'>
          <Tabs.TabPane title='Espresso' key='1'>
            1
          </Tabs.TabPane>
          <Tabs.TabPane title='Coffee Latte' key='2'>
            2
          </Tabs.TabPane>
          <Tabs.TabPane title='Cappuccino' key='3'>
            3
          </Tabs.TabPane>
          <Tabs.TabPane title='Americano' key='4'>
            4
          </Tabs.TabPane>
          <Tabs.TabPane title='Flat White' key='5'>
            5
          </Tabs.TabPane>
          <Tabs.TabPane title='Caramel Macchiato' key='6'>
            6
          </Tabs.TabPane>
          <Tabs.TabPane title='Cafe Mocha' key='7'>
            7
          </Tabs.TabPane>
        </Tabs>
      </DemoBlock>
      <DemoBlock title='没有内容区' padding='0'>
        <Tabs>
          <Tabs.TabPane title='水果' key='fruits' />
          <Tabs.TabPane title='蔬菜' key='vegetables' />
          <Tabs.TabPane title='动物' key='animals' />
        </Tabs>
      </DemoBlock>
      <DemoBlock title='禁用' padding='0'>
        <Tabs>
          <Tabs.TabPane title='水果' key='fruits' />
          <Tabs.TabPane title='蔬菜' key='vegetables' />
          <Tabs.TabPane title='动物' key='animals' disabled />
        </Tabs>
      </DemoBlock>
      <DemoBlock title='固定长度模式' padding='0'>
        <Tabs
          activeLineMode='fixed'
          style={{
            '--fixed-active-line-width': '50px',
          }}
        >
          <Tabs.TabPane title='超长的tab111' key='1'>
            1
          </Tabs.TabPane>
          <Tabs.TabPane title='超长的tab2' key='2'>
            2
          </Tabs.TabPane>
          <Tabs.TabPane title='超长的tab333' key='3'>
            3
          </Tabs.TabPane>
          <Tabs.TabPane title='超长的tab4444' key='4'>
            4
          </Tabs.TabPane>
          <Tabs.TabPane title='超长的tab55555' key='5'>
            5
          </Tabs.TabPane>
        </Tabs>
      </DemoBlock>
    </>
  )
}

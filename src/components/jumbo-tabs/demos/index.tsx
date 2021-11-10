import React from 'react'
import { DemoBlock } from 'demos'
import { JumboTabs } from 'antd-mobile'

export default () => {
  return (
    <>
      <DemoBlock title='基本用法' padding='0'>
        <JumboTabs>
          <JumboTabs.JumboTabPane
            title='水果'
            description='描述文案'
            key='fruits'
          >
            菠萝
          </JumboTabs.JumboTabPane>
          <JumboTabs.JumboTabPane
            title='蔬菜'
            description='描述文案'
            key='vegetables'
          >
            西红柿
          </JumboTabs.JumboTabPane>
          <JumboTabs.JumboTabPane
            title='动物'
            description='描述文案'
            key='animals'
          >
            蚂蚁
          </JumboTabs.JumboTabPane>
        </JumboTabs>
      </DemoBlock>
      <DemoBlock title='超长自动滚动' padding='0'>
        <JumboTabs defaultActiveKey='1'>
          <JumboTabs.JumboTabPane
            title='Espresso'
            description='描述文案'
            key='1'
          >
            1
          </JumboTabs.JumboTabPane>
          <JumboTabs.JumboTabPane
            title='Coffee Latte'
            description='描述文案'
            key='2'
          >
            2
          </JumboTabs.JumboTabPane>
          <JumboTabs.JumboTabPane
            title='Cappuccino'
            description='描述文案'
            key='3'
          >
            3
          </JumboTabs.JumboTabPane>
          <JumboTabs.JumboTabPane
            title='Americano'
            description='描述文案'
            key='4'
          >
            4
          </JumboTabs.JumboTabPane>
          <JumboTabs.JumboTabPane
            title='Flat White'
            description='描述文案'
            key='5'
          >
            5
          </JumboTabs.JumboTabPane>
          <JumboTabs.JumboTabPane
            title='Caramel Macchiato'
            description='描述文案'
            key='6'
          >
            6
          </JumboTabs.JumboTabPane>
          <JumboTabs.JumboTabPane
            title='Cafe Mocha'
            description='描述文案'
            key='7'
          >
            7
          </JumboTabs.JumboTabPane>
        </JumboTabs>
      </DemoBlock>
      <DemoBlock title='没有内容区' padding='0'>
        <JumboTabs>
          <JumboTabs.JumboTabPane
            title='水果'
            description='描述文案'
            key='fruits'
          />
          <JumboTabs.JumboTabPane
            title='蔬菜'
            description='描述文案'
            key='vegetables'
          />
          <JumboTabs.JumboTabPane
            title='动物'
            description='描述文案'
            key='animals'
          />
        </JumboTabs>
      </DemoBlock>
      <DemoBlock title='禁用' padding='0'>
        <JumboTabs>
          <JumboTabs.JumboTabPane
            title='水果'
            description='描述文案'
            key='fruits'
          />
          <JumboTabs.JumboTabPane
            title='蔬菜'
            description='描述文案'
            key='vegetables'
          />
          <JumboTabs.JumboTabPane
            title='动物'
            description='描述文案'
            key='animals'
            disabled
          />
        </JumboTabs>
      </DemoBlock>
    </>
  )
}

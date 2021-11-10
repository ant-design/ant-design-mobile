import React from 'react'
import { DemoBlock } from 'demos'
import { CapsuleTabs } from 'antd-mobile'

export default () => {
  return (
    <>
      <DemoBlock title='基本用法' padding='0'>
        <CapsuleTabs>
          <CapsuleTabs.CapsuleTabPane title='水果' key='fruits'>
            菠萝
          </CapsuleTabs.CapsuleTabPane>
          <CapsuleTabs.CapsuleTabPane title='蔬菜' key='vegetables'>
            西红柿
          </CapsuleTabs.CapsuleTabPane>
          <CapsuleTabs.CapsuleTabPane title='动物' key='animals'>
            蚂蚁
          </CapsuleTabs.CapsuleTabPane>
        </CapsuleTabs>
      </DemoBlock>
      <DemoBlock title='超长自动滚动' padding='0'>
        <CapsuleTabs defaultActiveKey='1'>
          <CapsuleTabs.CapsuleTabPane title='Espresso' key='1'>
            1
          </CapsuleTabs.CapsuleTabPane>
          <CapsuleTabs.CapsuleTabPane title='Coffee Latte' key='2'>
            2
          </CapsuleTabs.CapsuleTabPane>
          <CapsuleTabs.CapsuleTabPane title='Cappuccino' key='3'>
            3
          </CapsuleTabs.CapsuleTabPane>
          <CapsuleTabs.CapsuleTabPane title='Americano' key='4'>
            4
          </CapsuleTabs.CapsuleTabPane>
          <CapsuleTabs.CapsuleTabPane title='Flat White' key='5'>
            5
          </CapsuleTabs.CapsuleTabPane>
          <CapsuleTabs.CapsuleTabPane title='Caramel Macchiato' key='6'>
            6
          </CapsuleTabs.CapsuleTabPane>
          <CapsuleTabs.CapsuleTabPane title='Cafe Mocha' key='7'>
            7
          </CapsuleTabs.CapsuleTabPane>
        </CapsuleTabs>
      </DemoBlock>
      <DemoBlock title='没有内容区' padding='0'>
        <CapsuleTabs>
          <CapsuleTabs.CapsuleTabPane title='水果' key='fruits' />
          <CapsuleTabs.CapsuleTabPane title='蔬菜' key='vegetables' />
          <CapsuleTabs.CapsuleTabPane title='动物' key='animals' />
        </CapsuleTabs>
      </DemoBlock>
      <DemoBlock title='禁用' padding='0'>
        <CapsuleTabs>
          <CapsuleTabs.CapsuleTabPane title='水果' key='fruits' />
          <CapsuleTabs.CapsuleTabPane title='蔬菜' key='vegetables' />
          <CapsuleTabs.CapsuleTabPane title='动物' key='animals' disabled />
        </CapsuleTabs>
      </DemoBlock>
    </>
  )
}

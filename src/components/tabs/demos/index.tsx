import {DemoBlock} from 'antd-mobile/src/demos/demo-block'
import {Tabs} from 'antd-mobile'

export default () => {
  return (
    <>
      <DemoBlock title='基本用法' padding='0'>
        <Tabs>
          <Tabs.TabPane title='水果' key='fruits'>
            菠萝
          </Tabs.TabPane>
          <Tabs.TabPane title='蔬菜' key='vegatables'>
            西红柿
          </Tabs.TabPane>
          <Tabs.TabPane title='动物' key='animals'>
            蚂蚁
          </Tabs.TabPane>
        </Tabs>
      </DemoBlock>
      <DemoBlock title='超长自动滚动' padding='0'>
        <Tabs>
          <Tabs.TabPane title='超长的tab11111111' key='1'>
            1
          </Tabs.TabPane>
          <Tabs.TabPane title='超长的tab22222' key='2'>
            2
          </Tabs.TabPane>
          <Tabs.TabPane title='超长的tab3333' key='3'>
            3
          </Tabs.TabPane>
          <Tabs.TabPane title='超长的tab444' key='4'>
            4
          </Tabs.TabPane>
        </Tabs>
      </DemoBlock>
      <DemoBlock title='没有内容区' padding='0'>
        <Tabs>
          <Tabs.TabPane title='水果' key='fruits' />
          <Tabs.TabPane title='蔬菜' key='vegatables' />
          <Tabs.TabPane title='动物' key='animals' />
        </Tabs>
      </DemoBlock>
    </>
  )
}

import React from 'react'
import { Collapse } from 'antd-mobile'
import { DemoBlock } from 'antd-mobile/src/demos/demo-block'

export default () => {
  return (
    <>
      <DemoBlock title='基础用法' padding='0' border='none'>
        <Collapse defaultActiveKey={['1']}>
          <Collapse.Panel key='1' title='第一项'>
            这里是第一项的内容
            <br />
            这里是第一项的内容
            <br />
            这里是第一项的内容
            <br />
            这里是第一项的内容
            <br />
            这里是第一项的内容
            <br />
            这里是第一项的内容
            <br />
          </Collapse.Panel>
          <Collapse.Panel key='2' title='第二项'>
            这里是第二项的内容
          </Collapse.Panel>
          <Collapse.Panel key='3' title='第三项'>
            这里是第三项的内容
          </Collapse.Panel>
        </Collapse>
      </DemoBlock>
      <DemoBlock title='手风琴模式' padding='0' border='none'>
        <Collapse accordion>
          <Collapse.Panel key='1' title='第一项'>
            手风琴模式只能同时展开一个
          </Collapse.Panel>
          <Collapse.Panel key='2' title='第二项'>
            手风琴模式只能同时展开一个
          </Collapse.Panel>
          <Collapse.Panel key='3' title='第三项'>
            手风琴模式只能同时展开一个
          </Collapse.Panel>
        </Collapse>
      </DemoBlock>
      <DemoBlock title='禁用' padding='0' border='none'>
        <Collapse>
          <Collapse.Panel key='1' title='第一项'>
            这里是第一项的内容
          </Collapse.Panel>
          <Collapse.Panel key='2' title='第二项' disabled>
            这里是第二项的内容
          </Collapse.Panel>
          <Collapse.Panel key='3' title='第三项' disabled>
            这里是第三项的内容
          </Collapse.Panel>
        </Collapse>
      </DemoBlock>
    </>
  )
}

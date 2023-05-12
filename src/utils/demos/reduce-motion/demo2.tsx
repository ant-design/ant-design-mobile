import React from 'react'
import { Collapse } from 'antd-mobile'
import { DemoBlock, lorem } from 'demos'

export default () => {
  return (
    <DemoBlock title='正常组件' padding='0'>
      <Collapse defaultActiveKey={['1']}>
        <Collapse.Panel key='1' title='第一项'>
          {mockContents[0]}
        </Collapse.Panel>
        <Collapse.Panel key='2' title='第二项'>
          {mockContents[1]}
        </Collapse.Panel>
        <Collapse.Panel key='3' title='第三项'>
          {mockContents[2]}
        </Collapse.Panel>
      </Collapse>
    </DemoBlock>
  )
}

const mockContents = Array(5)
  .fill(null)
  .map(() => lorem.generateParagraphs(1))

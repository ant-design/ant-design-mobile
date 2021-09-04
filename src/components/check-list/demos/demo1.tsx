import React from 'react'
import { CheckList } from 'antd-mobile'
import { DemoBlock } from '../../../demos'

export default () => {
  return (
    <>
      <DemoBlock title='基础用法' padding='0' border='none'>
        <CheckList>
          <CheckList.Item value='A'>A</CheckList.Item>
          <CheckList.Item value='B'>B</CheckList.Item>
        </CheckList>
      </DemoBlock>
      <DemoBlock title='多选' padding='0' border='none'>
        <CheckList multiple>
          <CheckList.Item value='A'>A</CheckList.Item>
          <CheckList.Item value='B'>B</CheckList.Item>
        </CheckList>
      </DemoBlock>
    </>
  )
}

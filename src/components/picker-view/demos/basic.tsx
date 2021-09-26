import { PickerView } from 'antd-mobile'
import React from 'react'
import { DemoBlock } from 'demos'

const columns = [
  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'],
  ['1', '222222222222222222222222222222222', '3'],
]

export default () => {
  return (
    <>
      <DemoBlock title='基础用法' padding='0'>
        <PickerView columns={columns} />
      </DemoBlock>
      <DemoBlock title='自定义高度' padding='0'>
        <PickerView columns={columns} style={{ '--height': '500px' }} />
      </DemoBlock>
      <DemoBlock title='受控模式' padding='0'>
        <PickerView columns={columns} value={['A', '1']} />
      </DemoBlock>
    </>
  )
}

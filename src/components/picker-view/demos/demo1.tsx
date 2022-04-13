import React, { useState } from 'react'
import { PickerView } from 'antd-mobile'
import { DemoBlock } from 'demos'
import { basicColumns } from './columns-data'

export default () => {
  const [value, setValue] = useState<(string | null)[]>(['Mon', 'am'])

  return (
    <>
      <DemoBlock title='基础用法' padding='0'>
        <PickerView columns={basicColumns} />
      </DemoBlock>

      <DemoBlock title='自定义高度' padding='0'>
        <PickerView
          columns={basicColumns}
          style={{ '--height': '500px', '--item-height': '2.8rem' }}
        />
      </DemoBlock>

      <DemoBlock title='受控模式' padding='0'>
        <PickerView
          columns={basicColumns}
          value={value}
          onChange={(val, extend) => {
            setValue(val)
            console.log('onChange', val, extend.items)
          }}
        />
      </DemoBlock>

      <DemoBlock title='通过鼠标滚轮进行选择' padding='0'>
        <PickerView columns={basicColumns} mouseWheel={true} />
      </DemoBlock>
    </>
  )
}

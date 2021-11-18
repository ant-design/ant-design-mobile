import { DatePickerView } from 'antd-mobile'
import React, { useState } from 'react'
import { DemoBlock } from 'demos'

export default () => {
  const [value, setValue] = useState<Date>(new Date())

  return (
    <>
      <DemoBlock title='基础用法' padding='0'>
        <DatePickerView />
      </DemoBlock>
      <DemoBlock title='自定义高度' padding='0'>
        <DatePickerView style={{ '--height': '500px' }} />
      </DemoBlock>
      <DemoBlock title='受控模式' padding='0'>
        <DatePickerView
          value={value}
          onChange={val => {
            setValue(val)
            console.log('onChange', val)
          }}
        />
      </DemoBlock>
    </>
  )
}

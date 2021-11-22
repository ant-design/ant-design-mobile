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
      <DemoBlock title='自定义每列的渲染内容' padding='0'>
        <DatePickerView render={renderer} />
      </DemoBlock>
    </>
  )
}

const renderer = (type: string, data: string) => {
  switch (type) {
    case 'year':
      return data + '年'
    case 'month':
      return data + '月'
    case 'day':
      return data + '日'
    case 'hour':
      return data + '时'
    case 'minute':
      return data + '分'
    case 'second':
      return data + '秒'
    default:
      return data
  }
}

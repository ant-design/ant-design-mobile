import React from 'react'
import { Calendar } from 'antd-mobile'
import { DemoBlock, DemoDescription } from 'demos'

const defaultSingle = new Date('2022-03-09')
const defaultRange: [Date, Date] = [
  new Date('2022-03-09'),
  new Date('2022-03-21'),
]

export default () => {
  return (
    <>
      <DemoBlock title='仅展示'>
        <Calendar />
        <DemoDescription>
          如果你不设置 selectionMode 属性，那么日历默认是不支持进行选择操作的
        </DemoDescription>
      </DemoBlock>

      <DemoBlock title='选择某一天'>
        <Calendar
          selectionMode='single'
          defaultValue={defaultSingle}
          onChange={val => {
            console.log(val)
          }}
        />
      </DemoBlock>
      <DemoBlock title='选择日期范围'>
        <Calendar
          defaultValue={defaultRange}
          selectionMode='range'
          onChange={val => {
            console.log(val)
          }}
        />
      </DemoBlock>
    </>
  )
}

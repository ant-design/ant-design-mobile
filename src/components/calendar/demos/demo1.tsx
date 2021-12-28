import React, { useState } from 'react'
import { Calendar } from 'antd-mobile'
import { DemoBlock, DemoDescription } from 'demos'
import dayjs from 'dayjs'

export default () => {
  const today = dayjs()
  const [val, setVal] = useState<[Date, Date] | null>(() => [
    today.subtract(2, 'day').toDate(),
    today.add(2, 'day').toDate(),
  ])
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
          onChange={val => {
            console.log(val)
          }}
        />
      </DemoBlock>
      <DemoBlock title='选择日期范围'>
        <Calendar
          selectionMode='range'
          onChange={val => {
            console.log(val)
          }}
        />
      </DemoBlock>
      <DemoBlock title='受控模式'>
        <Calendar
          selectionMode='range'
          value={val}
          onChange={val => {
            setVal(val)
          }}
        />
      </DemoBlock>
      <DemoBlock title='给日期添加一些标记'>
        <Calendar
          selectionMode='range'
          renderLabel={date => {
            if (dayjs(date).isSame(today, 'day')) return '今天'
            if (date.getDay() === 0 || date.getDay() === 6) {
              return '周末'
            }
          }}
        />
      </DemoBlock>
    </>
  )
}

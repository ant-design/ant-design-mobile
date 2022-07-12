import dayjs from 'dayjs'
import React from 'react'
import { Calendar } from 'antd-mobile'
import { DemoBlock } from 'demos'

const min = new Date()
min.setDate(5)
const max = new Date()
max.setDate(20)

export default () => {
  const today = dayjs()
  return (
    <>
      <DemoBlock title='周一作为每周的第一天'>
        <Calendar weekStartsOn='Monday' />
      </DemoBlock>
      <DemoBlock title='给日期添加一些标记'>
        <Calendar
          renderLabel={date => {
            if (dayjs(date).isSame(today, 'day')) return '今天'
            if (date.getDay() === 0 || date.getDay() === 6) {
              return '周末'
            }
          }}
        />
      </DemoBlock>
      <DemoBlock title='限制日期范围'>
        <Calendar min={min} max={max} selectionMode='range' />
      </DemoBlock>
    </>
  )
}

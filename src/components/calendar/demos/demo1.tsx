import React from 'react'
import { Calendar } from 'antd-mobile'
import { DemoBlock } from 'demos'
import dayjs from 'dayjs'

const today = dayjs()

export default () => {
  return (
    <>
      <DemoBlock title='基础用法'>
        <Calendar
          // selectionMode='single'
          selectionMode='range'
          // value={[new Date('2021-12-10'), new Date('2021-12-15')]}
          onChange={val => {
            console.log(val)
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

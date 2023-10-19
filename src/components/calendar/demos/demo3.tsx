import dayjs from 'dayjs'
import React, { useEffect, useRef } from 'react'
import { Calendar } from 'antd-mobile'
import { DemoBlock } from 'demos'
import { CalendarRef } from 'antd-mobile/es/components/calendar'

const min = new Date()
min.setDate(5)
const max = new Date()
max.setDate(20)

export default () => {
  const today = dayjs()
  const calendarRef = useRef<CalendarRef>(null)
  useEffect(() => {
    if (calendarRef.current) {
      calendarRef.current.jumpTo({
        year: 2022,
        month: 4,
      })
    }
  }, [])
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
      <DemoBlock title='限制可切换的page。 2022-08 至 2022-12'>
        <Calendar
          minPage={{ year: 2022, month: 8 }}
          maxPage={{ year: 2022, month: 12 }}
        />
      </DemoBlock>
      <DemoBlock title='默认展示 4 月'>
        <Calendar ref={calendarRef} />
      </DemoBlock>
    </>
  )
}

import { Calendar } from 'antd-mobile'
import { DemoBlock } from 'demos'
import React from 'react'
import './demo6.less'

export default () => {
  const today = new Date()

  return (
    <>
      <DemoBlock title='自定义日期单元格样式'>
        <Calendar
          selectionMode='single'
          customCellClassName={date => {
            // 周末
            if (date.getDay() === 0 || date.getDay() === 6) {
              return 'calendar-weekend'
            }
            // 节假日 (示例：元旦)
            if (date.getMonth() === 0 && date.getDate() === 1) {
              return 'calendar-holiday'
            }
            // 每月1号
            if (date.getDate() === 1) {
              return 'calendar-first-day'
            }
            // 过去的日期
            if (date < today) {
              return 'calendar-past-date'
            }
            return ''
          }}
        />
      </DemoBlock>
    </>
  )
}

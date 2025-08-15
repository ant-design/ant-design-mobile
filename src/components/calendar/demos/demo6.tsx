import { Calendar } from 'antd-mobile'
import { DemoBlock } from 'demos'
import React from 'react'
import './demo6.less'

export default () => {
  const today = new Date()

  return (
    <>
      <DemoBlock title='自定义日期单元格渲染'>
        <Calendar
          selectionMode='single'
          cellRender={(oriNode, { date }) => {
            const isWeekend = date.getDay() === 0 || date.getDay() === 6
            const isHoliday = date.getMonth() === 0 && date.getDate() === 1 // 元旦
            const isFirstDay = date.getDate() === 1
            const isPastDate = date < today

            let customClass = ''
            if (isWeekend) {
              customClass = 'calendar-weekend'
            } else if (isHoliday) {
              customClass = 'calendar-holiday'
            } else if (isFirstDay) {
              customClass = 'calendar-first-day'
            } else if (isPastDate) {
              customClass = 'calendar-past-date'
            }

            if (customClass) {
              return React.cloneElement(oriNode, {
                className: `${oriNode.props.className} ${customClass}`,
              })
            }

            return oriNode
          }}
        />
      </DemoBlock>
    </>
  )
}

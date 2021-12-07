import React from 'react'
import { DatePickerView } from 'antd-mobile'
import { DemoBlock } from 'demos'

const now = new Date()

export default () => {
  return (
    <>
      <DemoBlock title='过滤时间' padding='0'>
        <DatePickerView defaultValue={now} precision='hour' filter={filter} />
      </DemoBlock>

      <DemoBlock title='周选择器过滤' padding='0'>
        <DatePickerView
          onChange={val => console.log('onChange', val)}
          precision='week-day'
          defaultValue={now}
          filter={weekFilter}
        />
      </DemoBlock>
    </>
  )
}

const filter = {
  month: (val: number) => {
    // 只显示双数月份
    if (val % 2 !== 0) {
      return false
    }
    return true
  },
  day: (val: number, date: Date) => {
    // 去除每个月的前5天
    if (val < 5) {
      return false
    }
    // 去除所有周末
    if (date.getDay() > 5 || date.getDay() === 0) {
      return false
    }
    return true
  },
  hour: (val: number) => {
    // 只保留每天的14点到18点
    if (val < 14 || val > 18) {
      return false
    }
    return true
  },
}

const weekFilter = {
  'week': (val: number) => {
    // 去除每年的前10周
    if (val < 10) {
      return false
    }
    return true
  },
  'week-day': (val: number) => {
    // 去除所有周一和周末
    if (val === 1 || val > 5) {
      return false
    }
    return true
  },
}

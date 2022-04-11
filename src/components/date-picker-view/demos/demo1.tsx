import React, { useState } from 'react'
import { DatePickerView } from 'antd-mobile'
import { DemoBlock } from 'demos'

import { weekdayToZh } from './weekdayToZh'
import { DatePickerFilter } from '../../date-picker'

const now = new Date()

export default () => {
  const [value, setValue] = useState<Date>(now)

  return (
    <>
      <DemoBlock title='基础用法' padding='0'>
        <DatePickerView defaultValue={now} />
      </DemoBlock>

      <DemoBlock title='自定义高度' padding='0'>
        <DatePickerView defaultValue={now} style={{ '--height': '500px' }} />
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
        <DatePickerView defaultValue={now} renderLabel={labelRenderer} />
      </DemoBlock>

      <DemoBlock title='周选择器' padding='0'>
        <DatePickerView
          onChange={val => console.log('onChange', val)}
          precision='week-day'
          defaultValue={now}
          renderLabel={weekdayLabelRenderer}
        />
      </DemoBlock>

      <DemoBlock title='过滤可供选择的时间' padding='0'>
        <DatePickerView
          defaultValue={now}
          precision='hour'
          renderLabel={labelRenderer}
          filter={dateFilter}
        />
      </DemoBlock>
    </>
  )
}

const labelRenderer = (type: string, data: number) => {
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

const weekdayLabelRenderer = (type: string, data: number) => {
  switch (type) {
    case 'year':
      return data + '年'
    case 'week':
      return data + '周'
    case 'week-day':
      return weekdayToZh(data)
    default:
      return data
  }
}

const dateFilter: DatePickerFilter = {
  day: (val, { date }) => {
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

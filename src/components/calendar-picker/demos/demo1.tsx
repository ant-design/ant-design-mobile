import { CalendarPicker, List } from 'antd-mobile'
import dayjs from 'dayjs'
import React, { useState } from 'react'

const defaultRange: [Date, Date] = [
  dayjs().toDate(),
  dayjs().add(2, 'day').toDate(),
]

export default () => {
  const [val, setVal] = useState<[Date, Date] | null>(() => [
    dayjs().subtract(2, 'day').toDate(),
    dayjs().add(2, 'day').toDate(),
  ])
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)

  const singleDate: Date = new Date('2023-06-03')

  return (
    <List header='日期选择'>
      <List.Item
        onClick={() => {
          setVisible1(true)
        }}
      >
        选择单个日期
        <CalendarPicker
          visible={visible1}
          selectionMode='single'
          defaultValue={singleDate}
          onClose={() => setVisible1(false)}
          onMaskClick={() => setVisible1(false)}
        />
      </List.Item>
      <List.Item
        onClick={() => {
          setVisible2(true)
        }}
      >
        选择日期范围
        <CalendarPicker
          visible={visible2}
          defaultValue={defaultRange}
          selectionMode='range'
          onClose={() => setVisible2(false)}
          onMaskClick={() => setVisible2(false)}
          onChange={val => {
            console.log(val)
          }}
        />
      </List.Item>
      <List.Item
        onClick={() => {
          setVisible3(true)
        }}
      >
        受控日期选择
        <CalendarPicker
          visible={visible3}
          selectionMode='range'
          value={val}
          onClose={() => setVisible3(false)}
          onMaskClick={() => setVisible3(false)}
          onChange={val => {
            setVal(val)
          }}
        />
      </List.Item>
    </List>
  )
}

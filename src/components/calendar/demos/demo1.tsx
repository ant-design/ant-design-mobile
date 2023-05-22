import dayjs from 'dayjs'
import React, { useState } from 'react'
import { Calendar, List } from 'antd-mobile'

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
        <Calendar
          popupProps={{
            visible: visible1,
            onMaskClick: () => {
              setVisible1(false)
            },
            onClose: () => {
              setVisible1(false)
            },
          }}
          selectionMode='single'
          defaultValue={singleDate}
        />
      </List.Item>
      <List.Item
        onClick={() => {
          setVisible2(true)
        }}
      >
        选择日期范围
        <Calendar
          defaultValue={defaultRange}
          selectionMode='range'
          popupProps={{
            visible: visible2,
            onMaskClick: () => {
              setVisible2(false)
            },
            onClose: () => {
              setVisible2(false)
            },
          }}
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
        <Calendar
          selectionMode='range'
          value={val}
          popupProps={{
            visible: visible3,
            onMaskClick: () => {
              setVisible3(false)
            },
            onClose: () => {
              setVisible3(false)
            },
          }}
          onChange={val => {
            setVal(val)
          }}
        />
      </List.Item>
    </List>
  )
}

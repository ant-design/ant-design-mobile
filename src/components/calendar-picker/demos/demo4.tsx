import { CalendarPicker, CalendarPickerRef, List } from 'antd-mobile'
import React, { useRef, useState } from 'react'

const minDate = new Date(2024, 8, 1)
const maxDate = new Date(2029, 10, 1)

export default () => {
  const ref1 = useRef<CalendarPickerRef>(null)
  const ref2 = useRef<CalendarPickerRef>(null)
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)

  return (
    <List header='自定义跳转'>
      <List.Item
        onClick={() => {
          setVisible1(true)
          ref1.current?.jumpTo(page => ({
            year: page.year,
            month: page.month + 3,
          }))
        }}
      >
        跳转到 3 月后
        <CalendarPicker
          ref={ref1}
          visible={visible1}
          onClose={() => setVisible1(false)}
          onMaskClick={() => setVisible1(false)}
        />
      </List.Item>
      <List.Item
        onClick={() => {
          setVisible2(true)
          ref2.current?.jumpTo(page => ({
            year: page.year + 3,
            month: page.month,
          }))
        }}
      >
        跳转到 3 年后
        <CalendarPicker
          ref={ref2}
          min={minDate}
          max={maxDate}
          visible={visible2}
          onClose={() => setVisible2(false)}
          onMaskClick={() => setVisible2(false)}
        />
      </List.Item>
    </List>
  )
}

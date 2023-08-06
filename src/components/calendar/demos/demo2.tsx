import React, { useState } from 'react'
import { Calendar, List } from 'antd-mobile'

const min = new Date()
min.setDate(5)
const max = new Date()
max.setDate(20)

export default () => {
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)
  const [visible4, setVisible4] = useState(false)

  return (
    <List header='基础配置'>
      <List.Item
        onClick={() => {
          setVisible1(true)
        }}
      >
        自定义标题
        <Calendar
          title='请选择日期'
          visible={visible1}
          onClose={() => setVisible1(false)}
          onMaskClick={() => setVisible1(false)}
        />
      </List.Item>
      <List.Item
        onClick={() => {
          setVisible2(true)
        }}
      >
        自定义确认文案
        <Calendar
          confirmText='确认选择'
          visible={visible2}
          onClose={() => setVisible2(false)}
          onMaskClick={() => setVisible2(false)}
        />
      </List.Item>
      <List.Item
        onClick={() => {
          setVisible3(true)
        }}
      >
        周一作为每周的第一天
        <Calendar
          weekStartsOn='Monday'
          visible={visible3}
          onClose={() => setVisible3(false)}
          onMaskClick={() => setVisible3(false)}
        />
      </List.Item>
      <List.Item
        onClick={() => {
          setVisible4(true)
        }}
      >
        限制日期范围
        <Calendar
          min={min}
          max={max}
          selectionMode='range'
          visible={visible4}
          onClose={() => setVisible4(false)}
          onMaskClick={() => setVisible4(false)}
        />
      </List.Item>
    </List>
  )
}

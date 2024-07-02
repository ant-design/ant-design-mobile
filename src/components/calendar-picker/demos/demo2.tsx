import { CalendarPicker, List } from 'antd-mobile'
import React, { useState } from 'react'

const min = new Date()
min.setDate(5)
min.setMonth(min.getMonth() - 1)

const max = new Date()
max.setDate(20)
max.setMonth(max.getMonth() + 1)

const now = new Date()

export default () => {
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)
  const [visible4, setVisible4] = useState(false)
  const [visible5, setVisible5] = useState(false)

  return (
    <List header='基础配置'>
      <List.Item
        onClick={() => {
          setVisible1(true)
        }}
      >
        自定义标题
        <CalendarPicker
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
        <CalendarPicker
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
        <CalendarPicker
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
        限制日期范围（单选）
        <CalendarPicker
          min={min}
          max={max}
          defaultValue={now}
          selectionMode='single'
          visible={visible4}
          onClose={() => setVisible4(false)}
          onMaskClick={() => setVisible4(false)}
        />
      </List.Item>
      <List.Item
        onClick={() => {
          setVisible5(true)
        }}
      >
        限制日期范围（多选）
        <CalendarPicker
          min={min}
          max={max}
          selectionMode='range'
          visible={visible5}
          onClose={() => setVisible5(false)}
          onMaskClick={() => setVisible5(false)}
        />
      </List.Item>
    </List>
  )
}

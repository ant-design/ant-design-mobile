import React, { useState } from 'react'
import { Button, DatePicker, Picker, Space, Toast } from 'antd-mobile'

const now = new Date()

// 选择上午或下午，demo 中采用弹出式调用
export function AmPmDemo() {
  const [selectedDate, setSelectedDate] = useState<Date>(now)
  const [selectedAmPm, setSelectedAmPm] = useState<string>('上午')

  return (
    <Space wrap>
      <Button
        onClick={async () => {
          const value = await DatePicker.prompt({ defaultValue: selectedDate })
          if (value) {
            setSelectedDate(value)
            Toast.show(
              `你选择了 ${value.getFullYear()}-${
                value.getMonth() + 1
              }-${value.getDate()} ${selectedAmPm}`
            )
          }
        }}
      >
        选择日期
      </Button>
      <Button
        onClick={async () => {
          const value = await Picker.prompt({
            columns: [['上午', '下午']],
            defaultValue: [selectedAmPm],
          })
          if (value && value[0]) {
            setSelectedAmPm(value[0])
            Toast.show(
              `你选择了 ${selectedDate.getFullYear()}-${
                selectedDate.getMonth() + 1
              }-${selectedDate.getDate()} ${value[0]}`
            )
          }
        }}
      >
        选择上下午
      </Button>
    </Space>
  )
}

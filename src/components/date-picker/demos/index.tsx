import React from 'react'
import {DatePicker, Toast} from 'antd-mobile'

const now = new Date()

export default () => {
  return (
    <DatePicker
      visible
      defaultValue={now}
      max={now}
      onConfirm={val => {
        Toast.show({
          content: val.toDateString(),
        })
      }}
    />
  )
}

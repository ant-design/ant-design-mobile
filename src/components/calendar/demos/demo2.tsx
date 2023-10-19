import dayjs from 'dayjs'
import React, { useState } from 'react'
import { Calendar } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  const today = dayjs()
  const [val, setVal] = useState<[Date, Date] | null>(() => [
    today.subtract(2, 'day').toDate(),
    today.add(2, 'day').toDate(),
  ])
  return (
    <>
      <DemoBlock title='受控模式'>
        <Calendar
          selectionMode='range'
          value={val}
          onChange={val => {
            setVal(val)
          }}
        />
      </DemoBlock>
    </>
  )
}

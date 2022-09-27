import dayjs from 'dayjs'
import React, { useState } from 'react'
import { Calendar, Button } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  const today = dayjs()
  const [weekModel, setWeekModel] = useState<boolean>(true)
  const [val, setVal] = useState<[Date, Date] | null>(() => [
    today.subtract(2, 'day').toDate(),
    today.add(2, 'day').toDate(),
  ])
  return (
    <>
      <Button onClick={() => setWeekModel(!weekModel)}>切换模式</Button>
      <DemoBlock title='周模式'>
        <Calendar
          weekModel={weekModel}
          selectionMode='range'
          value={val}
          nextWeekButton={'下一周'}
          prevWeekButton='上一周'
          prevYearButton={false}
          nextYearButton={false}
          onChange={val => {
            setVal(val)
          }}
        />
      </DemoBlock>
    </>
  )
}

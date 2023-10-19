import classnames from 'classnames'
import dayjs from 'dayjs'
import React, { useState } from 'react'
import { CalendarPicker, List } from 'antd-mobile'
import './demo3.less'

export default () => {
  const today = dayjs()
  const [val, setVal] = useState<[Date, Date] | null>(() => [
    today.subtract(2, 'day').toDate(),
    today.add(2, 'day').toDate(),
  ])

  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)
  const [visible4, setVisible4] = useState(false)

  return (
    <List header='自定义样式'>
      <List.Item
        onClick={() => {
          setVisible1(true)
        }}
      >
        自定义日期顶部信息
        <CalendarPicker
          visible={visible1}
          onClose={() => setVisible1(false)}
          onMaskClick={() => setVisible1(false)}
          renderTop={date => {
            const map = {
              1: '初一',
              2: '初二',
              3: '初三',
            }
            const dates = [1, 2, 3]
            const d = dayjs(date).date() as keyof typeof map

            if (dates.includes(d)) {
              return map[d]
            }
          }}
        />
      </List.Item>
      <List.Item
        onClick={() => {
          setVisible2(true)
        }}
      >
        自定义日期底部信息
        <CalendarPicker
          visible={visible2}
          onClose={() => setVisible2(false)}
          onMaskClick={() => setVisible2(false)}
          renderBottom={date => {
            const dates = [16, 17, 18, 19]
            const d = dayjs(date).date()

            if (dates.includes(d)) {
              return '¥100'
            }
          }}
        />
      </List.Item>
      <List.Item
        onClick={() => {
          setVisible3(true)
        }}
      >
        自定义日期渲染
        <CalendarPicker
          visible={visible3}
          onClose={() => setVisible3(false)}
          onMaskClick={() => setVisible3(false)}
          renderDate={date => {
            const dates = [16, 17, 18, 19]
            const d = dayjs(date).date()
            return (
              <div
                className={classnames('custom-cell', {
                  ['custom-cell-selected']: dates.includes(d),
                })}
              >
                {d}
              </div>
            )
          }}
        />
      </List.Item>
      <List.Item
        onClick={() => {
          setVisible4(true)
        }}
      >
        高级自定义样式
        <CalendarPicker
          className='calendar-custom'
          selectionMode='range'
          value={val}
          onChange={val => {
            setVal(val)
          }}
          visible={visible4}
          onClose={() => setVisible4(false)}
          onMaskClick={() => setVisible4(false)}
        />
      </List.Item>
    </List>
  )
}

import React, { useRef } from 'react'
import { Button, Calendar, Space } from 'antd-mobile'
import { DemoBlock, DemoDescription } from 'demos'
import { CalenderRef } from '../calendar'

export default () => {
  const ChangePageByRef = () => {
    const ref = useRef<CalenderRef>(null)
    return (
      <>
        <Calendar
          selectionMode='range'
          onChange={val => {
            console.log(val)
          }}
          ref={ref}
        />
        <Space>
          <Button
            onClick={() =>
              ref.current?.changePageByMonthAndYear({ month: 1, year: 1 })
            }
          >
            切换至指定年/月
          </Button>

          <Button onClick={() => ref.current?.changeTodayPage()}>
            回到当前日期
          </Button>
        </Space>
      </>
    )
  }
  return (
    <>
      <DemoBlock title='仅展示'>
        <Calendar />
        <DemoDescription>
          如果你不设置 selectionMode 属性，那么日历默认是不支持进行选择操作的
        </DemoDescription>
      </DemoBlock>

      <DemoBlock title='选择某一天'>
        <Calendar
          selectionMode='single'
          onChange={val => {
            console.log(val)
          }}
        />
      </DemoBlock>
      <DemoBlock title='选择日期范围'>
        <Calendar
          selectionMode='range'
          onChange={val => {
            console.log(val)
          }}
        />
      </DemoBlock>
      <DemoBlock title='通过ref切换当前显示的page'>
        <ChangePageByRef />
      </DemoBlock>
    </>
  )
}

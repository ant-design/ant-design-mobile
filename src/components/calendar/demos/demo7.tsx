import { Calendar } from 'antd-mobile'
import { DemoBlock, DemoDescription } from 'demos'
import React from 'react'

export default () => {
  return (
    <>
      <DemoBlock title='禁用导航按钮'>
        <Calendar
          prevMonthButton={null}
          nextMonthButton={null}
          prevYearButton={null}
          nextYearButton={null}
        />
        <DemoDescription>
          通过将 prevMonthButton、nextMonthButton、prevYearButton 和
          nextYearButton 设置为 null，可以禁用相应的导航按钮
        </DemoDescription>
      </DemoBlock>

      <DemoBlock title='自定义部分导航按钮'>
        <Calendar
          prevMonthButton={<span>上一月</span>}
          nextMonthButton={<span>下一月</span>}
          prevYearButton={null}
          nextYearButton={null}
        />
        <DemoDescription>
          可以只自定义部分导航按钮，其他按钮设置为 null 来禁用
        </DemoDescription>
      </DemoBlock>
    </>
  )
}

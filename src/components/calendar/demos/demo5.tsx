import dayjs from 'dayjs'
import React from 'react'
import { Calendar } from 'antd-mobile'
import { DemoBlock } from 'demos'
import classNames from 'classnames'
import './demo5.less'

export default () => {
  return (
    <>
      <DemoBlock title='自定义日期渲染'>
        <Calendar
          renderDate={date => {
            const dates = [16, 17, 18, 19]
            const d = dayjs(date).date()
            return (
              <div
                className={classNames('custom-cell', {
                  ['custom-cell-selected']: dates.includes(d),
                })}
              >
                {d}
              </div>
            )
          }}
        />
      </DemoBlock>
    </>
  )
}

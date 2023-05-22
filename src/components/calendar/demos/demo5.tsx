import React from 'react'
import { Calendar } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  return (
    <DemoBlock title='不使用 Popup'>
      <Calendar usePopup={false} />
    </DemoBlock>
  )
}

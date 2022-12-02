import React from 'react'
import { Stepper } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  return (
    <>
      <DemoBlock title='stringMode'>
        <Stepper stringMode />
      </DemoBlock>
    </>
  )
}

import React from 'react'
import { Stepper } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  const [value, setValue] = React.useState('9999999999999999')

  return (
    <>
      <DemoBlock title='stringMode'>
        <Stepper
          style={{ width: '100%' }}
          stringMode
          defaultValue='0.000000000000002'
          step='0.000000000000001'
          onChange={console.log}
        />
      </DemoBlock>

      <DemoBlock title='stringMode control'>
        <Stepper
          style={{ width: '100%' }}
          stringMode
          value={value}
          step='13579'
          onChange={setValue}
        />
      </DemoBlock>
    </>
  )
}

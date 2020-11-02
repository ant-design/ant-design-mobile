import * as React from 'react'
import { unstable_Switch as Switch } from '@ant-design/mobile'
import { SingleFormDemo } from '../../_internal/demo'

export default () => {
  const events = {
    onChange: (v: string) => console.log('onChange', v),
  }

  return (
    <>
      <SingleFormDemo>
        <Switch defaultChecked value="a1" />
      </SingleFormDemo>
    </>
  )
}

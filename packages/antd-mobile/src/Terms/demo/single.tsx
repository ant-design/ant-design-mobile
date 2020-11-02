import * as React from 'react'
import { unstable_Terms as Terms } from '@ant-design/mobile'
import { SingleFormDemo } from '../../_internal/demo'

export default () => {
  const events = {
    onChange: (v: string) => console.log('onChange', v),
  }

  return (
    <>
      <SingleFormDemo>
        <Terms
          value="a1"
          defaultChecked
          hasChecked
          term={
            <>
              同意 <a>xx协议</a>
            </>
          }
        />
      </SingleFormDemo>
    </>
  )
}

import * as React from 'react'
import { unstable_Selector as Selector } from '@ant-design/mobile'
import { SingleFormDemo } from '../../_internal/demo'

export default () => {
  const events = {
    onChange: (v: number[]) => console.log('onChange', v),
  }

  return (
    <>
      <SingleFormDemo noLabel>
        <Selector
          defaultValue={[2]}
          multiple
          items={[
            {
              text: '选项一',
              value: 1,
            },
            {
              text: '选项二',
              value: 2,
            },
          ]}
          {...events}
        />
      </SingleFormDemo>
    </>
  )
}

import * as React from 'react'
import { unstable_Radio as Radio } from '@ant-design/mobile'
import { SingleFormDemo } from '../../_internal/demo'

export default () => {
  return (
    <>
      <SingleFormDemo noLabel>
        <Radio.Group renderHeader="group 单独使用" defaultValue={2}>
          <Radio.Item value={1}>{1}</Radio.Item>
          <Radio.Item value={2} brief="第二行">
            {2}
          </Radio.Item>
          <Radio.Item value={3} disabled>
            {3}
          </Radio.Item>
          <Radio.Item value={4} disabled>
            {4}
          </Radio.Item>
        </Radio.Group>
      </SingleFormDemo>
    </>
  )
}

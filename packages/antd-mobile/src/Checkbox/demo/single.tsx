import * as React from 'react'
import { unstable_Checkbox as Checkbox } from '@ant-design/mobile'
import { SingleFormDemo } from '../../_internal/demo'

export default () => {
  return (
    <>
      <SingleFormDemo>
        <Checkbox defaultChecked value="on" />
      </SingleFormDemo>

      <SingleFormDemo noLabel>
        <Checkbox.Group renderHeader="group 单独使用" defaultValue={[3]}>
          {/* 以下四个选项分别展示了选中不选中, 禁用选中禁用不选中的四种状态 */}
          <Checkbox.Item value={1}>{1}</Checkbox.Item>
          <Checkbox.Item value={2}>{2}</Checkbox.Item>
          <Checkbox.Item value={3} disabled>
            {3}
          </Checkbox.Item>
          <Checkbox.Item value={4} disabled>
            {4}
          </Checkbox.Item>
        </Checkbox.Group>
      </SingleFormDemo>
    </>
  )
}

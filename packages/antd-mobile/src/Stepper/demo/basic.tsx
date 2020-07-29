import * as React from 'react'
import {
  unstable_List as List,
  unstable_Stepper as Stepper,
} from '@ant-design/mobile'

export default () => {
  const [val, setVal] = React.useState(3)

  const onChange = (val: any) => {
    setVal(val)
  }

  return (
    <div>
      <List>
        <List.Item
          wrap
          extra={
            <Stepper
              showNumber
              max={10}
              min={1}
              value={val}
              onChange={onChange}
            />
          }
        >
          Show number value
        </List.Item>
        <List.Item
          extra={
            <Stepper showNumber max={10} min={1} defaultValue={3} disabled />
          }
        >
          Disabled
        </List.Item>
      </List>
    </div>
  )
}

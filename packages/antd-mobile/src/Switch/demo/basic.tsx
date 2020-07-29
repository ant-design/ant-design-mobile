import * as React from 'react'
import {
  unstable_Switch as Switch,
  unstable_List as List,
} from '@ant-design/mobile'

export default () => {
  const [checked1, setChecked1] = React.useState(true)
  const [checked2, setChecked2] = React.useState(true)

  const fn1 = (c: boolean) => {
    console.log(c)
    setChecked1(c)
  }

  const fn2 = (c: boolean) => {
    console.log(c)
    setChecked2(c)
  }
  return (
    <List>
      <List.Item extra={<Switch checked={checked1} onChange={fn1} />}>
        normal
      </List.Item>
      <List.Item extra={<Switch disabled checked={checked2} onChange={fn2} />}>
        disabled
      </List.Item>
    </List>
  )
}

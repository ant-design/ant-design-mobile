import * as React from 'react'
import {
  unstable_Checkbox as Checkbox,
  unstable_Button as Button,
  unstable_Modal as Modal,
} from '@ant-design/mobile'

const fn = (v: boolean) => Modal.alert({ content: String(v) })

export default () => {
  const [checked, setChecked] = React.useState(false)
  return (
    <>
      <Checkbox defaultChecked onChange={fn} /> defaultChecked
      <br />
      <Checkbox
        checked={checked}
        onChange={v => {
          setChecked(v)
        }}
      />{' '}
      controller checked
      <br />
      <Checkbox name="name1" value="111" defaultChecked onChange={fn} />{' '}
      defaultChecked name
      <br />
      <Checkbox
        id="id2"
        name="name2"
        value="111"
        defaultChecked
        onChange={fn}
      />{' '}
      <label htmlFor="id2">
        <Button type="ghost" capsule>
          我也可以点
        </Button>
      </label>
      <br />
    </>
  )
}

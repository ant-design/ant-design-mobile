import * as React from 'react'
import { unstable_Checkbox as Checkbox } from '@ant-design/mobile'

export default () => {
  return (
    <>
      <Checkbox checked /> checked
      <br />
      <Checkbox checked={false} /> no checked
      <br />
      <Checkbox checked disabled /> checked disabled
      <br />
      <Checkbox checked={false} disabled /> no checked disabled
      <br />
    </>
  )
}

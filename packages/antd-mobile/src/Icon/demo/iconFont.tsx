import * as React from 'react'
import { unstable_Icon as Icon } from '@ant-design/mobile'

const MyIcon = Icon.createFromIconfontCN(
  '//at.alicdn.com/t/font_1511412_ksruzvafwng.js',
)

export default () => <MyIcon type="iconclose-fill" color="red" />

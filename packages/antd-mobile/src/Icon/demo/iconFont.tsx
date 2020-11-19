import * as React from 'react'
import { unstable_Icon as Icon } from '@ant-design/mobile'

const MyIcon = Icon.createFromIconfontCN(
  '//at.alicdn.com/t/font_1511412_tf0zzivq4qa.js',
)

export default () => <MyIcon type="AlipayCircleFill" color="red" />

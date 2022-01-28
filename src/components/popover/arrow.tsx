import React, { memo } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'

export const Arrow = memo<NativeProps>(props => {
  return withNativeProps(
    props,
    <svg viewBox='0 0 30 16'>
      <g transform='translate(-1300.000000, -841.000000)' fill='currentColor'>
        <path d='M1300,841 L1330,841 L1318.07289,855.312538 C1316.65863,857.009645 1314.13637,857.238942 1312.43926,855.824685 C1312.25341,855.669808 1312.08199,855.49839 1311.92711,855.312538 L1300,841 L1300,841 Z' />
      </g>
    </svg>
  )
})

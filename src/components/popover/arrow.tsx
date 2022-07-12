import React, { memo } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'

export const Arrow = memo<NativeProps>(props => {
  return withNativeProps(
    props,
    <svg viewBox='0 0 30 16'>
      <g fill='currentColor'>
        <path d='M0,0 L30,0 L18.07289,14.312538 C16.65863,16.009645 14.13637,16.238942 12.43926,14.824685 C12.25341,14.669808 12.08199,14.49839 11.92711,14.312538 L0,0 L0,0 Z' />
      </g>
    </svg>
  )
})

import React, { memo } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'

export const Corner = memo<NativeProps>(props =>
  withNativeProps(
    props,
    <svg viewBox='0 0 30 30'>
      <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <path
          d='M30,0 C13.4314575,3.04359188e-15 -2.02906125e-15,13.4314575 0,30 L0,30 L0,0 Z'
          fill='var(--adm-color-white)'
          transform='translate(15.000000, 15.000000) scale(-1, -1) translate(-15.000000, -15.000000) '
        />
      </g>
    </svg>
  )
)

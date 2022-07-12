import React, { FC } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'

export const ThumbIcon: FC<NativeProps> = props => {
  return withNativeProps(
    props,
    <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <g fill='currentColor' fillRule='evenodd'>
        <rect x={10} width={4} height={24} rx={2} />
        <rect y={4} width={4} height={16} rx={2} />
        <rect x={20} y={4} width={4} height={16} rx={2} />
      </g>
    </svg>
  )
}

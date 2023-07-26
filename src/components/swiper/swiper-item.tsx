import React from 'react'
import type { FC, ReactNode } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'

type Props = {
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  children?: ReactNode
} & NativeProps

export const SwiperItem: FC<Props> = props => {
  return withNativeProps(
    props,
    <div className='adm-swiper-item' onClick={props.onClick}>
      {props.children}
    </div>
  )
}

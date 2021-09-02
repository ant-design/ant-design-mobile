import React, { FC } from 'react'
import { ElementProps, withElementProps } from '../../utils/element-props'

type Props = {
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
} & ElementProps

export const SwiperItem: FC<Props> = props => {
  return withElementProps(
    props,
    <div className='adm-swiper-item' onClick={props.onClick}>
      {props.children}
    </div>
  )
}

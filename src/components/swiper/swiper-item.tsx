import React, { FC } from 'react'
import { ElementProps } from '../../utils/element-props'
import classNames from 'classnames'

type Props = {
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
} & ElementProps

export const SwiperItem: FC<Props> = props => {
  return (
    <div
      className={classNames('adm-swiper-item', props.className)}
      style={props.style}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  )
}

import React, { FC } from 'react'
import { ElementProps } from '../../utils/element-props'
import classNames from 'classnames'

type Props = ElementProps

export const SwiperItem: FC<Props> = props => {
  return (
    <div
      className={classNames('adm-swiper-item', props.className)}
      style={props.style}
    >
      {props.children}
    </div>
  )
}

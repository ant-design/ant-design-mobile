import * as React from 'react'
import { SwiperSlide } from 'swiper/react'
import { SwiperItemPropsType } from './PropsType'

const SwiperItem: React.FC<SwiperItemPropsType> = props => {
  return <SwiperSlide className={props.className}>{props.children}</SwiperSlide>
}

SwiperItem.displayName = 'SwiperSlide'

export default SwiperItem

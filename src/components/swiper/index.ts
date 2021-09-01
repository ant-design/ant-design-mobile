import './swiper.less'
import { Swiper } from './swiper'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import { SwiperItem } from './swiper-item'

export type { SwiperProps, SwiperRef } from './swiper'

export default attachPropertiesToComponent(Swiper, {
  Item: SwiperItem,
})

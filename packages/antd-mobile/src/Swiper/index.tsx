import * as React from 'react'
import classnames from 'classnames'
import SwiperCore, { Pagination, A11y, Autoplay } from 'swiper'
import { Swiper } from 'swiper/react'
import SwiperItem from './SwiperItem'
import { SwiperPropsType } from './PropsType'
import { withError } from '../rmc'
import { useTracker } from '../hooks'

import '@ant-design/mobile-styles/lib/Swiper'
import 'swiper/swiper.less'

SwiperCore.use([Pagination, A11y, Autoplay])

const prefix = 'amd-swiper'
export const S: React.FC<SwiperPropsType> & {
  SwiperItem: typeof SwiperItem
} = props => {
  const {
    className,
    indicator,
    autoplay,
    initIndex,
    interval,
    duration,
    loop,
    direction,
    itemActiveClass,
    onChange,
    itemsPerView,
    spaceBetween,
  } = props
  const cls = classnames(className, prefix, {})
  useTracker(S.displayName)

  const handleSlideChange = (swiper: SwiperCore) => {
    return onChange?.({
      current: swiper.realIndex,
    })
  }

  const indicatorType = (() => {
    if (!indicator || indicator === true) {
      return 'primary'
    }

    // 非 light 的字段全部视为 primary
    return indicator.type === 'light' ? 'light' : 'primary'
  })()
  const autoplayOptions = autoplay ? { delay: interval } : false

  return (
    <Swiper
      className={cls}
      slidesPerView={itemsPerView}
      spaceBetween={spaceBetween}
      slideActiveClass={itemActiveClass}
      onSlideChange={handleSlideChange}
      initialSlide={initIndex}
      speed={duration}
      direction={direction}
      autoplay={autoplayOptions}
      loop={loop}
      // 以下为默认的设定
      centeredSlides
      centeredSlidesBounds
      resistance
      // resistanceRatio={0}
      pagination={
        !!indicator && {
          renderBullet: function(index, className) {
            const bulletClassName = classnames(className, {
              [`${prefix}-pagination-bullet-${indicatorType}`]: true,
            })
            return `<div class="${bulletClassName}"></div>`
          },
          modifierClass: prefix + '-pagination-',
          bulletClass: prefix + '-pagination-bullet',
          bulletActiveClass: prefix + '-pagination-bullet-active',
        }
      }
    >
      {props.children}
    </Swiper>
  )
}

S.displayName = 'Swiper'
S.defaultProps = {
  // 这里不能是 undefined ,也不能是 ''
  itemActiveClass: 'amd-swiper-item-active',
  indicator: true,
  autoplay: false,
  initIndex: 0,
  interval: 5000,
  duration: 500,
  loop: false,
  direction: 'horizontal',
  onChange: undefined,
  itemsPerView: 1,
  spaceBetween: 0,
}

S.SwiperItem = SwiperItem

export default withError(S)

import * as React from 'react'
import { unstable_Swiper as Swiper } from '@ant-design/mobile'
import { useSelect } from '../../_internal/demo'
import './demo.less'

const { SwiperItem } = Swiper

export default () => {
  const [state, view] = useSelect({
    indicator: {
      desc: '指示器',
      v: 'primary',
      type: 'radio',
      options: ['primary', 'light', 'none'],
    },
    autoplay: {
      desc: '自动播放',
      v: true,
    },
    interval: {
      desc: '间隔时间',
      v: '5000',
      type: 'radio',
      options: ['1000', '5000'],
    },
    loop: {
      desc: '自动循环',
      v: false,
    },
    itemsPerView: {
      desc: '一屏显示几个',
      v: '1',
      options: ['1', '1.2', '2'],
      type: 'radio',
    },

    vertical: {
      desc: '是否垂直方向',
      v: false,
    },
    spaceBetween: {
      desc: '有无间隔',
      v: false,
    },
  })

  const { indicator, vertical, spaceBetween, ...rest } = state

  const fixedIndicator = indicator === 'none' ? false : { type: indicator }
  const direction = vertical ? 'vertical' : 'horizontal'
  const fixedSpaceBetween = spaceBetween ? 20 : 0

  return (
    <div style={{ padding: '24px 0' }}>
      {view}
      <Swiper
        className="a-swiper"
        // 这里加 key 是为了强制刷新
        // 实际项目中不要加
        key={Math.random()}
        indicator={fixedIndicator}
        direction={direction}
        spaceBetween={fixedSpaceBetween}
        {...rest}
      >
        <SwiperItem>
          <p className="swiper-p" style={{ background: 'red' }}>
            1
          </p>
        </SwiperItem>
        <SwiperItem>
          <p className="swiper-p" style={{ background: 'blue' }}>
            2
          </p>
        </SwiperItem>
        <SwiperItem>
          <p className="swiper-p" style={{ background: 'green' }}>
            3
          </p>
        </SwiperItem>
        <SwiperItem>
          <p className="swiper-p" style={{ background: '#ccc' }}>
            4
          </p>
        </SwiperItem>
      </Swiper>
    </div>
  )
}

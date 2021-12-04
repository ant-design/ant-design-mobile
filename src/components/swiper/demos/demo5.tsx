import React from 'react'
import { Swiper } from 'antd-mobile'
import { DemoBlock } from 'demos'

import styles from './demo5.less'

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

const verticalItems = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <div className={styles.verticalContent} style={{ background: color }}>
      {index + 1}
    </div>
  </Swiper.Item>
))

export default () => {
  return (
    <>
      <DemoBlock title='竖向'>
        <Swiper direction='vertical' style={{ '--height': '200px' }}>
          {verticalItems}
        </Swiper>
      </DemoBlock>

      <DemoBlock title='竖向居中展示'>
        <Swiper
          direction='vertical'
          trackOffset={10}
          slideSize={80}
          stuckAtBoundary={false}
          style={{ '--height': '200px' }}
        >
          {verticalItems}
        </Swiper>
      </DemoBlock>
    </>
  )
}

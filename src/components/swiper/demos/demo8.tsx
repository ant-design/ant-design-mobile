import React, { useState } from 'react'
import { Button, Space, Swiper } from 'antd-mobile'
import { DemoBlock } from 'demos'

import styles from './demo8.less'

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac', '#ffd6e7']

const DATA_COUNT = 5

const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <div className={styles.scaleContent} style={{ background: color }}>
      {index + 1}
    </div>
  </Swiper.Item>
))

export default () => {
  const [count, setCount] = useState(5)
  return (
    <>
      <DemoBlock title='无限滚动'>
        <Space direction='vertical' block>
          <Swiper
            className={styles.root}
            slideSize={60}
            trackOffset={20}
            stuckAtBoundary={false}
          >
            {items.slice(0, count)}
          </Swiper>
        </Space>
      </DemoBlock>
    </>
  )
}

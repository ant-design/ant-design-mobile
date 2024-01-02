import React, { useState } from 'react'
import { Button, Space, Swiper } from 'antd-mobile'
import { DemoBlock } from 'demos'

import styles from './demo8.less'

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac', '#ffd6e7']

const DATA_COUNT = 5

export default () => {
  const [activeKey, setActiveKey] = React.useState('2')

  const startId = Math.max(Number(activeKey) - 2, 0)

  const items = new Array(DATA_COUNT).fill(0).map((_, index) => {
    const id = startId + index

    return (
      <Swiper.Item key={id}>
        <div
          className={styles.scaleContent}
          style={{ background: colors[id % DATA_COUNT] }}
        >
          {id}
        </div>
      </Swiper.Item>
    )
  })

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
            {items}
          </Swiper>
        </Space>
      </DemoBlock>
    </>
  )
}

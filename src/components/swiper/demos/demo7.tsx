import React, { useState } from 'react'
import { Button, Space, Swiper } from 'antd-mobile'
import { DemoBlock } from 'demos'

import styles from './demo1.less'

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <div className={styles.content} style={{ background: color }}>
      {index + 1}
    </div>
  </Swiper.Item>
))

export default () => {
  const [count, setCount] = useState(4)
  return (
    <>
      <DemoBlock title='items 动态变化'>
        <Space direction='vertical' block>
          <Swiper loop={true}>{items.slice(0, count)}</Swiper>
          <Button
            onClick={() => {
              setCount(((count + 2) % 4) + 1)
            }}
          >
            Change
          </Button>
        </Space>
      </DemoBlock>
    </>
  )
}

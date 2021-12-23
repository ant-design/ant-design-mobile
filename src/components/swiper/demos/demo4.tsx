import React from 'react'
import { Space, Swiper } from 'antd-mobile'
import { DemoBlock, DemoDescription } from 'demos'

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
  return (
    <>
      <DemoBlock title='卡在边界'>
        <Swiper
          trackOffset={10}
          slideSize={80}
          style={{
            '--border-radius': '8px',
          }}
          defaultIndex={0}
        >
          {items}
        </Swiper>
      </DemoBlock>

      <DemoBlock title='允许越过边界'>
        <Space direction='vertical' block>
          <Swiper stuckAtBoundary={false} slideSize={80} defaultIndex={3}>
            {items}
          </Swiper>
          <DemoDescription content='允许最后一项越过边界' />
        </Space>
      </DemoBlock>

      <DemoBlock title='居中展示'>
        <Swiper slideSize={80} trackOffset={10} stuckAtBoundary={false}>
          {items}
        </Swiper>
      </DemoBlock>

      <DemoBlock title='循环居中展示'>
        <Swiper slideSize={70} trackOffset={15} loop stuckAtBoundary={false}>
          {items}
        </Swiper>
      </DemoBlock>
    </>
  )
}

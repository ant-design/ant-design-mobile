import React from 'react'
import { Space, Swiper } from 'antd-mobile'
import { DemoBlock } from 'demos'

import styles from './demo8.less'

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac', '#ffd6e7']

const DATA_COUNT = 5

export default () => {
  return (
    <DemoBlock title='无限滚动'>
      <Space direction='vertical' block>
        <Swiper
          className={styles.root}
          slideSize={60}
          trackOffset={20}
          stuckAtBoundary={false}
          total={20}
          indicator={false}
          defaultIndex={2}
        >
          {index => (
            <Swiper.Item key={index}>
              <div
                className={styles.scaleContent}
                style={{ background: colors[index % DATA_COUNT] }}
              >
                {index + 1}
              </div>
            </Swiper.Item>
          )}
        </Swiper>
      </Space>
    </DemoBlock>
  )
}

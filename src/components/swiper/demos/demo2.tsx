import React from 'react'
import { Space, Swiper } from 'antd-mobile'
import { DemoBlock, DemoDescription } from 'demos'

import styles from './demo2.less'

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
      <DemoBlock title='指示器颜色'>
        <Space direction='vertical' block>
          <Swiper
            indicatorProps={{
              color: 'white',
            }}
            defaultIndex={1}
          >
            {items}
          </Swiper>
          <DemoDescription content='通过 indicatorProps 可以控制指示器的外观' />
        </Space>
      </DemoBlock>

      <DemoBlock title='指示器在滑块外面'>
        <Space direction='vertical' block>
          <Swiper
            style={{
              '--track-padding': ' 0 0 16px',
            }}
          >
            {items}
          </Swiper>
          <DemoDescription content='通过 --track-padding 可以控制滑动轨道区域的 padding，从而实现指示器和滑块"分离"的效果' />
        </Space>
      </DemoBlock>

      <DemoBlock title='自定义指示器'>
        <Space direction='vertical' block>
          <Swiper
            indicator={(total, current) => (
              <div className={styles.customIndicator}>
                {`${current + 1} / ${total}`}
              </div>
            )}
          >
            {items}
          </Swiper>
          <DemoDescription content='你可以完全自定义指示器的渲染，甚至改变指示器的位置' />
        </Space>
      </DemoBlock>

      <DemoBlock title='无指示器'>
        <Swiper indicator={() => null}>{items}</Swiper>
      </DemoBlock>
    </>
  )
}

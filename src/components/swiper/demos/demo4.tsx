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
      <DemoBlock title='自定义样式'>
        <Space direction='vertical' block>
          <Swiper
            slideSize={80}
            style={{
              '--border-radius': '8px',
            }}
            defaultIndex={2}
          >
            {items}
          </Swiper>
          <DemoDescription content='通过 CSS 变量可以控制滑块的大小、整体的圆角等样式' />
        </Space>
      </DemoBlock>
      <DemoBlock title='居中展示'>
        <Space direction='vertical' block>
          <Swiper loop={false} slideSize={80} trackOffset={10}>
            {items}
          </Swiper>
          <DemoDescription content='通过 CSS 变量可以控制滑块的大小和轨道的偏移量' />
        </Space>
      </DemoBlock>
      <DemoBlock title='循环居中展示'>
        <Swiper slideSize={70} trackOffset={15}>
          {items}
        </Swiper>
      </DemoBlock>
      <DemoBlock title='最后一项'>
        <Space direction='vertical' block>
          <Swiper
            loop={false}
            slideSize={80}
            trackOffset={10}
            defaultIndex={3}
            stuckAtBoundary
          >
            {items}
          </Swiper>
          <DemoDescription content='让最后一项卡在右边界' />
        </Space>
      </DemoBlock>
    </>
  )
}

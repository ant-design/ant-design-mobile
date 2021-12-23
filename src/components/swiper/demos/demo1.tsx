import React, { useRef } from 'react'
import { Button, Space, Swiper, Toast } from 'antd-mobile'
import { DemoBlock, DemoDescription } from 'demos'
import { SwiperRef } from 'antd-mobile/es/components/swiper'

import styles from './demo1.less'

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <div
      className={styles.content}
      style={{ background: color }}
      onClick={() => {
        Toast.show(`你点击了卡片 ${index + 1}`)
      }}
    >
      {index + 1}
    </div>
  </Swiper.Item>
))

export default () => {
  const ref = useRef<SwiperRef>(null)
  return (
    <>
      <DemoBlock title='基础用法'>
        <Swiper>{items}</Swiper>
      </DemoBlock>

      <DemoBlock title='自动播放'>
        <Swiper autoplay>{items}</Swiper>
      </DemoBlock>

      <DemoBlock title='循环'>
        <Swiper loop>{items}</Swiper>
      </DemoBlock>

      <DemoBlock title='手动控制'>
        <Space direction='vertical' block>
          <Swiper allowTouchMove={false} ref={ref} loop>
            {items}
          </Swiper>
          <Space>
            <Button
              onClick={() => {
                ref.current?.swipePrev()
              }}
            >
              上一张
            </Button>
            <Button
              onClick={() => {
                ref.current?.swipeNext()
              }}
            >
              下一张
            </Button>
          </Space>
          <DemoDescription content='在禁用手势拖拽后，可以通过 Ref 进行手动翻页' />
        </Space>
      </DemoBlock>

      <DemoBlock title='自定义样式'>
        <Space direction='vertical' block>
          <Swiper
            style={{
              '--border-radius': '8px',
            }}
            defaultIndex={3}
          >
            {items}
          </Swiper>
          <DemoDescription content='通过 CSS 变量可以控制整体的圆角等样式' />
        </Space>
      </DemoBlock>
    </>
  )
}

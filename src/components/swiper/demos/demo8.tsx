import React, { useState } from 'react'
import { Space, Swiper, Button } from 'antd-mobile'
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
      <DemoBlock title='基础用法'>
        <Swiper docDirection={'rtl'}>{items}</Swiper>
      </DemoBlock>
      <DemoBlock title='循环'>
        <Swiper
          loop
          autoplay
          onIndexChange={i => {
            console.log(i, 'onIndexChange1')
          }}
          docDirection={'rtl'}
        >
          {items}
        </Swiper>
      </DemoBlock>
      <DemoBlock title='卡在边界'>
        <Swiper
          trackOffset={10}
          slideSize={80}
          style={{
            '--border-radius': '8px',
          }}
          defaultIndex={0}
          docDirection={'rtl'}
        >
          {items}
        </Swiper>
      </DemoBlock>

      <DemoBlock title='居中展示'>
        <Swiper
          slideSize={80}
          trackOffset={10}
          stuckAtBoundary={false}
          docDirection={'rtl'}
        >
          {items}
        </Swiper>
      </DemoBlock>

      <DemoBlock title='循环居中展示'>
        <Swiper
          slideSize={70}
          trackOffset={15}
          loop
          stuckAtBoundary={false}
          docDirection={'rtl'}
        >
          {items}
        </Swiper>
      </DemoBlock>
    </>
  )
}

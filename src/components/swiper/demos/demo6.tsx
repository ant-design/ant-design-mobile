import React from 'react'
import { DemoBlock, lorem } from 'demos'
import { Space, Swiper } from 'antd-mobile'
import styles from './demo2.less'

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <div style={{ background: color }}>{lorem.generateParagraphs(2)}</div>
  </Swiper.Item>
))

export default () => {
  return (
    <>
      <DemoBlock title='高度自动撑起'>
        <Space direction='vertical' block>
          <Swiper>{items}</Swiper>
        </Space>
      </DemoBlock>
    </>
  )
}

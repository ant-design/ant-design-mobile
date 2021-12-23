import React from 'react'
import { Swiper } from 'antd-mobile'
import { DemoBlock, lorem } from 'demos'

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
        <Swiper>{items}</Swiper>
      </DemoBlock>
    </>
  )
}

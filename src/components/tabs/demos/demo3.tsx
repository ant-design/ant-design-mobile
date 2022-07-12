import React, { useRef, useState } from 'react'
import { Tabs, Swiper } from 'antd-mobile'
import { DemoBlock } from 'demos'
import styles from './demo3.less'
import { SwiperRef } from 'antd-mobile/es/components/swiper'

const tabItems = [
  { key: 'fruits', title: '水果' },
  { key: 'vegetables', title: '蔬菜' },
  { key: 'animals', title: '动物' },
]

export default () => {
  const swiperRef = useRef<SwiperRef>(null)
  const [activeIndex, setActiveIndex] = useState(1)

  return (
    <>
      <DemoBlock title='配合 Swiper 实现手势滑动' padding='0'>
        <Tabs
          activeKey={tabItems[activeIndex].key}
          onChange={key => {
            const index = tabItems.findIndex(item => item.key === key)
            setActiveIndex(index)
            swiperRef.current?.swipeTo(index)
          }}
        >
          {tabItems.map(item => (
            <Tabs.Tab title={item.title} key={item.key} />
          ))}
        </Tabs>
        <Swiper
          direction='horizontal'
          loop
          indicator={() => null}
          ref={swiperRef}
          defaultIndex={activeIndex}
          onIndexChange={index => {
            setActiveIndex(index)
          }}
        >
          <Swiper.Item>
            <div className={styles.content}>菠萝</div>
          </Swiper.Item>
          <Swiper.Item>
            <div className={styles.content}>西红柿</div>
          </Swiper.Item>
          <Swiper.Item>
            <div className={styles.content}>蚂蚁</div>
          </Swiper.Item>
        </Swiper>
      </DemoBlock>
    </>
  )
}

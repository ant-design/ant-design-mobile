import React from 'react'
import { Swiper } from 'antd-mobile'
import { DemoBlock } from 'demos'
import styles from './demo1.less'

export default () => {
  return (
    <>
      <DemoBlock title='基础用法'>
        <Swiper>
          <Swiper.Item>
            <div className={styles.content} style={{ background: '#ace0ff' }}>
              1
            </div>
          </Swiper.Item>
          <Swiper.Item>
            <div className={styles.content} style={{ background: '#bcffbd' }}>
              2
            </div>
          </Swiper.Item>
          <Swiper.Item>
            <div className={styles.content} style={{ background: '#e4fabd' }}>
              3
            </div>
          </Swiper.Item>
          <Swiper.Item>
            <div className={styles.content} style={{ background: '#ffcfac' }}>
              4
            </div>
          </Swiper.Item>
        </Swiper>
      </DemoBlock>
    </>
  )
}

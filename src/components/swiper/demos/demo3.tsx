import React, { FC, useState } from 'react'
import { Button, Popup, Space, Swiper } from 'antd-mobile'
import { DemoBlock, DemoDescription } from 'demos'

import styles from './demo3.less'

const WithPopup: FC = () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Button
        onClick={() => {
          setVisible(true)
        }}
      >
        显示弹出层
      </Button>
      <Popup position='bottom' visible={visible} destroyOnClose>
        <Swiper loop={false}>
          <Swiper.Item>
            <div
              className={styles.contentFull}
              style={{ background: '#ace0ff' }}
            >
              1
            </div>
          </Swiper.Item>
          <Swiper.Item>
            <div
              className={styles.contentFull}
              style={{ background: '#bcffbd' }}
            >
              1
            </div>
          </Swiper.Item>
          <Swiper.Item>
            <div className={styles.contentFull}>
              <Button
                onClick={() => {
                  setVisible(false)
                }}
              >
                开始使用
              </Button>
            </div>
          </Swiper.Item>
        </Swiper>
      </Popup>
    </>
  )
}

export default () => {
  return (
    <DemoBlock title='全屏引导'>
      <Space direction='vertical' block>
        <WithPopup />
        <DemoDescription content='配合 Popup 组件可以实现全屏引导' />
      </Space>
    </DemoBlock>
  )
}

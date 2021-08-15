import React from 'react'
import { DemoBlock } from 'demos'
import styles from './index.less'
import { ProgressCircle, Space } from 'antd-mobile'
import { CloseOutlined } from '@ant-design/icons'

export default () => {
  return (
    <>
      <DemoBlock title='基本用法'>
        <ProgressCircle percent={50}>50%</ProgressCircle>
      </DemoBlock>
      <DemoBlock title='指定线条宽度'>
        <Space size='24px'>
          <ProgressCircle percent={75} strokeWidth={4}>
            75%
          </ProgressCircle>
          <ProgressCircle percent={75} strokeWidth={6}>
            75%
          </ProgressCircle>
          <ProgressCircle percent={75} strokeWidth={8}>
            75%
          </ProgressCircle>
        </Space>
      </DemoBlock>
      <DemoBlock title='指定画布宽高'>
        <Space size='24px' align='center'>
          <ProgressCircle percent={50} size={40}>
            <span className={styles.small}>50%</span>
          </ProgressCircle>
          <ProgressCircle percent={75} size={60}>
            <span className={styles.middle}>75%</span>
          </ProgressCircle>
          <ProgressCircle percent={100} size={90}>
            <span className={styles.large}>100%</span>
          </ProgressCircle>
        </Space>
      </DemoBlock>
      <DemoBlock title='自定义'>
        <Space size='24px'>
          <ProgressCircle percent={50} strokeColor='#FF3141'>
            <CloseOutlined style={{ color: '#FF3141', fontSize: '18px' }} />
          </ProgressCircle>
          <ProgressCircle percent={100} strokeColor='#00B578'>
            <span className={styles.success}>Done</span>
          </ProgressCircle>
          <ProgressCircle percent={30} strokeColor='orange'>
            <span className={styles.warning}>
              30
              <br />
              次/天
            </span>
          </ProgressCircle>
        </Space>
      </DemoBlock>
    </>
  )
}

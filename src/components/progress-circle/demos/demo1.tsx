import React from 'react'
import { ProgressCircle, Space } from 'antd-mobile'
import { DemoBlock } from 'demos'

import styles from './demo1.less'

export default () => {
  return (
    <>
      <DemoBlock title='基础用法'>
        <Space style={{ '--gap': '24px' }}>
          <ProgressCircle percent={80} />
          <ProgressCircle percent={50}>50%</ProgressCircle>
        </Space>
      </DemoBlock>

      <DemoBlock title='指定线条宽度'>
        <Space style={{ '--gap': '24px' }}>
          <ProgressCircle percent={75} style={{ '--track-width': '2px' }} />
          <ProgressCircle percent={75} style={{ '--track-width': '4px' }} />
          <ProgressCircle percent={75} style={{ '--track-width': '6px' }} />
        </Space>
      </DemoBlock>

      <DemoBlock title='指定画布宽高'>
        <Space style={{ '--gap': '24px' }} align='center'>
          <ProgressCircle percent={50} style={{ '--size': '40px' }}>
            <span className={styles.small}>50%</span>
          </ProgressCircle>
          <ProgressCircle percent={75} style={{ '--size': '60px' }}>
            <span className={styles.middle}>75%</span>
          </ProgressCircle>
          <ProgressCircle percent={100} style={{ '--size': '90px' }}>
            <span className={styles.large}>100%</span>
          </ProgressCircle>
        </Space>
      </DemoBlock>

      <DemoBlock title='自定义内部文字'>
        <Space style={{ '--gap': '24px' }}>
          <ProgressCircle
            percent={60}
            style={{
              '--size': '100px',
              '--track-width': '4px',
            }}
          >
            <div className={styles.secondaryText}>本月剩余流量</div>
            <div className={styles.mainText}>60</div>
            <div className={styles.secondaryText}>GB</div>
          </ProgressCircle>
          <ProgressCircle
            percent={30}
            style={{
              '--size': '100px',
              '--track-width': '4px',
            }}
          >
            <div className={styles.mainText}>3241</div>
            <div className={styles.secondaryText}>步</div>
          </ProgressCircle>
        </Space>
      </DemoBlock>

      <DemoBlock title='自定义颜色'>
        <Space style={{ '--gap': '24px' }}>
          <ProgressCircle
            percent={60}
            style={{
              '--fill-color': 'var(--adm-color-success)',
            }}
          >
            60%
          </ProgressCircle>
          <ProgressCircle
            percent={60}
            style={{
              '--fill-color': 'var(--adm-color-warning)',
            }}
          >
            60%
          </ProgressCircle>
          <ProgressCircle
            percent={60}
            style={{
              '--fill-color': 'var(--adm-color-danger)',
            }}
          >
            60%
          </ProgressCircle>
        </Space>
      </DemoBlock>
    </>
  )
}

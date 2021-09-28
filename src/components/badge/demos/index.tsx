import React from 'react'
import { DemoBlock } from 'demos'
import styles from './index.less'
import { Badge, Space } from 'antd-mobile'
import { CloseOutline, DownlandOutline } from 'antd-mobile-icons'

export default () => {
  return (
    <>
      <DemoBlock title='基本用法'>
        <Space size='24px'>
          <Badge content='5'>
            <div className={styles.box} />
          </Badge>
          <Badge content='新'>
            <div className={styles.box} />
          </Badge>
          <Badge content='更新啦'>
            <div className={styles.box} />
          </Badge>
          <Badge>
            <div className={styles.box} />
          </Badge>
        </Space>
      </DemoBlock>
      <DemoBlock title='自定义颜色和偏移量'>
        <Space size='24px'>
          <Badge offset={[-40, 40]} color='#108ee9' content={Badge.dot}>
            <div className={styles.box} />
          </Badge>
          <Badge offset={[-40, 0]} color='#87d068' content={Badge.dot}>
            <div className={styles.box} />
          </Badge>
          <Badge offset={[0, 0]} content={Badge.dot}>
            <div className={styles.box} />
          </Badge>
          <Badge offset={[0, 40]} color='orange' content={Badge.dot}>
            <div className={styles.box} />
          </Badge>
        </Space>
      </DemoBlock>
      <DemoBlock title='自定义徽标内容'>
        <Space size='24px'>
          <Badge content={<DownlandOutline className={styles.badgeIcon} />}>
            <div className={styles.box} />
          </Badge>
          <Badge content={<CloseOutline className={styles.badgeIcon} />}>
            <div className={styles.box} />
          </Badge>
        </Space>
      </DemoBlock>
      <DemoBlock title='独立展示'>
        <Space>
          <Badge content='99+' />
          <Badge content='新消息!' />
        </Space>
      </DemoBlock>
    </>
  )
}

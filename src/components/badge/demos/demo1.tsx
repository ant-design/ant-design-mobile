import React from 'react'
import { Badge, Space } from 'antd-mobile'
import { DemoBlock } from 'demos'
import { CloseOutline, DownlandOutline } from 'antd-mobile-icons'

import styles from './demo1.less'

export default () => {
  return (
    <>
      <DemoBlock title='基本用法'>
        <Space style={{ '--gap': '24px' }}>
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
        <Space style={{ '--gap': '24px' }}>
          <Badge
            color='#108ee9'
            content={Badge.dot}
            style={{ '--right': '100%', '--top': '100%' }}
          >
            <div className={styles.box} />
          </Badge>
          <Badge
            color='#87d068'
            content={Badge.dot}
            style={{ '--right': '100%' }}
          >
            <div className={styles.box} />
          </Badge>
          <Badge content={Badge.dot}>
            <div className={styles.box} />
          </Badge>
          <Badge color='orange' content={Badge.dot} style={{ '--top': '100%' }}>
            <div className={styles.box} />
          </Badge>
        </Space>
      </DemoBlock>

      <DemoBlock title='自定义徽标内容'>
        <Space style={{ '--gap': '24px' }}>
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

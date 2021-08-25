import React from 'react'
import { DemoBlock } from 'demos'
import { Card, Toast, Button } from 'antd-mobile'
import { AntDesignOutlined, RightOutlined } from '@ant-design/icons'
import styles from './index.less'

export default () => {
  const onClick = () => {
    Toast.show('点击了卡片')
  }

  const onHeaderClick = () => {
    Toast.show('点击了卡片Header区域')
  }

  const onBodyClick = () => {
    Toast.show('点击了卡片Body区域')
  }
  return (
    <>
      <DemoBlock title='基本用法' background='gray'>
        <Card title='卡片标题' onClick={onClick}>
          卡片内容
        </Card>
      </DemoBlock>
      <DemoBlock title='没有卡片内容' background='gray'>
        <Card title='卡片标题' onClick={onClick} />
      </DemoBlock>
      <DemoBlock title='没有卡片标题' background='gray'>
        <Card onClick={onClick}>卡片内容</Card>
      </DemoBlock>
      <DemoBlock title='自定义卡片' background='gray'>
        <Card
          title={
            <div style={{ fontWeight: 'normal' }}>
              <AntDesignOutlined
                style={{ marginRight: '4px', color: '#1677ff' }}
              />
              卡片标题
            </div>
          }
          extra={<RightOutlined />}
          onBodyClick={onBodyClick}
          onHeaderClick={onHeaderClick}
          style={{ borderRadius: '16px' }}
        >
          <div className={styles.content}>卡片内容</div>
          <div className={styles.footer} onClick={e => e.stopPropagation()}>
            <Button
              color='primary'
              onClick={() => Toast.show('点击了底部按钮')}
            >
              底部按钮
            </Button>
          </div>
        </Card>
      </DemoBlock>
    </>
  )
}

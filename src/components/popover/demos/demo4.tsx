import React, { FC, useState } from 'react'
import { Button, Image, Popover } from 'antd-mobile'
import { CloseOutline } from 'antd-mobile-icons'
import { DemoBlock, DemoDescription } from 'demos'
import styles from './demo4.less'

const image = (
  <Image
    src='https://gw.alipayobjects.com/zos/bmw-prod/ec7a239e-a880-4acd-8563-53047b1d7e84.svg'
    style={{
      '--height': '36px',
      '--width': '36px',
    }}
  />
)

const SingleLine: FC = () => {
  const [visible, setVisible] = useState(true)

  return (
    <Popover
      content={
        <div className={styles.singleLineContent}>
          <div className={styles.imageContainer}>{image}</div>
          <div>单行文字推荐关闭按钮居中</div>
          <div
            className={styles.closeIcon}
            onClick={() => {
              setVisible(false)
            }}
          >
            <CloseOutline />
          </div>
        </div>
      }
      placement='bottom-start'
      mode='dark'
      visible={visible}
    >
      <Button
        onClick={() => {
          setVisible(v => !v)
        }}
      >
        点我
      </Button>
    </Popover>
  )
}

const MultiLine: FC = () => {
  const [visible, setVisible] = useState(true)

  return (
    <Popover
      content={
        <div className={styles.multiLineContent}>
          <div className={styles.imageContainer}>{image}</div>
          <div>
            多行文字推荐关闭按钮
            <br />
            竖直方向上居中
          </div>
          <div
            className={styles.closeIcon}
            onClick={() => {
              setVisible(false)
            }}
          >
            <CloseOutline />
          </div>
        </div>
      }
      placement='bottom-start'
      mode='dark'
      visible={visible}
    >
      <Button
        onClick={() => {
          setVisible(v => !v)
        }}
      >
        点我
      </Button>
    </Popover>
  )
}

export default () => {
  return (
    <>
      <DemoBlock title='带关闭按钮'>
        <DemoDescription>单行文字推荐关闭按钮居中</DemoDescription>
        <div style={{ paddingTop: 10, paddingBottom: 80 }}>
          <SingleLine />
        </div>
        <DemoDescription>多行文字推荐关闭按钮竖直方向上居中</DemoDescription>
        <div style={{ paddingTop: 10, paddingBottom: 80 }}>
          <MultiLine />
        </div>
      </DemoBlock>
    </>
  )
}

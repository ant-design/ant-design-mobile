import React from 'react'
import { Skeleton } from 'antd-mobile'
import { DemoBlock } from 'demos'
import styles from './demo1.less'

export default () => {
  return (
    <>
      <DemoBlock title='基础用法'>
        <Skeleton.Title />
        <Skeleton.Paragraph />
      </DemoBlock>
      <DemoBlock title='有动画的骨架屏'>
        <Skeleton.Title animated />
        <Skeleton.Paragraph lineCount={5} animated />
      </DemoBlock>
      <DemoBlock title='自定义'>
        <Skeleton animated className={styles.customSkeleton} />
      </DemoBlock>
    </>
  )
}

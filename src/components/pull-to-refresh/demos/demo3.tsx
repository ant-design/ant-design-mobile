import React from 'react'
import { PullToRefresh, Toast } from 'antd-mobile'
import { DemoDescription } from 'demos'
import { sleep } from 'antd-mobile/es/utils/sleep'

import styles from './demo3.less'

async function doRefresh() {
  await sleep(1000)
  Toast.show({
    icon: 'fail',
    content: '刷新失败',
  })
  throw new Error('刷新失败')
}

export default () => {
  return (
    <PullToRefresh onRefresh={doRefresh}>
      <div className={styles.content}>
        <DemoDescription>下拉刷新一下试试</DemoDescription>
      </div>
    </PullToRefresh>
  )
}

import React, { useState } from 'react'
import { PullToRefresh, List, Tabs } from 'antd-mobile'
import { sleep } from 'antd-mobile/es/utils/sleep'
import styles from './demo-nested.less'
import { lorem } from 'demos'

function getNextData() {
  const ret = {
    headerItems: [] as string[],
    bodyItems: [] as string[],
  }
  for (let i = 0; i < 3; i++) {
    ret.headerItems.unshift(lorem.generateWords(1))
  }
  for (let i = 0; i < 20; i++) {
    ret.bodyItems.unshift(lorem.generateWords(1))
  }
  return ret
}

export default () => {
  const [data, setData] = useState(() => getNextData())
  return (
    <PullToRefresh
      onRefresh={async () => {
        await sleep(1000)
        setData(getNextData())
      }}
    >
      <div className={styles.container}>
        <List header='头部的一些内容' mode='card'>
          {data.headerItems.map((item, index) => (
            <List.Item key={index}>{item}</List.Item>
          ))}
        </List>
        <div className={styles.tabsPart}>
          <Tabs>
            <Tabs.Tab key='1' title={'面板 A'} />
            <Tabs.Tab key='2' title={'面板 B'} />
          </Tabs>
        </div>
        <div className={styles.scrollPart}>
          <List style={{ minHeight: '100vh' }}>
            {data.bodyItems.map((item, index) => (
              <List.Item key={index}>{item}</List.Item>
            ))}
          </List>
        </div>
      </div>
    </PullToRefresh>
  )
}

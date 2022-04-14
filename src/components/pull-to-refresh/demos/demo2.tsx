import React, { useState } from 'react'
import { PullToRefresh, List } from 'antd-mobile'
import { sleep } from 'antd-mobile/es/utils/sleep'
import { PullStatus } from 'antd-mobile/es/components/pull-to-refresh'
import { lorem } from 'demos'

function getNextData() {
  const ret: string[] = []
  for (let i = 0; i < 18; i++) {
    ret.unshift(lorem.generateWords(1))
  }
  return ret
}

const statusRecord: Record<PullStatus, string> = {
  pulling: '用力拉',
  canRelease: '松开吧',
  refreshing: '玩命加载中...',
  complete: '好啦',
}

export default () => {
  const [data, setData] = useState(() => getNextData())
  return (
    <PullToRefresh
      onRefresh={async () => {
        await sleep(1000)
        setData([...getNextData(), ...data])
      }}
      renderText={status => {
        return <div>{statusRecord[status]}</div>
      }}
    >
      <List style={{ minHeight: '100vh' }}>
        {data.map((item, index) => (
          <List.Item key={index}>{item}</List.Item>
        ))}
      </List>
    </PullToRefresh>
  )
}

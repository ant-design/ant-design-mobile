import React, { useState } from 'react'
import { PullToRefresh, List, Toast } from 'antd-mobile'
import { sleep } from 'antd-mobile/es/utils/sleep'

let current = 1

function getNextData() {
  const ret: string[] = []
  for (let i = 0; i < 18; i++) {
    ret.unshift(current.toString())
    current++
  }
  return ret
}

export default () => {
  const [data, setData] = useState(() => getNextData())
  return (
    <PullToRefresh
      onRefresh={async () => {
        await sleep(1000)
        if (Math.random() > 0.5) {
          Toast.show({
            icon: 'fail',
            content: '刷新失败',
          })
          throw new Error('刷新失败')
        } else {
          setData([...getNextData(), ...data])
        }
      }}
    >
      <List style={{ minHeight: '100vh' }}>
        {data.map(item => (
          <List.Item key={item}>{item}</List.Item>
        ))}
      </List>
    </PullToRefresh>
  )
}

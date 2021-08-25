import { PullToRefresh, List } from 'antd-mobile'
import { sleep } from 'antd-mobile/src/utils/sleep'
import { useState } from 'react'

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
        setData([...getNextData(), ...data])
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

import React, { useState } from 'react'
import { InfiniteScroll, List } from 'antd-mobile'
import { sleep } from '../../../utils/sleep'

export default () => {
  const [data, setData] = useState<string[]>([])
  async function loadMore() {
    await sleep(1000)
    if (Math.random() > 0.5) {
      throw new Error('mock request failed')
    }
    const append = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
    ]
    setData(val => [...val, ...append])
  }

  return (
    <>
      <List>
        {data.map((item, index) => (
          <List.Item key={index}>{item}</List.Item>
        ))}
      </List>
      <InfiniteScroll loadMore={loadMore} hasMore={true} />
    </>
  )
}

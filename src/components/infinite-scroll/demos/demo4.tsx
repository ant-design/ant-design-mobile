import React, { useState } from 'react'
import { InfiniteScroll, List } from 'antd-mobile'
import { mockRequest } from './mock-request'

export default () => {
  const [data, setData] = useState<string[]>([])
  async function loadMore() {
    const append = await mockRequest()
    if (Math.random() > 0.5) {
      throw new Error('mock request failed')
    }
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

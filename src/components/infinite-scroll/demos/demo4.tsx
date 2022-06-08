import React, { useState } from 'react'
import { InfiniteScroll, List } from 'antd-mobile'
import { mockRequest } from './mock-request'

export default () => {
  const [data, setData] = useState<string[]>([])
  const [hasMore, setHasMore] = useState(true)
  async function loadMore() {
    const append = await mockRequest()
    if (data.length > 10) {
      throw new Error('mock request failed')
    }
    setData(val => [...val, ...append])
    setHasMore(append.length > 0)
  }

  return (
    <>
      <List>
        {data.map((item, index) => (
          <List.Item key={index}>{item}</List.Item>
        ))}
      </List>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    </>
  )
}

import React, { useState } from 'react'
import { InfiniteScroll, List, DotLoading } from 'antd-mobile'
import { mockRequest } from './mock-request'

const InfiniteScrollContent = ({ hasMore }: { hasMore?: boolean }) => {
  return (
    <>
      {hasMore ? (
        <>
          <span>Loading</span>
          <DotLoading />
        </>
      ) : (
        <span>--- 我是有底线的 ---</span>
      )}
    </>
  )
}
export default () => {
  const [data, setData] = useState<string[]>([])
  const [hasMore, setHasMore] = useState(true)
  async function loadMore() {
    const append = await mockRequest()
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
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore}>
        <InfiniteScrollContent hasMore={hasMore} />
      </InfiniteScroll>
    </>
  )
}

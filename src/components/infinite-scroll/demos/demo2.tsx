import { Image, InfiniteScroll, List } from 'antd-mobile'
import type { CSSProperties } from 'react'
import React, { useState } from 'react'
import {
  AutoSizer,
  List as VirtualizedList,
  WindowScroller,
} from 'react-virtualized'
import { mockRequest } from './mock-request'

interface Item {
  avatar: string
  name: string
  description: string
}

const item = {
  avatar:
    'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
  name: 'Novalee Spicer',
  description: 'Deserunt dolor ea eaque eos',
}

export default () => {
  const [data, setData] = useState<Item[]>(Array(20).fill(item))
  const [hasMore, setHasMore] = useState(true)
  async function loadMore() {
    const append = await mockRequest()
    setData(val => [...val, ...Array(append.length).fill(item)])
    setHasMore(append.length > 0)
  }

  function rowRenderer({
    index,
    key,
    style,
  }: {
    index: number
    key: string
    style: CSSProperties
  }) {
    const item_ = data[index]
    if (!item_) return

    return (
      <List.Item
        key={key}
        style={style}
        prefix={
          <Image
            src={item_.avatar}
            style={{ borderRadius: 20 }}
            fit='cover'
            width={40}
            height={40}
          />
        }
        description={item_.description}
      >
        {item_.name} {index}
      </List.Item>
    )
  }

  return (
    <div>
      <WindowScroller
        onScroll={({ scrollTop }) => {
          console.log('scrollTop', scrollTop)
        }}
      >
        {({ height, scrollTop, isScrolling }) => (
          <List>
            <AutoSizer disableHeight>
              {({ width }) => (
                <VirtualizedList
                  autoHeight
                  rowCount={data.length}
                  rowRenderer={rowRenderer}
                  width={width}
                  height={height}
                  rowHeight={70}
                  overscanRowCount={10}
                  isScrolling={isScrolling}
                  scrollTop={scrollTop}
                />
              )}
            </AutoSizer>
          </List>
        )}
      </WindowScroller>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    </div>
  )
}

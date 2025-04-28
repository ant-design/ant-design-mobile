import { Image, List } from 'antd-mobile'
import type { CSSProperties } from 'react'
import React from 'react'
import { AutoSizer, List as VirtualizedList } from 'react-virtualized'

const rowCount = 1000

const item = {
  avatar:
    'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
  name: 'Novalee Spicer',
  description: 'Deserunt dolor ea eaque eos',
}

const data = Array(rowCount).fill(item)

export default () => {
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
    <List header='结合 react-virtualized 实现长列表'>
      <AutoSizer disableHeight>
        {({ width }: { width: number }) => (
          <VirtualizedList
            rowCount={rowCount}
            rowRenderer={rowRenderer}
            width={width}
            height={480}
            rowHeight={60}
            overscanRowCount={10}
          />
        )}
      </AutoSizer>
    </List>
  )
}

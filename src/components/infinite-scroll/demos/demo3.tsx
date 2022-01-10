import React, { useEffect, useState } from 'react'
import {
  Button,
  InfiniteScroll,
  List,
  DotLoading,
  SearchBar,
} from 'antd-mobile'
import { sleep } from 'demos'

import styles from './demo3.less'

let count = 0

async function mockRequest() {
  if (count >= 5) {
    return []
  }
  await sleep(2000)
  count++
  return [
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
}

export default () => {
  const [data, setData] = useState<string[]>([])
  const [hasMore, setHasMore] = useState(true)
  async function loadMore() {
    const append = await mockRequest()
    setData(val => [...val, ...append])
    setHasMore(append.length > 0)
  }

  function doSearch() {
    setData([])
    setHasMore(true)
    loadMore()
  }

  useEffect(() => {
    doSearch()
  }, [])

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <SearchBar />
        </div>
        <div className={styles.right}>
          <Button size='small' color='primary' onClick={doSearch}>
            搜索
          </Button>
        </div>
      </div>
      {data.length > 0 ? (
        <>
          <List>
            {data.map((item, index) => (
              <List.Item key={index}>{item}</List.Item>
            ))}
          </List>
          <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
        </>
      ) : (
        <div className={styles.placeholder}>
          <div className={styles.loadingWrapper}>
            <DotLoading />
          </div>
          正在拼命加载数据
        </div>
      )}
    </>
  )
}

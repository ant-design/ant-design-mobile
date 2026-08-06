import React, { useEffect, useRef, useState } from 'react'
import { PullToRefresh, List, Button } from 'antd-mobile'
import type { PullToRefreshRef } from '..'
import { lorem } from 'demos'

function getNextData() {
  const ret: string[] = []
  for (let i = 0; i < 18; i++) {
    ret.unshift(lorem.generateWords(1))
  }
  return ret
}

export default () => {
  const [data, setData] = useState(() => getNextData())
  const ref = useRef<PullToRefreshRef>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <>
      <Button
        style={{ margin: '8px 16px' }}
        onClick={() => ref.current?.startRefresh()}
      >
        外部触发刷新
      </Button>
      <PullToRefresh
        ref={ref}
        onRefresh={() => {
          timeoutRef.current = setTimeout(() => {
            setData(prev => [...getNextData(), ...prev])
            ref.current?.completeRefresh()
          }, 2000)
          return Promise.resolve()
        }}
      >
        <List style={{ minHeight: '100vh' }}>
          {data.map((item, index) => (
            <List.Item key={index}>{item}</List.Item>
          ))}
        </List>
      </PullToRefresh>
    </>
  )
}

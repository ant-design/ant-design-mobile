import * as React from 'react'
import {
  unstable_PullToRefresh as PullToRefresh,
  unstable_List as List,
} from '@ant-design/mobile'
import { useSelect } from '../../_internal/demo'

const { Item } = List

export default () => {
  const [refreshing, setRefreshing] = React.useState(false)
  const [data, view] = useSelect({
    direction: {
      desc: '方向',
      v: 'down',
      type: 'radio',
      options: ['down', 'up'],
    },
    bg: {
      desc: '背景',
      v: 'dark',
      type: 'radio',
      options: ['dark', 'light'],
      hide: d => d.withList,
    },
    withList: {
      desc: '配合列表使用',
      v: false,
      type: 'switch',
      hide: d => d.bg === 'dark',
    },
  })
  const request = () => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, 5000)
  }
  const getIndicator = () => {
    if (data.direction === 'up') {
      return {
        deactivate: '上拉加载更多',
        activate: '上拉加载更多',
        release: '加载中',
        finish: '加载完成',
      }
    }
    return {
      deactivate: '下拉刷新',
      activate: '下拉刷新',
      release: '加载中',
      finish: '加载完成',
    }
  }
  return (
    <>
      {view}
      {!data.withList && (
        <div
          style={
            data.bg === 'dark'
              ? { background: '#1677ff' }
              : { background: '#fff' }
          }
        >
          <PullToRefresh
            key={data.direction + data.bg}
            refreshing={refreshing}
            direction={data.direction}
            onRefresh={request}
            indicator={getIndicator()}
          >
            <div style={{ height: 340 }}>
              <p>1234</p>
              <p>1234</p>
              <p>1234</p>
              <p>1234</p>
              <p>1234</p>
              <p>1234</p>
              <p>1234</p>
              <p>1234</p>
            </div>
          </PullToRefresh>
        </div>
      )}

      {data.withList && (
        <List renderHeader="列表头部" renderFooter="列表底部">
          <PullToRefresh
            key={data.direction}
            refreshing={refreshing}
            direction={data.direction}
            onRefresh={request}
            indicator={getIndicator()}
          >
            <Item>列表</Item>
            <Item>列表</Item>
            <Item>列表</Item>
            <Item>列表</Item>
            <Item>列表</Item>
            <Item>列表</Item>
            <Item>列表</Item>
            <Item>列表</Item>
            <Item>列表</Item>
          </PullToRefresh>
        </List>
      )}
    </>
  )
}

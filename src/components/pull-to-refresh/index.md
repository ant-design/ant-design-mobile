# PullToRefresh 下拉刷新

<code src="./demos/index.tsx"></code>

## API

| 属性           | 说明                                | 类型                 | 默认值       |
| -------------- | ----------------------------------- | -------------------- | ------------ |
| onRefresh      | 触发刷新时的处理函数                | `() => Promise<any>` | -            |
| pullingText    | 下拉的提示文案                      | ReactNode            | 下拉刷新     |
| releaseText    | 释放的提示文案                      | ReactNode            | 释放立即刷新 |
| refreshingText | 刷新时的提示文案                    | ReactNode            | 加载中……     |
| completeText   | 完成时的提示文案                    | ReactNode            | 刷新成功     |
| completeDelay  | 完成后延迟消失的时间，单位为 ms     | number               | 500          |
| headHeight     | 头部提示内容区的高度，单位为 px     | number               | 40           |
| threshold      | 触发刷新需要下拉多少距离，单位为 px | number               | 60           |

## 常见问题

### 是否支持上拉加载更多？

上拉加载更多是另一个组件：[InfiniteScroll](./infinite-scroll)

# PullToRefresh 下拉刷新

基础用法：

<code src="./demos/demo1.tsx"></code>

使用 `renderText` 控制下拉内容：

<code src="./demos/demo2.tsx"></code>

## API

```ts | pure
type PullStatus = 'pulling' | 'canRelease' | 'refreshing' | 'complete'
```

| 属性           | 说明                                | 类型                                | 默认值           |
| -------------- | ----------------------------------- | ----------------------------------- | ---------------- |
| onRefresh      | 触发刷新时的处理函数                | `() => Promise<any>`                | -                |
| pullingText    | 下拉的提示文案                      | `ReactNode`                         | `'下拉刷新'`     |
| canReleaseText | 释放的提示文案                      | `ReactNode`                         | `'释放立即刷新'` |
| refreshingText | 刷新时的提示文案                    | `ReactNode`                         | `'加载中……'`     |
| completeText   | 完成时的提示文案                    | `ReactNode`                         | `'刷新成功'`     |
| completeDelay  | 完成后延迟消失的时间，单位为 ms     | `number`                            | `500`            |
| headHeight     | 头部提示内容区的高度，单位为 px     | `number`                            | `40`             |
| threshold      | 触发刷新需要下拉多少距离，单位为 px | `number`                            | `60`             |
| renderText     | 根据下拉状态，自定义下拉提示文案    | `(status: PullStatus) => ReactNode` | -                |

## 常见问题

### 是否支持上拉加载更多？

上拉加载更多是另一个组件：[InfiniteScroll](./infinite-scroll)

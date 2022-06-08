# InfiniteScroll 无限滚动

列表滚动到底部自动加载更多数据。

## 何时使用

用户想看到新的数据时，可以上滑页面自动加载数据。

当 `hasMore` 属性为 `true` 时，用户页面滚动到底部 `threshold` (默认为 250px)时无限滚动组件会调用定义的 `loadMore` 函数。

## 示例

<code src="./demos/demo1.tsx"></code>

## InfiniteScroll

### 属性

| 属性      | 说明                                       | 类型                                                                                             | 默认值         |
| --------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------ | -------------- |
| children  | 渲染自定义指引内容                         | `React.ReactNode \| ((hasMore: boolean, failed: boolean, retry: () => void) => React.ReactNode)` | 默认的指引提示 |
| hasMore   | 是否还有更多内容                           | `boolean`                                                                                        | -              |
| loadMore  | 加载更多的回调函数                         | `(isRetry: boolean) => Promise<void>`                                                            | -              |
| threshold | 触发加载事件的滚动触底距离阈值，单位为像素 | `number`                                                                                         | `250`          |

InfiniteScroll 会自动对 `loadMore` 函数加锁，避免重复的请求，但是前提是 `loadMore` 函数需要返回一个正确的 Promise，下面是正确和错误的用法示例：

```js
function loadMore() { // 错误
  doRequest()
}

async function loadMore() { // 错误
  doRequest()
}

async function loadMore() { // 正确
  await doRequest()
}

function loadMore() { // 正确
  return doRequest()
}
```

### 自定义 Content

如果需要的话，`<InfiniteScroll>` 允许自定义展示内容，这个内容可以包含任何元素，包括 svg 和带有 css 动画的元素。

<code src="./demos/content.tsx"></code>

### 配合搜索使用

<code src="./demos/demo3.tsx"></code>

### 滚动加载无限长列表

结合 [react-virtualized](https://github.com/bvaughn/react-virtualized) 实现滚动加载无限长列表

<code src="./demos/demo2.tsx"></code>

### 请求失败时支持点击重试

<code src="./demos/demo4.tsx"></code>

## 常见问题

### 是否支持下拉刷新？

下拉刷新是另一个组件：[PullToRefresh](./pull-to-refresh)。

### 为什么配合 ahooks 的 `useDebounceFn` 或者 `useThrottleFn` 使用时会出现报错？

InfiniteScroll 本身已经包含了防止并发的重复请求的逻辑，所以请不要配合 `useDebounceFn` 或 `useThrottleFn` 使用，它们之间会出现逻辑冲突。

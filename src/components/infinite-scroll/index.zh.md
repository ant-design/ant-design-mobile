# InfiniteScroll 无限滚动

当 `hasMore` 属性为 `true` 时，用户页面滚动到底部 `threshold` (默认为 250px)时无限滚动组件会调用定义的 `loadMore` 函数。

<code src="./demos/index.tsx"></code>

### 属性

| 属性      | 说明                                       | 类型                  | 默认值 |
| --------- | ------------------------------------------ | --------------------- | ------ |
| loadMore  | 加载更多的回调函数                         | `() => Promise<void>` | -      |
| hasMore   | 是否还有更多内容                           | `boolean`             | -      |
| threshold | 触发加载事件的滚动触底距离阈值，单位为像素 | `number`              | `250`  |

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

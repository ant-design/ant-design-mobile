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

下拉刷新是另一个组件：[PullToRefresh](/zh/components/pull-to-refresh)。

### 为什么配合 ahooks 的 `useDebounceFn` 或者 `useThrottleFn` 使用时会出现报错？

InfiniteScroll 本身已经包含了防止并发的重复请求的逻辑，所以请不要配合 `useDebounceFn` 或 `useThrottleFn` 使用，它们之间会出现逻辑冲突。

### 为什么 InfiniteScroll 由隐藏切换为显示时，一直处于 loading？

在使用 `InfiniteScroll` 组件时，其内部会检测组件是否可见。**可见时会调用 `loadMore` 来加载数据**；**不可见时，不会调用 `loadMore`**（这是必要的，可以避免不必要的数据请求）。并且，**该检查机制，在组件初次渲染以及每次重新渲染时都会进行**，以确保正确加载数据。

但有些场景下（比如，配合 `Tabs` 组件使用时），可能会遇到 `InfiniteScroll` 组件一直 loading 且未加载数据的情况，比如以下示例：

```tsx
<Tabs>
  <Tabs.Tab title='水果' key='fruits'>菠萝</Tabs.Tab>
  <Tabs.Tab title='蔬菜' key='vegetables' forceRender>
    <InfiniteScroll
      hasMore={true}
      loadMore={() => {
        // 切换到该 Tab 时，该函数不执行
      }}
    />
  </Tabs.Tab>
</Tabs>
```

问题描述：`Tabs` 组件默认展示第一个 `Tab` 项的内容，所以，第二个 `Tab` 项的内容 `InfiniteScroll` 是不可见的。但第二个 `Tab` 添加了 `forceRender` 属性，所以即使不可见，其内容也会渲染。本次渲染 `InfiniteScroll`组件时，由于该组件不可见，所以，不会调用 `loadMore` 函数，这是正常的，跟我们的预期相同。_但是，当我们切换到第二个 `Tab` 展示 `InfiniteScroll` 组件时，发现 `InfiniteScroll` 组件并没有调用 `loadMore` 函数，这一点跟我们预期不同，我们希望此时 `loadMore` 函数被调用_。

原因说明：点击切换 `Tabs` 组件的 `Tab` 项时，会修改 `Tabs` 组件的高亮状态，此时，`Tabs` 组件会重新渲染。但是，要注意的是**只有在 `Tabs` 组件自身的内容才会被重新渲染，而 `InfiniteScroll` 组件是在 `Tabs` 组件外部的，并非 `Tabs` 组件自身内容**。所以，切换 `Tab` 时，`InfiniteScroll` 组件并不会重新渲染，也就没有再次触发它的检查机制。

解决方式：

- 方式一：去掉 `InfiniteScroll` 组件所在 Tab 的 `forceRender`（只在激活并展示 Tab 时，才渲染 `InfiniteScroll` 组件，此时，该组件可见就会正确调用 `loadMore` 来加载数据）
- 方式二：通过受控组件模式使用 `Tabs` 组件（切换 `Tab` 时，**更新了 `InfiniteScroll` 组件所在组件的状态**，此时，会重新渲染 `InfiniteScroll` 组件，也就会再次触发检查机制，而该组件可见，就会正确调用 `loadMore` 来加载数据），示例如下：

```jsx
const [activeKey, setActiveKey] = useState('fruits')

<Tabs activeKey={activeKey} onChange={setActiveKey}>
  ...
</Tabs>
```

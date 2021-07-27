# InfiniteScroll 无限滚动

当 `hasMore` 属性为 `true` 时，用户页面滚动到底部 `threshold` (默认为 250px)时无限滚动组件会调用定义的 `loadMore` 函数。


<code src="./demos/index.tsx" />

# API

| 属性      | 说明                                       | 类型                  | 默认值 |
| --------- | ------------------------------------------ | --------------------- | ------ |
| loadMore  | 加载更多的回调函数                         | () => Promise\<void\> | -      |
| hasMore   | 是否还有更多内容                           | boolean               | -      |
| threshold | 触发加载事件的滚动触底距离阈值，单位为像素 | number                | 250    |

# 自定义 Content

如果需要的话，`<InfiniteScroll>` 允许自定义展示内容，这个内容可以包含任何元素，包括 svg 和带有css动画的元素。

被 `<InfiniteScroll>` 包裹的子组件，会被自动注入 `hasMore` 属性，你可以用它来分辨此时的组件状态。

<code src="./demos/content.tsx" />

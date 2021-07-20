# InfiniteScroll 无限滚动

<code src="./demos/index.tsx" />

# API

| 属性      | 说明                                       | 类型                  | 默认值 |
| --------- | ------------------------------------------ | --------------------- | ------ |
| loadMore  | 加载更多的回调函数                         | () => Promise\<void\> | -      |
| hasMore   | 是否还有更多内容                           | boolean               | -      |
| threshold | 触发加载事件的滚动触底距离阈值，单位为像素 | number                | 250    |

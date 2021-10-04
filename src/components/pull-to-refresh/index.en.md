# PullToRefresh

<code src="./demos/index.tsx"></code>

## API

| Name           | Description                                                          | Type                 | Default          |
| -------------- | -------------------------------------------------------------------- | -------------------- | ---------------- |
| onRefresh      | handler function when refresh triggered                              | `() => Promise<any>` | -                |
| pullingText    | hint text of pulling                                                 | `ReactNode`          | `'下拉刷新'`     |
| releaseText    | hint text of release                                                 | `ReactNode`          | `'释放立即刷新'` |
| refreshingText | hint text when refreshing                                            | `ReactNode`          | `'加载中……'`     |
| completeText   | hint text when completed                                             | `ReactNode`          | `'刷新成功'`     |
| completeDelay  | the time for the delay to disappear after completion, the unit is ms | `number`             | `500`            |
| headHeight     | the height of the head prompt content area, the unit is px           | `number`             | `40`             |
| threshold      | how far to pull down to trigger refresh, unit is px                  | `number`             | `60`             |

## FAQ

### Does it support pull up to load more?

Pull-up loading is another component: [InfiniteScroll](./infinite-scroll)

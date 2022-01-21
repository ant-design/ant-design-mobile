# PullToRefresh

### Basic Usage

<code src="./demos/demo1.tsx"></code>

### Customize Text

<code src="./demos/demo2.tsx"></code>

### Handle Refresh Error

<code src="./demos/demo3.tsx"></code>

### Props

```ts | pure
type PullStatus = 'pulling' | 'canRelease' | 'refreshing' | 'complete'
```

| Name           | Description                                                          | Type                                | Default          |
| -------------- | -------------------------------------------------------------------- | ----------------------------------- | ---------------- |
| onRefresh      | Handler function when refresh triggered                              | `() => Promise<any>`                | -                |
| pullingText    | Hint text of pulling                                                 | `ReactNode`                         | `'下拉刷新'`     |
| canReleaseText | Hint text of release                                                 | `ReactNode`                         | `'释放立即刷新'` |
| refreshingText | Hint text when refreshing                                            | `ReactNode`                         | `'加载中……'`     |
| completeText   | Hint text when completed                                             | `ReactNode`                         | `'刷新成功'`     |
| completeDelay  | The time for the delay to disappear after completion, the unit is ms | `number`                            | `500`            |
| headHeight     | The height of the head prompt content area, the unit is px           | `number`                            | `40`             |
| threshold      | How far to pull down to trigger refresh, unit is px                  | `number`                            | `60`             |
| renderText     | Customize the pulling content according to the pulling status        | `(status: PullStatus) => ReactNode` | -                |
| disabled       | Whether the PullToRefresh is disabled                                | `boolean`                           | `false`          |

## FAQ

### Does it support pull up to load more?

Pull-up loading is another component: [InfiniteScroll](./infinite-scroll)

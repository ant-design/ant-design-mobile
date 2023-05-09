# PullToRefresh

An interaction to load new content with a finger pull-to-refresh in a list.

## When to Use

It is suitable for updating the content of the current page.

## Demos

### Basic Usage

<code src="./demos/demo1.tsx"></code>

### Customize Text

<code src="./demos/demo2.tsx"></code>

### Handle Refresh Error

<code src="./demos/demo3.tsx"></code>

### Nested Scroll Areas

<code src="./demos/demo-nested.tsx"></code>

## PullToRefresh

### Props

```ts | pure
type PullStatus = 'pulling' | 'canRelease' | 'refreshing' | 'complete'
```

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| completeDelay | The time for the delay to disappear after completion, the unit is ms | `number` | `500` |
| disabled | Whether the PullToRefresh is disabled | `boolean` | `false` |
| onRefresh | Handler function when refresh triggered | `() => Promise<any>` | - |
| pullingText | Hint text of pulling | `ReactNode` | `'下拉刷新'` |
| canReleaseText | Hint text of release | `ReactNode` | `'释放立即刷新'` |
| refreshingText | Hint text when refreshing | `ReactNode` | `'加载中……'` |
| completeText | Hint text when completed | `ReactNode` | `'刷新成功'` |
| renderText | Customize the pulling content according to the pulling status | `(status: PullStatus) => ReactNode` | - |
| threshold | How many times of the header height as distance need to be pulled down to trigger a refresh | `number` | `1.5` |

### CSS Variables

| Name | Description | Default | Global |
| --- | --- | --- | --- |
| --head-content-padding | padding of the header | `20px` | `--adm-pull-to-refresh-head-content-padding` |
| --head-content-font-size | font size of the text in header | `16px` | `--adm-pull-to-refresh-head-content-font-size` |

## FAQ

### Does it support pull up to load more?

Pull-up loading is another component: [InfiniteScroll](/components/infinite-scroll).

### About the browser's default pull-down behavior

Some browsers or webview containers have elastic effects or pull-to-refresh logic. We do not recommend using the PullToRefresh component in this environment. If you must use it, please disable the default pull-down and elastic effects of the outer browser. , otherwise PullToRefresh and the browser's default behavior may be triggered at the same time, resulting in a poor user experience.

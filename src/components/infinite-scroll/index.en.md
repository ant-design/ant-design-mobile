# InfiniteScroll

Scrolling to the bottom of the list automatically loads more data.

## When to Use

When users want to see new data, they can slide up the page to automatically load the data.

When the `hasMore` prop is `true`, the infinite scroll component will call the defined `loadMore` function when the user page scrolls to the bottom `threshold` (default is 250px).

## Demos

<code src="./demos/demo1.tsx"></code>

## InfiniteScroll

### Props

| Name      | Description                                                                               | Type                                                                                             | Default               |
| --------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | --------------------- |
| children  | Rendering custom guide content                                                            | `React.ReactNode \| ((hasMore: boolean, failed: boolean, retry: () => void) => React.ReactNode)` | Default guidance tips |
| hasMore   | Whether there is more content or not                                                      | `boolean`                                                                                        | -                     |
| loadMore  | Callback to load more                                                                     | `(isRetry: boolean) => Promise<void>`                                                            | -                     |
| threshold | The threshold of the scroll bottoming distance that triggers the loading event, in pixels | `number`                                                                                         | `250`                 |

InfiniteScroll will automatically lock the `loadMore` function to avoid repeated requests, but the premise is that the `loadMore` function needs to return a correct Promise. The following are examples of correct and incorrect usage:

```js
function loadMore() { // wrong
  doRequest()
}

async function loadMore() { // wrong
  doRequest()
}

async function loadMore() { // ok
  await doRequest()
}

function loadMore() { // ok
  return doRequest()
}
```

### Customized Content

If necessary, `<InfiniteScroll>` allows custom display content, this content can contain any element, including svg and elements with css animation.

<code src="./demos/content.tsx"></code>

### Use with search

<code src="./demos/demo3.tsx"></code>

### Infinite virtualized List

An example of infinite virtualized list via using [react-virtualized](https://github.com/bvaughn/react-virtualized)

<code src="./demos/demo2.tsx"></code>

### Support click to retry when the request fails

<code src="./demos/demo4.tsx"></code>

## FAQ

### Does it support pulling down?

Pulling down is another component: [PullToRefresh](./pull-to-refresh).

### Why do I get an error when used with ahooks' `useDebounceFn` or `useThrottleFn`?

InfiniteScroll itself already contains the logic to prevent concurrent repeated requests, so please do not use it with `useDebounceFn` or `useThrottleFn`, there will be logical conflicts between them.

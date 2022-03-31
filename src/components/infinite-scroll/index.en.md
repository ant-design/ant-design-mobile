# InfiniteScroll

When the `hasMore` prop is `true`, the infinite scroll component will call the defined `loadMore` function when the user page scrolls to the bottom `threshold` (default is 250px).

<code src="./demos/demo1.tsx"></code>

### Props

| Name      | Description                                                                               | Type                  | Default |
| --------- | ----------------------------------------------------------------------------------------- | --------------------- | ------- |
| loadMore  | Callback to load more                                                                     | `() => Promise<void>` | -       |
| hasMore   | Whether there is more content or not                                                      | `boolean`             | -       |
| threshold | The threshold of the scroll bottoming distance that triggers the loading event, in pixels | `number`              | `250`   |

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

## FAQ

### Does it support pulling down?

Pulling down is another component: [PullToRefresh](./pull-to-refresh).

### Why do I get an error when used with ahooks' `useDebounceFn` or `useThrottleFn`?

InfiniteScroll itself already contains the logic to prevent concurrent repeated requests, so please do not use it with `useDebounceFn` or `useThrottleFn`, there will be logical conflicts between them.

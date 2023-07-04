# InfiniteScroll

Scrolling to the bottom of the list automatically loads more data.

## When to Use

When users want to see new data, they can slide up the page to automatically load the data.

When the `hasMore` prop is `true`, the infinite scroll component will call the defined `loadMore` function when the user page scrolls to the bottom `threshold` (default is 250px).

## Demos

<code src="./demos/demo1.tsx"></code>

## InfiniteScroll

### Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| children | Rendering custom guide content | `React.ReactNode \| ((hasMore: boolean, failed: boolean, retry: () => void) => React.ReactNode)` | Default guidance tips |
| hasMore | Whether there is more content or not | `boolean` | - |
| loadMore | Callback to load more | `(isRetry: boolean) => Promise<void>` | - |
| threshold | The threshold of the scroll bottoming distance that triggers the loading event, in pixels | `number` | `250` |

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

If necessary, `InfiniteScroll` allows custom display content, this content can contain any element, including svg and elements with css animation.

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

Pulling down is another component: [PullToRefresh](/components/pull-to-refresh).

### Why do I get an error when used with ahooks' `useDebounceFn` or `useThrottleFn`?

InfiniteScroll itself already contains the logic to prevent concurrent repeated requests, so please do not use it with `useDebounceFn` or `useThrottleFn`, there will be logical conflicts between them.

### Why does `InfiniteScroll` keep loading when switching from hide to display?

When using the `InfiniteScroll` component, it internally detects whether the component is visible. **When visible, `loadMore` will be called to load data**; **when invisible, `loadMore`** will not be called (this is necessary to avoid unnecessary data requests). And, **this checking mechanism, will happen on the first render of the component and every time it is re-rendered** to ensure that the data is loaded correctly.

But in some scenarios (for example, when used with the `Tabs` component), you may encounter the situation where the `InfiniteScroll` component keeps loading and no data is loaded, such as the following example:

```tsx
<Tabs>
  <Tabs.Tab title='水果' key='fruits'>菠萝</Tabs.Tab>
  <Tabs.Tab title='蔬菜' key='vegetables' forceRender>
    <InfiniteScroll
      hasMore={true}
      loadMore={() => {
        // When switching to this Tab, this function does not execute
      }}
    />
  </Tabs.Tab>
</Tabs>
```

Problem description: The `Tabs` component displays the content of the first `Tab` item by default, so the content of the second `Tab` item `InfiniteScroll` is not visible. But the second `Tab` has a `forceRender` property added, so its content is rendered even if it is not visible. When the `InfiniteScroll` component is rendered this time, since the component is not visible, the `loadMore` function will not be called, which is normal and as expected.

_However, when we switch to the second `Tab` to display the `InfiniteScroll` component, we find that the `InfiniteScroll` component does not call the `loadMore` function, which is different from what we expected. We hope that the `loadMore` function will be called at this time_.

Reason: When you click to switch the `Tab` item of the `Tabs` component, the highlight state of the `Tabs` component will be modified. At this time, the `Tabs` component will be re-rendered. However, it should be noted that **only the content of the `Tabs` component itself will be re-rendered, and the `InfiniteScroll` component is outside the `Tabs` component, not the `Tabs` component's own content**. So, when switching `Tab`, the `InfiniteScroll` component does not re-render, and it does not trigger its checking mechanism again.

Solution:

- 1: Remove the `forceRender` of the Tab where the `InfiniteScroll` component is located (the `InfiniteScroll` component is only rendered when the Tab is activated and displayed. At this time, the component is visible and `loadMore` will be called correctly to load data)
- 2: Use the `Tabs` component through the controlled component mode (when switching `Tab`, **update the state of the component where the `InfiniteScroll` component is located**, at this time, the `InfiniteScroll` component will be re-rendered, and then trigger the check mechanism again. Since the component is now visible, `loadMore` is called correctly to load the data), for example:

```jsx
const [activeKey, setActiveKey] = useState('fruits')

<Tabs activeKey={activeKey} onChange={setActiveKey}>
  ...
</Tabs>
```

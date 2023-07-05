# Switch

switch selector.

## When to Use

- When it is necessary to represent a switch state/switch between two states.
- The difference from checkbox is that switching switch will directly trigger state change, while checkbox is generally used for state marking and needs to cooperate with submit operation.

## Demos

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

## Switch

### Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| beforeChange（deprecated） | Execute before change （Deprecated, recommend using the `onChange` attribute.） | `(val: boolean) => Promise<void>` | - |
| checked | Specify whether it is currently opened | `boolean` | `false` |
| checkedText | Selected text | `ReactNode` | - |
| defaultChecked | Whether to open initially | `boolean` | `false` |
| disabled | Disabled status | `boolean` | `false` |
| loading | Loading status | `boolean` | `false` |
| onChange | The callback function when changing, when the Promise is returned, the loading status will be displayed automatically | `(val: boolean) => void \| Promise<void>` | - |
| uncheckedText | Non-selected text | `ReactNode` | - |

### CSS Variables

| Name            | Description  | Default                    |
| --------------- | ------------ | -------------------------- |
| --border-width  | Border width | `2px`                      |
| --checked-color | Filled color | `var(--adm-color-primary)` |
| --height        | Height       | `31px`                     |
| --width         | Width        | `51px`                     |

## FAQ

### How to handle exceptions in async `onChange`?

The `onChange` event supports returning a Promise, when the Promise starts, the Switch will automatically enter the loading state, and when the Promise completes or fails, the Switch will automatically exit the loading state. In general, this satisfies the needs of most projects.

But when Promise fails, Switch will not eat the error, but will re-throw the error object. This is the expected behavior. If you want to intercept some errors yourself and avoid them being thrown, you can use `try/ catch` wraps the processing logic in `onChange`, for example:

```tsx
async function onChange(val: boolean) {
  try {
    await doSomething();
  } catch (e) {
    // handle or ignore error
  }
}
```

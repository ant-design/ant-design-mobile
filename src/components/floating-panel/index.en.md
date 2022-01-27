# FloatingPanel

<code src="./demos/demo1.tsx"></code>

### Props

| Name           | Description                                                                                                      | Type                                           | Description |
| -------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | ----------- |
| anchors        | What height can be dragged to, the unit is `px`                                                                  | `number[]`                                     | -           |
| onHeightChange | Triggered when the height changes, the `animating` parameter indicates whether it is in the process of animation | `(height: number, animating: boolean) => void` |             |

### Ref

The FloatingPanel ref provides the `setHeight` method, you can use it to control the height of the `FloatingPanel` imperatively:

```ts
type FloatingPanelRef = {
  setHeight: (
    height: number,
    options?: {
      immediate?: boolean // whether to skip animation
    }
  ) => void
}
```

```jsx
<FloatingPanel ref={ref}>...</FloatingPanel>

ref.current.setHeight(100)
```

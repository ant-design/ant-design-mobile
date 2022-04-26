# FloatingPanel

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo3.tsx"></code>

<code src="./demos/demo2.tsx"></code>

### Props

| Name                    | Description                                                                                                      | Type                                           | Description |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | ----------- |
| anchors                 | What height can be dragged to, the unit is `px`                                                                  | `number[]`                                     | -           |
| onHeightChange          | Triggered when the height changes, the `animating` parameter indicates whether it is in the process of animation | `(height: number, animating: boolean) => void` |             |
| handleDraggingOfContent | Whether to handle the drag event of the panel content area. If disabled, only the head area can be dragged       | `boolean`                                      | `true`      |

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

### CSS Variables

| Name            | Description                           | Default | Global                         |
| --------------- | ------------------------------------- | ------- | ------------------------------ |
| --border-radius | the border radius of the Panel header | `8px`   |                                |
| --header-height | the height of the Panel header        | `28px`  |                                |
| --z-index       | z-index of the Panel                  | `900`   | `--adm-floating-panel-z-index` |

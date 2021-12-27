# Space

<code src="./demos/demo1.tsx"></code>

### Props

| Name      | Description                                                   | Type                                                                             | Default        |
| --------- | ------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------- |
| justify   | Align the items on the main axis.                             | `'start' \| 'end' \| 'center' \| 'between' \| 'around' \| 'evenly' \| 'stretch'` | -              |
| align     | Align the items on the cross axis.                            | `'start' \| 'end' \| 'center' \| 'baseline'`                                     | -              |
| direction | The spacing direction.                                        | `'vertical' \| 'horizontal'`                                                     | `'horizontal'` |
| wrap      | Should line break automatically, work only with `horizontal`. | `boolean`                                                                        | `false`        |
| block     | Should render as block element.                               | `boolean`                                                                        | `false`        |
| onClick   | The click event of the Space                                  | `(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void`                  | -              |

### CSS Variables

| Name             | Description                       | Default      |
| ---------------- | --------------------------------- | ------------ |
| --gap            | The gap between items.            | `8px`        |
| --gap-vertical   | The vertical gap between items.   | `var(--gap)` |
| --gap-horizontal | The horizontal gap between items. | `var(--gap)` |

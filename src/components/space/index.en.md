# Space

Keep the same width in the arrangement of elements.

## When to Use

Useful for multiple elements to maintain the same spacing horizontally or vertically.

## Demos

<code src="./demos/demo1.tsx"></code>

## Space

### Props

| Name      | Description                                                   | Type                                                                             | Default        |
| --------- | ------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------- |
| align     | Align the items on the cross axis.                            | `'start' \| 'end' \| 'center' \| 'baseline'`                                     | -              |
| block     | Should render as block element.                               | `boolean`                                                                        | `false`        |
| direction | The spacing direction.                                        | `'vertical' \| 'horizontal'`                                                     | `'horizontal'` |
| justify   | Align the items on the main axis.                             | `'start' \| 'end' \| 'center' \| 'between' \| 'around' \| 'evenly' \| 'stretch'` | -              |
| onClick   | The click event of the Space                                  | `(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void`                  | -              |
| wrap      | Should line break automatically, work only with `horizontal`. | `boolean`                                                                        | `false`        |

### CSS Variables

| Name             | Description                       | Default      |
| ---------------- | --------------------------------- | ------------ |
| --gap            | The gap between items.            | `8px`        |
| --gap-horizontal | The horizontal gap between items. | `var(--gap)` |
| --gap-vertical   | The vertical gap between items.   | `var(--gap)` |

# Grid

<code src="./demos/index.tsx"></code>

## Grid

### Props

| Name    | Description           | Type                                                       | Default |
| ------- | --------------------- | ---------------------------------------------------------- | ------- |
| columns | The number of columns | `number`                                                   | -       |
| gap     | Spacing between grids | `number \| string \| [number \| string, number \| string]` | `0`     |

### CSS Variables

| Name             | Description                       | Default      | Global |
| ---------------- | --------------------------------- | ------------ | ------ |
| --gap            | The gap between items.            | `0`          | -      |
| --gap-vertical   | The vertical gap between items.   | `var(--gap)` | -      |
| --gap-horizontal | The horizontal gap between items. | `var(--gap)` | -      |

## Grid.Item

### Props

| Name | Description | Type     | Default |
| ---- | ----------- | -------- | ------- |
| span | Span        | `number` | `1`     |

# Grid

Used for navigation of multiple sub-functions in the business.

## When to Use

It is used as a function entry in pages with strong recommendation properties, such as the home page.

## Demos

<code src="./demos/demo1.tsx"></code>

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
| --gap-horizontal | The horizontal gap between items. | `var(--gap)` | -      |
| --gap-vertical   | The vertical gap between items.   | `var(--gap)` | -      |

## Grid.Item

### Props

| Name    | Description      | Type                                                            | Default |
| ------- | ---------------- | --------------------------------------------------------------- | ------- |
| onClick | The click event. | `(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void` | -       |
| span    | Span             | `number`                                                        | `1`     |

## FAQ

The Grid component uses the CSS Grid feature, so the compatibility standard is iOS Safari >= 10.3 and Chrome >= 57.

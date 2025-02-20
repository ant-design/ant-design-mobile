# SwipeAction

Function extension for lists.

## When to Use

Swipe to reveal hidden function menus.

## Demos

<code src="./demos/demo1.tsx"></code>

## SwipeAction

### Props

| Name | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| closeOnAction | Whether to return to the position automatically when the operation button is clicked | `boolean` | `true` |  |
| closeOnTouchOutside | Whether to return to the position automatically when other areas is clicked | `boolean` | `true` |  |
| leftActions | List of operation buttons on the left | `Action[]` | `[]` |  |
| rightActions | List of operation buttons on the right | `Action[]` | `[]` |  |
| onAction | Triggered when operation button is clicked | `(action: Action, e: React.MouseEvent) => void` | - |  |
| stopPropagation | Stop the propagation of some events. | `PropagationEvent[]` | `[]` |  |
| onActionsReveal | Triggered when the operation button appears completely | `(side: 'left' \| 'right') => void` | - |  |
| onClose | Triggered when the slide bar returns to the position | `() => void` | - | 5.39.0 |

### Action

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| color | Color | `'light' \| 'weak' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| string` | `'light'` |
| key | The unique identification | `string \| number` | - |
| onClick | Trigger when clicked | `(e: React.MouseEvent) => void` | - |
| text | Text | `ReactNode` | - |

## Ref

| Name | Description | Type |
| --- | --- | --- |
| close | Let the slide bar return to the position | `() => void` |
| show | Slide out the operation button, the `side` parameter defaults to `right` | `(side?: 'left' \| 'right') => void` |

### CSS Variables

| Name         | Description      | Default   |
| ------------ | ---------------- | --------- |
| --background | background color | `#ffffff` |

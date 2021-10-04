# SwipeAction

<code src="./demos/demo1.tsx"></code>

## API

| Name             | Description                                                                          | Type                       | Default |
| ---------------- | ------------------------------------------------------------------------------------ | -------------------------- | ------- |
| rightActions     | list of operation buttons on the right                                               | `Action[]`                 | `[]`    |
| leftActions      | list of operation buttons on the left                                                | `Action[]`                 | `[]`    |
| onAction         | triggered when operation button is clicked                                           | `(action: Action) => void` | -       |
| closeOnTouchAway | whether to return to the position automatically when other areas is clicked          | `boolean`                  | `true`  |
| closeOnAction    | whether to return to the position automatically when the operation button is clicked | `boolean`                  | `true`  |

### Action

| Name    | Description               | Type                                                                             | Default   |
| ------- | ------------------------- | -------------------------------------------------------------------------------- | --------- |
| key     | the unique identification | `string \| number`                                                               | -         |
| text    | text                      | `ReactNode`                                                                      | -         |
| color   | color                     | `'light' \| 'weak' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| string` | `'light'` |
| onClick | trigger when clicked      | `(e: React.MouseEvent) => void`                                                  | -         |

## Ref

| Name  | Description                                                              | Type                                 |
| ----- | ------------------------------------------------------------------------ | ------------------------------------ |
| close | let the slide bar return to the position                                 | `() => void`                         |
| show  | slide out the operation button, the `side` parameter defaults to `right` | `(side?: 'left' \| 'right') => void` |

## CSS Variables

| Name         | Description      | Default   |
| ------------ | ---------------- | --------- |
| --background | background color | `#ffffff` |

# FloatingBubble

<code src="./demos/demo1.tsx"></code>

FloatingBubble is moveable in Y axis and is limited at the distance from the left or right side of the screen.

## Props

| Name     | Description | Type      | Default |
| -------- | ----------- | --------- | ------- |
| children | ----        | ReactNode | -----   |

## CSS Variables

| Name                      | Description                                         | Default |
| ------------------------- | --------------------------------------------------- | ------- |
| --initial-position-left   | Initial distance from the left side of the screen   | -       |
| --initial-position-right  | Initial distance from the right side of the screen  | -       |
| --initial-position-top    | Initial distance from the top side of the screen    | -       |
| --initial-position-bottom | Initial distance from the bottom side of the screen | -       |
| --edge-distance           | Minimum distance to the edge of the screen          | `0`     |
| --size                    | Size of the bubble.                                 | `48px`  |
| --z-index                 | z-index of the bubble.                              | `1`     |
| --border-radius           | border-radius of the bubble.                        | `50%`   |

You must either set `--initial-position-top` or `--initial-position-bottom`.
Also, you must either set `--initial-position-left` or `--initial-position-right`.

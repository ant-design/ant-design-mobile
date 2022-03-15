# FloatingBubble <Experimental></Experimental>

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

<code src="./demos/demo3.tsx"></code>

### Props

| Name     | Description                                                                                                                                                       | Type                           | Default |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ------- |
| children | Content of the bubble.                                                                                                                                            | ReactNode                      | -----   |
| axis     | The direction in which the drag can be performed, `'xy'` means free movement, `'lock'` means movement is only allowed in the direction in which the drag started. | `'x' \| 'y' \| 'xy' \| 'lock'` | `'y'`   |
| magnetic | Automatic magnetic attraction to the boundary.                                                                                                                    | `'x' \| 'y'`                   | -       |

### CSS Variables

| Name                      | Description                                         | Default                    |
| ------------------------- | --------------------------------------------------- | -------------------------- |
| --initial-position-left   | Initial distance from the left side of the screen   | -                          |
| --initial-position-right  | Initial distance from the right side of the screen  | -                          |
| --initial-position-top    | Initial distance from the top side of the screen    | -                          |
| --initial-position-bottom | Initial distance from the bottom side of the screen | -                          |
| --edge-distance           | Minimum distance to the edge of the screen          | `0`                        |
| --size                    | Size of the bubble.                                 | `48px`                     |
| --z-index                 | z-index of the bubble.                              | `1`                        |
| --border-radius           | border-radius of the bubble.                        | `50%`                      |
| --background              | background of the bubble.                           | `var(--adm-color-primary)` |

**You must either set `--initial-position-top` or `--initial-position-bottom`. Also, you must either set `--initial-position-left` or `--initial-position-right`.**

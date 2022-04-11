# PageIndicator

<code src="./demos/demo1.tsx"></code>

### Props

| Name      | Description                      | Type                         | Default        |
| --------- | -------------------------------- | ---------------------------- | -------------- |
| total     | Total page number                | `number`                     | -              |
| current   | Current page (counting from `0`) | `number`                     | -              |
| color     | Color                            | `'primary' \| 'white'`       | `'primary'`    |
| direction | Layout direction                 | `'horizontal' \| 'vertical'` | `'horizontal'` |

### CSS Variables

| Name                       | Description                               | Default                    |
| -------------------------- | ----------------------------------------- | -------------------------- |
| --dot-color                | dot color of the non-current pages        | `rgba(0, 0, 0, 0.2)`       |
| --active-dot-color         | dot color of the current page             | `var(--adm-color-primary)` |
| --dot-size                 | dot size of the non-current pages         | `3px`                      |
| --active-dot-size          | dot size of the current page              | `13px`                     |
| --dot-border-radius        | rounded corner size the non-current pages | `1px`                      |
| --active-dot-border-radius | rounded corner size the current page      | `var(--dot-border-radius)` |
| --dot-spacing              | space between dots of the page indicators | `3px`                      |

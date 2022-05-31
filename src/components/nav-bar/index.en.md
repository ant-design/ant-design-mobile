# NavBar

Provides global navigation for pages.

## When to Use

Need to display the title and action of the current page content.

## Demos

<code src="./demos/demo1.tsx"></code>

## NavBar

### Props

| Name      | Description                                                                                         | Type                   | Default |
| --------- | --------------------------------------------------------------------------------------------------- | ---------------------- | ------- |
| back      | The returned text of the area, if `null` returned, `backArrow` would not be rendered                | `string \| null`       | `''`    |
| backArrow | Whether to display the arrow of the return area, you can also pass in `ReactNode` for customization | `boolean \| ReactNode` | `true`  |
| children  | Title                                                                                               | `ReactNode`            | -       |
| left      | Content on the left, rendered on the right side of the return area                                  | `ReactNode`            | -       |
| onBack    | Callback after clicking the return area                                                             | `() => void`           | -       |
| right     | The content of the right side                                                                       | `ReactNode`            | -       |

### CSS Variables

| Name            | Description                     | Default |
| --------------- | ------------------------------- | ------- |
| --border-bottom | the border bottom of the NavBar | `none`  |
| --height        | the height of the Navbar        | `45px`  |

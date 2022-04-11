# NavBar

<code src="./demos/demo1.tsx"></code>

### Props

| Name      | Description                                                                                         | Type                   | Default |
| --------- | --------------------------------------------------------------------------------------------------- | ---------------------- | ------- |
| back      | The returned text of the area, if `null` returned, `backArrow` would not be rendered                | `string \| null`       | `''`    |
| backArrow | Whether to display the arrow of the return area, you can also pass in `ReactNode` for customization | `boolean \| ReactNode` | `true`  |
| onBack    | Callback after clicking the return area                                                             | `() => void`           | -       |
| left      | Content on the left, rendered on the right side of the return area                                  | `ReactNode`            | -       |
| children  | Title                                                                                               | `ReactNode`            | -       |
| right     | The content of the right side                                                                       | `ReactNode`            | -       |

### CSS Variables

| Name            | Description                     | Default |
| --------------- | ------------------------------- | ------- |
| --height        | the height of the Navbar        | `45px`  |
| --border-bottom | the border bottom of the NavBar | `none`  |

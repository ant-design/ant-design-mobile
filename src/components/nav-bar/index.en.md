# NavBar

<code src="./demos/index.tsx"></code>

## API

| Name      | Description                                                                                         | Type                   | Default |
| --------- | --------------------------------------------------------------------------------------------------- | ---------------------- | ------- |
| back      | the returned text of the area, if `null` returned, `backArrow` would not be rendered                | `string \| null`       | `''`    |
| backArrow | whether to display the arrow of the return area, you can also pass in `ReactNode` for customization | `boolean \| ReactNode` | `true`  |
| onBack    | callback after clicking the return area                                                             | `() => void`           | -       |
| left      | content on the left, rendered on the right side of the return area                                  | `ReactNode`            | -       |
| title     | title                                                                                               | `ReactNode`            | -       |
| right     | the content of the right side                                                                       | `ReactNode`            | -       |

## CSS Variables

| Name            | Description                     | Default |
| --------------- | ------------------------------- | ------- |
| --height        | the height of the Navbar        | `45px`  |
| --border-bottom | the border bottom of the NavBar | `none`  |

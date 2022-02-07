# Tag

<code src="./demos/demo1.tsx"></code>

### Props

| Name    | Description                   | Type                                                                     | Default     |
| ------- | ----------------------------- | ------------------------------------------------------------------------ | ----------- |
| color   | Label color                   | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| string` | `'default'` |
| fill    | Filled mode                   | `'solid' \| 'outline'`                                                   | `'solid'`   |
| round   | Whether it is rounded corners | `boolean`                                                                | `false`     |
| onClick | The click event               | `(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void`         | -           |

### CSS Variables

| Name               | Description                                 | Default                                                                                                          | Global                    |
| ------------------ | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------- |
| --text-color       | Text color of the tag                       | If `fill=solid`, default value is `#ffffff`. If `fill=outline`, default value is the color of the `color` prop.  | -                         |
| --background-color | Background color of the tag                 | If `fill=solid` , default value is the color of the `color` prop. If `fill=outline`, default value is `#ffffff`. | -                         |
| --border-color     | Border color of the tag                     | Color of the `color` prop.                                                                                       | -                         |
| --border-radius    | Border radius of the tag when `round=false` | `2px`                                                                                                            | `--adm-tag-border-radius` |

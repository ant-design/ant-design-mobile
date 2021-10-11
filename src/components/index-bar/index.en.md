# IndexBar

<code src="./demos/demo1.tsx"></code>
<code src="./demos/demo2.tsx"></code>

## API

### IndexBar

| Name            | Description                                                                                          | Type      | Default |
| --------------- | ---------------------------------------------------------------------------------------------------- | --------- | ------- |
| sticky          | Whether to turn on the anchor point automatic ceiling                                                | `boolean` | `true`  |
| stickyOffsetTop | The distance between the anchor point and the top when it is automatically ceiling, the unit is `px` | `number`  | `0`     |

### IndexBar Ref

| Name     | Description                          | Type                      |
| -------- | ------------------------------------ | ------------------------- |
| scrollTo | Scroll to the specified anchor point | `(index: string) => void` |

### IndexBar.Panel

| Name  | Description | Type     | Default                          |
| ----- | ----------- | -------- | -------------------------------- |
| index | Index       | `string` | -                                |
| title | Title       | `string` | `index` would be used by default |

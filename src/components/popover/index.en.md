# Popover

<code src="./demos/index.tsx"></code>

## Name

### Popover

| Name            | Description                                                                                  | Type                                                                                                                                                             | Default               |
| --------------- | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| children        | The element that triggered the popover                                                       | `React.ReactNode`                                                                                                                                                | -                     |
| placement       | the position of the Popover                                                                  | `'top' \| 'left' \| 'right' \| 'bottom' \| 'topLeft' \| 'topRight' \| 'bottomLeft' \| 'bottomRight' \| 'leftTop' \| 'leftBottom' \| 'rightTop' \| 'rightBottom'` | `'top'`               |
| defaultVisible  | whether to show or hide by default                                                           | `boolean`                                                                                                                                                        | `false`               |
| visible         | whether to display pop-up content in controlled mode                                         | `boolean`                                                                                                                                                        | -                     |
| onVisibleChange | callback when the visible prop is changed                                                    | `(visible: boolean) => void`                                                                                                                                     | -                     |
| trigger         | event to trigger                                                                             | `'click'`                                                                                                                                                        | -                     |
| getContainer    | the floating layer renders the parent node, which would be rendered on the `body` by default | `() => HTMLElement`                                                                                                                                              | `() => document.body` |
| destroyOnHide   | when hiding, whether to destroy the content of `tooltip`                                     | `boolean`                                                                                                                                                        | `false`               |
| content         | the content of the Popover                                                                   | `React.ReactNode`                                                                                                                                                | -                     |
| mode            | set bright color mode or black mode                                                          | `'light' \| 'dark'`                                                                                                                                              | `'light'`             |

### Popover.Menu

Except for `content`, all other attributes are inherited from `Popover`, the unique attributes are as follows:

| Name     | Description                                                | Type                     | Default |
| -------- | ---------------------------------------------------------- | ------------------------ | ------- |
| actions  | menu list, used when the pop-up content is a standard menu | `Action[]`               | -       |
| onAction | callback of the selected menum, when the menu list is used | `(item: Action) => void` | -       |

#### Action

| Name     | Description                                                | Type               | Default                  |
| -------- | ---------------------------------------------------------- | ------------------ | ------------------------ |
| text     | menu list, used when the pop-up content is a standard menu | `ReactNode`        | -                        |
| icon     | callback of the selected menu, when the menu list is used  | `ReactNode`        | `null`                   |
| key      | the unique identifier of the menu, the default is `index`  | `string \| number` | `actions` 数组的 `index` |
| disabled | whether disabled                                           | `boolean`          | `false`                  |

### Ref

| Name    | Description                      | Type         |
| ------- | -------------------------------- | ------------ |
| show    | show the Popover                 | `() => void` |
| hide    | hide the Popover                 | `() => void` |
| visible | whether the Popover is diplaying | `boolean`    |

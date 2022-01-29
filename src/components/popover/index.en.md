# Popover

## Popover

<code src="./demos/demo1.tsx"></code>

### Props

| Name            | Description                                                                                  | Type                                                                                                                                                             | Default               |
| --------------- | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| children        | The element that triggered the popover                                                       | `React.ReactElement`                                                                                                                                             | -                     |
| placement       | The position of the Popover                                                                  | `'top' \| 'left' \| 'right' \| 'bottom' \| 'topLeft' \| 'topRight' \| 'bottomLeft' \| 'bottomRight' \| 'leftTop' \| 'leftBottom' \| 'rightTop' \| 'rightBottom'` | `'top'`               |
| defaultVisible  | Whether to show or hide by default                                                           | `boolean`                                                                                                                                                        | `false`               |
| visible         | Whether to display pop-up content in controlled mode                                         | `boolean`                                                                                                                                                        | -                     |
| onVisibleChange | Callback when the visible prop is changed                                                    | `(visible: boolean) => void`                                                                                                                                     | -                     |
| trigger         | Event to trigger                                                                             | `'click'`                                                                                                                                                        | -                     |
| getContainer    | The floating layer renders the parent node, which would be rendered on the `body` by default | `() => HTMLElement`                                                                                                                                              | `() => document.body` |
| destroyOnHide   | When hiding, whether to destroy the content of `tooltip`                                     | `boolean`                                                                                                                                                        | `false`               |
| content         | The content of the Popover                                                                   | `React.ReactNode`                                                                                                                                                | -                     |
| mode            | Set bright color mode or black mode                                                          | `'light' \| 'dark'`                                                                                                                                              | `'light'`             |
| stopPropagation | Stop the propagation of some events.                                                         | `PropagationEvent[]`                                                                                                                                             | `['click']`           |

### CSS Variables

| Name      | Description                      | Default | Global                  |
| --------- | -------------------------------- | ------- | ----------------------- |
| --z-index | `z-index` of the popover element | `1030`  | `--adm-popover-z-index` |

### Ref

| Name    | Description                      | Type         |
| ------- | -------------------------------- | ------------ |
| show    | Show the Popover                 | `() => void` |
| hide    | Hide the Popover                 | `() => void` |
| visible | Whether the Popover is diplaying | `boolean`    |

## Popover.Menu

<code src="./demos/demo2.tsx"></code>

### Props

Except for `content`, all other attributes are inherited from `Popover`, the unique attributes are as follows:

| Name     | Description                                                | Type                     | Default |
| -------- | ---------------------------------------------------------- | ------------------------ | ------- |
| actions  | Menu list, used when the pop-up content is a standard menu | `Action[]`               | -       |
| onAction | Callback of the selected menum, when the menu list is used | `(item: Action) => void` | -       |

### Action

| Name     | Description                                                | Type               | Default                   |
| -------- | ---------------------------------------------------------- | ------------------ | ------------------------- |
| text     | Menu list, used when the pop-up content is a standard menu | `ReactNode`        | -                         |
| icon     | The icon of the menu item                                  | `ReactNode`        | `null`                    |
| key      | The unique identifier of the menu, the default is `index`  | `string \| number` | `actions` array's `index` |
| disabled | Whether disabled                                           | `boolean`          | `false`                   |

### CSS Variables

Same as Popover.

### Ref

Same as Popover.

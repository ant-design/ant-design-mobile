# Modal

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

<code src="./demos/demo3.tsx" debug></code>

## Modal

### Props

| Name              | Description                                                 | Type                                                       | Default     |
| ----------------- | ----------------------------------------------------------- | ---------------------------------------------------------- | ----------- |
| afterClose        | Callback after `Modal` is completely closed                 | `() => void`                                               | -           |
| afterShow         | Triggered after fully displayed                             | `() => void`                                               | -           |
| image             | The `url` of the picture                                    | `string`                                                   | -           |
| header            | The top area                                                | `React.ReactNode`                                          | -           |
| title             | The title of the Modal                                      | `React.ReactNode`                                          | -           |
| content           | The content of the Modal                                    | `React.ReactNode`                                          | -           |
| actions           | The list of the operation button                            | `Action[]`                                                 | `[]`        |
| onAction          | Triggered when the action button is clicked                 | `(action: Action, index: number) => void \| Promise<void>` | -           |
| closeOnAction     | Whether to close after clicking the operation button        | `boolean`                                                  | `false`     |
| onClose           | Triggered when closed                                       | `() => void`                                               | -           |
| closeOnMaskClick  | Whether to support clicking the mask to close the modal box | `boolean`                                                  | `false`     |
| visible           | To show or hide                                             | `boolean`                                                  | `false`     |
| getContainer      | The parent container of the custom modal                    | `HTMLElement \| (() => HTMLElement) \| null`               | `null`      |
| bodyStyle         | `Modal` content style                                       | `React.CSSProperties`                                      | -           |
| bodyClassName     | `Modal` content class name                                  | `string`                                                   | -           |
| maskStyle         | `Modal` mask style                                          | `React.CSSProperties`                                      | -           |
| maskClassName     | `Modal` mask class name                                     | `string`                                                   | -           |
| stopPropagation   | Stop the propagation of some events.                        | `PropagationEvent[]`                                       | `['click']` |
| showCloseButton   | Whether to show a close button on the top right corner      | `boolean`                                                  | `false`     |
| disableBodyScroll | Mask Whether to disable `body` scrolling                    | `boolean`                                                  | `true`      |

### Action

| Name      | Description                       | Type                          | Default |
| --------- | --------------------------------- | ----------------------------- | ------- |
| key       | The unique mark                   | `string \| number`            | -       |
| text      | The title                         | `string`                      | -       |
| disabled  | Whether disabled state or not     | `boolean`                     | `false` |
| danger    | Whether in dangerous state or not | `boolean`                     | `false` |
| primary   | Whether in primary state or not   | `boolean`                     | `false` |
| className | Class name of the action button   | `string`                      | -       |
| style     | Style of the action button        | `React.CSSProperties`         | -       |
| onClick   | Triggered on click                | `() => void \| Promise<void>` | -       |

## Imperative

You can use `Modal` in an imperative way:

### Modal.show

```ts | pure
const handler = Modal.show(props)
```

You can directly open the modal box by calling the `show` method on the `Modal`. The type of the `props` parameter is the same as the above table, but the `visible` prop is not supported.

When the modal box is closed, the component instance would be automatically destroyed.

The return value of the `show` method is a component controller, which contains the following properties:

| Name  | Description        | Type         | Default |
| ----- | ------------------ | ------------ | ------- |
| close | To close the modal | `() => void` | -       |

`show` is just a very basic method. In actual business, the following `alert` and `confirm` methods are more commonly used:

### Modal.alert

`alert` accepts the same parameters as `show`, but does not support the `closeOnAction` `actions` prop. Its return value is not a controller object, but `Promise<void>`.

In addition, it supports the following props:

| Name        | Description                                  | Type                          | Default |
| ----------- | -------------------------------------------- | ----------------------------- | ------- |
| confirmText | The content of the confirm button            | `ReactNode`                   | `'Ok'`  |
| onConfirm   | Triggered when the confirm button is clicked | `() => void \| Promise<void>` | -       |

### Modal.confirm

`confirm` accepts the same parameters as `show`, but does not support the `closeOnAction` `actions` prop. Its return value is not a controller object, but `Promise<boolean>`.

In addition, it supports the following props:

| Name        | Description                                  | Type                          | Default    |
| ----------- | -------------------------------------------- | ----------------------------- | ---------- |
| confirmText | The content of the confirm button            | `ReactNode`                   | `'Ok'`     |
| onConfirm   | Triggered when the confirm button is clicked | `() => void \| Promise<void>` | -          |
| cancelText  | The content of the cancel button             | `ReactNode`                   | `'Cancel'` |
| onCancel    | Triggered when the cancel button is clicked  | `() => void \| Promise<void>` | -          |

### Modal.clear

You can directly close all modals by calling the `clear` method on `Modal`. Usually, you can use it in router change event to close all modals automatically without using modal reference to close.

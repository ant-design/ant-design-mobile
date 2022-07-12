# Modal

It is used for notification of important information or feedback of operation, with a small number of options for users
to operate.

## When to Use

When users need to process transactions, but do not want to jump to pages to interrupt the workflow, you can use Modal
to open a floating layer in the middle of the current page to carry the corresponding operations.

## Demos

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

<code src="./demos/demo3.tsx" debug></code>

## Modal

### Props

| Name              | Description                                                 | Type                                                       | Default     |
| ----------------- | ----------------------------------------------------------- | ---------------------------------------------------------- | ----------- |
| actions           | The list of the operation button                            | `Action[]`                                                 | `[]`        |
| afterClose        | Callback after `Modal` is completely closed                 | `() => void`                                               | -           |
| afterShow         | Triggered after fully displayed                             | `() => void`                                               | -           |
| bodyClassName     | `Modal` content class name                                  | `string`                                                   | -           |
| bodyStyle         | `Modal` content style                                       | `React.CSSProperties`                                      | -           |
| closeOnAction     | Whether to close after clicking the operation button        | `boolean`                                                  | `false`     |
| closeOnMaskClick  | Whether to support clicking the mask to close the modal box | `boolean`                                                  | `false`     |
| content           | The content of the Modal                                    | `React.ReactNode`                                          | -           |
| destroyOnClose    | Unmount content when not visible                            | `boolean`                                                  | `false`     |
| disableBodyScroll | Mask Whether to disable `body` scrolling                    | `boolean`                                                  | `true`      |
| forceRender       | Whether to render the `DOM` structure when hidden           | `boolean`                                                  | `false`     |
| getContainer      | The parent container of the custom modal                    | `HTMLElement \| (() => HTMLElement) \| null`               | `null`      |
| header            | The top area                                                | `React.ReactNode`                                          | -           |
| image             | The `url` of the picture                                    | `string`                                                   | -           |
| maskClassName     | `Modal` mask class name                                     | `string`                                                   | -           |
| maskStyle         | `Modal` mask style                                          | `React.CSSProperties`                                      | -           |
| onAction          | Triggered when the action button is clicked                 | `(action: Action, index: number) => void \| Promise<void>` | -           |
| onClose           | Triggered when closed                                       | `() => void`                                               | -           |
| showCloseButton   | Whether to show a close button on the top right corner      | `boolean`                                                  | `false`     |
| stopPropagation   | Stop the propagation of some events.                        | `PropagationEvent[]`                                       | `['click']` |
| title             | The title of the Modal                                      | `React.ReactNode`                                          | -           |
| visible           | To show or hide                                             | `boolean`                                                  | `false`     |

### Action

| Name      | Description                       | Type                          | Default |
| --------- | --------------------------------- | ----------------------------- | ------- |
| className | Class name of the action button   | `string`                      | -       |
| danger    | Whether in dangerous state or not | `boolean`                     | `false` |
| disabled  | Whether disabled state or not     | `boolean`                     | `false` |
| key       | The unique mark                   | `string \| number`            | -       |
| onClick   | Triggered on click                | `() => void \| Promise<void>` | -       |
| primary   | Whether in primary state or not   | `boolean`                     | `false` |
| style     | Style of the action button        | `React.CSSProperties`         | -       |
| text      | The title                         | `React.ReactNode`             | -       |

## Imperative

You can use `Modal` in an imperative way:

### Modal.show

```ts | pure
const handler = Modal.show(props)
```

You can directly open the modal box by calling the `show` method on the `Modal`. The type of the `props` parameter is
the same as the above table, but the `visible` prop is not supported.

When the modal box is closed, the component instance would be automatically destroyed.

The return value of the `show` method is a component controller, which contains the following properties:

| Name  | Description        | Type         | Default |
| ----- | ------------------ | ------------ | ------- |
| close | To close the modal | `() => void` | -       |

`show` is just a very basic method. In actual business, the following `alert` and `confirm` methods are more commonly
used:

### Modal.alert

`alert` accepts the same parameters as `show`, but does not support the `closeOnAction` `actions` prop. Its return value
is not a controller object, but `Promise<void>`.

In addition, it supports the following props:

| Name        | Description                                  | Type                          | Default |
| ----------- | -------------------------------------------- | ----------------------------- | ------- |
| confirmText | The content of the confirm button            | `ReactNode`                   | `'Ok'`  |
| onConfirm   | Triggered when the confirm button is clicked | `() => void \| Promise<void>` | -       |

### Modal.confirm

`confirm` accepts the same parameters as `show`, but does not support the `closeOnAction` `actions` prop. Its return
value is not a controller object, but `Promise<boolean>`.

In addition, it supports the following props:

| Name        | Description                                  | Type                          | Default    |
| ----------- | -------------------------------------------- | ----------------------------- | ---------- |
| cancelText  | The content of the cancel button             | `ReactNode`                   | `'Cancel'` |
| confirmText | The content of the confirm button            | `ReactNode`                   | `'Ok'`     |
| onCancel    | Triggered when the cancel button is clicked  | `() => void \| Promise<void>` | -          |
| onConfirm   | Triggered when the confirm button is clicked | `() => void \| Promise<void>` | -          |

### Modal.clear

You can directly close all modals by calling the `clear` method on `Modal`. Usually, you can use it in router change
event to close all modals automatically without using modal reference to close.

## FAQ

### Are there any pop-up windows with no content, no buttons, and no margins?

Yes, you can directly use the lower-level [CenterPopup](/components/popup#centerpopup) component.

# Dialog

<code src="./demos/demo1.tsx"></code>

# API

## Dialog

| Name             | Description                                                                                                                   | Type                                                       | Default     |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ----------- |
| afterClose       | Callback after `Dialog` is completely closed                                                                                  | `() => void`                                               | -           |
| image            | The `url` of the picture                                                                                                      | `string`                                                   | -           |
| header           | The top area                                                                                                                  | `React.ReactNode`                                          | -           |
| title            | The title of the Dialog                                                                                                       | `React.ReactNode`                                          | -           |
| content          | The content of the Dialog                                                                                                     | `React.ReactNode`                                          | -           |
| actions          | The list of the operation button, a secondary array can be passed in to realize multiple buttons side by side in the same row | `(Action \| Action[])[]`                                   | `[]`        |
| onAction         | Triggered when the action button is clicked                                                                                   | `(action: Action, index: number) => void \| Promise<void>` | -           |
| closeOnAction    | Whether to close after clicking the operation button                                                                          | `boolean`                                                  | `false`     |
| onClose          | Triggered when closed                                                                                                         | `() => void`                                               | -           |
| closeOnMaskClick | Whether to support clicking the mask to close the dialog box                                                                  | `boolean`                                                  | `false`     |
| visible          | To show or hide                                                                                                               | `boolean`                                                  | `false`     |
| getContainer     | The parent container of the custom dialog                                                                                     | `HTMLElement \| (() => HTMLElement) \| null`               | `null`      |
| bodyStyle        | `Dialog` content style                                                                                                        | `React.CSSProperties`                                      | -           |
| bodyClassName    | `Dialog` content class name                                                                                                   | `string`                                                   | -           |
| maskStyle        | `Dialog` mask style                                                                                                           | `React.CSSProperties`                                      | -           |
| maskClassName    | `Dialog` mask class name                                                                                                      | `string`                                                   | -           |
| stopPropagation  | Stop the propagation of some events.                                                                                          | `PropagationEvent[]`                                       | `['click']` |

### Action

| Name      | Description                       | Type                          | Default |
| --------- | --------------------------------- | ----------------------------- | ------- |
| key       | The unique mark                   | `string \| number`            | -       |
| text      | The title                         | `string`                      | -       |
| disabled  | Whether disabled state or not     | `boolean`                     | `false` |
| danger    | Whether in dangerous state or not | `boolean`                     | `false` |
| bold      | Whether the text is bold          | `boolean`                     | `false` |
| className | Class name of the action button   | `string`                      | -       |
| style     | Style of the action button        | `React.CSSProperties`         | -       |
| onClick   | Triggered on click                | `() => void \| Promise<void>` | -       |

## Imperative

You can use `Dialog` in an imperative way:

### Dialog.show

```ts | pure
const handler = Dialog.show(props)
```

You can directly open the dialog box by calling the `show` method on the `Dialog`. The type of the `props` parameter is the same as the above table, but the `visible` prop is not supported.

When the dialog box is closed, the component instance would be automatically destroyed.

The return value of the `show` method is a component controller, which contains the following properties:

| Name  | Description         | Type         | Default |
| ----- | ------------------- | ------------ | ------- |
| close | To close the dialog | `() => void` | -       |

`show` is just a very basic method. In actual business, the following `alert` and `confirm` methods are more commonly used:

### Dialog.alert

`alert` accepts the same parameters as `show`, but does not support the `closeOnAction` `actions` prop. Its return value is not a controller object, but `Promise<void>`.

In addition, it supports the following props:

| Name        | Description                                  | Type                          | Default |
| ----------- | -------------------------------------------- | ----------------------------- | ------- |
| confirmText | The content of the confirm button            | `ReactNode`                   | `'Ok'`  |
| onConfirm   | Triggered when the confirm button is clicked | `() => void \| Promise<void>` | -       |

### Dialog.confirm

`confirm` accepts the same parameters as `show`, but does not support the `closeOnAction` `actions` prop. Its return value is not a controller object, but `Promise<boolean>`.

In addition, it supports the following props:

| Name        | Description                                  | Type                          | Default    |
| ----------- | -------------------------------------------- | ----------------------------- | ---------- |
| confirmText | The content of the confirm button            | `ReactNode`                   | `'Ok'`     |
| onConfirm   | Triggered when the confirm button is clicked | `() => void \| Promise<void>` | -          |
| cancelText  | The content of the cancel button             | `ReactNode`                   | `'Cancel'` |
| onCancel    | Triggered when the cancel button is clicked  | `() => void \| Promise<void>` | -          |

# Dialog

<code src="./demos/index.tsx"></code>

# API

## Dialog

| Name             | Description                                                                                                                   | Type                                                       | Default |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ------- |
| afterClose       | callback after `Dialog` is completely closed                                                                                  | `() => void`                                               | -       |
| image            | the `url` of the picture                                                                                                      | `string`                                                   | -       |
| header           | the top area                                                                                                                  | `React.ReactNode`                                          | -       |
| title            | the title of the Dialog                                                                                                       | `React.ReactNode`                                          | -       |
| content          | the content of the Dialog                                                                                                     | `React.ReactNode`                                          | -       |
| actions          | the list of the operation button, a secondary array can be passed in to realize multiple buttons side by side in the same row | `(Action \| Action[])[]`                                   | `[]`    |
| onAction         | triggered when the action button is clicked                                                                                   | `(action: Action, index: number) => void \| Promise<void>` | -       |
| closeOnAction    | whether to close after clicking the operation button                                                                          | `boolean`                                                  | `false` |
| onClose          | triggered when closed                                                                                                         | `() => void`                                               | -       |
| closeOnMaskClick | whether to support clicking the mask to close the dialog box                                                                  | `boolean`                                                  | `false` |
| visible          | to show or hide                                                                                                               | `boolean`                                                  | `false` |
| getContainer     | the parent container of the custom dialog                                                                                     | `HTMLElement \| (() => HTMLElement) \| null`               | `null`  |
| bodyStyle        | `Dialog` content style                                                                                                        | `React.CSSProperties`                                      | -       |
| bodyClassName    | `Dialog` content class name                                                                                                   | `string`                                                   | -       |
| maskStyle        | `Dialog` mask style                                                                                                           | `React.CSSProperties`                                      | -       |
| maskClassName    | `Dialog` mask class name                                                                                                      | `string`                                                   | -       |

### Action

| Name     | Description                       | Type                          | Default |
| -------- | --------------------------------- | ----------------------------- | ------- |
| key      | the unique mark                   | `string \| number`            | -       |
| text     | the title                         | `string`                      | -       |
| disabled | whether disabled state or not     | `boolean`                     | `false` |
| danger   | whether in dangerous state or not | `boolean`                     | `false` |
| bold     | whether the text is bold          | `boolean`                     | `false` |
| onClick  | triggered on click                | `() => void \| Promise<void>` | -       |

## Imperative

You can use `Dialog` in an imperative way:

### Dialog.show

```ts | pure
const handler = ActionSheet.show(props)
```

You can directly open the dialog box by calling the `show` method on the `Dialog`. The type of the `props` parameter is the same as the above table, but the `visible` prop is not supported.

When the dialog box is closed, the component instance would be automatically destroyed.

The return value of the `show` method is a component controller, which contains the following properties:

| Name  | Description         | Type         | Default |
| ----- | ------------------- | ------------ | ------- |
| close | to close the dialog | `() => void` | -       |

`show` is just a very basic method. In actual business, the following `alert` and `confirm` methods are more commonly used:

### Dialog.alert

`alert` accepts the same parameters as `show`, but does not support the `closeOnAction` `actions` prop. Its return value is not a controller object, but `Promise<void>`.

In addition, it supports the following props:

| Name        | Description                                  | Type                          | Default |
| ----------- | -------------------------------------------- | ----------------------------- | ------- |
| confirmText | the content of the confirm button            | `ReactNode`                   | `'Ok'`  |
| onConfirm   | triggered when the confirm button is clicked | `() => void \| Promise<void>` | -       |

### Dialog.confirm

`alert` accepts the same parameters as `show`, but does not support the `closeOnAction` `actions` prop. Its return value is not a controller object, but `Promise<void>`.

In addition, it supports the following props:

| Name        | Description                                  | Type                          | Default    |
| ----------- | -------------------------------------------- | ----------------------------- | ---------- |
| confirmText | the content of the confirm button            | `ReactNode`                   | `'Ok'`     |
| onConfirm   | triggered when the confirm button is clicked | `() => void \| Promise<void>` | -          |
| cancelText  | the content of the cancel button             | `ReactNode`                   | `'Cancel'` |
| onCancel    | triggered when the cancel button is clicked  | `() => void \| Promise<void>` | -          |

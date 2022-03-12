# ActionSheet

<code src="./demos/demo1.tsx"></code>

### Props

| Name             | Description                                                                                                                | Type                                       | Default         |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | --------------- |
| visible          | To show or hide the action sheet                                                                                           | `boolean`                                  | `false`         |
| actions          | The option list of the the action sheet                                                                                    | `Action[]`                                 | `[]`            |
| extra            | The extra area at the top of the the action sheet                                                                          | `ReactNode`                                | -               |
| cancelText       | The text of the cancel button , if it is null, the cancel button would not be displayed                                    | `ReactNode`                                | -               |
| onAction         | Triggered when an option is clicked, never triggered when the ActionSheet is disabled or loading                           | `(action: Action, index: number) => void`  | -               |
| onClose          | Triggered when closed                                                                                                      | `() => void`                               | -               |
| afterClose       | Triggered when completely closed                                                                                           | `() => void`                               | -               |
| onMaskClick      | Triggered when the mask layer is clicked                                                                                   | `() => void`                               | -               |
| closeOnAction    | Whether to close after clicking the option                                                                                 | `boolean`                                  | `false`         |
| closeOnMaskClick | Whether to close after clicking the mask layer                                                                             | `boolean`                                  | `true`          |
| getContainer     | Get the specified mounted `HTML` node, the default is `body`, if `null` returned, it would be rendered to the current node | `HTMLElement \| () => HTMLElement \| null` | `document.body` |
| safeArea         | Whether to enable safe area padding                                                                                        | `boolean`                                  | `true`          |
| popupClassName   | `ActionSheet` popup class name                                                                                             | `string`                                   | -               |
| popupStyle       | `ActionSheet` popup style                                                                                                  | `React.CSSProperties`                      | -               |

### Action

| Name        | Description                   | Type               | Default |
| ----------- | ----------------------------- | ------------------ | ------- |
| key         | The unique mark               | `string \| number` | -       |
| text        | Title                         | `ReactNode`        | -       |
| disabled    | Whether disabled or not       | `boolean`          | `false` |
| danger      | Whether dangerous or not      | `boolean`          | `false` |
| description | The description of the action | `ReactNode`        | -       |
| onClick     | Triggered on click            | `() => void`       | -       |

### Imperative

ActionSheet can be used in an imperative way :

```ts | pure
const handler = ActionSheet.show(props)
```

The ActionSheet can be directly opened by calling the `show` method on the `ActionSheet`. The types of the `props` parameter is the same as the above table, but the `visible` property is not supported.

When the ActionSheet is closed, the component instance would be automatically destroyed.

The return value of the `show` method is a component controller, which contains the following properties :

| Name  | Description              | Type         |
| ----- | ------------------------ | ------------ |
| close | To close the ActionSheet | `() => void` |

# ActionSheet

<code src="./demos/index.tsx"></code>

## API

| Prop             | Description                                                                                                                | Type                                       | Default         |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | --------------- |
| visible          | to show or hide the action sheet                                                                                           | `boolean`                                  | `false`         |
| actions          | the option list of the the action sheet                                                                                    | `Action[]`                                 | `[]`            |
| extra            | the extra area at the top of the the action sheet                                                                          | `ReactNode`                                | -               |
| cancelText       | the text of the cancel button , if it is null, the cancel button would not be displayed                                    | `string`                                   | -               |
| onAction         | triggered when an option is clicked, never triggered when the ActionSheet is disabled or loading                           | `(action: Action, index: number) => void`  | -               |
| onClose          | triggered when closed                                                                                                      | `() => void`                               | -               |
| afterClose       | triggered when completely closed                                                                                           | `() => void`                               | -               |
| onMaskClick      | triggered when the mask layer is clicked                                                                                   | `() => void`                               | -               |
| closeOnAction    | whether to close after clicking the option                                                                                 | `boolean`                                  | `false`         |
| closeOnMaskClick | whether to close after clicking the mask layer                                                                             | `boolean`                                  | `true`          |
| getContainer     | get the specified mounted `HTML` node, the default is `body`, if `null` returned, it would be rendered to the current node | `HTMLElement \| () => HTMLElement \| null` | `document.body` |

### Action

| Prop        | Description                   | Type               | Default |
| ----------- | ----------------------------- | ------------------ | ------- |
| key         | the unique mark               | `string \| number` | -       |
| text        | title                         | `string`           | -       |
| disabled    | whether disabled or not       | `boolean`          | `false` |
| danger      | whether dangerous or not      | `boolean`          | `false` |
| description | the description of the action | `string`           | -       |
| onClick     | triggered on click            | `() => void`       | -       |

### Imperative

ActionSheet can be used in an imperative way :

```ts | pure
const handler = ActionSheet.show(props)
```

The ActionSheet can be directly opened by calling the `show` method on the `ActionSheet`. The types of the `props` parameter is the same as the above table, but the `visible` property is not supported.

When the ActionSheet is closed, the component instance would be automatically destroyed.

The return value of the `show` method is a component controller, which contains the following properties :

| Prop  | Description              | Type         |
| ----- | ------------------------ | ------------ |
| close | to close the ActionSheet | `() => void` |

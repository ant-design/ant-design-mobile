# CheckList

<code src="./demos/demo1.tsx"></code>

The bottom layer of `CheckList` is implemented based on `List`, which is a list that can be checked.

## CheckList

### Props

| Name         | Description                                | Type                        | Default            |
| ------------ | ------------------------------------------ | --------------------------- | ------------------ |
| value        | The selected items                         | `string[]`                  | `[]`               |
| defaultValue | The default items                          | `string[]`                  | `[]`               |
| onChange     | Triggered when the option changes          | `(value: string[]) => void` | -                  |
| multiple     | Whether to allow multiple selection or not | `boolean`                   | `false`            |
| activeIcon   | The icon displayed when selected           | `ReactNode`                 | `<CheckOutline />` |
| readOnly     | Is the check list item readonly            | `boolean`                   | `false`            |
| disabled     | Is the check list disabled                 | `boolean`                   | `false`            |

In addition, the `mode` attribute of [List](./list) is also supported

### CSS Variables

The same as [List](./list/#list-2)

## CheckList.Item

### Props

| Name     | Description                     | Type      | Default |
| -------- | ------------------------------- | --------- | ------- |
| value    | The option value                | `string`  | -       |
| readOnly | Is the check list item readonly | `boolean` | `false` |
| disabled | Is the check list item disabled | `boolean` | `false` |

In addition, the following attributes of [List.Item](./list) are also supported: `title` `children` `description` `prefix` `onClick`

### CSS Variables

The same as [List.Item](./list/#listitem-1)

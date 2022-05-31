# CheckList

Checklist operation.

## When to Use

Select one or more of a set of list items.

The bottom layer of `CheckList` is implemented based on `List`, which is a list that can be checked.

## Demos

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

## CheckList

### Props

| Name         | Description                                | Type                        | Default            |
| ------------ | ------------------------------------------ | --------------------------- | ------------------ |
| activeIcon   | The icon displayed when selected           | `ReactNode`                 | `<CheckOutline />` |
| defaultValue | The default items                          | `string[]`                  | `[]`               |
| disabled     | Is the check list disabled                 | `boolean`                   | `false`            |
| multiple     | Whether to allow multiple selection or not | `boolean`                   | `false`            |
| onChange     | Triggered when the option changes          | `(value: string[]) => void` | -                  |
| readOnly     | Is the check list item readonly            | `boolean`                   | `false`            |
| value        | The selected items                         | `string[]`                  | `[]`               |

In addition, the `mode` attribute of [List](./list) is also supported

### CSS Variables

The same as [List](./list/#list-2)

## CheckList.Item

### Props

| Name     | Description                     | Type      | Default |
| -------- | ------------------------------- | --------- | ------- |
| disabled | Is the check list item disabled | `boolean` | `false` |
| readOnly | Is the check list item readonly | `boolean` | `false` |
| value    | The option value                | `string`  | -       |

In addition, the following attributes of [List.Item](./list) are also supported: `title` `children` `description` `prefix` `onClick`

### CSS Variables

The same as [List.Item](./list/#listitem-1)

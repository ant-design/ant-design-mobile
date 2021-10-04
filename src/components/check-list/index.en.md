# CheckList

<code src="./demos/demo1.tsx"></code>

The bottom layer of `CheckList` is implemented based on `List`, which is a list that can be checked.

## CheckList

### Props

| Name         | Description                                | Type                        | Default |
| ------------ | ------------------------------------------ | --------------------------- | ------- |
| value        | the selected items                         | `string[]`                  | `[]`    |
| defaultValue | the default items                          | `string[]`                  | `[]`    |
| onChange     | triggered when the option changes          | `(value: string[]) => void` | -       |
| multiple     | whether to allow multiple selection or not | `boolean`                   | `false` |

In addition, the `mode` attribute of [List](./list) is also supported

### CSS variables

The same as [List.Item](./list)

## CheckList.Item

### Props

| Name  | Description      | Type     | Default |
| ----- | ---------------- | -------- | ------- |
| value | the option value | `string` | -       |

In addition, the following attributes of [List.Item](./list) are also supported: `title` `children` `description` `prefix` `onClick`

### CSS variables

The same as [List.Item](./list)

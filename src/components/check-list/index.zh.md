# CheckList 可勾选列表

<code src="./demos/demo1.tsx"></code>

`CheckList` 底层是基于 `List` 实现的，是可以进行勾选的列表。

## CheckList

### 属性

| 属性         | 说明           | 类型                        | 默认值             |
| ------------ | -------------- | --------------------------- | ------------------ |
| value        | 选中项         | `string[]`                  | `[]`               |
| defaultValue | 默认项         | `string[]`                  | `[]`               |
| onChange     | 选项改变时触发 | `(value: string[]) => void` | -                  |
| multiple     | 是否允许多选   | `boolean`                   | `false`            |
| activeIcon   | 选中图标       | `ReactNode`                 | `<CheckOutline />` |
| readOnly     | 是否只读       | `boolean`                   | `false`            |
| disabled     | 是否禁用       | `boolean`                   | `false`            |

此外，还支持 [List](./list) 的 `mode` 属性

### CSS 变量

同 [List.Item](./list)

## CheckList.Item

### 属性

| 属性     | 说明     | 类型      | 默认值  |
| -------- | -------- | --------- | ------- |
| value    | 选项值   | `string`  | -       |
| readOnly | 是否只读 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |

此外，还支持 [List.Item](./list) 的以下属性：`title` `children` `description` `prefix` `onClick`

### CSS 变量

同 [List.Item](./list)

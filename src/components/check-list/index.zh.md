# CheckList 可勾选列表

列表的勾选操作。

## 何时使用

在一组列表项中选择一个或多个。

`CheckList` 底层是基于 `List` 实现的，是可以进行勾选的列表。

## 示例

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

## CheckList

### 属性

| 属性         | 说明           | 类型                        | 默认值             |
| ------------ | -------------- | --------------------------- | ------------------ |
| activeIcon   | 选中图标       | `ReactNode`                 | `<CheckOutline />` |
| defaultValue | 默认项         | `string[]`                  | `[]`               |
| disabled     | 是否禁用       | `boolean`                   | `false`            |
| multiple     | 是否允许多选   | `boolean`                   | `false`            |
| onChange     | 选项改变时触发 | `(value: string[]) => void` | -                  |
| readOnly     | 是否只读       | `boolean`                   | `false`            |
| value        | 选中项         | `string[]`                  | `[]`               |

此外，还支持 [List](./list) 的 `mode` 属性

### CSS 变量

同 [List](./list/#list-2)

## CheckList.Item

### 属性

| 属性     | 说明     | 类型      | 默认值  |
| -------- | -------- | --------- | ------- |
| disabled | 是否禁用 | `boolean` | `false` |
| readOnly | 是否只读 | `boolean` | `false` |
| value    | 选项值   | `string`  | -       |

此外，还支持 [List.Item](./list) 的以下属性：`title` `children` `description` `prefix` `onClick`

### CSS 变量

同 [List.Item](./list/#listitem-1)

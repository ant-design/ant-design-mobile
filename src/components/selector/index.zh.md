# Selector 选择组

<code src="./demos/demo1.tsx"></code>

## 属性

```ts | pure
type SelectorValue = string | number
```

## Selector

| 属性         | 说明             | 类型                                                                     | 默认值  |
| ------------ | ---------------- | ------------------------------------------------------------------------ | ------- |
| value        | 选中项           | `SelectorValue[]`                                                        | -       |
| defaultValue | 默认项           | `SelectorValue[]`                                                        | `[]`    |
| columns      | 行展示数         | `number`                                                                 | -       |
| options      | 可选项           | `SelectorOption[]`                                                       | -       |
| multiple     | 是否允许多选     | `boolean`                                                                | `false` |
| disabled     | 是否全局禁止选中 | `boolean`                                                                | `false` |
| onChange     | 选项改变时触发   | `(value: SelectorValue[], context: { items: SelectorOption[] }) => void` | -       |

## SelectorOption

| 属性     | 说明     | 类型            | 默认值  |
| -------- | -------- | --------------- | ------- |
| label    | 文字     | `string`        | -       |
| value    | 选项的值 | `SelectorValue` | -       |
| disabled | 是否禁用 | `boolean`       | `false` |

## 泛型

`Selector` 支持泛型，你可以通过下面的这种方式手动控制 `value` `onChange` 等属性的类型：

```tsx
<Selector<'a' | 'b' | number>
  options={options}
  defaultValue={['a']}
  onChange={arr => console.log(arr)}
/>
```

## CSS 变量

| 属性            | 说明         | 默认值    |
| --------------- | ------------ | --------- |
| --checked-color | 填充背景颜色 | `#e7f1ff` |

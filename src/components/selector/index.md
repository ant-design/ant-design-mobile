# Selector 选择组

<code src="./demos/demo1.tsx"></code>

## 属性

| 属性         | 说明             | 类型                      | 默认值 |
| ------------ | ---------------- | ------------------------- | ------ |
| value        | 选中项           | \(string \| number)[]     | []     |
| defaultValue | 默认项           | \(string \| number)[]     | []     |
| columns      | 行展示数         | number                    | -      |
| options      | 可选项           | SelectorOption[]          | -      |
| multiple     | 是否允许多选     | boolean                   | false  |
| disabled     | 是否全局禁止选中 | boolean                   | false  |
| onChange     | 选项改变时触发   | (value: string[]) => void | -      |

## SelectorOption

| 属性     | 说明     | 类型             | 默认值 |
| -------- | -------- | ---------------- | ------ |
| label    | 文字     | string           | -      |
| value    | 选项的值 | string \| number | -      |
| disabled | 是否禁用 | boolean          | false  |

## 范型

Selector 支持范型，你可以通过下面的这种方式手动控制 `value` `onChange` 等属性的类型：

```tsx
<Selector<'a' | 'b' | number>
  options={options}
  defaultValue={['a']}
  onChange={arr => console.log(arr)}
/>
```

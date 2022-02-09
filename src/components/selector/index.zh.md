# Selector 选择组

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

## Selector

### 属性

| 属性          | 说明             | 类型                                                                    | 默认值  |
| ------------- | ---------------- | ----------------------------------------------------------------------- | ------- |
| value         | 选中项           | `SelectorValue[]`                                                       | -       |
| defaultValue  | 默认项           | `SelectorValue[]`                                                       | `[]`    |
| columns       | 行展示数         | `number`                                                                | -       |
| options       | 可选项           | `SelectorOption[]`                                                      | -       |
| multiple      | 是否允许多选     | `boolean`                                                               | `false` |
| disabled      | 是否全局禁止选中 | `boolean`                                                               | `false` |
| onChange      | 选项改变时触发   | `(value: SelectorValue[], extend: { items: SelectorOption[] }) => void` | -       |
| showCheckMark | 是否显示对勾角标 | `boolean`                                                               | `true`  |

### CSS 变量

| 属性                 | 说明             | 默认值                     |
| -------------------- | ---------------- | -------------------------- |
| --color              | 背景色           | `#f5f5f5`                  |
| --checked-color      | 选中时的背景色   | `#e7f1ff`                  |
| --text-color         | 文字颜色         | `var(--adm-color-text)`    |
| --checked-text-color | 选中时的文字颜色 | `var(--adm-color-primary)` |
| --border             | 边框样式         | `none`                     |
| --checked-border     | 选中时的边框样式 | `none`                     |
| --border-radius      | 选项的圆角       | `2px`                      |
| --padding            | 选项的 padding   | `8px 16px`                 |

## 类型定义

### SelectorValue

```ts | pure
type SelectorValue = string | number
```

### SelectorOption

| 属性        | 说明     | 类型            | 默认值  |
| ----------- | -------- | --------------- | ------- |
| label       | 文字     | `ReactNode`     | -       |
| description | 描述     | `ReactNode`     | -       |
| value       | 选项的值 | `SelectorValue` | -       |
| disabled    | 是否禁用 | `boolean`       | `false` |

## 泛型

`Selector` 支持泛型，你可以通过下面的这种方式手动控制 `value` `onChange` 等属性的类型：

```tsx
<Selector<'a' | 'b' | number>
  options={options}
  defaultValue={['a']}
  onChange={arr => console.log(arr)}
/>
```

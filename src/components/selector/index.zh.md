# Selector 选择组

 在一组选项中选择一个或多个。

## 何时使用

提供多个选项供用户选择，一般在筛选和表单中使用。

## 示例

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

## Selector

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| columns | 列数（注意 `grid` 布局在 IOS 9 下不支持） | `number` | - |
| defaultValue | 默认项 | `SelectorValue[]` | `[]` |
| disabled | 是否全部禁止选中 | `boolean` | `false` |
| multiple | 是否允许多选 | `boolean` | `false` |
| onChange | 选项改变时触发 | `(value: SelectorValue[], extend: { items: SelectorOption[] }) => void` | - |
| options | 可选项 | `SelectorOption[]` | - |
| showCheckMark | 是否显示对勾角标 | `boolean` | `true` |
| value | 选中项 | `SelectorValue[]` | - |

### CSS 变量

| 属性 | 说明 | 默认值 |
| --- | --- | --- |
| --border | 边框样式 | `none` |
| --border-radius | 选项的圆角 | `2px` |
| --checked-border | 选中时的边框样式 | `none` |
| --checked-color | 选中时的背景色 | `var(--adm-color-wathet)` |
| --checked-text-color | 选中时的文字颜色 | `var(--adm-color-primary)` |
| --color | 背景色 | `#f5f5f5` |
| --padding | 选项的 padding | `8px 16px` |
| --text-color | 文字颜色 | `var(--adm-color-text)` |
| --gap | 间距大小，仅在 `columns` 存在时生效 | `8px` |
| --gap-horizontal | 水平方向的间距大小，，仅在 `columns` 存在时生效 | `var(--gap)` |
| --gap-vertical | 垂直方向的间距大小，，仅在 `columns` 存在时生效 | `var(--gap)` |

## 类型定义

### SelectorValue

```ts | pure
type SelectorValue = string | number
```

### SelectorOption

| 属性        | 说明     | 类型            | 默认值  |
| ----------- | -------- | --------------- | ------- |
| description | 描述     | `ReactNode`     | -       |
| disabled    | 是否禁用 | `boolean`       | `false` |
| label       | 文字     | `ReactNode`     | -       |
| value       | 选项的值 | `SelectorValue` | -       |

## 泛型

`Selector` 支持泛型，你可以通过下面的这种方式手动控制 `value` `onChange` 等属性的类型：

```tsx
<Selector<'a' | 'b' | number>
  options={options}
  defaultValue={['a']}
  onChange={arr => console.log(arr)}
/>
```

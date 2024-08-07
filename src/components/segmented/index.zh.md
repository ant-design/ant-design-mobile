# Segmented 分段控制器

分段控制器。自 `antd-mobile@5.38.0` 版本开始提供该组件。

## 何时使用

- 用于展示多个选项并允许用户选择其中单个选项；
- 当切换选中选项时，关联区域的内容会发生变化。

## 示例

<code src="./demos/demo1.tsx"></code>

## Segmented

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| block | 将宽度调整为父元素宽度的选项 | boolean | false |
| defaultValue | 默认选中的值 | string \| number |  |
| disabled | 是否禁用 | boolean | false |
| onChange | 选项变化时的回调函数 | function(value: string \| number) |  |
| options | 数据化配置选项内容 | string\[] \| number\[] \| SegmentedItemType\[] | [] |
| value | 当前选中的值 | string \| number |  |

### SegmentedItemType

| 属性      | 描述             | 类型             | 默认值 |
| --------- | ---------------- | ---------------- | ------ |
| label     | 分段项的显示文本 | ReactNode        | -      |
| value     | 分段项的值       | string \| number | -      |
| icon      | 分段项的显示图标 | ReactNode        | -      |
| disabled  | 分段项的禁用状态 | boolean          | false  |
| className | 自定义类名       | string           | -      |

### CSS 变量

| 属性 | 说明 | 默认值 |
| --- | --- | --- |
| --segmented-background | 背景色 | `var(--adm-color-fill-content)` |
| --segmented-item-color | 分段项的文本颜色 | `var(--adm-color-text-secondary)` |
| --segmented-item-selected-background | 被选中分段的背景色 | `var(--adm-color-background)` |
| --segmented-item-selected-color | 被选中分段项的文本颜色 | `var(--adm-color-text)` |
| --segmented-item-disabled-color | 禁用分段项的文本颜色 | `var(--adm-color-weak)` |

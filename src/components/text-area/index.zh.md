# TextArea 文本域

通过键盘输入内容，是最基础的表单域包装。

## 何时使用

需要折行的长文本输入。

## 示例

<code src="./demos/demo1.tsx"></code>

## TextArea

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoSize | 自适应内容高度 | `boolean \| { minRows?: number, maxRows?: number }` | `false` |
| clearable | 是否启用清除图标，点击清除图标后会清空输入框 | `boolean` | `false` |
| clearIcon | 自定义清除图标 | `ReactNode` | `<CloseCircleFill />` |
| defaultValue | 默认值 | `string` | - |
| id | `textarea` 元素的 `id`，常用来配合 `label` 使用 | `string` | - |
| maxLength | 最大字符数 | `number` | - |
| onChange | 文本域内容变化时触发 | `(value: string) => void` | - |
| onClear | 点击清除按钮后触发 | `() => void` | - |
| placeholder | 提示文本 | `string` | - |
| rows | 行数 | `number` | `2` |
| showCount | 显示字数，支持自定义渲染 | `boolean \| ((length: number, maxLength?: number) => ReactNode)` | `false` |
| value | 输入值 | `string` | - |

此外还支持以下原生属性：`autoComplete` `autoFocus` `disabled` `readOnly` `onFocus` `onBlur` `onCompositionStart` `onCompositionEnd` `onClick` `onKeyDown` `enterKeyHint`

#### 为什么没有 onlyShowClearWhenFocus 属性？

TextArea 组件的 clearable 功能已实现类似行为：

- 在非 autoSize 场景下，输入框有内容且聚焦时，清除图标才会显示；
- 在 autoSize 场景下，为了防止清除图标出现/消失导致输入区域宽度变化进而引发高度抖动，会始终预留清除图标的空间。

### CSS 变量

| 属性                | 说明                   | 默认值                   |
| ------------------- | ---------------------- | ------------------------ |
| --color             | 文字颜色               | `var(--adm-color-text)`  |
| --count-text-align  | 统计文字对齐方式       | `right`                  |
| --disabled-color    | 禁用状态下的文字颜色   | `var(--adm-color-weak)`  |
| --font-size         | 字号                   | `17px`                   |
| --placeholder-color | `placeholder` 文字颜色 | `var(--adm-color-light)` |
| --text-align        | 文字对齐方式           | `left`                   |

### Ref

| 属性          | 说明                | 类型                            |
| ------------- | ------------------- | ------------------------------- |
| blur          | 让输入框失去焦点    | `() => void`                    |
| clear         | 清空输入内容        | `() => void`                    |
| focus         | 让输入框获得焦点    | `() => void`                    |
| nativeElement | 原始 text-area 元素 | `HTMLTextAreaElement` \| `null` |

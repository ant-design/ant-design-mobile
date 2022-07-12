# SwipeAction 滑动操作

列表的功能扩展。

## 何时使用

通过滑动操作来展示隐藏的功能菜单。

## 示例

<code src="./demos/demo1.tsx"></code>

## SwipeAction

### 属性

| 属性                | 说明                         | 类型                                            | 默认值 |
| ------------------- | ---------------------------- | ----------------------------------------------- | ------ |
| closeOnAction       | 是否在点击操作按钮时自动归位 | `boolean`                                       | `true` |
| closeOnTouchOutside | 是否在点击其他区域时自动归位 | `boolean`                                       | `true` |
| leftActions         | 左侧的操作按钮列表           | `Action[]`                                      | `[]`   |
| onAction            | 点击操作按钮时触发           | `(action: Action, e: React.MouseEvent) => void` | -      |
| rightActions        | 右侧的操作按钮列表           | `Action[]`                                      | `[]`   |
| stopPropagation     | 阻止某些事件的冒泡           | `PropagationEven[]`                             | `[]`   |

### Action

| 属性    | 说明       | 类型                                                                             | 默认值    |
| ------- | ---------- | -------------------------------------------------------------------------------- | --------- |
| color   | 颜色       | `'light' \| 'weak' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| string` | `'light'` |
| key     | 唯一标识   | `string \| number`                                                               | -         |
| onClick | 点击时触发 | `(e: React.MouseEvent) => void`                                                  | -         |
| text    | 文字       | `ReactNode`                                                                      | -         |

## Ref

| 属性  | 说明                                      | 类型                                 |
| ----- | ----------------------------------------- | ------------------------------------ |
| close | 让滑动条归位                              | `() => void`                         |
| show  | 滑动出操作按钮，`side` 参数默认为 `right` | `(side?: 'left' \| 'right') => void` |

### CSS 变量

| 属性         | 说明     | 默认值    |
| ------------ | -------- | --------- |
| --background | 背景颜色 | `#ffffff` |

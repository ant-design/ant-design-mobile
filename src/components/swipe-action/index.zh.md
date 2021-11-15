# SwipeAction 滑动操作

<code src="./demos/demo1.tsx"></code>

## 属性

| 属性                | 说明                         | 类型                       | 默认值 |
| ------------------- | ---------------------------- | -------------------------- | ------ |
| rightActions        | 右侧的操作按钮列表           | `Action[]`                 | `[]`   |
| leftActions         | 左侧的操作按钮列表           | `Action[]`                 | `[]`   |
| onAction            | 点击操作按钮时触发           | `(action: Action) => void` | -      |
| closeOnTouchOutside | 是否在点击其他区域时自动归位 | `boolean`                  | `true` |
| closeOnAction       | 是否在点击操作按钮时自动归位 | `boolean`                  | `true` |

### Action

| 属性    | 说明       | 类型                                                                             | 默认值    |
| ------- | ---------- | -------------------------------------------------------------------------------- | --------- |
| key     | 唯一标识   | `string \| number`                                                               | -         |
| text    | 文字       | `ReactNode`                                                                      | -         |
| color   | 颜色       | `'light' \| 'weak' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| string` | `'light'` |
| onClick | 点击时触发 | `(e: React.MouseEvent) => void`                                                  | -         |

## Ref

| 属性  | 说明                                      | 类型                                 |
| ----- | ----------------------------------------- | ------------------------------------ |
| close | 让滑动条归位                              | `() => void`                         |
| show  | 滑动出操作按钮，`side` 参数默认为 `right` | `(side?: 'left' \| 'right') => void` |

## CSS 变量

| 属性         | 说明     | 默认值    |
| ------------ | -------- | --------- |
| --background | 背景颜色 | `#ffffff` |

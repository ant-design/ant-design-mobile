# Result 结果

对前一步操作的结果进行反馈。

## 何时使用

当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。

## 示例

<code src="./demos/demo1.tsx"></code>

## Result

### 属性

| 属性                   | 说明                                                        | 类型                                                                                | 默认值   |
| ---------------------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------------- | -------- |
| description            | 描述                                                        | `ReactNode`                                                                         | -        |
| icon                   | 自定义 `icon`                                               | `ReactNode`                                                                         | -        |
| status                 | 状态类型                                                    | `'success' \| 'error' \| 'info' \| 'waiting' \| 'warning'`                          | `'info'` |
| title                  | 标题                                                        | `ReactNode`                                                                         | -        |
| details                | 详细信息，超过三条自动折叠                                  | `ResultPageDetail[]`                                                                | -        |
| children               | 内容，只支持传入 Card 组件                                  | `Card`                                                                              | -        |
| primaryButtonValue     | 主要操作按钮的文字，为 undefined、null 或空字符时不显示按钮 | `ReactNode`                                                                         | -        |
| onPrimaryButtonClick   | 点击主要操作按钮后的事件                                    | `(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void \| Promise<void>` | -        |
| secondaryButtonValue   | 辅助操作按钮的文字，为 undefined、null 或空字符时不显示按钮 | `ReactNode`                                                                         | -        |
| onSecondaryButtonClick | 点击辅助操作按钮后的事件                                    | `(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void \|Promise<void>`  | -        |

### ResultPageDetail 类型

| 属性  | 说明         | 类型        | 默认值 |
| ----- | ------------ | ----------- | ------ |
| label | 描述内容     | `ReactNode` | -      |
| value | 描述内容标识 | `ReactNode` |
| major | 字体是否加粗 | `Boolean`   |

### Css 变量

| 属性 | 说明 | 默认值 |
| ---- | ---- | | ------ |
| --background-color | 背景颜色 | `var(--adm-color-primary)` |
| --description-color | 描述文字的颜色 | `#84b9ff` |

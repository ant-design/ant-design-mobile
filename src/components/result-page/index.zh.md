# ResultPage 结果页面

以页面的形式对前一步操作结果进行反馈

## 何时使用

当有非常重要的操作需告知用户处理结果，且反馈内容较为复杂时使用。

## 示例

### 基础使用

<code src="./demos/demo1.tsx"></code>

### 展示详细数据

超过三行会自动折叠
<code src="./demos/demo2.tsx"></code>

### 配合卡片使用

搭配 [Card](/zh/components/card) 组件使用。如果 `children` 传入的内容不是 `Card`，将会在开发环境中收到 `Error` 提示
<code src="./demos/demo3.tsx"></code>

### 底部按钮

<code src="./demos/demo4.tsx"></code>

### 自定义

<code src="./demos/demo5.tsx"></code>

## ResultPage

### 属性

```typescript | pure
interface ResultPageDetail {
  label: ReactNode;
  value: ReactNode;
  major: boolean; // `major` 字段为 `true` 时，文字会加粗。
}

type ResultPageDetails = ResultPageDetail[]
```

| 属性                   | 说明                                                                                     | 类型                                                                                | 默认值   |
| ---------------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | -------- |
| children               | 页面内容，推荐只传入 [Card](/zh/components/card) 组件。[具体使用参考此处](#配合卡片使用) | [Card](/zh/components/card)                                                         | -        |
| description            | 描述                                                                                     | `ReactNode`                                                                         | -        |
| details                | 详细信息，超过三条自动折叠                                                               | `ResultPageDetail[]`                                                                | -        |
| icon                   | 自定义 `icon`                                                                            | `ReactNode`                                                                         | -        |
| onPrimaryButtonClick   | 点击主要操作按钮后的事件                                                                 | `(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void \| Promise<void>` | -        |
| onSecondaryButtonClick | 点击辅助操作按钮后的事件                                                                 | `(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void \|Promise<void>`  | -        |
| primaryButtonValue     | 主要操作按钮的文字，为`undefined`、`null`或空字符时不显示按钮                            | `ReactNode`                                                                         | -        |
| secondaryButtonValue   | 辅助操作按钮的文字，为`undefined`、`null`或空字符时不显示按钮                            | `ReactNode`                                                                         | -        |
| status                 | 状态类型                                                                                 | `'success' \| 'error' \| 'info' \| 'waiting' \| 'warning' `                         | `'info'` |
| title                  | 标题                                                                                     | `ReactNode`                                                                         | -        |

### CSS 变量

| 属性                    | 说明         | 默认值                     |
| ----------------------- | ------------ | -------------------------- |
| --head-background-color | 顶部背景颜色 | `var(--adm-color-primary)` |

# Result 结果

对前一步操作的结果进行反馈。

## 何时使用

当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。

<code src="./demos/demo1.tsx"></code>

### 属性

| 属性        | 说明          | 类型                                                       | 默认值 |
| ----------- | ------------- | ---------------------------------------------------------- | ------ |
| status      | 状态类型      | `'success' \| 'error' \| 'info' \| 'waiting' \| 'warning'` | -      |
| title       | 标题          | `ReactNode`                                                | -      |
| description | 描述          | `ReactNode`                                                | ''     |
| icon        | 自定义 `icon` | `ReactNode`                                                | -      |

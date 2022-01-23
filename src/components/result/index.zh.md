# Result 结果

<code src="./demos/demo1.tsx"></code>

# API

| 属性        | 说明          | 类型                                                       | 默认值 |
| ----------- | ------------- | ---------------------------------------------------------- | ------ |
| status      | 状态类型      | `'success' \| 'error' \| 'info' \| 'waiting' \| 'warning'` | -      |
| title       | 标题          | `string`                                                   | -      |
| description | 描述          | `string`                                                   | ''     |
| icon        | 自定义 `icon` | `ReactNode`                                                | -      |

## CSS 变量

| 属性             | 说明         | 默认值              |
| ---------------- | ------------ | ------------------- |
| --bg-color       | 背景颜色     | `--adm-color-white` |
| --color          | 标题文字颜色 | `--adm-color-text`  |
| --adm-color-weak | 描述文字颜色 | `--adm-color-weak`  |

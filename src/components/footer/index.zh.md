# Footer 页脚

## 何时使用

适用于页面底部信息描述。

## 示例

<code src="./demos/demo1.tsx"></code>

## Footer

### 属性

| 属性       | 说明                                                         | 类型                                      | 默认值 |
| ---------- | ------------------------------------------------------------ | ----------------------------------------- | ------ |
| label      | 顶部内容                                                     | `ReactNode`                               | -      |
| links      | 链接内容，只允许有一行内容，如果内容超出宽度，会自动截取内容 | `ReactNode[]`                             | -      |
| content    | 主要内容                                                     | `ReactNode`                               | -      |
| chips      | 底部标签，只允许有一行内容，如果内容超出宽度，会自动截取内容 | `ChipItem[]`                              | -      |
| onTagClick | 点击底部标签触发，仅在标签`type`为`link`生效                 | `(item: ChipItem, index: number) => void` | -      |

### ChipItem

| 属性     | 说明     | 类型                                                                     | 默认值  |
| -------- | -------- | ------------------------------------------------------------------------ | ------- |
| text     | 标签内容 | `ReactNode`                                                              | -       |
| type     | 标签类型 | `plain` \| `link`, `plain`为纯展示，`link`为可点击                       | `plain` |
| tagProps | 标签属性 | 同[Tag 属性](http://localhost:8000/zh/components/tag#%E5%B1%9E%E6%80%A7) | -       |

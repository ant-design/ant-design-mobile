# Footer 页脚

## 何时使用

适用于页面底部信息描述。

## 示例

<code src="./demos/demo1.tsx"></code>

## Footer

### 属性

| 属性        | 说明                                             | 类型                                      | 默认值 |
| ----------- | ------------------------------------------------ | ----------------------------------------- | ------ |
| label       | 带分割线的顶部内容                               | `string \| ReactNode`                     | -      |
| links       | 链接内容                                         | `LinkItem[]`                              | -      |
| content     | 普通的内容部分                                   | `string \| ReactNode`                     | -      |
| chips       | 底部标签                                         | `ChipItem[]`                              | -      |
| onChipClick | 点击底部标签触发，仅在标签 `type` 为 `link` 生效 | `(item: ChipItem, index: number) => void` | -      |
| onLinkClick | 点击链接触发事件，拦截 a 标签的 href 跳转        | `(item: LinkItem, index: number) => void` | -      |

### ChipItem

| 属性 | 说明                                        | 类型                  | 默认值    |
| ---- | ------------------------------------------- | --------------------- | --------- |
| text | 标签内容                                    | `string \| ReactNode` | -         |
| type | 标签类型，`plain` 为纯展示，`link` 为可点击 | `'plain' \| 'link'`   | `'plain'` |

### LinkItem

| 属性 | 说明        | 类型     | 默认值 |
| ---- | ----------- | -------- | ------ |
| text | 链接的文字  | `string` | -      |
| href | 链接的 href | `string` | -      |

### CSS 变量

| 属性               | 说明   | 默认值                        |
| ------------------ | ------ | ----------------------------- |
| --background-color | 背景色 | `var(--adm-color-background)` |

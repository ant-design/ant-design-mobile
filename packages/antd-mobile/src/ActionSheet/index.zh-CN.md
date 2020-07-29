---
title: 底部面板
nav:
  title: 组件
  path: /components
  order: 1
---

### DEMO

<code src="./demo/basic.tsx" />

### STANDARD

<code src="./demo/standard.tsx" />

### API
`ActionSheet.show(options, callback)`

#### options
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | React.ReactNode | - |
| items | 选项列表 | (string|{value?: string,warn: boolean})[] | - |
| maskClosable | 点击蒙层能不能关闭 | boolean | false  |

#### callback 参数
| Properties | Description | Type | Default |
| --- | --- | --- | --- |
| index | 被点击的按钮的索引，从0开始。点击取消或蒙层时返回 -1 | number | - |

#### 支持 promise
即支持 `ActionSheet.show(options).then(cb)`


### standard
`ActionSheet.standard(standardOptions): {close, prev, next}`

#### standardOptions
| Properties | Description | Type | Default |
| --- | --- | --- | --- |
| title | 标题 | React.ReactNode | - |
| maskClosable | 点击蒙层能不能关闭 | boolean | false  |
| content | 自定义面板内容，如果是数组，则是分步模式 | React.ReactNode \| React.ReactNode[] | false  |
| onClose | 关闭回调 | () => void | - |

#### return
| Properties | Description | Type | Default |
| --- | --- | --- | --- |
| prev | 分步模式有效，调用触发上一步 | () => void | - |
| next | 分步模式有效，调用触发下一步 | () => void | - |
| close | 调用关闭面板 | () => void | - |

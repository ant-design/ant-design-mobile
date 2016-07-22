---
category: Components
type: Components
chinese: 分页器
english: Pagination
---


### 定义／Definition
采用分页的形式分隔长列表

### 规则 / Rule
每次只加载一个页面


## API

### Pagination
| 参数      | 说明                                     | 类型       |  可选值 |默认值 |
|-----------|------------------------------------------|------------|-------|--------|
|  mode  | 形态 | string | `button` or `number` or `pointer` | `button`  |
|  pointerSpace  | 大小 | string | `small` or `large` | `small`  |
|  showNumber  | 是否显示数值 | boolean | true or false | true  |
|  size  | button形态大小 | boolean | true or false | true  |
|  disabled  | 禁用状态 | boolean | true or false | false  |
|  prevText  | prev文字 | string or React.Element | | `Prev`  |
|  nextText  | next文字 | string or React.Element |  | `Next`  |
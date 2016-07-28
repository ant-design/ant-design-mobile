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
|  mode  | 形态 | string | `button` or `number` or `point` | `button`  |
|  current  | 当前索引 | number |   |  无  |
|  total  | 数据总数 | number |   |  0  |
|  simple  | 是否显示数值 | boolean | `true` or `false` | true  |
|  size  | 形态大小 | boolean | `small` or `large` | ''  |
|  disabled  | 禁用状态 | boolean | `true` or `false` | false  |
|  prevText  | prev文字 | string or React.Element | | `Prev`  |
|  nextText  | next文字 | string or React.Element |  | `Next`  |
|  onChange | change事件触发的回调函数，参数是event对象 | function | | 无 |
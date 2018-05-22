---
category: Components
type: Navigation
title: TabBar
subtitle: 标签栏
---

位于 APP 底部，方便用户在不同功能模块之间进行快速切换。

### 规则
- 用作 APP 的一级分类，数量控制在 3-5 个之间。
- 即使某个 Tab 不可用，也不要禁用或者移除该 Tab。
- 使用 Badge 进行提示，足不出户也能知道有内容更新。

## API

### TabBar

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| barTintColor        | tabbar 背景色                     | String   | `white`            |
| tintColor         | 选中的字体颜色                               | String | `#108ee9`         |
| unselectedTintColor       | 未选中的字体颜色  | String | '#888'           |
| hidden      | 是否隐藏  | Boolean | false           |
| prefixCls| 样式前缀  | String   | 'am-tab-bar'      |
| noRenderContent| 不渲染内容部分  | Boolean   |   false   |
| prerenderingSiblingsNumber| 预加载相邻的tab内容, Infinity: 加载所有的tab内容, 0: 仅加载当前tab内容, 当页面较复杂时，建议设为0，提升页面加载性能  | number |   1   |
| tabBarPosition | tabbar 位置 | 'top'\|'bottom' | 'bottom' |

### TabBar.Item

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| badge  | 徽标数  | Number \ String           | 无     |
| dot | 是否在右上角显示小红点（在设置badge的情况下失效）  | Boolean            |  false  |
| onPress  | bar 点击触发，需要自己改变组件 state & selecte={true} | Function | `(){}`     |
| selected  | 是否选中 | Boolean | false     |
| icon  | 默认展示图片 | 见 demo |      |
| selectedIcon  |  选中后的展示图片 | 见 demo |      |
| title  |  标题文字 | String |      |
| key  |  唯一标识 | String |   无   |

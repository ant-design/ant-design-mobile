---
category: UI Bars
type: UI Bars
chinese: 标签栏
english: TabBar
---


### 定义／Definition
标签栏用于让用户在不同的子任务、视图和模式中进行切换。

## API

### TabBar

| 参数             | 说明                                         | 类型     | 默认值        |
|------------------|----------------------------------------------|----------|---------------|
| barTintColor        | tabbar 背景色                     | String   | `white`            |
| tintColor         | 选中的字体颜色                               | String | `#108ee9`         |
| unselectedTintColor       | 未选中的字体颜色  | String | '#888'           |
| prefixCls(`web only`) | 样式前缀  | String   | 'am-tabbar'      |


### TabBar.Item

| 参数 | 说明             | 类型                    | 默认值 |
|------|------------------|-------------------------|--------|
| badge  | 徽标数  | Number \ String           | 无     |
| onPress  | bar 点击触发，需要自己改变组件 state & selecte={true} | Function | `(){}`     |
| selected  | 是否选中 | Boolean | false     |
| icon  | 默认展示图片 | Image Source(rn) \ {uri: String} (web) |      |
| selectedIcon  |  选中后的展示图片 | Image Source(rn) \ {uri: String} (web) |      |
| title  |  标题文字 | String |      |

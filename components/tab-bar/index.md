---
category: Components
type: Components
chinese: APP选项卡
english: TabBar
---


### 定义／Definition
标签栏用于让用户在不同的子任务、视图和模式中进行切换。

## API

### TabBar

| 参数             | 说明                                         | 类型     | 默认值        |
|------------------|----------------------------------------------|----------|---------------|
| activeKey        | 当前激活 tab 面板的 key                      | String   | 无            |
| defaultActiveKey | 初始化选中面板的 key，如果没有设置 activeKey | String   | 第一个面板    |
| onChange         | 切换面板的回调                               | Function | 无            |
| onTabClick       | tab 被点击的回调                             | Function | 无            |
| type | 页签的基本样式，可选 `line`、`capsule`、`tabbar` 类型   | String   | 'line'      |
| animation | 内容区域动画, 目前仅支持 `slide-horizontal`, 设为 false 禁用动画    |  String   |    `slide-horizontal`    |
| mode |  `dark`、`light` 仅当 type 为 tabbar 有效   | String   | 'light'      |


### TabBar.Item

| 参数 | 说明             | 类型                    | 默认值 |
|------|------------------|-------------------------|--------|
| key  | 对应 activeKey   | String                  | 无     |
| tab  | 选项卡头显示文字 | React.Element or String | 无     |

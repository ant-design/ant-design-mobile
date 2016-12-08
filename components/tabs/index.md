---
category: Components
type: Navigation
chinese: 标签页
english: Tabs
---


用于让用户在不同的视图中进行切换。

### 规则
- 标签数量，一般 2-4 个；其中，标签中的文案需要精简，一般 2-4 个字。
- 在 iOS 端的次级页面中，不建议使用左右滑动来切换 Tab，这个和 iOS 的左滑返回存在冲突，eg：详情页中 Tabs。


## API ( 适用平台：WEB、React-Native )

### Tabs

| 参数             | 说明                                         | 类型     | 默认值        |
|------------------|----------------------------------------------|----------|---------------|
| activeKey        | 当前激活 tab 面板的 key                      | String   | 无            |
| defaultActiveKey | 初始化选中面板的 key，如果没有设置 activeKey | String   | 第一个面板    |
| onChange         | 切换面板的回调                        | (key: string): void | 无            |
| onTabClick       | tab 被点击的回调                      | (key: string): void | 无            |
| animated |  是否动画    |  boolean   |    `true`    |
| swipeable |  是否可以滑动 tab 内容进行切换    |  boolean   |    `true`    |
| tabBarPosition |    tab 位置 top/bottom        |  string    |    `top`        |
| destroyInactiveTabPane | 是否销毁掉不活动的 tabPane (优化使用) |  boolean    |    false   |
| underlineColor(`react-native only`) |   线条颜色       |  string    |    `#ddd`        |
| activeUnderlineColor(`react-native only`) |   选中线条颜色       |  string    |    `#108ee9`        |
| textColor(`react-native only`) |   文字颜色       |  string    |    `#000`        |
| activeTextColor(`react-native only`) |   选中文字颜色       |  string    |    `#108ee9`        |

### Tabs.TabPane

| 参数 | 说明             | 类型                    | 默认值 |
|------|------------------|-------------------------|--------|
| key  | 对应 activeKey   | String                  | 无     |
| tab  | 选项卡头显示文字 | React.Element or String | 无     |

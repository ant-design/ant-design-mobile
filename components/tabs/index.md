---
category: UI Controls
type: UI Controls
chinese: 标签页
english: Tabs
---


### 定义／Definition
标签栏用于让用户在不同的子任务、视图和模式中进行切换。

### 规则 / Rule
- 标签栏位于屏幕底部，并应该保证在应用内任何位置都可用。标签栏展示图标和文字内容，每一项均保持等宽。
当用户选中某个标签时，该标签呈现适当的高亮状态。
- 一个标签栏一次最多可承载5个标签，最少显示2个
- 你可以在标签上加上红底白字，显示数字或者省略号的小气泡（badge），用以展示与应用相关的信息。
- 你可以使用标签栏来切换对同一组数据的不同视图模式，或者整体功能下不同的子任务。
- 即使标签当前不可用，也不要把它从标签栏中删除。如果某个标签所代表的部分功能在当前场景下不可用，
可以将它标识为不可用状态，但不要删除它。让某些标签时而出现时而隐藏，会让用户觉得应用UI不稳定而且难以预测。最好的解决方式是确保每个标签都可用，并解释当前标签不可用的原因。



## API

### Tabs

| 参数             | 说明                                         | 类型     | 默认值        |
|------------------|----------------------------------------------|----------|---------------|
| activeKey        | 当前激活 tab 面板的 key                      | String   | 无            |
| defaultActiveKey | 初始化选中面板的 key，如果没有设置 activeKey | String   | 第一个面板    |
| onChange         | 切换面板的回调                               | Function | 无            |
| onTabClick       | tab 被点击的回调                             | Function | 无            |
| animated |  是否动画    |  boolean   |    `true`    |
| tabBarPosition |    tab 位置 top/bottom        |  string    |    `top`        |
| underlineColor(`react-native only`) |   线条颜色       |  string    |    `#ddd`        |
| activeUnderlineColor(`react-native only`) |   选中线条颜色       |  string    |    `#108ee9`        |
| textColor(`react-native only`) |   文字颜色       |  string    |    `#000`        |
| activeTextColor(`react-native only`) |   选中文字颜色       |  string    |    `#108ee9`        |

### Tabs.TabPane

| 参数 | 说明             | 类型                    | 默认值 |
|------|------------------|-------------------------|--------|
| key  | 对应 activeKey   | String                  | 无     |
| tab  | 选项卡头显示文字 | React.Element or String | 无     |

---
category: Components
type: Components
chinese: 浮动菜单
english: FloatMenu
---

### 定义／Definition
提示层式的浮动菜单

### 规则 / Rule
- 点击背景的任一位置时，可以隐藏菜单；
- 浮动菜单可以是选择也可以是行为（筛选、跳转…）。


## API

### FloatMenu
| 成员        | 说明           | 类型         | 默认值       |
|------------|----------------|-------------|--------------|
| visible   | 当前显隐状态    | Boolean |  false   |
| overlay   | 弹出层内容    | React.node |  -   |
| onVisibleChange   | 当显隐状态变化时调用    | Function |  -   |
| onSelect   | 选中的选项    | Function |  -   |
| placement   | enum{'left','right','top','bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'} | String |  'bottomRight'   |
| popupAlign   | 用于设置偏移量等、会被合并到 placement 的设置中，可选值为 [dom-align](https://github.com/yiminghe/dom-align) 的`alignConfig`配置（ points 设置用 placement 代替）   | Object |  `{ overflow: { adjustY: 0, adjustX: 0 } }`禁掉位置自动适应 |

### FloatMenu.Item
| 成员        | 说明           | 类型         | 默认值       |
|------------|----------------|-------------|--------------|
| children   | 节点内容    | String/React.node |  -   |
| disabled   | 是否禁用    | Boolean |  false   |
| iconName   | icon名称    | String |  -   |

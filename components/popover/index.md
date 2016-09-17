---
category: UI Views
type: UI Views
chinese: 气泡
english: Popover
---

### 定义／Definition
提示层式的浮动菜单

### 规则 / Rule
- 点击背景的任一位置时，可以隐藏菜单；
- 浮动菜单可以是选择也可以是行为（筛选、跳转…）。


## API

### Popover
| 成员        | 说明           | 类型         | 默认值       |
|------------|----------------|-------------|--------------|
| visible(web)   | 当前显隐状态    | Boolean |  false   |
| onVisibleChange(web)   | 当显隐状态变化时调用    | Function |  -   |
| placement(web)   | enum{'left','right','top','bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'} | String |  'bottomRight'   |
| popupAlign(web)   | 用于设置偏移量等、会被合并到 placement 的设置中，可选值为 [dom-align](https://github.com/yiminghe/dom-align) 的`alignConfig`配置（ points 设置用 placement 代替）   | Object |  { overflow: { adjustY: 0, adjustX: 0 } } 禁掉位置自动适应 |
| mask(web)   | 是否显示遮罩背景层    | Boolean |  false  |
| overlay   | 弹出层内容    | React.node |  -   |
| onSelect   | 选中的选项    | Function |  -   |
| style  | menu 样式    | Object |  -   |
| triggerStyle(ios/android)   | 触发元素外围容器样式    | Object |  -   |
| overlayStyle(ios/android)   | 弹出层外围容器样式    | Object |  -   |
| contextStyle(ios/android)   | 最外围容器样式    | Object |  -   |
| renderOverlayComponent(ios/android)   | 自定义弹出层的外围组件，默认是`ScrollView`，示例`(opts) => <Cus>{opts}</Cus>`  | Function |  -   |
| name(ios/android)   | menu名字，用于手动触发开关menu    | String |  -   |
| openMenu / closeMenu / toggleMenu(ios/android)   | 用于手动开关 menu，参数为上边 menu 的 name. 使用示例见 demo  | Function(name) |  -   |

### Popover.Item
| 成员        | 说明           | 类型         | 默认值       |
|------------|----------------|-------------|--------------|
| children   | 节点内容    | String/React.node |  -   |
| disabled   | 是否禁用    | Boolean |  false   |
| iconName(web)   | icon名称    | String |  -   |

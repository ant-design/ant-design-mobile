---
category: Components
type: Components
chinese: 浮动菜单
english: FloatMenu
---

## 如何使用
提示层式的浮动菜单


## API

### FloatMenu
| 成员        | 说明           | 类型         | 默认值       |
|------------|----------------|-------------|--------------|
| visible   | 当前显隐状态    | Boolean |  false   |
| overlay   | 弹出层内容    | React.node |  -   |
| onVisibleChange   | 当显隐状态变化时调用    | Function |  -   |
| onSelect   | 选中的选项    | Function |  -   |
| placement   | enum{'left','right','top','bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'}    | String |  'bottomRight'   |

### FloatMenu.Item
| 成员        | 说明           | 类型         | 默认值       |
|------------|----------------|-------------|--------------|
| children   | 节点内容    | String/React.node |  -   |
| disabled   | 是否禁用    | Boolean |  false   |
| iconName   | icon名称    | String |  -   |

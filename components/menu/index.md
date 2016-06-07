---
category: Components
type: Components
chinese: 菜单
english: Menu
---------------


筛选

## 如何使用

Menu

## API

### Menu
| 成员        | 说明           | 类型       |   可选值     | 默认值       |
|------------|----------------|-----------|---------|--------------|
| data    |    筛选数据  | Array,元素类型是对象,必须包含`label`和`value`,children值为数组(children和isLeaf二选一),`isLeaf`为`true`(布尔值)时没有children属性(仅第一级支持);children数的组元素也必须包含`value`和`value`,另有`disabled`代表不可选（仅菜单第二级支持或者单级菜单的第一级）。   |  | [] |
| level    |    菜单级数  | number  | 1、2 | 2 |
| value    |    初始值  | Array,一级和二级筛选数据的`value`组成的数组  |  | [] |
| onChange    |   选择后的回调     | Function(value)  |  |  |
| height    |   筛选组件的高度     | number  |  | `document.documentElement.clientHeight / 2` |


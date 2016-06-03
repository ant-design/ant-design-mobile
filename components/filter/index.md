---
category: Components
type: Components
chinese: 筛选
english: Filter
---------------


筛选

## 如何使用

Filter

## API

### Filter
| 成员        | 说明           | 类型       |   可选值     | 默认值       |
|------------|----------------|-----------|---------|--------------|
| data    |    筛选数据  | Array,元素类型是对象,必须包含`label`,和`value`,`isAll`为`true`时没有children属性,children值为数组,元素也必须包含`value`和`value`,另有`disabled`代表不可选中。   |  | [] |
| value    |    初始值  | Array,一级和二级筛选数据的`value`组成的数组  |  | [] |
| onChange    |   选择后的回调     | Function(value)  |  |  |
| height    |   筛选组件的高度     | number  |  | `document.documentElement.clientHeight / 2` |


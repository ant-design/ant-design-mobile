---
category: Components
type: Navigation
chinese: 菜单
english: Menu
---

在一个临时的面板上显示一组操作。

### 规则
- 至少包含 2 个以上的菜单项。
- 不应该被当做主要导航方式。

## API ( 适用平台：WEB )

| 成员        | 说明           | 类型        | 默认值       |
|------------|----------------|-------------|--------------|
| data    |  数据(isLeaf 设置后 children 无效)  | `Array<{label, value, disabled?, children<data>?, isLeaf?}>` | [] |
| level    |  菜单级数，可选1/2  | number  | 2 |
| value    |  初始值，一级和二级筛选数据的`value`组成的数组  | Array | [] |
| onChange    |   选择后的回调函数    | (item: Object): void  |  |
| height    |   筛选组件的高度   | number  | `document.documentElement.clientHeight / 2` |

---
category: Components
type: Navigation
title: Menu
subtitle: 菜单
---

在一个临时的面板上显示一组操作。

### 规则
- 至少包含 2 个以上的菜单项。
- 不应该被当做主要导航方式。

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| data    |  数据(isLeaf 设置后 children 无效)  | `Array<{label: ReactNode, value, disabled?, children<data>?, isLeaf?}>` | [] |
| level    |  菜单级数，可选1/2  | number  | 2 |
| value    |  初始值，一级和二级筛选数据的`value`组成的数组。在多选状态下，如果为二级菜单，则数组的第一个元素为一级菜单的选项，数组的第二个元素是一个数组，里面包含了二级菜单的多选项；如果为一级菜单，则数组所有元素都是多选项  | Array | |
| onChange    |   选择后的回调函数    | (item: Object): void  |  |
| onOk    |  多选状态下确认按钮回调  | (value: Object): void  |  |
| onCancel    |   多选状态下取消按钮回调  | (): void  |  |
| height    |   筛选组件的高度   | number  | `document.documentElement.clientHeight / 2` |
| multiSelect    |   是否支持菜单多选  | boolean  | false |

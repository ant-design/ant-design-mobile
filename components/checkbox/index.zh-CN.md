---
category: Components
type: Data Entry
title: Checkbox
subtitle: 复选框
---

复选框

## API

### Checkbox

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| defaultChecked  |  初始是否选中  | Boolean   | 无  |
| checked         |   指定当前是否选中   | Boolean  | 无  |
| disabled        |         | Boolean |  false  |
| onChange        | change 事件触发的回调函数 | (e: Object): void |   无  |

### Checkbox.CheckboxItem

基于`List.Item`对`Checkbox`进行封装,`List.Item`的`thumb`属性固定传入`Checkbox`,其他属性和`List.Item`一致。
其他 API 和 Checkbox 相同。

### Checkbox.AgreeItem

用于同意协议这种场景的复选框

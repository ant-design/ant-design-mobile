---
category: Components
type: Data Entry
title: Checkbox
---

Checkbox

## API ( Support Platform：WEB、React-Native )

### Checkbox

| 属性             | 说明           | 类型           | 默认值       |
|---------------- |----------------|-------------|--------------
| defaultChecked  |  whether is checked when init  | Boolean   |   |
| checked         |  whether is checked now (Controlled Mode)   | Boolean  |   |
| disabled        |  whether is been disabled       | Boolean |  false  |
| onChange        | callback when check status is changed | (e: Object): void |     |

### Checkbox.CheckboxItem

基于`List.Item`对`Checkbox`进行封装,`List.Item`的`thumb`属性固定传入`Checkbox`,其他属性和`List.Item`一致。
其他 API 和 Checkbox 相同。

### Checkbox.AgreeItem

用于同意协议这种场景的复选框

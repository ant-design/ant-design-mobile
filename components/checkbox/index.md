---
category: Form
type: Form
chinese: 复选框
english: Checkbox
---


用于选择或取消选择。


### 规则
- 一般出现在左侧。


## API

### Checkbox

单纯的复选框

| 成员             | 说明           | 类型           | 默认值       |
|---------------- |----------------|-------------|--------------
| name            |  name    | String |   无  |
| defaultChecked  |  初始是否选中  | Boolean   | 无  |
| checked         |   指定当前是否选中   | Boolean  | 无  |
| disabled        |         | Boolean |  false  |
| onChange        | change事件触发的回调函数,参数是event对象 | Function |   无  |

### Checkbox.CheckboxItem

作为列表项复选框

| 成员             | 说明           | 类型           | 默认值       |
|---------------- |----------------|-------------|--------------
| name            |  name   | String |   无  |
| defaultChecked  |  初始是否选中  | Boolean   | 无  |
| checked         |   指定当前是否选中   | Boolean  | 无  |
| disabled        |         | Boolean |  false  |
| onChange        | change事件触发的回调函数,参数是event对象 | Function |   无  |
| extra           | 右边内容        | String/HTML |  无  |

### Checkbox.AgreeItem

用于同意协议这种场景的复选框

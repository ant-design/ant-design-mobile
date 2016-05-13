---
category: Components
type: Components
chinese: Checkbox
english: Checkbox
---




## 何时使用

复选框提供了一个简单的方法来从一个预定义集合中选取多个值。

## API

### Checkbox

单纯的复选框

| 成员        | 说明           | 类型       |  可选值        | 默认值       |
|------------|----------------|----------|----------|--------------|
| type    | 复选框类型 | String |  `normal`、 `agree` |   'normal'  |
| name    |         | String |   | 无  |
| checked    |        | String |   | 无  |
| disabled      |         | String | |  无  |
| onChange    | change事件触发的回调函数,参数是event对象 | Function | |   无  |

### Checkbox.CheckboxItem

作为列表项复选框

### Checkbox.AgreeItem

用于同意XX协议这种场景的复选框

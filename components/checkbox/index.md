---
category: Components
type: Components
chinese: 复选框
english: Checkbox
---


### 定义／Definition
复选框提供了一个简单的方法来从一个预定义集合中选取多个值。

### 规则 / Rule
- 复选框一般出现在列表左侧；
- 如果两个相互排斥的选项，如“我同意”和“我不同意”，请将其合并使用单个复选框“我同意”。


## API

### Checkbox

单纯的复选框

| 成员        | 说明           | 类型       |  可选值        | 默认值       |
|------------|----------------|----------|----------|--------------|
| type    | 复选框类型 | String |  `normal`、 `agree` |   'normal'  |
| name    |      | String |   | 无  |
| defaultChecked    |  初始是否选中  | Boolean |   | 无  |
| checked    |   指定当前是否选中   | Boolean |   | 无  |
| disabled      |         | Boolean | |  无  |
| onChange    | change事件触发的回调函数,参数是event对象 | Function | |   无  |

### Checkbox.CheckboxItem

作为列表项复选框

### Checkbox.AgreeItem

用于同意XX协议这种场景的复选框

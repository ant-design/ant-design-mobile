# List

- category: Components
- chinese: 列表
- type: 列表

---

AntUI列表容器,其中会有列表头,列表尾,列表主体。

## 何时使用

## API

### List

| 成员        | 说明           | 类型               | 默认值       |
|-------------|----------------|--------------------|--------------|
| prefixCls    | 默认class前缀        | String |   'am'  |
| style      | 定制的样式       | Object           | 无
| isIconList      | 是否是Iconlist       | bool           | false

### List.Header
| 成员        | 说明           | 类型               | 默认值       |
|-------------|----------------|------------------|--------------|
| prefixCls   | 默认class前缀        | String |   'am'  |
| style      | 定制的样式       | Object           | 无

### List.Body
| 成员        | 说明           | 类型               | 默认值       |
|-------------|----------------|--------------------|--------------|
| prefixCls    | 默认class前缀        | String |   'am'  |

### List.Footer

| 成员        | 说明           | 类型               | 默认值       |
|-------------|----------------|--------------------|--------------|
| prefixCls    | 默认class前缀        | String |   'am'  |
| style      | 定制的样式       | Object           | 无
| align      | 左对齐或者是右对齐   | String(left/right) | left
| onClick      | 点击事件   | Func |   无  |

### List.Item

| 成员        | 说明           | 类型               | 默认值       |
|------------|----------------|--------------------|--------------|
| prefixCls    | 默认class前缀        | String |   'am'  |
| extraCls    | 额外加入的class        | String |   ''  |
| line       | 单行或者双行        | number |   1  |
| needActive  | 点击有active效果  | String |   true  |
| arrow      | 箭头方向        | String（horizontal/up/down/无） |   无  |
| thumb       | 缩略图  | imgsrc |   无  |
| extra      | 右边内容        | String/HTML |   无  |
| onClick    | 点击事件的回调函数 | Function |   无  |
| extraDom    | Item用于封装其它组件时需要填入的额外数据,用于渲染modal,一般不要使用 | any |   无  |

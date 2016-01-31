# List

- category: Components
- chinese: 列表
- type: 基本

---

AntUI列表容器,其中会有列表头,列表尾,列表主体。

## 何时使用

## API

### List

| 成员        | 说明           | 类型               | 默认值       |
|-------------|----------------|--------------------|--------------|
| style      | 定制的样式       | Object           | 无
| isIconList      | 是否是Iconlist       | bool           | `false`

### List.Header
| 成员        | 说明           | 类型               | 默认值       |
|-------------|----------------|------------------|--------------|
| style      | 定制的样式       | Object           | 无

### List.Body
| 成员        | 说明           | 类型               | 默认值       |
|-------------|----------------|--------------------|--------------|

### List.Footer

| 成员        | 说明           | 类型        |   可选值       | 默认值       |
|-------------|----------------|--------------------|--------------|
| style      | 定制的样式       | Object           | | 无
| align      | 左对齐或者是右对齐   | String | `left` `right` | `left`
| onClick      | 点击事件   | Func |  | 无  |

### List.Item

| 成员        | 说明           | 类型        |  可选值     | 默认值       |
|------------|----------------|--------------------|--------------|
| line       | 单行或者双行        | number | `1`、`2` | 1  |
| needActive  | 点击有active效果  | String |   `true`、`false` | `true` |
| arrow      | 箭头方向,随便填一个字符串,则存在对应的dom,但是不显示        | String | `horizontal`、`up`、`down`、`any`、无 |   无  |
| thumb       | 缩略图  | imgsrc |  | 无  |
| extra      | 右边内容        | String/HTML | |  无  |
| onClick    | 点击事件的回调函数 | Function |  | 无  |
| extraDom    | Item用于封装其它组件时需要填入的额外数据,用于渲染modal,一般不要使用 | any | |  无  |

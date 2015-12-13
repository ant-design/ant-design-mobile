# ListItem

- category: Components
- chinese: 列表项
- type: 列表

---

列表项

## 何时使用

看demo就了然了吧

## API


| 成员        | 说明           | 类型               | 默认值       |
|------------|----------------|--------------------|--------------|
| prefixCls    | 默认class前缀        | String |   'am'  |
| line       | 单行或者双行        | number |   1  |
| link       | 如果item需要跳转,则需要URL  | String |   无  |
| arrow      | 箭头方向        | String（horizontal/up/down/无） |   无  |
| icon       | 缩略图  | imgsrc |   无  |
| thumd       | 缩略图  | imgsrc |   无  |
| content    | 左边内容        | String/HTML |   无  |
| extra      | 右边内容        | String/HTML |   无  |
| onClick    | 点击事件的回调函数 | Function |   无  |
| didMount   | 模块mount后立即执行的方法,参数是模块对象本身        | Function |   无  |
| extraFormData   | 列表项中需要的隐藏域        | Object |   无  |

# ListItem

- category: Components
- chinese: 列表项
- type: 列表

---

将页面元素钉在可视范围。

## 何时使用

当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。

页面可视范围过小时，慎用此功能以免遮挡页面内容。

## API


| 成员        | 说明           | 类型               | 默认值       |
|------------|----------------|--------------------|--------------|
| link       | 如果item需要跳转,则需要URL  | String |   无  |
| arrow      | 箭头方向        | String（horizontal/vertical/无） |   无  |
| type       | 赞不支持        | String |   无  |
| icon       | 缩略图,赞不支持  | imgsrc |   无  |
| content    | 左边文案        | String |   无  |
| extra      | 右边文案        | String |   无  |
| onClick    | 箭头方向        | Function |   无  |

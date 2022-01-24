# Avatar 头像

<code src="./demos/demo1.tsx"></code>

### 属性

| 属性     | 说明           | 类型                                                       | 默认值     |
| -------- | -------------- | ---------------------------------------------------------- | ---------- |
| src      | 头像的图片地址 | `string`                                                   | -          |
| fallback | 占位图         | `ReactNode`                                                | 默认占位图 |
| fit      | 图片填充模式   | `'contain' \| 'cover' \| 'fill' \| 'none' \| 'scale-down'` | `'cover'`  |

此外，还支持 [Image](./image) 组件的 `alt` `lazy` `onClick` `onError` 属性。

### CSS 变量

| 属性            | 说明             | 默认值 | 全局变量                     |
| --------------- | ---------------- | ------ | ---------------------------- |
| --size          | 大小，宽度和高度 | `44px` | `--adm-avatar-size`          |
| --border-radius | 圆角             | `4px`  | `--adm-avatar-border-radius` |

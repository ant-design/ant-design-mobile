# Avatar 头像

用来代表用户或事物。

## 何时使用

需要更加直观的展现人物或事物特征。

## 示例

<code src="./demos/demo1.tsx"></code>

## Avatar

### 属性

| 属性     | 说明           | 类型                                                       | 默认值     |
| -------- | -------------- | ---------------------------------------------------------- | ---------- |
| fallback | 占位图         | `ReactNode`                                                | 默认占位图 |
| fit      | 图片填充模式   | `'contain' \| 'cover' \| 'fill' \| 'none' \| 'scale-down'` | `'cover'`  |
| src      | 头像的图片地址 | `string`                                                   | -          |

此外，还支持 [Image](./image) 组件的 `alt` `lazy` `onClick` `onError` 属性。

### CSS 变量

| 属性            | 说明             | 默认值 | 全局变量                     |
| --------------- | ---------------- | ------ | ---------------------------- |
| --border-radius | 圆角             | `4px`  | `--adm-avatar-border-radius` |
| --size          | 大小，宽度和高度 | `44px` | `--adm-avatar-size`          |

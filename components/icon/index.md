---
category: Components
type: Data Display
chinese: 图标
english: Icon
---

SVG 图标。

## 图标的命名规范

我们为每个图标赋予了语义化的命名，命名规则如下:

- 实心和描线图标保持同名，用 `-o` 来区分，比如 `question-circle`(实心) 和 `question-circle-o`(描线)；

- 命名顺序：`[icon名]-[形状可选]-[描线与否]-[方向可选]`。

## 如何使用

使用 `<Icon />` 标签声明组件，指定图标对应的 type 属性，示例代码如下:

```html
<Icon type="link" />
```

## 本地部署

支持本地图标，例如`<Icon type={require('./reload.svg')} />`，
但这时需要配合 [svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader) 设置生效。

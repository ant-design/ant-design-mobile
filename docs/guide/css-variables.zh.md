# CSS 变量

相比于粗暴的 CSS 样式覆盖（也被叫做魔改样式），CSS 变量让我们可以更加优雅地自定义组件的样式。

一起来看看我们该怎么使用组件暴露出来的 CSS 变量吧。

> 本文的前提是你已经对 [CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)有一些基础的了解

在组件文档的 "CSS 变量" 表格中，你可以查阅到每个组件暴露了都哪些 CSS 变量，当然你也可以直接在组件的 ts 定义中找到。

以 Input 组件为例，我们可以在它的文档上找到类似于下面这样的表格：

| 属性        | 说明     | 默认值           |
| ----------- | -------- | ---------------- |
| --font-size | 字号     | 17px             |
| --color     | 文字颜色 | --adm-color-text |

这表示了它支持了 `--font-size` 和 `--color` 变量。

接下来，我们需要设置 CSS 变量的值，有两种方法：

### 方法一：在 CSS 文件中设置

给 Input 组件加一个自定义的 `className`：

```jsx
<Input className='my-input'/>
```

然后在 CSS 文件中设置 CSS 变量

```css
.my-input {
  --font-size: 32px;
}
```

### 方法二：直接通过 style 属性设置

直接通过组件的 `style` 属性，简单粗暴，适合小范围的调整：

```jsx
<Input style={{
  '--font-size': '32px'
}}/>
```

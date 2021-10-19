# CSS 变量

相比于粗暴的 CSS 样式覆盖（也被叫做魔改样式），CSS 变量让我们可以更加优雅地自定义组件的样式。

一起来看看我们该怎么使用组件暴露出来的 CSS 变量吧。

> 本文的前提是你已经对 [CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)有一些基础的了解

在组件文档的 "CSS 变量" 表格中，你可以查阅到每个组件暴露了都哪些 CSS 变量，当然你也可以直接在组件的 ts 定义中找到。

以 Input 组件为例，我们可以在它的文档上找到类似于下面这样的表格：

| 属性            | 说明     | 默认值 | 全局变量                     |
| --------------- | -------- | ------ | ---------------------------- |
| --border-radius | 圆角大小 | `4px`  | `--adm-button-border-radius` |
| --border-width  | 边框宽度 | `1px`  | `--adm-button-border-width`  |

这表示了它支持了 `--border-radius` 和 `--border-width` 变量。

接下来，我们需要设置 CSS 变量的值，有两种方法：

### 方法一：在 CSS 文件中设置

给 Input 组件加一个自定义的 `className`：

```jsx
<Button className='my-button'/>
```

然后在 CSS 文件中设置 CSS 变量

```css
.my-button {
  --border-radius: 2px;
}
```

### 方法二：直接通过 style 属性设置

直接通过组件的 `style` 属性，简单粗暴，适合小范围的调整：

```jsx
<Button style={{
  '--border-radius': '2px'
}}/>
```

### 方法三：通过全局变量进行设置

假如你需要对整个项目中所有的 Button 都进行样式的调整，那么对每一个按钮进行 CSS 变量的设置显然是不现实的。在这种情况下，你可以通过"全局 CSS 变量"（也就是上面表格中的最后一列）进行统一的设置：

```css
:root:root {
  --adm-button-border-radius: 2px;
}
```

这样页面上全部的 Button 都会受到调整。

当然，你也可以"局部性"地进行调整，只需要把对应的 CSS 变量添加到对应的父级节点上。

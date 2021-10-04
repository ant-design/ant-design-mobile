# CSS Variables

Compared to the crude CSS style override (also known as the magic style), CSS Variables allow us to customize the style of the component more elegantly.

Let's take a look at how we should use the CSS variables exposed by the component.

> The premise of this article is that you have some basic understanding of [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)

In the "CSS Variables" table of the component document, you can check which CSS variables are exposed by each component. Of course, you can also find it directly in the ts definition of the component.

Taking the Input component as an example, we can find a table similar to the following on its documentation:

| Name        | Description | Default          |
| ----------- | ----------- | ---------------- |
| --font-size | font size   | 17px             |
| --color     | font color  | --adm-color-text |

This means that it supports the `--font-size` and `--color` variables.

Next, we need to set the value of the CSS variable. There are two ways:

### Method 1: Set in the CSS file

Add a custom `className` to the Input component:

```jsx
<Input className='my-input'/>
```

Then set CSS Variables in the CSS file

```css
.my-input {
  --font-size: 32px;
}
```

### Method 2: Set directly through the style attribute

Directly through the `style` property of the component, it is simple and rude, suitable for small-scale adjustments:

```jsx
<Input style={{
  '--font-size': '32px'
}}/>
```

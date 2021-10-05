# CSS Variables

Compared to the crude CSS style override (also known as the magic style), CSS variables allow us to customize the style of the component more elegantly.

一 Let's take a look at how we can use the CSS variables exposed by the component. 

> The premise of this article is that you have some basic understanding of [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

In the "CSS Variables" table of the component document, you can check which CSS variables are exposed by each component. Of course, you can also find it directly in the ts definition of the component. 

Taking the Input component as an example, we can find a table similar to the following on its documentation: 

| Attribute   | Usage       | Defaults         |
| ----------- | ----------- | ---------------- |
| --font-size | font-size   | 17px             |
| --color     | text-colour | --adm-color-text |

This means that it supports the `--font-size` and `--color` variables. 

Next, we need to set the value of the CSS variable. There are two ways: 

### Method 1: Set it in the CSS file 

Add a custom `className` to the Input component:

```jsx
<Input className='my-input'/>
```

Then set CSS variables in the CSS file 

```css
.my-input {
  --font-size: 32px;
}
```

### Method 2: Set directly through the style attribute 

You can define it directly through the `style` property of the component.
This is a simplified way, suitable for small-scale adjustments: 

```jsx
<Input style={{
  '--font-size': '32px'
}}/>
```

# CSS Variables

Compared to the crude CSS style override (also known as the magic style), CSS Variables allow us to customize the style of the component more elegantly.

Let's take a look at how we should use the CSS variables exposed by the component.

> The premise of this article is that you have some basic understanding of [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)

In the "CSS Variables" table of the component document, you can check which CSS variables are exposed by each component. Of course, you can also find it directly in the ts definition of the component.

Taking the Input component as an example, we can find a table similar to the following on its documentation:

| Name            | Description                  | Default | Global                       |
| --------------- | ---------------------------- | ------- | ---------------------------- |
| --border-radius | Border radius of the button. | `4px`   | `--adm-button-border-radius` |
| --border-width  | Border width of the button.  | `1px`   | `--adm-button-border-width`  |

This means that it supports the `--border-radius` and `--border-width` variables.

Next, we need to set the value of the CSS variable. There are two ways:

### Method 1: Set in the CSS file

Add a custom `className` to the Input component:

```jsx
<Button className='my-button'/>
```

Then set CSS Variables in the CSS file

```css
.my-button {
  --border-radius: 2px;
}
```

### Method 2: Set directly through the style attribute

Directly through the `style` property of the component, it is simple and rude, suitable for small-scale adjustments:

```jsx
<Button style={{
  '--border-radius': '2px'
}}/>
```

### Method 3: Use the global variables

Let's assume you need to adjust the style of all the Buttons in your project. In this case, setting CSS variables for every Button is unrealistic. But you can use the "global" CSS variables (listed as the last column in the table above).

```css
:root:root {
  --adm-button-border-radius: 2px;
}
```

In this way, all the Buttons in page will be affected.

Of course, you can also adjust style for only part of the page. All you need to do is bind the global CSS variables to the root dom element of that area.

# Theming

Thanks to the powerful and flexible capabilities of CSS variables, it is very simple to customize a set of antd-mobile themes. You don’t need to configure any compilation tools or install additional plug-ins. You can fix it directly in `:root` to overwrite CSS Variables are fine:

```css
:root:root {
  --adm-color-primary: #a062d4;
}
```

> Note: Why write two duplicate `:root`?
>
> Since the theme variables in antd-mobile are also declared under `:root`, in some cases they cannot be successfully overwritten due to priority issues. Through `:root:root` you can explicitly make the content you write a higher priority to ensure the successful coverage of the theme variables.

Of course, if you just want to adjust the partial theme, you can also add the above CSS variable override logic to any node you want to adjust, for example:

```css
.purple-theme {
  --adm-color-primary: #a062d4;
}
```

```jsx
<div className='purple-theme'>
  <Button color='primary'>Purple</Button>
</div>
```

You can get a button like this:

```jsx | preview
/**
 * inline: true
 */

import React from 'react'
import { Button } from 'antd-mobile'

export default () => {
  return (
    <div style={{
      ['--adm-color-primary']: '#a062d4',
    }}>
      <Button color='primary'>Purple</Button>
    </div>
  )
}
```

The following are the global CSS variables currently provided by antd-mobile:

```css
:root {
  --adm-color-primary: #1677ff;
  --adm-color-success: #00b578;
  --adm-color-warning: #ff8f1f;
  --adm-color-danger: #ff3141;
  --adm-color-white: #ffffff;
  --adm-color-weak: #999999;
  --adm-color-light: #cccccc;
  --adm-border-color: #eeeeee;
  --adm-font-size-main: 13px;
  --adm-color-text: #333333;

  --adm-font-family: -apple-system, blinkmacsystemfont, 'Helvetica Neue',
  helvetica, segoe ui, arial, roboto, 'PingFang SC', 'miui',
  'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;
}
```

Besides, every component has its own global CSS variables. You can find more information in their document page. For detailed explanation, please refer the [CSS Variables](./css-variables) chapter.

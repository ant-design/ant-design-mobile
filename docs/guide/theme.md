# 主题

得益于 CSS 变量强大而灵活的能力，自定义一套 antd-mobile 的主题是非常简单的，你不需要配置任何编译工具，也不需要安装额外的插件，直接修在 `:root` 覆盖 CSS 变量就可以了：

```css
:root {
  --am-color-primary: #a062d4;
}
```

当然如果你只是希望对局部的主题进行调整，也可以把上面的 CSS 变量覆盖逻辑加在任何一个你想调整的节点上，例如：

```css
.purple-theme {
  --am-color-primary: #a062d4;
}
```

```jsx
<div className='purple-theme'>
  <Button color='primary'>Purple</Button>
</div>
```

可以得到这样的一个按钮：

```jsx | preview
/**
 * inline: true
 */

import React from 'react'
import { Button } from 'antd-mobile'

export default () => {
  return (
    <div style={{
      ['--am-color-primary']: '#a062d4',
    }}>
      <Button color='primary'>Purple</Button>
    </div>
  )
}
```

以下是 antd-mobile 目前提供的全局性 CSS 变量：

```css
:root {
  --am-color-primary: #1677ff;
  --am-color-success: #00b578;
  --am-color-warning: #ff8f1f;
  --am-color-danger: #ff3141;
  --am-color-white: #ffffff;
  --am-color-weak: #999999;
  --am-color-light: #cccccc;
  --am-border-color: #eeeeee;
  --am-font-size-main: 13px;
  --am-color-text: #333333;

  --am-font-family: -apple-system, blinkmacsystemfont, 'Helvetica Neue',
  helvetica, segoe ui, arial, roboto, 'PingFang SC', 'miui',
  'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;

  --am-z-index-mask: 1000;
  --am-z-index-popup: 1000;
  --am-z-index-popover: 1030;
  --am-z-index-floating-panel: 900;
}
```

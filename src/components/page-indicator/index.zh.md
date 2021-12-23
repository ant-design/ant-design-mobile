# PageIndicator 页码指示器

<code src="./demos/demo1.tsx"></code>

## 属性

| 属性      | 说明                      | 类型                         | 默认值         |
| --------- | ------------------------- | ---------------------------- | -------------- |
| total     | 总页数                    | `number`                     | -              |
| current   | 当前页（从 `0` 开始计数） | `number`                     | -              |
| color     | 颜色                      | `'primary' \| 'white'`       | `'primary'`    |
| direction | 方向，默认是水平方向      | `'horizontal' \| 'vertical'` | `'horizontal'` |

## CSS 变量

| 属性                       | 说明                       | 默认值                     |
| -------------------------- | -------------------------- | -------------------------- |
| --dot-color                | 非当前页的颜色             | `rgba(0, 0, 0, 0.2)`       |
| --active-dot-color         | 当前页的颜色               | `var(--adm-color-primary)` |
| --dot-size                 | 非当前页的大小             | `3px`                      |
| --active-dot-size          | 当前页的大小               | `13px`                     |
| --dot-border-radius        | 非当前页的圆角大小         | `1px`                      |
| --active-dot-border-radius | 当前页的圆角大小           | `var(--dot-border-radius)` |
| --dot-spacing              | 页码指示器小圆点之间的间距 | `3px`                      |

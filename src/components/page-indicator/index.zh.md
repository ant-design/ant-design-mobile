# PageIndicator 分页符

指示当前显示的是多页面视图的哪一页。

## 何时使用

适用于表示当前内容区块可以横向滚动翻页。

## 示例

<code src="./demos/demo1.tsx"></code>

## PageIndicator

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| color | 颜色 | `'primary' \| 'white'` | `'primary'` |
| current | 当前页（从 `0` 开始计数） | `number` | - |
| direction | 方向，默认是水平方向 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| total | 总页数 | `number` | - |

### CSS 变量

| 属性 | 说明 | 默认值 |
| --- | --- | --- |
| --active-dot-border-radius | 当前页的圆角大小 | `var(--dot-border-radius)` |
| --active-dot-color | 当前页的颜色 | `var(--adm-color-primary)` |
| --active-dot-size | 当前页的大小 | `13px` |
| --dot-border-radius | 非当前页的圆角大小 | `1px` |
| --dot-color | 非当前页的颜色 | `var(--adm-color-light)` |
| --dot-size | 非当前页的大小 | `3px` |
| --dot-spacing | 页码指示器小圆点之间的间距 | `3px` |

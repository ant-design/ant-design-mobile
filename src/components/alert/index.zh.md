# Alert 警告提示

警告提示，展现需要关注的信息。

## 何时使用

- 当某个页面需要向用户显示警告的信息时。
- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。

## 示例

<code src="./demos/demo1.tsx"></code>

## API

### 属性

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| `type` | 决定 Alert 的颜色和默认图标 | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` | 5.38.0 |
| `showIcon` | 是否展示图标 | `boolean` | `false` | 5.38.0 |
| `icon` | 自定义图标，只在 `showIcon` 为 `true` 时生效 | `ReactNode` | - | 5.38.0 |
| `ellipsis` | 限制内容为一行，内容过长时展示省略号 | `boolean` | `false` | 5.38.0 |
| `extra` | 在末尾展示额外内容 | `ReactNode` | - | 5.38.0 |
| `closeable` | 显示关闭按钮 | `boolean` | `false` | 5.38.0 |
| `onClose` | 关闭时的回调函数 | `() => void` | - | 5.38.0 |

### CSS 变量

| 变量 | 说明 | 默认值 | 全局变量 | 版本 |
| --- | --- | --- | --- | --- |
| `--adm-alert-border-radius` | Alert 圆角大小 | `4px` | `--adm-alert-border-radius` | 5.38.0 |
| `--adm-alert-close-color` | Alert 关闭按钮颜色 | `var(--adm-color-light)` | `--adm-alert-close-color` | 5.38.0 |
| `--adm-alert-close-size` | Alert 关闭图标大小 | `16px` | `--adm-alert-close-size` | 5.38.0 |
| `--adm-alert-font-size` | Alert 字体大小 | `12px` | `--adm-alert-font-size` | 5.38.0 |
| `--adm-alert-gap` | 图标，主要内容，额外内容和关闭图标之间的间隙 | `8px` | `--adm-alert-gap` | 5.38.0 |
| `--adm-alert-icon-size` | Alert 图标大小 | `16px` | `--adm-alert-icon-size` | 5.38.0 |
| `--adm-alert-line-height` | Alert 文字行高 | `16px` | `--adm-alert-line-height` | 5.38.0 |

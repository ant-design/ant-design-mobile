# NoticeBar 通告栏

展示一组消息通知。

## 何时使用

适用于当前页面内信息的通知，是一种较醒目的页面内通知方式。

## 示例

<code src="./demos/demo1.tsx"></code>

## NoticeBar

### 属性

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| closeable | 是否可关闭 | `boolean` | `false` |
| closeIcon | 自定义关闭按钮图标 | `ReactNode` | `<CloseOutline />` |
| color | 通告栏的类型 | `'default' \| 'alert' \| 'error' \| 'info' \| 'success'` | `'default'` |
| content | 公告内容 | `React.ReactNode` | - |
| delay | 开始滚动的延迟，单位 `ms` | `number` | `2000` |
| extra | 额外操作区域，显示在关闭按钮左侧 | `React.ReactNode` | - |
| icon | 左侧广播图标 | `React.ReactNode` | `<SoundOutline />` |
| onClose | 关闭时的回调 | `() => void` | - |
| onClick | 点击事件 | `() => void` | - |
| speed | 滚动速度，单位 `px/s` | `number` | `50` |
| wrap | 是否多行展示 | `boolean` | `false` |
| shape | 形状 (rectangular: 直角; neutral: 圆角; rounded: 圆形) | `'rectangular' \| 'neutral' \| 'rounded'` | `'rectangular'` | 5.38.0 |
| bordered | 边框可见性 (`block`: 上下边框; `true`: 全边框; `false`: 无边框) | `'block' \| boolean` | `'block'` | 5.38.0 |

### CSS 变量

| 属性 | 说明 | 默认值 | 全局变量 | 版本 |
| --- | --- | --- | --- | --- |
| `--background-color` | 背景色 | `var(--adm-color-weak)` |
| `--border-color` | 边框颜色 | `var(--adm-color-weak)` |
| `--font-size` | 文字字号 | `15px` |
| `--height` | 整体高度 | `40px` |
| `--icon-font-size` | 左侧图标的字号 | `18px` |
| `--text-color` | 文字颜色 | `#ffffff` |
| `--adm-notice-bar-border-radius` | 圆角形状(neutral)的圆角大小 | `4px` | `--adm-notice-bar-border-radius` | 5.38.0 |
| `--adm-notice-bar-border-width` | 边框粗细 | `1px` | `--adm-notice-bar-border-width` | 5.38.0 |

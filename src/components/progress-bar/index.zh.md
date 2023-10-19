# ProgressBar 进度条

用条状图形表示百分比进度。

## 何时使用

适用于展示任务当前进度。

## 示例

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

## ProgressBar

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| percent | 进度条百分比 | `number` | `0` |
| rounded | 是否圆角 | `boolean` | `true` |
| text | 是否显示进度文字，支持自定义渲染内容 | `boolean \| ReactNode \| ((percent: number) => ReactNode)` | `false` |

### CSS 变量

| 属性 | 说明 | 默认值 | 全局变量 |
| --- | --- | --- | --- |
| --fill-color | 填充的颜色 | `var(--adm-color-primary)` | `--adm-progress-bar-fill-color` |
| --track-color | 线条的颜色 | `var(--adm-color-border)` | `--adm-progress-bar-track-color` |
| --track-width | 线条宽度 | `8px` | `--adm-progress-bar-track-width` |
| --text-width | 文字内容的宽度 | `40px` | `--adm-progress-bar-text-width` |

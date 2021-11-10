# Button 按钮

<code src="./demos/index.tsx"></code>

## 属性

| 属性        | 说明                             | 类型                                                               | 默认值      |
| ----------- | -------------------------------- | ------------------------------------------------------------------ | ----------- |
| color       | 按钮的颜色                       | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger'`     | `'default'` |
| fill        | 填充模式                         | `'solid' \| 'outline' \| 'none'`                                   | `'solid'`   |
| size        | 大小                             | `'mini' \| 'small' \| 'middle' \| 'large'`                         | `'middle'`  |
| block       | 是否是块级元素                   | `boolean`                                                          | `false`     |
| disabled    | 是否禁用                         | `boolean`                                                          | `false`     |
| loading     | 是否处于加载状态                 | `boolean`                                                          | `false`     |
| loadingText | 加载状态下额外展示的文字         | `string`                                                           | -           |
| onClick     | 点击事件                         | `(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void` | -           |
| type        | 原生 `button` 元素的 `type` 属性 | `'submit' \| 'reset' \| 'button'`                                  | `'button'`  |

## CSS 变量

| 属性               | 说明     | 默认值                    | 全局变量                        |
| ------------------ | -------- | ------------------------- | ------------------------------- |
| --text-color       | 文字颜色 | `var(--adm-color-text)`   | `--adm-button-text-color`       |
| --background-color | 背景颜色 | `var(--adm-color-white)`  | `--adm-button-background-color` |
| --border-radius    | 圆角大小 | `4px`                     | `--adm-button-border-radius`    |
| --border-width     | 边框宽度 | `1px`                     | `--adm-button-border-width`     |
| --border-style     | 边框样式 | `solid`                   | `--adm-button-border-style`     |
| --border-color     | 边框颜色 | `var(--adm-border-color)` | `--adm-button-border-color`     |

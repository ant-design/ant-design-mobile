# Button 按钮

用于开始一个即时操作。

## 何时使用

标记了一个或封装一组操作命令，响应用户点击行为，触发相应的业务逻辑。

## 示例

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

## Button

### 属性

| 属性        | 说明                                                                                | 类型                                                                                | 默认值                                |
| ----------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------- |
| block       | 是否是块级元素                                                                      | `boolean`                                                                           | `false`                               |
| color       | 按钮的颜色                                                                          | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger'`                      | `'default'`                           |
| disabled    | 是否禁用                                                                            | `boolean`                                                                           | `false`                               |
| fill        | 填充模式                                                                            | `'solid' \| 'outline' \| 'none'`                                                    | `'solid'`                             |
| loading     | 是否处于加载状态，`'auto'` 模式会监听 `onClick` 的 `Promise` 状态自动更新 `loading` | `boolean \| 'auto'`                                                                 | `false`                               |
| loadingIcon | 加载状态下的 `icon` 图标                                                            | `ReactNode`                                                                         | `<DotLoading color='currentColor' />` |
| loadingText | 加载状态下额外展示的文字                                                            | `string`                                                                            | -                                     |
| onClick     | 点击事件                                                                            | `(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void \| Promise<void>` | -                                     |
| shape       | 按钮的形状                                                                          | `'default' \| 'rounded' \| 'rectangular'`                                           | `'default'`                           |
| size        | 大小                                                                                | `'mini' \| 'small' \| 'middle' \| 'large'`                                          | `'middle'`                            |
| type        | 原生 `button` 元素的 `type` 属性                                                    | `'submit' \| 'reset' \| 'button'`                                                   | `'button'`                            |

此外，还支持原生 `button` 元素的以下属性：`onMouseDown` `onMouseUp` `onTouchStart` `onTouchEnd`。

### CSS 变量

| 属性               | 说明     | 默认值                    | 全局变量                        |
| ------------------ | -------- | ------------------------- | ------------------------------- |
| --background-color | 背景颜色 | `var(--adm-color-white)`  | `--adm-button-background-color` |
| --border-color     | 边框颜色 | `var(--adm-border-color)` | `--adm-button-border-color`     |
| --border-radius    | 圆角大小 | `4px`                     | `--adm-button-border-radius`    |
| --border-style     | 边框样式 | `solid`                   | `--adm-button-border-style`     |
| --border-width     | 边框宽度 | `1px`                     | `--adm-button-border-width`     |
| --text-color       | 文字颜色 | `var(--adm-color-text)`   | `--adm-button-text-color`       |

### Ref

| 属性          | 说明             | 类型                          |
| ------------- | ---------------- | ----------------------------- |
| nativeElement | 原始 button 元素 | `HtmlButtonElement` \| `null` |

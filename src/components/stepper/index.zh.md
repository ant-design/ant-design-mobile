# Stepper 步进器

一种两段式控制，增加、减少或修改数值。

## 何时使用

适用于在一定范围内输入、调整当前数值。

## 示例

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

## Stepper

### 属性

| 参数          | 说明                                                  | 类型                                              | 默认值  |
| ------------- | ----------------------------------------------------- | ------------------------------------------------- | ------- |
| allowEmpty    | 是否允许内容为空                                      | `boolean`                                         | `false` |
| defaultValue  | 默认值                                                | `number \| null`                                  | `0`     |
| digits        | 格式化到小数点后固定位数，设置为 `0` 表示格式化到整数 | `number`                                          | -       |
| disabled      | 是否禁用步进器                                        | `boolean`                                         | `false` |
| inputReadOnly | 输入框是否只读                                        | `boolean`                                         | `false` |
| max           | 最大值                                                | `number`                                          | -       |
| min           | 最小值                                                | `number`                                          | -       |
| onBlur        | 输入框失去焦点时触发                                  | `(e: React.FocusEvent<HTMLInputElement>) => void` | -       |
| onChange      | 变化时的回调                                          | `(value: number \| null) => void`                 | -       |
| onFocus       | 输入框获得焦点时触发                                  | `(e: React.FocusEvent<HTMLInputElement>) => void` | -       |
| step          | 每次改变步数，可以为小数                              | `number`                                          | `1`     |
| value         | 当前数，受控值                                        | `number \| null`                                  | -       |

当 `allowEmpty` 为 `true` 时，`onChange` 的 `value` 参数可能会为 `null`，在使用时请留意。

### CSS 变量

| 属性                      | 说明                              | 默认值                      |
| ------------------------- | --------------------------------- | --------------------------- |
| --active-border           | 输入框 Focus 状态下，四周边框样式 | `var(--border)`             |
| --border                  | 组件四周边框的样式                | `none`                      |
| --border-inner            | 组件内部边框的样式                | `solid 2px transparent`     |
| --border-radius           | 组件整体的圆角                    | `2px`                       |
| --button-background-color | 左右两侧按钮背景颜色              | `#f5f5f5`                   |
| --button-font-size        | 左右两侧按钮文字大小              | `15px`                      |
| --button-text-color       | 左右两侧按钮文字颜色              | `var(--adm-color-primary)`  |
| --button-width            | 左右两侧按钮的宽度                | `var(--height)`             |
| --height                  | 组件整体高度                      | `28px`                      |
| --input-background-color  | 输入框的背景颜色                  | `#f5f5f5`                   |
| --input-font-color        | 输入框文字颜色                    | `var(--adm-color-text)`     |
| --input-font-size         | 输入框文字大小                    | `var(--adm-font-size-main)` |
| --input-width             | 仅输入框的宽度                    | `44px`                      |

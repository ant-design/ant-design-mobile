# Stepper 步进器

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

### 属性

| 参数          | 说明                                                  | 类型                                              | 默认值  |
| ------------- | ----------------------------------------------------- | ------------------------------------------------- | ------- |
| value         | 当前数，受控值                                        | `number \| null`                                  | -       |
| defaultValue  | 默认值                                                | `number \| null`                                  | `0`     |
| onChange      | 变化时的回调                                          | `(value: number \| null) => void`                 | -       |
| min           | 最小值                                                | `number`                                          | -       |
| max           | 最大值                                                | `number`                                          | -       |
| step          | 每次改变步数，可以为小数                              | `number`                                          | `1`     |
| digits        | 格式化到小数点后固定位数，设置为 `0` 表示格式化到整数 | `number`                                          | -       |
| disabled      | 是否禁用步进器                                        | `boolean`                                         | `false` |
| inputReadOnly | 输入框是否只读                                        | `boolean`                                         | `false` |
| onFocus       | 输入框获得焦点时触发                                  | `(e: React.FocusEvent<HTMLInputElement>) => void` | -       |
| onBlur        | 输入框失去焦点时触发                                  | `(e: React.FocusEvent<HTMLInputElement>) => void` | -       |
| allowEmpty    | 是否允许内容为空                                      | `boolean`                                         | `false` |

当 `allowEmpty` 为 `true` 时，`onChange` 的 `value` 参数可能会为 `null`，在使用时请留意。

### CSS 变量

| 属性                      | 说明                              | 默认值                      |
| ------------------------- | --------------------------------- | --------------------------- |
| --height                  | 组件整体高度                      | `28px`                      |
| --input-width             | 仅输入框的宽度                    | `44px`                      |
| --input-font-size         | 输入框文字大小                    | `var(--adm-font-size-main)` |
| --input-font-color        | 输入框文字颜色                    | `var(--adm-color-text)`     |
| --input-background-color  | 输入框的背景颜色                  | `#f5f5f5`                   |
| --border-radius           | 组件整体的圆角                    | `2px`                       |
| --border                  | 组件四周边框的样式                | `none`                      |
| --border-inner            | 组件内部边框的样式                | `solid 2px transparent`     |
| --active-border           | 输入框 Focus 状态下，四周边框样式 | `var(--border)`             |
| --button-font-size        | 左右两侧按钮文字大小              | `15px`                      |
| --button-text-color       | 左右两侧按钮文字颜色              | `var(--adm-color-primary)`  |
| --button-background-color | 左右两侧按钮背景颜色              | `#f5f5f5`                   |
| --button-width            | 左右两侧按钮的宽度                | `var(--height)`             |

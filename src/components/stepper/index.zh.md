# Stepper 步进器

<code src="./demos/demo1.tsx"></code>
<code src="./demos/demo2.tsx" debug></code>

### 属性

| 参数         | 说明                                                  | 类型                                              | 默认值  |
| ------------ | ----------------------------------------------------- | ------------------------------------------------- | ------- |
| value        | 当前数，受控值                                        | `number`                                          | -       |
| onChange     | 变化时的回调                                          | `(value: number) => void`                         | -       |
| defaultValue | 默认值                                                | `number`                                          | `0`     |
| min          | 最小值                                                | `number`                                          | -       |
| max          | 最大值                                                | `number`                                          | -       |
| step         | 每次改变步数，可以为小数                              | `number`                                          | `1`     |
| digits       | 格式化到小数点后固定位数，设置为 `0` 表示格式化到整数 | `number`                                          | -       |
| disabled     | 是否禁用步进器                                        | `boolean`                                         | `false` |
| onFocus      | 输入框获得焦点时触发                                  | `(e: React.FocusEvent<HTMLInputElement>) => void` | -       |
| onBlur       | 输入框失去焦点时触发                                  | `(e: React.FocusEvent<HTMLInputElement>) => void` | -       |

### CSS 变量

| 属性                      | 说明                              | 默认值                      |
| ------------------------- | --------------------------------- | --------------------------- |
| --height                  | 组件整体高度                      | `22px`                      |
| --input-width             | 仅输入框的宽度                    | `40px`                      |
| --input-font-size         | 输入框文字大小                    | `var(--adm-font-size-main)` |
| --border-radius           | 组件整体的圆角                    | `2px`                       |
| --border                  | 组件四周边框的样式                | `1px solid #e5e5e5`         |
| --border-inner            | 组件内部边框的样式                | `var(--border)`             |
| --active-border           | 输入框 Focus 状态下，四周边框样式 | `var(--border)`             |
| --button-font-size        | 左右两侧按钮文字大小              | `10px`                      |
| --button-background-color | 左右两侧按钮背景颜色              | `transparent`               |
| --button-width            | 左右两侧按钮的宽度                | `22px`                      |
| --input-font-color        | 输入框文字颜色                    | `var(--adm-color-text)`     |
| --button-text-color       | 左右两侧按钮文字颜色              | `var(--adm-color-primary)`  |

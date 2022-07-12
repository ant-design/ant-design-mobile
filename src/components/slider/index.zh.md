# Slider 滑动输入条

滑动型输入器，展示当前值和可选范围。

## 何时使用

当用户需要在数值区间/自定义区间内进行选择时，可为连续或离散值。

## 示例

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

## Slider

### 属性

| 属性          | 说明                                                                                            | 类型                                          | 默认值               |
| ------------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------- | -------------------- |
| defaultValue  | 默认值                                                                                          | `number \| [number, number]`                  | `range ? [0, 0] : 0` |
| disabled      | 是否禁用                                                                                        | `boolean`                                     | `false`              |
| icon          | 滑块的图标                                                                                      | `ReactNode`                                   | -                    |
| marks         | 刻度标记                                                                                        | `{ [key: number]: React.ReactNode }`          | -                    |
| max           | 最大值                                                                                          | `number`                                      | `100`                |
| min           | 最小值                                                                                          | `number`                                      | `0`                  |
| onAfterChange | 与 `touchend` 触发时机一致，把当前值作为参数传入                                                | `(value: number \| [number, number]) => void` | -                    |
| onChange      | 拖拽滑块时触发，并把当前拖拽的值作为参数传入                                                    | `(value: number \| [number, number]) => void` | -                    |
| popover       | 是否在拖动时显示悬浮提示，支持传入函数自定义渲染内容                                            | `boolean \| ((value: number) => ReactNode)`   | `false`              |
| range         | 是否为双滑块                                                                                    | `boolean`                                     | `false`              |
| step          | 步距，取值必须大于 `0`，并且可被 `(max - min)` 整除。当 `marks` 不为空对象时，`step` 的配置失效 | `number`                                      | `1`                  |
| ticks         | 是否显示刻度                                                                                    | `boolean`                                     | `false`              |
| value         | 当前值                                                                                          | `number \| [number, number]`                  | -                    |

### CSS 变量

| 属性         | 说明     | 默认值                     |
| ------------ | -------- | -------------------------- |
| --fill-color | 填充颜色 | `var(--adm-color-primary)` |

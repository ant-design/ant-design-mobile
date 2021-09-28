# Slider 滑动输入条

<code src="./demos/index.tsx"></code>

## API

### Slider

| 属性          | 说明                                                                                            | 类型                                          | 默认值               |
| ------------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------- | -------------------- |
| min           | 最小值                                                                                          | `number`                                      | `0`                  |
| max           | 最大值                                                                                          | `number`                                      | `100`                |
| marks         | 刻度标记                                                                                        | `{ [key: number]: React.ReactNode }`          | -                    |
| step          | 步距，取值必须大于 `0`，并且可被 `(max - min)` 整除。当 `marks` 不为空对象时，`step` 的配置失效 | `number`                                      | `1`                  |
| ticks         | 是否显示刻度                                                                                    | `boolean`                                     | `false`              |
| disabled      | 是否禁用                                                                                        | `boolean`                                     | `false`              |
| value         | 当前值                                                                                          | `number \| [number, number]`                  | -                    |
| range         | 是否为双滑块                                                                                    | `boolean`                                     | `false`              |
| defaultValue  | 默认值                                                                                          | `number \| [number, number]`                  | `range ? [0, 0] : 0` |
| onChange      | 拖拽滑块时触发，并把当前拖拽的值作为参数传入                                                    | `(value: number \| [number, number]) => void` | -                    |
| onAfterChange | 与 `touchend` 触发时机一致，把当前值作为参数传入                                                | `(value: number \| [number, number]) => void` | -                    |

## CSS 变量

| 属性         | 说明     | 默认值                     |
| ------------ | -------- | -------------------------- |
| --fill-color | 填充颜色 | `var(--adm-color-primary)` |

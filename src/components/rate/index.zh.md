# Rate 评分

用图形表示评分等级程度。

## 何时使用

适用于展示事物评级以及快速打分。

## 示例

<code src="./demos/demo1.tsx"></code>

## Rate

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| allowClear | 是否允许再次点击后清除 | `boolean` | `true` |
| allowHalf | 是否允许半选 | `boolean` | `false` |
| character | 自定义字符 | `ReactNode` | 默认的星形 |
| count | star 总数 | `number` | `5` |
| defaultValue | 默认值 | `number` | `0` |
| onChange | 选择时的回调 | `(value: number) => void` | - |
| readOnly | 只读，无法进行交互 | `boolean` | `false` |
| value | 当前数，受控值 | `number` | - |

### CSS 变量

| 属性 | 说明 | 默认值 |
| --- | --- | --- |
| --active-color | 填充色 | `var(--adm-color-yellow)` |
| --star-size | star 大小 | `24px` |
| --inactive-color | 原始填充色 | `var(--adm-color-border)` |
| --inactive-color-half | 原始填充色（半选模式 - 左半侧） | `var(--adm-color-border)` |

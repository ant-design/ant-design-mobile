# Rate 评分

<code src="./demos/index.tsx"></code>

## 属性

| 属性         | 说明                   | 类型                      | 默认值           |
| ------------ | ---------------------- | ------------------------- | ---------------- |
| allowClear   | 是否允许再次点击后清除 | `boolean`                 | `true`           |
| allowHalf    | 是否允许半选           | `boolean`                 | `false`          |
| character    | 自定义字符             | `ReactNode`               | `<StarFilled />` |
| count        | star 总数              | `number`                  | `5`              |
| defaultValue | 默认值                 | `number`                  | `0`              |
| readOnly     | 只读，无法进行交互     | `boolean`                 | `false`          |
| value        | 当前数，受控值         | `number`                  | -                |
| onChange     | 选择时的回调           | `(value: number) => void` | -                |

## CSS 变量

| 属性           | 说明      | 默认值    |
| -------------- | --------- | --------- |
| --star-size    | star 大小 | `24px`    |
| --active-color | 填充色    | `#ffd21e` |

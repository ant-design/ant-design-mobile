# Rate 评分

<code src="./demo/index.tsx" />

# API

| 属性         | 说明                   | 类型                   | 默认值           |
| ------------ | ---------------------- | ---------------------- | ---------------- |
| allowClear   | 是否允许再次点击后清除 | boolean                | true             |
| allowHalf    | 是否允许半选           | boolean                | false            |
| character    | 自定义字符             | ReactNode              | \<StarFilled \/> |
| count        | star 总数              | number                 | 5                |
| defaultValue | 默认值                 | number                 | 0                |
| readonly     | 只读，无法进行交互     | boolean                | false            |
| value        | 当前数，受控值         | number                 | -                |
| onChange     | 选择时的回调           | function(value:number) | -                |

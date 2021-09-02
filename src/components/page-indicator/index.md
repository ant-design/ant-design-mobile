# PageIndicator 页码指示器

<code src="./demos/demo1.tsx"></code>

## 属性

| 属性    | 说明                    | 类型                 | 默认值    |
| ------- | ----------------------- | -------------------- | --------- |
| total   | 总页数                  | number               | -         |
| current | 当前页（从 0 开始计数） | number               | -         |
| color   | 颜色                    | 'primary' \| 'white' | 'primary' |

## CSS 变量

| 属性               | 说明           | 默认值                   |
| ------------------ | -------------- | ------------------------ |
| --active-color     | 当前页的颜色   | var(--adm-color-primary) |
| --non-active-color | 非当前页的颜色 | rgba(0, 0, 0, 0.2)       |

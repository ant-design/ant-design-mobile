# Card 卡片

<code src="./demos/index.tsx">

## API

| 属性            | 说明                | 类型                                                            | 默认值 |
| --------------- | ------------------- | --------------------------------------------------------------- | ------ |
| title           | header 左边区域     | `ReactNode`                                                     | -      |
| extra           | header 右边区域     | `ReactNode`                                                     | -      |
| headerStyle     | header 自定义样式   | `React.CSSProperties`                                           | -      |
| headerClassName | header 自定义类名   | `string`                                                        | -      |
| bodyStyle       | body 自定义样式     | `React.CSSProperties`                                           | -      |
| bodyClassName   | body 自定义类名     | `string`                                                        | -      |
| onClick         | 卡片点击事件        | `(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void` | -      |
| onHeaderClick   | header 区域点击事件 | `(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void` | -      |
| onBodyClick     | body 区域点击事件   | `(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void` | -      |

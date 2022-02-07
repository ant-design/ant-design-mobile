# Tag 标签

<code src="./demos/demo1.tsx"></code>

### 属性

| 属性    | 说明         | 类型                                                                     | 默认值      |
| ------- | ------------ | ------------------------------------------------------------------------ | ----------- |
| color   | 标签色       | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| string` | `'default'` |
| fill    | 填充模式     | `'solid' \| 'outline'`                                                   | `'solid'`   |
| round   | 是否圆角     | `boolean`                                                                | `false`     |
| onClick | 标签点击事件 | `(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void`         | -           |

### CSS 变量

| 属性               | 说明                       | 默认值                                                                                        | 全局变量                  |
| ------------------ | -------------------------- | --------------------------------------------------------------------------------------------- | ------------------------- |
| --text-color       | 文字颜色                   | 当 `fill=solid` 时，默认值为 `#ffffff`；当 `fill=outline` 时，默认值为 `color` 属性对应的颜色 | -                         |
| --background-color | 背景颜色                   | 当 `fill=solid` 时，默认值为 `color` 属性对应的颜色；当 `fill=outline` 时，默认值为 `#ffffff` | -                         |
| --border-color     | 边框颜色                   | `color` 属性对应的颜色                                                                        | -                         |
| --border-radius    | `round=false` 时的圆角大小 | `2px`                                                                                         | `--adm-tag-border-radius` |

# Swiper 走马灯

<code src="./demos/demo1.tsx"></code>

## Swiper

### 属性

| 属性             | 说明                      | 类型                    | 默认值 |
| ---------------- | ------------------------- | ----------------------- | ------ |
| defaultIndex     | 初始位置                  | number                  | 0      |
| allowTouchMove   | 是否允许手势滑动          | boolean                 | true   |
| autoplay         | 是否自动切换              | boolean                 | false  |
| autoplayInterval | 自动切换的间隔，单位为 ms | number                  | 3000   |
| loop             | 是否循环                  | boolean                 | true   |
| onIndexChange    | 切换时触发                | (index: number) => void | -      |

### CSS 变量

| 属性     | 说明 | 默认值 |
| -------- | ---- | ------ |
| --height | 高度 | auto   |
| --width  | 宽度 | 100%   |

### Ref

| 属性    | 说明                    |
| ------- | ----------------------- |
| swipeTo | (index: number) => void |

## Swiper.Item

### CSS 变量

| 属性     | 说明 | 默认值 |
| -------- | ---- | ------ |
| --height | 高度 | auto   |
| --width  | 宽度 | 100%   |

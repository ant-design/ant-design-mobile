# Swiper 走马灯

<code src="./demos/demo1.tsx"></code>

## Swiper

### 属性

| 属性             | 说明                      | 类型                                                                       | 默认值 |
| ---------------- | ------------------------- | -------------------------------------------------------------------------- | ------ |
| defaultIndex     | 初始位置                  | number                                                                     | 0      |
| allowTouchMove   | 是否允许手势滑动          | boolean                                                                    | true   |
| autoplay         | 是否自动切换              | boolean                                                                    | false  |
| autoplayInterval | 自动切换的间隔，单位为 ms | number                                                                     | 3000   |
| loop             | 是否循环                  | boolean                                                                    | true   |
| onIndexChange    | 切换时触发                | (index: number) => void                                                    | -      |
| indicatorProps   | 指示器的相关属性          | 支持 [PageIndicator](./page-indicator) 的 `color` `style` `className` 属性 | -      |

### CSS 变量

| 属性            | 说明               | 默认值 |
| --------------- | ------------------ | ------ |
| --height        | 高度               | auto   |
| --width         | 宽度               | 100%   |
| --slide-width   | 滑块宽度           | 100%   |
| --border-radius | 整体组件的圆角     | 0      |
| --track-padding | 轨道区域的 padding | 0      |

### Ref

| 属性    | 类型                    |
| ------- | ----------------------- |
| swipeTo | (index: number) => void |

## Swiper.Item

| 属性    | 说明           | 类型        | 默认值 |
| ------- | -------------- | ----------- | ------ |
| onClick | 点击滑块时触发 | (e) => void | -      |

# Swiper 走马灯

### 基础用法

<code src="./demos/demo1.tsx"></code>

### 不是满宽的滑块

<code src="./demos/demo4.tsx"></code>

### 指示器

<code src="./demos/demo2.tsx"></code>

### 全屏引导

<code src="./demos/demo3.tsx"></code>

### 竖向

<code src="./demos/demo5.tsx"></code>

<code src="./demos/demo6.tsx" debug></code>
<code src="./demos/demo7.tsx" debug></code>

## Swiper

### 属性

| 属性             | 说明                                                                            | 类型                                                                       | 默认值         |
| ---------------- | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------- |
| defaultIndex     | 初始位置                                                                        | `number`                                                                   | `0`            |
| allowTouchMove   | 是否允许手势滑动                                                                | `boolean`                                                                  | `true`         |
| autoplay         | 是否自动切换                                                                    | `boolean`                                                                  | `false`        |
| autoplayInterval | 自动切换的间隔，单位为 `ms`                                                     | `number`                                                                   | `3000`         |
| loop             | 是否循环                                                                        | `boolean`                                                                  | `true`         |
| direction        | 方向，默认是水平方向                                                            | `'horizontal' \| 'vertical'`                                               | `'horizontal'` |
| onIndexChange    | 切换时触发                                                                      | `(index: number) => void`                                                  | -              |
| indicatorProps   | 指示器的相关属性                                                                | 支持 [PageIndicator](./page-indicator) 的 `color` `style` `className` 属性 | -              |
| indicator        | 自定义指示器                                                                    | `(total: number, current: number) => ReactNode`                            | -              |
| slideSize        | 滑块的宽度百分比                                                                | `number`                                                                   | `100`          |
| trackOffset      | 滑块轨道整体的偏移量百分比                                                      | `number`                                                                   | `0`            |
| stuckAtBoundary  | 是否在边界两边卡住，避免出现空白，仅在非 `loop` 模式且 `slideSize` < 100 时生效 | `boolean`                                                                  | `false`        |

### CSS 变量

| 属性            | 说明                 | 默认值 |
| --------------- | -------------------- | ------ |
| --height        | 高度                 | `auto` |
| --width         | 宽度                 | `100%` |
| --border-radius | 整体组件的圆角       | `0`    |
| --track-padding | 轨道区域的 `padding` | `0`    |

### Ref

| 属性      | 说明           | 类型                      |
| --------- | -------------- | ------------------------- |
| swipeTo   | 切换到指定索引 | `(index: number) => void` |
| swipePrev | 切换到上一张   | `() => void`              |
| swipeNext | 切换到下一张   | `() => void`              |

## Swiper.Item

| 属性    | 说明           | 类型                                                        | 默认值 |
| ------- | -------------- | ----------------------------------------------------------- | ------ |
| onClick | 点击滑块时触发 | `(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void` | -      |

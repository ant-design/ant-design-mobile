# Swiper

### Basic Usage

<code src="./demos/demo1.tsx"></code>

### Slides which are not full-width

<code src="./demos/demo4.tsx"></code>

### Indicators

<code src="./demos/demo2.tsx"></code>

### Full Page Guide

<code src="./demos/demo3.tsx"></code>

### Vertical

When you use a vertical Swiper, be sure to set its height through the `--height` CSS variable, otherwise the Swiper will display abnormally.

<code src="./demos/demo5.tsx"></code>

<code src="./demos/demo6.tsx" debug></code>
<code src="./demos/demo7.tsx" debug></code>

## Swiper

### Props

| Name             | Description                                                                                                                  | Type                                                                       | Default        |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------- |
| defaultIndex     | The initial position                                                                                                         | `number`                                                                   | `0`            |
| allowTouchMove   | Whether to allow gesture sliding                                                                                             | `boolean`                                                                  | `true`         |
| autoplay         | Whether to switch automatically                                                                                              | `boolean`                                                                  | `false`        |
| autoplayInterval | Automatic switching interval, the unit is `ms`                                                                               | `number`                                                                   | `3000`         |
| loop             | Whether to loop                                                                                                              | `boolean`                                                                  | `false`        |
| direction        | Layout direction                                                                                                             | `'horizontal' \| 'vertical'`                                               | `'horizontal'` |
| onIndexChange    | Triggered on index is changed                                                                                                | `(index: number) => void`                                                  | -              |
| indicatorProps   | Related attributes of the indicator                                                                                          | support [PageIndicator](./page-indicator) `color` `style` `className` prop | -              |
| indicator        | Render a customized indicator                                                                                                | `(total: number, current: number) => ReactNode`                            | -              |
| slideSize        | The slide width in percentage                                                                                                | `number`                                                                   | `100`          |
| trackOffset      | The track offset in percentage                                                                                               | `number`                                                                   | `0`            |
| stuckAtBoundary  | Whether to stuck at boundary in order to prevent white spaces. Only available when `loop` is `false` and `slideWidth` < 100. | `boolean`                                                                  | `true`         |
| rubberband       | Whether to enable the rubberband effect.                                                                                     | `boolean`                                                                  | `true`         |

### CSS Variables

| Name            | Description                              | Default |
| --------------- | ---------------------------------------- | ------- |
| --height        | height                                   | `auto`  |
| --width         | width                                    | `100%`  |
| --border-radius | rounded corners of the overall component | `0`     |
| --track-padding | `padding` in the track area              | `0`     |

### Ref

| Name      | Description                   | Type                      |
| --------- | ----------------------------- | ------------------------- |
| swipeTo   | Switch to the specified index | `(index: number) => void` |
| swipePrev | Switch to the previous one    | `() => void`              |
| swipeNext | Switch to the next one        | `() => void`              |

## Swiper.Item

| Name    | Description                          | Type                                                        | Default |
| ------- | ------------------------------------ | ----------------------------------------------------------- | ------- |
| onClick | Triggered when the slider is clicked | `(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void` | -       |

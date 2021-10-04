# Swiper

<code src="./demos/demo1.tsx"></code>

## Swiper

### API

| Name             | Description                                    | Type                                                                       | Default |
| ---------------- | ---------------------------------------------- | -------------------------------------------------------------------------- | ------- |
| defaultIndex     | the initial position                           | `number`                                                                   | `0`     |
| allowTouchMove   | whether to allow gesture sliding               | `boolean`                                                                  | `true`  |
| autoplay         | whether to switch automatically                | `boolean`                                                                  | `false` |
| autoplayInterval | automatic switching interval, the unit is `ms` | `number`                                                                   | `3000`  |
| loop             | Whether to loop                                | `boolean`                                                                  | `true`  |
| onIndexChange    | triggered on index is changed                  | `(index: number) => void`                                                  | -       |
| indicatorProps   | related attributes of the indicator            | support [PageIndicator](./page-indicator) `color` `style` `className` prop | -       |

### CSS Variables

| Name            | Description                              | Default |
| --------------- | ---------------------------------------- | ------- |
| --height        | height                                   | `auto`  |
| --width         | width                                    | `100%`  |
| --slide-width   | slide width                              | `100%`  |
| --border-radius | rounded corners of the overall component | `0`     |
| --track-padding | `padding` in the track area              | `0`     |
| --track-offset  | the overall offset of the track          | `0`     |

### Ref

| Name      | Description                   | Type                      |
| --------- | ----------------------------- | ------------------------- |
| swipeTo   | switch to the specified index | `(index: number) => void` |
| swipePrev | switch to the previous one    | `() => void`              |
| swipeNext | switch to the next one        | `() => void`              |

## Swiper.Item

| Name    | Description                          | Type                                                        | Default |
| ------- | ------------------------------------ | ----------------------------------------------------------- | ------- |
| onClick | triggered when the slider is clicked | `(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void` | -       |

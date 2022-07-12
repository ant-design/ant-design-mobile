# Slider

Swipe input showing current value and selectable range.

## When to Use

When the user needs to select within the numerical interval/custom interval, it can be a continuous or discrete value.

## Demos

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

## Slider

### Props

| Name          | Description                                                                                                                                              | Type                                          | Default              |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | -------------------- |
| defaultValue  | Default value                                                                                                                                            | `number \| [number, number]`                  | `range ? [0, 0] : 0` |
| disabled      | Whether disabled                                                                                                                                         | `boolean`                                     | `false`              |
| icon          | The icon of slider                                                                                                                                       | `ReactNode`                                   | -                    |
| marks         | Tick marks                                                                                                                                               | `{ [key: number]: React.ReactNode }`          | -                    |
| max           | Max value                                                                                                                                                | `number`                                      | `100`                |
| min           | Min value                                                                                                                                                | `number`                                      | `0`                  |
| onAfterChange | Consistent with the trigger timing of `touchend`, pass the current value as a parameter                                                                  | `(value: number \| [number, number]) => void` | -                    |
| onChange      | Triggered when the slider is dragged, and the current dragged value is passed in as a parameter                                                          | `(value: number \| [number, number]) => void` | -                    |
| popover       | Whether to display the popover when dragging. Support passing in function to customize the rendering content.                                            | `boolean \| ((value: number) => ReactNode)`   | `false`              |
| range         | Whether it is a double sliders                                                                                                                           | `boolean`                                     | `false`              |
| step          | Step distance, the value must be greater than `0`, and can be divisible by `(max-min)`. When `marks` is not null, the configuration of `step` is invalid | `number`                                      | `1`                  |
| ticks         | Whether to display the scale                                                                                                                             | `boolean`                                     | `false`              |
| value         | Current value                                                                                                                                            | `number \| [number, number]`                  | -                    |

### CSS Variables

| Name         | Description  | Default                    |
| ------------ | ------------ | -------------------------- |
| --fill-color | filled color | `var(--adm-color-primary)` |

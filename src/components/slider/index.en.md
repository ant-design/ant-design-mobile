# Slider

<code src="./demos/index.tsx"></code>

## API

### Slider

| Name          | Description                                                                                                                                              | Type                                          | Default              |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | -------------------- |
| min           | min value                                                                                                                                                | `number`                                      | `0`                  |
| max           | max value                                                                                                                                                | `number`                                      | `100`                |
| marks         | tick marks                                                                                                                                               | `{ [key: number]: React.ReactNode }`          | -                    |
| step          | step distance, the value must be greater than `0`, and can be divisible by `(max-min)`. When `marks` is not null, the configuration of `step` is invalid | `number`                                      | `1`                  |
| ticks         | Whether to display the scale                                                                                                                             | `boolean`                                     | `false`              |
| disabled      | whether disabled                                                                                                                                         | `boolean`                                     | `false`              |
| value         | current value                                                                                                                                            | `number \| [number, number]`                  | -                    |
| range         | whether it is a double sliders                                                                                                                           | `boolean`                                     | `false`              |
| defaultValue  | default value                                                                                                                                            | `number \| [number, number]`                  | `range ? [0, 0] : 0` |
| onChange      | triggered when the slider is dragged, and the current dragged value is passed in as a parameter                                                          | `(value: number \| [number, number]) => void` | -                    |
| onAfterChange | consistent with the trigger timing of `touchend`, pass the current value as a parameter                                                                  | `(value: number \| [number, number]) => void` | -                    |

## CSS variables

| Name         | Description  | Default                    |
| ------------ | ------------ | -------------------------- |
| --fill-color | filled color | `var(--adm-color-primary)` |

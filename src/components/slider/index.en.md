# Slider

<code src="./demos/index.tsx"></code>

## API

### Slider

| Name          | Description                                                                                                                                              | Type                                          | Default              |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | -------------------- |
| min           | Min value                                                                                                                                                | `number`                                      | `0`                  |
| max           | Max value                                                                                                                                                | `number`                                      | `100`                |
| marks         | Tick marks                                                                                                                                               | `{ [key: number]: React.ReactNode }`          | -                    |
| step          | Step distance, the value must be greater than `0`, and can be divisible by `(max-min)`. When `marks` is not null, the configuration of `step` is invalid | `number`                                      | `1`                  |
| ticks         | Whether to display the scale                                                                                                                             | `boolean`                                     | `false`              |
| disabled      | Whether disabled                                                                                                                                         | `boolean`                                     | `false`              |
| value         | Current value                                                                                                                                            | `number \| [number, number]`                  | -                    |
| range         | Whether it is a double sliders                                                                                                                           | `boolean`                                     | `false`              |
| defaultValue  | Default value                                                                                                                                            | `number \| [number, number]`                  | `range ? [0, 0] : 0` |
| onChange      | Triggered when the slider is dragged, and the current dragged value is passed in as a parameter                                                          | `(value: number \| [number, number]) => void` | -                    |
| onAfterChange | Consistent with the trigger timing of `touchend`, pass the current value as a parameter                                                                  | `(value: number \| [number, number]) => void` | -                    |

## CSS Variables

| Name         | Description  | Default                    |
| ------------ | ------------ | -------------------------- |
| --fill-color | filled color | `var(--adm-color-primary)` |

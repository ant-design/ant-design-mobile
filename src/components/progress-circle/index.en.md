# ProgressCircle

<code src="./demos/demo1.tsx"></code>

### Props

| Name     | Description                    | Type              | Default |
| -------- | ------------------------------ | ----------------- | ------- |
| percent  | Percent of the progress circle | `number`          | `0`     |
| children | Customized information         | `React.ReactNode` | -       |

### CSS Variables

| Name          | Description                    | Default                    | Global                              |
| ------------- | ------------------------------ | -------------------------- | ----------------------------------- |
| --size        | Width and height of the canvas | `50px`                     | `--adm-progress-circle-size`        |
| --track-width | Width of the line              | `3px`                      | `--adm-progress-circle-track-width` |
| --track-color | Color of the track             | `#e5e5e5`                  | `--adm-progress-circle-track-color` |
| --fill-color  | Color of the fill part         | `var(--adm-color-primary)` | `--adm-progress-circle-fill-color`  |

## FAQ

### Important reminder about using rem

ProgressCircle only supports `px` units due to a styling bug in Safari with non-`px` units.

So if you use the rem layout in your project, the preprocessing of the styles at compile time will cause the default `--size` and `--track-width` units to become `rem`, which is likely to be used on iOS devices. bugs will appear. The workaround is to manually set `--size` and `--track-width` back to `px` units in the project.

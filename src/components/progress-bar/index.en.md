# ProgressBar

Percentage progress is represented as a bar graph.

## When to Use

It is suitable for displaying the current progress of the task.

## Demos

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

## ProgressBar

### Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| percent | Percent of the progress bar | `number` | `0` |
| rounded | Whether to round the corners | `boolean` | `true` |
| text | Whether to display progress text, support custom rendering content | `boolean \| ReactNode \| ((percent: number) => ReactNode)` | `false` |

### CSS Variables

| Name | Description | Default | Global |
| --- | --- | --- | --- |
| --fill-color | The color of fill part. | `var(--adm-color-primary)` | `--adm-progress-bar-fill-color` |
| --track-color | The color of line. | `var(--adm-color-border)` | `--adm-progress-bar-track-color` |
| --track-width | The width of line. | `8px` | `--adm-progress-bar-track-width` |
| --text-width | The width of text content. | `40px` | `--adm-progress-bar-text-width` |

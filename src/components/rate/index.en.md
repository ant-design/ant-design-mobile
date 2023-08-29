# Rate

Graphical representation of the degree of rating scale.

## When to Use

Useful for showing things ratings and quick scoring.

## Demos

<code src="./demos/demo1.tsx"></code>

## Rate

### Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| allowClear | Whether to allow clearing after another click. | `boolean` | `true` |
| allowHalf | Whether to allow the selection of half. | `boolean` | `false` |
| character | Custom character. | `ReactNode` | The default star shape. |
| count | Total number of stars. | `number` | `5` |
| defaultValue | The default value of rate. | `number` | `0` |
| onChange | Callback when select. | `(value: number) => void` | - |
| readOnly | The component is uninteractable when `true`. | `boolean` | `false` |
| value | The value of rate. | `number` | - |

### CSS Variables

| Name | Description | Default |
| --- | --- | --- |
| --active-color | Fill color when active. | `var(--adm-color-yellow)` |
| --star-size | Star size. | `24px` |
| --inactive-color | Fill color when inactive. | `var(--adm-color-border)` |
| --inactive-color-half | Fill color when inactive(half-selected mode - left half). | `var(--adm-color-border)` |

# Stepper

A two-stage control that increases, decreases or modifies values.

## When to Use

It is suitable for inputting and adjusting the current value within a certain range.

## Demos

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

<code src="./demos/demo3.tsx"></code>

## Stepper

### Props

| Name | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| allowEmpty | Whether to allow empty content. | `boolean` | `false` |
| defaultValue | Default value | `number \| null` | `0` |
| digits | Format to a fixed number of digits after the decimal point, set to `0` means format to integer. Will use `formatter` as display value when configured | `number` | - |
| disabled | Whether to disabled Stepper | `boolean` | `false` |
| formatter | Format value in input | `(value?: number) => string` | - | 5.26.0 |
| inputReadOnly | Whether input readonly or not | `boolean` | `false` |
| max | Max value | `number` | - |
| min | Min value | `number` | - |
| onBlur | Triggered when the input lose focus | `(e: React.FocusEvent<HTMLInputElement>) => void` | - |
| onChange | Callback when value is changed | `(value: number \| null) => void` | - |
| onFocus | Triggered when the input get focus | `(e: React.FocusEvent<HTMLInputElement>) => void` | - |
| parser | Parse input text into number which should work with `formatter` | `(text: string) => number` | - | 5.26.0 |
| step | The value to increase or decrease each time, can be a decimal | `number` | `1` |
| stringMode | Set value as string to support high precision decimals. Will set `defaultValue`,`value`, `min`, `max`, `onChange` to `string` type | `boolean` | `false` | 5.27.0 |
| value | Current number, controlled value | `number \| null` | - |

When `allowEmpty` is `true`, the `value` parameter of `onChange` may be `null`, please pay attention when using it.

### Ref

| Name          | Description                  | Type                         |
| ------------- | ---------------------------- | ---------------------------- |
| blur          | Let the input box lose focus | `() => void`                 |
| focus         | Let the input box get focus  | `() => void`                 |
| nativeElement | Native input element         | `HtmlInputElement` \| `null` |

### CSS Variables

| Name | Description | Default |
| --- | --- | --- |
| --active-border | In the focus state, the border style. | `var(--border)` |
| --border | Border style. | `none` |
| --border-inner | Inner border style. | `solid 2px transparent` |
| --border-radius | Radius of the stepper. | `2px` |
| --button-background-color | Background color of the button. | `#f5f5f5` |
| --button-font-size | Font size of the button. | `15px` |
| --button-text-color | Font color of the button. | `var(--adm-color-primary)` |
| --button-width | Width of the button. | `var(--height)` |
| --height | Height of the stepper. | `28px` |
| --input-background-color | Background color of input. | `#f5f5f5` |
| --input-font-color | Font color of the input. | `var(--adm-color-text)` |
| --input-font-size | Font size of input. | `var(--adm-font-size-main)` |
| --input-width | Width of the input. | `44px` |

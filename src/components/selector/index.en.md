# Selector

Select one or more from a set of options.

## When to Use

Provides multiple options for the user to choose from, typically used in filters and forms.

## Demos

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

## Selector

### Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| columns | Number of the displayed columns (Note that `grid` layout not support in IOS 9) | `number` | - |
| defaultValue | Selected value by default | `SelectorValue[]` | `[]` |
| disabled | Whether to all disable selecting | `boolean` | `false` |
| multiple | Whether to allow multiple selections | `boolean` | `false` |
| onChange | Triggered when the value is changed | `(value: SelectorValue[], extend: { items: SelectorOption[] }) => void` | - |
| options | Optional selector | `SelectorOption[]` | - |
| showCheckMark | Whether to show the check mark | `boolean` | `true` |
| value | Selected value | `SelectorValue[]` | - |

### CSS Variables

| Name | Description | Default |
| --- | --- | --- |
| --border | border style | `none` |
| --border-radius | Border radius of options | `2px` |
| --checked-border | Border style when checked | `none` |
| --checked-color | Background color when checked | `var(--adm-color-wathet)` |
| --checked-text-color | Text color when checked | `var(--adm-color-primary)` |
| --color | Background color | `#f5f5f5` |
| --padding | Padding of options | `8px 16px` |
| --text-color | Text color | `var(--adm-color-text)` |
| --gap | The gap between items, only take effect with `columns` | `8px` |
| --gap-horizontal | The horizontal gap between items, only take effect with `columns` | `var(--gap)` |
| --gap-vertical | The vertical gap between items, only take effect with `columns` | `var(--gap)` |

## Types

### SelectorValue

```ts | pure
type SelectorValue = string | number
```

### SelectorOption

| Name        | Description         | Type            | Default |
| ----------- | ------------------- | --------------- | ------- |
| description | Description text    | `ReactNode`     | -       |
| disabled    | Whether disabled    | `boolean`       | `false` |
| label       | Label text          | `ReactNode`     | -       |
| value       | Value of the option | `SelectorValue` | -       |

## Generics

`Selector` supports generics, you can manually control the type of attributes such as `value` and `onChange` in the following way:

```tsx
<Selector<'a' | 'b' | number>
  options={options}
  defaultValue={['a']}
  onChange={arr => console.log(arr)}
/>
```

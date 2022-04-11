# Selector

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

## Selector

### Props

| Name          | Description                          | Type                                                                    | Default |
| ------------- | ------------------------------------ | ----------------------------------------------------------------------- | ------- |
| value         | Selected value                       | `SelectorValue[]`                                                       | -       |
| defaultValue  | Selected value by default            | `SelectorValue[]`                                                       | `[]`    |
| columns       | Number of the displayed columns      | `number`                                                                | -       |
| options       | Optional selector                    | `SelectorOption[]`                                                      | -       |
| multiple      | Whether to allow multiple selections | `boolean`                                                               | `false` |
| disabled      | Whether to disable selecting         | `boolean`                                                               | `false` |
| onChange      | Triggered when the value is changed  | `(value: SelectorValue[], extend: { items: SelectorOption[] }) => void` | -       |
| showCheckMark | Whether to show the check mark       | `boolean`                                                               | `true`  |

### CSS Variables

| Name                 | Description                   | Default                    |
| -------------------- | ----------------------------- | -------------------------- |
| --color              | Background color              | `#f5f5f5`                  |
| --checked-color      | Background color when checked | `#e7f1ff`                  |
| --text-color         | Text color                    | `var(--adm-color-text)`    |
| --checked-text-color | Text color when checked       | `var(--adm-color-primary)` |
| --border             | border style                  | `none`                     |
| --checked-border     | Border style when checked     | `none`                     |
| --border-radius      | Border radius of options      | `2px`                      |
| --padding            | Padding of options            | `8px 16px`                 |

## Types

### SelectorValue

```ts | pure
type SelectorValue = string | number
```

### SelectorOption

| Name        | Description         | Type            | Default |
| ----------- | ------------------- | --------------- | ------- |
| label       | Label text          | `ReactNode`     | -       |
| description | Description text    | `ReactNode`     | -       |
| value       | Value of the option | `SelectorValue` | -       |
| disabled    | Whether disabled    | `boolean`       | `false` |

## Generics

`Selector` supports generics, you can manually control the type of attributes such as `value` and `onChange` in the following way:

```tsx
<Selector<'a' | 'b' | number>
  options={options}
  defaultValue={['a']}
  onChange={arr => console.log(arr)}
/>
```

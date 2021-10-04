# Selector

<code src="./demos/demo1.tsx"></code>

## API

| Name         | Description                            | Type                        | Default |
| ------------ | -------------------------------------- | --------------------------- | ------- |
| value        | selected value                         | `(string \| number)[]`      | `[]`    |
| defaultValue | selected value by default              | `(string \| number)[]`      | `[]`    |
| columns      | number of the displayed columns        | `number`                    | -       |
| options      | optional selector                      | `SelectorOption[]`          | -       |
| multiple     | whether to allow multiple selections   | `boolean`                   | `false` |
| disabled     | whether to diabled selections globally | `boolean`                   | `false` |
| onChange     | triggered when the value is changed    | `(value: string[]) => void` | -       |

## SelectorOption

| Name     | Description         | Type               | Default |
| -------- | ------------------- | ------------------ | ------- |
| label    | label text          | `string`           | -       |
| value    | value of the option | `string \| number` | -       |
| disabled | whether disabled    | `boolean`          | `false` |

## Generics

`Selector` supports generics, you can manually control the type of attributes such as `value` and `onChange` in the following way:

```tsx
<Selector<'a' | 'b' | number>
  options={options}
  defaultValue={['a']}
  onChange={arr => console.log(arr)}
/>
```

## CSS Variables

| Name            | Description             | Default   |
| --------------- | ----------------------- | --------- |
| --checked-color | filled background color | `#e7f1ff` |

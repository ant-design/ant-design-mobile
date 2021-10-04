# Switch

<code src="./demos/index.tsx"></code>

## API

### Switch

| Name           | Description                                 | Type                     | Default |
| -------------- | ------------------------------------------- | ------------------------ | ------- |
| checked        | specify whether it is currently opened      | `boolean`                | `false` |
| defaultChecked | Whether to open initially                   | `boolean`                | `false` |
| loading        | loading status                              | `boolean`                | `false` |
| disabled       | disabled status                             | `boolean`                | `false` |
| onChange       | callback function when the value is changed | `(val: boolean) => void` | -       |
| checkedText    | selected text                               | `ReactNode`              | -       |
| uncheckedText  | non-selected text                           | `ReactNode`              | -       |

## CSS variables

| Name            | Description  | Default                    |
| --------------- | ------------ | -------------------------- |
| --checked-color | filled color | `var(--adm-color-primary)` |

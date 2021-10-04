# Switch

<code src="./demos/index.tsx"></code>

## API

### Switch

| Name           | Description                                 | Type                     | Default |
| -------------- | ------------------------------------------- | ------------------------ | ------- |
| checked        | Specify whether it is currently opened      | `boolean`                | `false` |
| defaultChecked | Whether to open initially                   | `boolean`                | `false` |
| loading        | Loading status                              | `boolean`                | `false` |
| disabled       | Disabled status                             | `boolean`                | `false` |
| onChange       | Callback function when the value is changed | `(val: boolean) => void` | -       |
| checkedText    | Selected text                               | `ReactNode`              | -       |
| uncheckedText  | Non-selected text                           | `ReactNode`              | -       |

## CSS Variables

| Name            | Description  | Default                    |
| --------------- | ------------ | -------------------------- |
| --checked-color | filled color | `var(--adm-color-primary)` |

# Switch

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

### Props

| Name           | Description                                 | Type                              | Default |
| -------------- | ------------------------------------------- | --------------------------------- | ------- |
| checked        | Specify whether it is currently opened      | `boolean`                         | `false` |
| defaultChecked | Whether to open initially                   | `boolean`                         | `false` |
| loading        | Loading status                              | `boolean`                         | `false` |
| disabled       | Disabled status                             | `boolean`                         | `false` |
| beforeChange   | Execute before change                       | `(val: boolean) => Promise<void>` | -       |
| onChange       | Callback function when the value is changed | `(val: boolean) => void`          | -       |
| checkedText    | Selected text                               | `ReactNode`                       | -       |
| uncheckedText  | Non-selected text                           | `ReactNode`                       | -       |

### CSS Variables

| Name            | Description  | Default                    |
| --------------- | ------------ | -------------------------- |
| --checked-color | Filled color | `var(--adm-color-primary)` |
| --width         | Width        | `51px`                     |
| --height        | Height       | `31px`                     |
| --border-width  | Border width | `2px`                      |

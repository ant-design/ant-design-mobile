# Switch

switch selector.

## When to Use

- When it is necessary to represent a switch state/switch between two states.
- The difference from checkbox is that switching switch will directly trigger state change, while checkbox is generally used for state marking and needs to cooperate with submit operation.

## Demos

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

## Switch

### Props

| Name           | Description                                 | Type                              | Default |
| -------------- | ------------------------------------------- | --------------------------------- | ------- |
| beforeChange   | Execute before change                       | `(val: boolean) => Promise<void>` | -       |
| checked        | Specify whether it is currently opened      | `boolean`                         | `false` |
| checkedText    | Selected text                               | `ReactNode`                       | -       |
| defaultChecked | Whether to open initially                   | `boolean`                         | `false` |
| disabled       | Disabled status                             | `boolean`                         | `false` |
| loading        | Loading status                              | `boolean`                         | `false` |
| onChange       | Callback function when the value is changed | `(val: boolean) => void`          | -       |
| uncheckedText  | Non-selected text                           | `ReactNode`                       | -       |

### CSS Variables

| Name            | Description  | Default                    |
| --------------- | ------------ | -------------------------- |
| --border-width  | Border width | `2px`                      |
| --checked-color | Filled color | `var(--adm-color-primary)` |
| --height        | Height       | `31px`                     |
| --width         | Width        | `51px`                     |

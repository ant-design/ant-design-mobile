# SearchBar

The input box component of the search scene.

## When to Use

Narrow down the information pool to get targeted information quickly and easily.

## Demos

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

## SearchBar

### Props

| Name                   | Description                                                                                                                                                             | Type                                                      | Default             |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ------------------- |
| cancelText             | Text of the cancel button                                                                                                                                               | `string`                                                  | `'取消'`            |
| clearOnCancel          | Whether to clear the input after the cancel button is clicked                                                                                                           | `boolean`                                                 | `true`              |
| clearable              | Whether to enable the clear icon, the input would be cleared after the clear icon is clicked                                                                            | `boolean`                                                 | `true`              |
| icon                   | Icon                                                                                                                                                                    | `ReactNode`                                               | `<SearchOutline />` |
| maxLength              | The maximum number of characters the user can enter                                                                                                                     | `number`                                                  | -                   |
| onBlur                 | Triggered when the input lose focus                                                                                                                                     | `(e: React.FocusEvent<HTMLInputElement>) => void`         | -                   |
| onCancel               | Triggered when the cancel button is clicked                                                                                                                             | `() => void`                                              | -                   |
| onChange               | Triggered when the input content is changed                                                                                                                             | `(value: string) => void`                                 | -                   |
| onClear                | Triggered when the clear button is clicked                                                                                                                              | `() => void`                                              | -                   |
| onFocus                | Triggered when the input get focus                                                                                                                                      | `(e: React.FocusEvent<HTMLInputElement>) => void`         | -                   |
| onSearch               | Triggered when the enter key is input                                                                                                                                   | `(value: string) => void`                                 | -                   |
| onlyShowClearWhenFocus | If `true`, the clear button will only be displayed when the input box is focused. If `false`, the clear button will still be displayed after the input box loses focus. | `boolean`                                                 | `false`             |
| placeholder            | Hint text                                                                                                                                                               | `string`                                                  | -                   |
| showCancelButton       | Whether to display the cancel button on the right side of the search input                                                                                              | `boolean \| ((focus: boolean, value: string) => boolean)` | `false`             |
| value                  | Input value                                                                                                                                                             | `string`                                                  | -                   |

### CSS Variables

| Name                | Description              | Default                 |
| ------------------- | ------------------------ | ----------------------- |
| --background        | background color         | `#f5f5f5`               |
| --border-radius     | circle corner            | `6px`                   |
| --height            | input height             | `32px`                  |
| --padding-left      | The left padding.        | `8px`                   |
| --placeholder-color | `placeholder` font color | `var(--adm-color-weak)` |

## Ref

The same as [Input](./input)

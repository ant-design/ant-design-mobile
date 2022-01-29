# Input

The `Input` component is layout-independent. It only includes the most basic input box part. If you want to add borders, titles, or some operation buttons to it, you can use it with the `List` or `Form` components.

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

### API

| Name         | Description                                                                                   | Type                                                 | Default |
| ------------ | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- | ------- |
| value        | The input value                                                                               | `string`                                             | -       |
| defaultValue | The default value                                                                             | `string`                                             | -       |
| onChange     | Triggered when the input content is changed                                                   | `(value: string) => void`                            | -       |
| placeholder  | The prompt text                                                                               | `string`                                             | -       |
| disabled     | Whether it is disabled or not                                                                 | `boolean`                                            | `false` |
| readOnly     | Whether it is readonly or not                                                                 | `boolean`                                            | `false` |
| clearable    | Whether to enable the clear icon, the input box will be cleared after clicking the clear icon | `boolean`                                            | `false` |
| onClear      | Triggered after clicking the clear button                                                     | `() => void`                                         | -       |
| id           | The id of the input element, usually used with label                                          | `string`                                             | -       |
| onEnterPress | The callback when Enter key is pressed                                                        | `(e: React.KeyboardEvent<HTMLInputElement>) => void` | -       |

In addition, the following native attributes are supported: `maxLength` `minLength` `max` `min` `autoComplete` `enterKeyHint` `pattern` `inputMode` `type` `onFocus` `onBlur` `autoCapitalize` `autoCorrect` `onKeyDown` `onKeyUp` `onCompositionStart` `onCompositionEnd`

### CSS Variables

| Name                | Description             | Default                  |
| ------------------- | ----------------------- | ------------------------ |
| --font-size         | Text font size.         | `17px`                   |
| --color             | Text color.             | `var(--adm-color-text)`  |
| --placeholder-color | Placeholder text color. | `var(--adm-color-light)` |
| --text-align        | The alignment of text.  | `left`                   |

### Ref

| Name  | Description                  | Type         |
| ----- | ---------------------------- | ------------ |
| clear | Clear the input content      | `() => void` |
| focus | Let the input box get focus  | `() => void` |
| blur  | Let the input box lose focus | `() => void` |

## FAQ

### When the type is number, why does the maxLength limit not take effect?

In native `input`, `maxlength` only takes effect when `type` is `text`, `search`, `url`, `tel`, `email`, `password`, please refer to [MDN document](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#attr-maxlength)。

If you need to limit the number type to the input box, you can pass the `max` `min` prop.

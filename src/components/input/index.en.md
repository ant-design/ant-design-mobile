# Input

The `Input` component is layout-independent. It only includes the most basic input box part. If you want to add borders, titles, or some operation buttons to it, you can use it with the `List` or `Form` components.

<code src="./demos/index.tsx"></code>

## API

| Name         | Description                                                                                   | Type                      | Default |
| ------------ | --------------------------------------------------------------------------------------------- | ------------------------- | ------- |
| value        | the input value                                                                               | `string`                  | -       |
| defaultValue | the default value                                                                             | `string`                  | -       |
| onChange     | triggered when the input content is changed                                                   | `(value: string) => void` | -       |
| placeholder  | the prompt text                                                                               | `string`                  | -       |
| disabled     | whether it is disabled or not                                                                 | `boolean`                 | `false` |
| readOnly     | whether it is readonly or not                                                                 | `boolean`                 | `false` |
| clearable    | whether to enable the clear icon, the input box will be cleared after clicking the clear icon | `boolean`                 | `false` |
| onClear      | triggered after clicking the clear button                                                     | `() => void`              | -       |
| id           | the id of the input element, usually used with label                                          | `string`                  | -       |

In addition, the following native attributes are supported: `maxLength` `minLengh` `max` `min` `autoComplete` `enterKeyHint` `pattern` `type` `onFocus` `onBlur` `autoCapitalize` `autoCorrect`

## CSS Variables

| Name                | Description                  | Default                  |
| ------------------- | ---------------------------- | ------------------------ |
| --font-size         | font size                    | `17px`                   |
| --color             | font color                   | `var(--adm-color-text)`  |
| --placeholder-color | `placeholder` font color     | `var(--adm-color-light)` |
| --disabled-color    | text color in disabled state | `var(--adm-color-weak)`  |

## Ref

| Name  | Description                  | Type         |
| ----- | ---------------------------- | ------------ |
| clear | clear the input content      | `() => void` |
| focus | let the input box get focus  | `() => void` |
| blur  | let the input box lose focus | `() => void` |

## FAQ

### When the type is number, why does the maxLength limit not take effect?

In native `input`, `maxlength` only takes effect when `type` is `text`, `search`, `url`, `tel`, `email`, `password`, please refer to [MDN document](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#attr-maxlength)。

If you need to limit the number type to the input box, you can pass the `max` `min` prop.

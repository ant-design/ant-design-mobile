# Input

Entering content through the keyboard is the most basic form field wrapper.

## When to Use

It is generally used in form pages to collect information, and provides two types of text boxes and selection boxes.

The `Input` component is layout-independent. It only includes the most basic input box part. If you want to add borders, titles, or some operation buttons to it, you can use it with the `List` or `Form` components.

## Demos

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

## Input

### Props

| Name                   | Description                                                                                                                                                             | Type                                                 | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | ------- |
| clearable              | Whether to enable the clear icon, the input box will be cleared after clicking the clear icon                                                                           | `boolean`                                            | `false` |
| defaultValue           | The default value                                                                                                                                                       | `string`                                             | -       |
| disabled               | Whether it is disabled or not                                                                                                                                           | `boolean`                                            | `false` |
| id                     | The `id` of the `input` element, usually used with `label`                                                                                                              | `string`                                             | -       |
| max                    | Maximum value, only valid when `type` is `number`                                                                                                                       | `number`                                             | -       |
| min                    | Minimum value, only valid when `type` is `number`                                                                                                                       | `number`                                             | -       |
| onChange               | Triggered when the input content is changed                                                                                                                             | `(value: string) => void`                            | -       |
| onClear                | Triggered after clicking the clear button                                                                                                                               | `() => void`                                         | -       |
| onEnterPress           | The callback when Enter key is pressed                                                                                                                                  | `(e: React.KeyboardEvent<HTMLInputElement>) => void` | -       |
| onlyShowClearWhenFocus | If `true`, the clear button will only be displayed when the input box is focused. If `false`, the clear button will still be displayed after the input box loses focus. | `boolean`                                            | `true`  |
| placeholder            | The prompt text                                                                                                                                                         | `string`                                             | -       |
| readOnly               | Whether it is readonly or not                                                                                                                                           | `boolean`                                            | `false` |
| value                  | The input value                                                                                                                                                         | `string`                                             | -       |

In addition, the following native attributes are supported: `maxLength` `minLength` `max` `min` `autoComplete` `autoFocus` `enterKeyHint` `pattern` `inputMode` `type` `onFocus` `onBlur` `autoCapitalize` `autoCorrect` `onKeyDown` `onKeyUp` `onCompositionStart` `onCompositionEnd` `onClick`

### CSS Variables

| Name                | Description             | Default                  |
| ------------------- | ----------------------- | ------------------------ |
| --color             | Text color.             | `var(--adm-color-text)`  |
| --font-size         | Text font size.         | `17px`                   |
| --placeholder-color | Placeholder text color. | `var(--adm-color-light)` |
| --text-align        | The alignment of text.  | `left`                   |

### Ref

| Name          | Description                  | Type                         |
| ------------- | ---------------------------- | ---------------------------- |
| blur          | Let the input box lose focus | `() => void`                 |
| clear         | Clear the input content      | `() => void`                 |
| focus         | Let the input box get focus  | `() => void`                 |
| nativeElement | Native input element         | `HtmlInputElement` \| `null` |

## FAQ

### When the type is number, why does the maxLength limit not take effect?

In native `input`, `maxlength` only takes effect when `type` is `text`, `search`, `url`, `tel`, `email`, `password`, please refer to [MDN document](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#attr-maxlength)。

If you need to limit the input box with number type, you can pass the `max` `min` prop.

### On iOS devices, when I use the input method to input text and click the clear button, why does the input box lose focus sometimes?

This is expected behavior, see this [issue](https://github.com/ant-design/ant-design-mobile/issues/5212) for details on why.

### Under iOS, why is `autoFocus` set but still can't get focus automatically?

This is expected behavior because the iOS system has limitations on focusing. See this [issue](https://github.com/ant-design/ant-design-mobile/issues/5256) for specific reasons.

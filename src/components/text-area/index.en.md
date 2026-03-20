# TextArea

Entering content through the keyboard is the most basic form field wrapper.

## When to Use

Long text input that requires wrapping.

## Demos

<code src="./demos/demo1.tsx"></code>

## TextArea

### Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| autoSize | Adaptive content height | `boolean \| { minRows?: number, maxRows?: number }` | `false` |
| clearable | Whether to enable the clear feature, supports passing an object for detailed configuration | `boolean \| TextAreaClearableConfig` | `false` |
| defaultValue | Input value by default | `string` | - |
| id | `id` of `textarea` element, often used in conjunction with `label` | `string` | - |
| maxLength | Maximum number of characters | `number` | - |
| onChange | Triggered when the TextArea content changed | `(value: string) => void` | - |
| placeholder | Hint text | `string` | - |
| rows | Number of rows | `number` | `2` |
| showCount | Display the number of words, supports custom render | `boolean \| ((length: number, maxLength?: number) => ReactNode)` | `false` |
| value | Input value | `string` | - |

#### TextAreaClearableConfig

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| clearIcon | Custom clear icon | `ReactNode` | `<CloseCircleFill />` |
| onClear | Triggered after clicking the clear button | `() => void` | - |

In addition, the following native attributes are supported: `autoComplete` `autoFocus` `disabled` `readOnly` `onFocus` `onBlur` `onCompositionStart` `onCompositionEnd` `onClick` `onKeyDown` `enterKeyHint`

#### Why is there no onlyShowClearWhenFocus property?

The clearable feature of the TextArea component has already implemented similar behavior:

- In non-autoSize scenario, the clear icon only shows when focused and the value is not empty;
- In autoSize scenario, to prevent input area width changes caused by the appearance/disappearance of the clear icon which could trigger height jitters, the space for the clear icon is always reserved.

### CSS Variables

| Name | Description | Default |
| --- | --- | --- |
| --color | font color. | `var(--adm-color-text)` |
| --count-text-align | The alignment of count text. | `right` |
| --disabled-color | font color in disabled status. | `var(--adm-color-weak)` |
| --font-size | font size. | `17px` |
| --placeholder-color | `placeholder` font color. | `var(--adm-color-light)` |
| --text-align | The alignment of text. | `left` |

### Ref

| Name | Description | Type |
| --- | --- | --- |
| blur | Let the input box lose focus | `() => void` |
| clear | Clear the input content | `() => void` |
| focus | Let the input box get focus | `() => void` |
| nativeElement | Native text-area element | `HTMLTextAreaElement` \| `null` |

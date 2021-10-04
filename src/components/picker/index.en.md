# Picker

The Picker series includes three components: `Picker`, `CascadePicker`, and `DatePicker`.

## Picker

<code src="./demos/index.tsx"></code>

### Picker API

```typescript | pure
type PickerColumnItem = {
  label: string
  value: string
}

type PickerColumn = (string | PickerColumnItem)[]

type PickerValue = string | null
```

| Name         | Description                             | Type                                                           | Default  |
| ------------ | --------------------------------------- | -------------------------------------------------------------- | -------- |
| columns      | options to configure each column        | `PickerColumn[] \| ((value: PickerValue[]) => PickerColumn[])` | -        |
| value        | selected options                        | `PickerValue[]`                                                | -        |
| defaultValue | default selected options                | `PickerValue[]`                                                | -        |
| onSelect     | triggered when the options are changed  | `(value: PickerValue[]) => void`                               | -        |
| onConfirm    | triggered when confirming               | `(value: PickerValue[]) => void`                               | -        |
| onCancel     | triggered when cancelling               | `() => void`                                                   | -        |
| onClose      | triggered when confirming or cancelling | `() => void`                                                   | -        |
| visible      | whether to show or hide the Picker      | `boolean`                                                      | `false`  |
| title        | title                                   | `ReactNode`                                                    | -        |
| confirmText  | text of the ok button                   | `string`                                                       | `'确定'` |
| cancelText   | text of the cancel button               | `string`                                                       | `'取消'` |
| children     | render function of the selected options | `(items: PickerColumnItem[]) => ReactNode`                     | -        |

In addition, the following attributes of [Popup](./popup) are supported: `getContainer` `afterShow` `afterClose` `onClick`

## CascadePicker

<code src="./demos/cascade-picker-demo.tsx"></code>

### CascadePicker API

```typescript
type CascadePickerOption = {
  label: string
  value: string
  children?: CascadePickerOption[]
}
```

| Name    | Description              | Type                    | Default |
| ------- | ------------------------ | ----------------------- | ------- |
| options | data of the tree options | `CascadePickerOption[]` | -       |

Other props are the same as `Picker`, but `columns` are not supported.

## DatePicker

<code src="./demos/date-picker-demo.tsx"></code>

### DatePicker API

| Name         | Description                                  | Type                                                           | Default |
| ------------ | -------------------------------------------- | -------------------------------------------------------------- | ------- |
| value        | selected value                               | `Date`                                                         | -       |
| defaultValue | default selected value                       | `Date`                                                         | -       |
| onSelect     | triggered when the options are changed       | `(value: Date) => void`                                        | -       |
| onConfirm    | triggered when confirming                    | `(value: Date) => void`                                        | -       |
| min          | minimum value                                | `Date`                                                         | 十年前  |
| max          | max value                                    | `Date`                                                         | 十年后  |
| precision    | precision                                    | `'year' \| 'month' \| 'day' \| 'hour' \| 'minute' \| 'second'` | `'day'` |
| children     | The rendering function of the selected items | `(value: Date) => ReactNode`                                   | -       |

In addition, the following attributes of `Picker` are supported: `onCancel` `onClose` `visible` `confirmText` `cancelText` `getContainer` `afterShow` `afterClose` `onClick` `title`

## Imperative Calling

`Picker` supports imperative calling and provides the `prompt` method:

```typescript
prompt: (props: Omit<PickerProps, 'value' | 'visible' | 'children'>) => Promise<PickerValue[] | null>
```

The return value of the `prompt` method is a Promise. If the user clicks OK, the Promise can be resolved to `PickerValue[]`, and if the user triggers the cancellation operation, the value in the Promise is `null`. You can get the value through `await` or `.then()`:

```ts
const value = await Picker.prompt({
  columns: yourColumnsConfig,
})
```

```ts
Picker.prompt({
  columns: yourColumnsConfig,
}).then((value) => {
  // ...
})
```

Similarly, `CascadePicker` and `DatePicker` also support the `prompt` method, the specific usage will not be repeated here.

## FAQ

### Why is the name of the component called "DatePicker" instead of "DatetimePicker"?

Because the type of `value` is `Date`.

### Why is there no "hour-minute" or "month-day" option?

Different from the `Picker` component, the value type of the `DatePicker` is a `Date` object, so it needs to be selected from the beginning of the year. Only the parameters of hour and minutes cannot construct a `Date` object.

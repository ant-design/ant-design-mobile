# Picker

Displays a scrollable list of one or more option sets.

## When to Use

- Provides one or more sets of association options for the user to choose from.
- When there are less than 5 options, it is recommended to tile the options directly, using Radio is a better choice.

The Picker series includes three components: [Picker](#picker), [CascadePicker](#cascadepicker) and [DatePicker](#datepicker).

## Picker

### Demos

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

### Props

```typescript | pure
type PickerColumnItem = {
  label: ReactNode
  value: string
  key?: string | number
}

type PickerColumn = (string | PickerColumnItem)[]

type PickerValue = string | null

type PickerValueExtend = {
  items: (PickerColumnItem | null)[]
}
```

| Name             | Description                                                  | Type                                                               | Default                                                                    |
| ---------------- | ------------------------------------------------------------ | ------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| cancelText       | Text of the cancel button                                    | `ReactNode`                                                        | `'取消'`                                                                   |
| children         | Render function of the selected options                      | `(items: PickerColumnItem[], actions: PickerActions) => ReactNode` | -                                                                          |
| closeOnMaskClick | Whether to close after clicking the mask layer               | `boolean`                                                          | `true`                                                                     |
| columns          | Options to configure each column                             | `PickerColumn[] \| ((value: PickerValue[]) => PickerColumn[])`     | -                                                                          |
| confirmText      | Text of the ok button                                        | `ReactNode`                                                        | `'确定'`                                                                   |
| defaultValue     | Default selected options                                     | `PickerValue[]`                                                    | `[]`                                                                       |
| destroyOnClose   | Unmount content when not visible                             | `boolean`                                                          | `false`                                                                    |
| forceRender      | Render content forcely                                       | `boolean`                                                          | `false`                                                                    |
| mouseWheel       | Whether to allow interact with mouse wheel                   | `boolean`                                                          | `false`                                                                    |
| onCancel         | Triggered when cancelling                                    | `() => void`                                                       | -                                                                          |
| onClose          | Triggered when confirming or cancelling                      | `() => void`                                                       | -                                                                          |
| onConfirm        | Triggered when confirming                                    | `(value: PickerValue[], extend: PickerValueExtend) => void`        | -                                                                          |
| onSelect         | Triggered when the options are changed                       | `(value: PickerValue[], extend: PickerValueExtend) => void`        | -                                                                          |
| popupClassName   | The custom class name of the popup                           | `string`                                                           | -                                                                          |
| popupStyle       | The custom style of the popup                                | `React.CSSProperties `                                             | -                                                                          |
| renderLabel      | The function to custom rendering the label shown on a column | `(item: PickerColumnItem) => ReactNode`                            | `(item) => item.label`                                                     |
| title            | Title                                                        | `ReactNode`                                                        | -                                                                          |
| value            | Selected options                                             | `PickerValue[]`                                                    | -                                                                          |
| visible          | Whether to show or hide the Picker                           | `boolean`                                                          | `false`                                                                    |
| loading          | Should the Picker displays as loading state                  | `boolean`                                                          | `false`                                                                    |
| loadingContent   | The loading content displayed in loading state               | `ReactNode`                                                        | `provide a default loading content and display the skeleton screen effect` |

In addition, the following attributes of [Popup](./popup) are supported: `getContainer` `afterShow` `afterClose` `onClick` `stopPropagation`.

**Please note that the type of the `columns` property is a two-level array**, the first level corresponds to each column, and the second level corresponds to each option in a column. Therefore, the following writing is wrong:

```jsx
<Picker
   columns={[
     { label: 'Foo', value: 'foo' },
     { label: 'Bar', value: 'bar' },
   ]}
/>
```

need to be written as:

```jsx
<Picker
   columns={[
     [
       { label: 'Foo', value: 'foo' },
       { label: 'Bar', value: 'bar' },
     ]
   ]}
/>
```

### PickerActions

| Name   | Description                         | Type         |
| ------ | ----------------------------------- | ------------ |
| close  | Close Picker.                       | `() => void` |
| open   | Open Picker.                        | `() => void` |
| toggle | Toggle the visible state of Picker. | `() => void` |

### Ref

Same as PickerActions.

### CSS Variables

| Name                      | Description                                               | Default | Global |
| ------------------------- | --------------------------------------------------------- | ------- | ------ |
| --header-button-font-size | Font size of confirm and cancel button.                   | `15px`  | -      |
| --item-font-size          | Font size of option items.                                | `16px`  | -      |
| --item-height             | Height of option item. Only supports px rem and vw units. | `34px`  | -      |
| --title-font-size         | Font size of title.                                       | `15px`  | -      |

## CascadePicker

### Demos

<code src="../cascade-picker/demos/demo1.tsx"></code>

### Props

```typescript
type CascadePickerOption = {
  label: string
  value: string
  children?: CascadePickerOption[]
}
```

| Name    | Description              | Type                    | Default |
| ------- | ------------------------ | ----------------------- | ------- |
| options | Data of the tree options | `CascadePickerOption[]` | -       |

Other props are the same as `Picker`, but `columns` are not supported.

### Ref

Same as Picker.

### CSS Variables

Same as `Picker`.

## DatePicker

### Demos

<code src="../date-picker/demos/demo1.tsx"></code>

### Props

| Name           | Description                                                                                                                          | Type                                                                                   | Default         |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- | --------------- |
| children       | The rendering function of the selected items                                                                                         | `(value: Date, actions: PickerActions) => ReactNode`                                   | -               |
| defaultValue   | Default selected value                                                                                                               | `Date`                                                                                 | -               |
| destroyOnClose | Unmount content when not visible                                                                                                     | `boolean`                                                                              | `false`         |
| filter         | Filter available time                                                                                                                | `DatePickerFilter`                                                                     | -               |
| forceRender    | Render content forcely                                                                                                               | `boolean`                                                                              | `false`         |
| max            | Max value                                                                                                                            | `Date`                                                                                 | ten years later |
| min            | Minimum value                                                                                                                        | `Date`                                                                                 | ten years ago   |
| mouseWheel     | Whether to allow interact with mouse wheel                                                                                           | `boolean`                                                                              | `false`         |
| onConfirm      | Triggered when confirming                                                                                                            | `(value: Date) => void`                                                                | -               |
| onSelect       | Triggered when the options are changed                                                                                               | `(value: Date) => void`                                                                | -               |
| precision      | Precision                                                                                                                            | `'year' \| 'month' \| 'day' \| 'hour' \| 'minute' \| 'second' \| 'week' \| 'week-day'` | `'day'`         |
| renderLabel    | The function to custom rendering the label shown on a column. `type` means any value in `precision`, `data` means the default number | `(type: string, data: number) => ReactNode`                                            | -               |
| value          | Selected value                                                                                                                       | `Date`                                                                                 | -               |

```typescript | pure
type DatePickerFilter = Partial<
  Record<
    Precision,
    (
      val: number,
      extend: {
        date: Date
      }
    ) => boolean
  >
>
```

In addition, the following attributes of `Picker` are supported: `onCancel` `onClose` `closeOnMaskClick` `visible` `confirmText` `cancelText` `getContainer` `afterShow` `afterClose` `onClick` `title` `stopPropagation` `loading` `loadingContent`

### Ref

Same as Picker.

### CSS Variables

Same as `Picker`.

## Imperative Call

`Picker` supports Imperative Call and provides the `prompt` method:

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

### How to highlight the selected items?

The DOM element of selected items has a `data-selected="true"` attribute. You can use this mark to add custom CSS styles to selected items.

### Why is the name of the component called "DatePicker" instead of "DatetimePicker"?

Because the type of `value` is `Date`.

### Why is there no "hour-minute" or "month-day" option?

Different from the Picker component, the value type of the DatePicker is a `Date` object, so it needs to be selected from the beginning of the year. Only the parameters of hour and minutes cannot construct a `Date` object.

If you need to use DatePicker like that, you can implement it yourself through the Picker component.

# PickerView

The PickerView series includes three components: [PickerView](#pickerview), [CascadePickerView](#cascadepickerview) and [DatePickerView](#datepickerview).

## PickerView

PickerView is the content area of [Picker](/components/picker/#picker).

### Demos

<code src="./demos/demo1.tsx"></code>

### Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| columns | Options to configure each column | `PickerColumn[] \| ((value: PickerValue[]) => PickerColumn[])` | - |
| defaultValue | Default selected options | `PickerValue[]` | `[]` |
| mouseWheel | Whether to allow interact with mouse wheel | `boolean` | `false` |
| onChange | Triggered when the options are changed | `(value: PickerValue[], extend: PickerValueExtend) => void` | - |
| renderLabel | The function to custom rendering the label shown on a column | `(item: PickerColumnItem) => ReactNode` | `(item) => item.label` |
| value | Selected options | `PickerValue[]` | - |
| loading | Should the Picker displays as loading state | `boolean` | `false` |
| loadingContent | The loading content displayed in loading state | `ReactNode` | `provide a default SpinLoading content` |

For the type definition of `PickerColumnItem` `PickerColumn` `PickerValue` `PickerValueExtend`, please refer to the document of [Picker](/components/picker).

### CSS Variables

| Name | Description | Default |
| --- | --- | --- |
| --height | Height of PickerView. | `240px` |
| --item-font-size | Font size of option items. | `16px` |
| --item-height | Height of option item. Only supports px rem and vw units. | `34px` |

## CascadePickerView

CascadePickerView is the content area of [CascadePicker](/components/picker/#cascadepicker).

### Demos

<code src="../cascade-picker-view/demos/demo1.tsx"></code>

### Props

| Name    | Description              | Type                    | Default |
| ------- | ------------------------ | ----------------------- | ------- |
| options | Data of the tree options | `CascadePickerOption[]` | -       |

For the type definition of `CascadePickerOption`, please refer to the document of [CascadePicker](/components/picker/#cascadepicker).

Other props are the same as [PickerView](#pickerview), but `columns` are not supported.

### CSS Variables

Same as `PickerView`.

## DatePickerView

DatePickerView is the content area of [DatePicker](/components/picker/#datepicker).

### Demos

<code src="../date-picker-view/demos/demo1.tsx"></code>

<code src="../date-picker-view/demos/demo3.tsx"></code>

<code src="../date-picker-view/demos/demo2.tsx" debug></code>

### Props

```typescript
type PickerDate = Date & {
  tillNow?: boolean
}
```

| Name | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| defaultValue | Default selected options | `PickerDate` | - |
| filter | Filter available time | `DatePickerFilter` | - |
| max | Max value | `PickerDate` | ten years later |
| min | Minimum value | `PickerDate` | ten years ago |
| mouseWheel | Whether to allow interact with mouse wheel | `boolean` | `false` |
| onChange | Triggered when the options are changed | `(value: PickerDate) => void` | - |
| precision | Precision | `'year' \| 'month' \| 'day' \| 'hour' \| 'minute' \| 'second' \| 'week' \| 'week-day' \| 'quarter'` | `'day'` |
| renderLabel | The function to custom rendering the label shown on a column. `type` means any value in `precision`, `data` means the default number | `(type: string, data: number) => ReactNode` | - |
| value | Selected options | `PickerDate` | - |
| loading | Should the Picker displays as loading state | `boolean` | `false` |
| loadingContent | The loading content displayed in loading state | `ReactNode` | `provide a default SpinLoading content` |
| tillNow | Show till now in list | `boolean` | - | 5.32.0 |

For the type definition and usage of `DatePickerFilter`, please refer to the document of [DatePicker](/components/picker#datepicker).

### CSS Variables

Same as `PickerView`.

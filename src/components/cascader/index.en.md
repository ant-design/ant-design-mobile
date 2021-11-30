# Cascader

<code src="./demos/index.tsx">

## API

```typescript | pure
type CascaderValue = string | null

type CascaderOption = {
  label: string
  value: string
  disabled?: boolean
  children?: CascaderOption[]
}

type CascaderValueExtend = {
  items: (CascaderOption | null)[]
}
```

| Name         | Description                                     | Type                                                            | Default    |
| ------------ | ----------------------------------------------- | --------------------------------------------------------------- | ---------- |
| value        | Selected options                                | `CascaderValue[]`                                               | -          |
| defaultValue | Default selected options                        | `CascaderValue[]`                                               | `[]`       |
| options      | Data of the cascade options                     | `CascaderOption[]`                                              | -          |
| onSelect     | Triggered when the selected options are changed | `(value: CascaderValue[], extend: CascaderValueExtend) => void` | -          |
| onConfirm    | Triggered when confirming                       | `(value: CascaderValue[], extend: CascaderValueExtend) => void` | -          |
| onCancel     | Triggered when cancelling                       | `() => void`                                                    | -          |
| onClose      | Triggered when confirming or cancelling         | `() => void`                                                    | -          |
| visible      | Whether to show or hide the Picker              | `boolean`                                                       | `false`    |
| title        | Title                                           | `ReactNode`                                                     | -          |
| confirmText  | Text of the ok button                           | `string`                                                        | `'确定'`   |
| cancelText   | Text of the cancel button                       | `string`                                                        | `'取消'`   |
| placeholder  | Hint text                                       | `string`                                                        | `'请选择'` |
| children     | Render function of the selected options         | `(items: CascaderOption[]) => ReactNode`                        | -          |

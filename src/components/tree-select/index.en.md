# TreeSelect <Experimental></Experimental>

<Alert type="error">
This component is going to be rewritten. Please don't use it.
</Alert>

<code src="./demos/demo1.tsx"></code>

### Props

### TreeSelect

```typescript | pure
type TreeSelectOption = {
  label: string
  value: string
  children?: TreeSelectOption[]
}
```

| Name         | Description                                                      | Type                                                                 | Default |
| ------------ | ---------------------------------------------------------------- | -------------------------------------------------------------------- | ------- |
| value        | Selected options                                                 | `string[]`                                                           | `[]`    |
| defaultValue | Selected options by default                                      | `string[]`                                                           | `[]`    |
| onChange     | Triggered when `value` is changed                                | `(value: string[], extend: { options: TreeSelectOption[] }) => void` | -       |
| options      | Cascaded data                                                    | `TreeSelectOption[]`                                                 | `[]`    |
| fieldNames   | The customized fields of `label` `value` `children` in `options` | `{ label?: string; value?: string; children?: string }`              | `{}`    |

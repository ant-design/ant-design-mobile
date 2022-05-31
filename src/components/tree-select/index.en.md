# TreeSelect <Experimental></Experimental>

<Alert type="error">
This component is going to be rewritten. Please don't use it.
</Alert>

## Demos

<code src="./demos/demo1.tsx"></code>

## TreeSelect

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
| defaultValue | Selected options by default                                      | `string[]`                                                           | `[]`    |
| fieldNames   | The customized fields of `label` `value` `children` in `options` | `{ label?: string; value?: string; children?: string }`              | `{}`    |
| onChange     | Triggered when `value` is changed                                | `(value: string[], extend: { options: TreeSelectOption[] }) => void` | -       |
| options      | Cascaded data                                                    | `TreeSelectOption[]`                                                 | `[]`    |
| value        | Selected options                                                 | `string[]`                                                           | `[]`    |

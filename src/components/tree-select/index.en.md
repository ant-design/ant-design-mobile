# TreeSelect

<code src="./demos/demo1.tsx"></code>

## API

### TreeSelect

```typescript | pure
type TreeSelectOption = {
  label: string
  value: string
  children?: TreeSelectOption[]
}
```

| Name         | Description                                                      | Type                                                    | Default |
| ------------ | ---------------------------------------------------------------- | ------------------------------------------------------- | ------- |
| value        | selected options                                                 | `string[]`                                              | `[]`    |
| defaultValue | selected options by default                                      | `string[]`                                              | `[]`    |
| onChange     | triggered when `value` is changed                                | `(value: string[], nodes: TreeSelectOption[]) => void`  | -       |
| options      | cascaded data                                                    | `TreeSelectOption[]`                                    | `[]`    |
| fieldNames   | the customized fields of `label` `value` `children` in `options` | `{ label?: string; value?: string; children?: string }` | `{}`    |

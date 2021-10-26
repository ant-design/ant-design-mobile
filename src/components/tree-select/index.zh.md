# TreeSelect 级联选择器

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

| 参数         | 说明                                                  | 类型                                                                  | 默认值 |
| ------------ | ----------------------------------------------------- | --------------------------------------------------------------------- | ------ |
| value        | 选中项                                                | `string[]`                                                            | `[]`   |
| defaultValue | 默认选中项                                            | `string[]`                                                            | `[]`   |
| onChange     | `value` 变化时触发                                    | `(value: string[], context: { options: TreeSelectOption[] }) => void` | -      |
| options      | 级联数据                                              | `TreeSelectOption[]`                                                  | `[]`   |
| fieldNames   | 自定义 `options` 中 `label` `value` `children` 的字段 | `{ label?: string; value?: string; children?: string }`               | `{}`   |

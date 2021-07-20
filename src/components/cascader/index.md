# Cascader 级联选择器

<code src="./demos/demo1.tsx" />

## API

### Cascader

```typescript | pure
type CascaderOption = {
  label: string
  value: string
  children?: CascaderOption[]
}
```

| 参数         | 说明                                          | 类型                                                  | 默认值 |
| ------------ | --------------------------------------------- | ----------------------------------------------------- | ------ |
| value        | 选中项                                        | string[]                                              | []     |
| defaultValue | 默认选中项                                    | string[]                                              | []     |
| onChange     | value 变化时触发                              | (value: string[], nodes: CascaderOption[]) => void    | -      |
| options      | 级联数据                                      | CascaderOption[]                                      | []     |
| fieldNames   | 自定义 options 中 label value children 的字段 | { label?: string, value?: string, children?: string } | {}     |

### Cascader.Multiple

| 参数              | 说明                                          | 类型                                                      | 默认值                  |
| ----------------- | --------------------------------------------- | --------------------------------------------------------- | ----------------------- |
| value             | 选中项                                        | string[]                                                  | []                      |
| defaultValue      | 默认选中项                                    | string[]                                                  | []                      |
| onChange          | value 变化时触发                              | (value: string[], nodes: CascaderOption[]) => void        | -                       |
| expandKeys        | 展开项                                        | string[]                                                  | []                      |
| defaultExpandKeys | 默认展开项                                    | string[]                                                  | []                      |
| onExpand          | expandKeys 变化时触发                         | (expandedKeys: string[], nodes: CascaderOption[]) => void | -                       |
| options           | 级联数据                                      | CascaderOption[]                                          | []                      |
| fieldNames        | 自定义 options 中 label value children 的字段 | { label?: string, value?: string, children?: string }     | {}                      |
| selectAllText     | 全选文本，多选模式生效                        | string[]                                                  | ['全选', '全选', .....] |

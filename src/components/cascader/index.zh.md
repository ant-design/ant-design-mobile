# Cascader 级联选择

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

### 属性

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

| 属性         | 说明                         | 类型                                                            | 默认值     |
| ------------ | ---------------------------- | --------------------------------------------------------------- | ---------- |
| value        | 选中项                       | `CascaderValue[]`                                               | -          |
| defaultValue | 默认选中项                   | `CascaderValue[]`                                               | `[]`       |
| options      | 级联数据                     | `CascaderOption[]`                                              | -          |
| onSelect     | 选项改变时触发               | `(value: CascaderValue[], extend: CascaderValueExtend) => void` | -          |
| onConfirm    | 确认时触发                   | `(value: CascaderValue[], extend: CascaderValueExtend) => void` | -          |
| onCancel     | 取消时触发                   | `() => void`                                                    | -          |
| onClose      | 确认和取消时都会触发关闭事件 | `() => void`                                                    | -          |
| visible      | 是否显示级联选择             | `boolean`                                                       | `false`    |
| title        | 标题                         | `ReactNode`                                                     | -          |
| confirmText  | 确定按钮的文字               | `ReactNode`                                                     | `'确定'`   |
| cancelText   | 取消按钮的文字               | `ReactNode`                                                     | `'取消'`   |
| placeholder  | 未选中时的提示文案           | `string`                                                        | `'请选择'` |
| children     | 所选项的渲染函数             | `(items: CascaderOption[]) => ReactNode`                        | -          |

### 加载中 <Badge>试验性</Badge>

你可以把 `Cascader.optionSkeleton` 作为 `CascaderOption[]` 传入到 Cascader 的 `options` 属性或者是 `CascaderOption` 的 `children` 中。Cascader 会将其识别并显示出骨架屏效果。

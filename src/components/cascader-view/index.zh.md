# CascaderView 级联选择视图

CascaderView 是 [Cascader](./cascader) 的内容区域。

<code src="./demos/index.tsx">

## 属性

| 属性         | 说明               | 类型                                                            | 默认值     |
| ------------ | ------------------ | --------------------------------------------------------------- | ---------- |
| value        | 选中项             | `CascaderValue[]`                                               | -          |
| defaultValue | 默认选中项         | `CascaderValue[]`                                               | `[]`       |
| options      | 配置每一列的选项   | `CascaderOption[]`                                              | -          |
| onChange     | 选项改变时触发     | `(value: CascaderValue[], extend: CascaderValueExtend) => void` | -          |
| placeholder  | 未选中时的提示文案 | `string`                                                        | `'请选择'` |

关于 `CascaderValue` `CascaderOption[]` `CascaderValueExtend` 的类型定义，请参考 [Cascader](./cascader#api) 的文档。

## CSS 变量

| 属性     | 说明 | 默认值  |
| -------- | ---- | ------- |
| --height | 高度 | `240px` |

# CascaderView 级联选择视图

CascaderView 是 [Cascader](/zh/components/cascader) 的内容区域。

## 示例

<code src="./demos/demo1.tsx"></code>

## CascaderView

### 属性

| 属性         | 说明                                                   | 类型                                                                   | 默认值                                                                         |
| ------------ | ------------------------------------------------------ | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| activeIcon   | 选中图标                                               | `ReactNode`                                                            | -                                                                              |
| defaultValue | 默认选中项                                             | `CascaderValue[]`                                                      | `[]`                                                                           |
| fieldNames   | 自定义 options 中 label value disabled children 的字段 | `{ label: string, value: string, disabled: string, children: string }` | `{ label: 'label', value: 'value',disabled:'disabled', children: 'children' }` |
| onChange     | 选项改变时触发                                         | `(value: CascaderValue[], extend: CascaderValueExtend) => void`        | -                                                                              |
| onTabsChange | 切换面板的回调                                         | `(index: number) => void`                                              | -                                                                              |
| options      | 配置每一列的选项                                       | `CascaderOption[]`                                                     | -                                                                              |
| placeholder  | 未选中时的提示文案                                     | `string` \| `(index: number) => string`                                | `'请选择'`                                                                     |
| value        | 选中项                                                 | `CascaderValue[]`                                                      | -                                                                              |
| loading      | 开启骨架屏                                             | `boolean`                                                              | `false`                                                                        |

关于 `CascaderValue` `CascaderOption[]` `CascaderValueExtend` 的类型定义，请参考 [Cascader](/zh/components/cascader#api) 的文档。

### 加载中 <Experimental></Experimental>

你可以把 `CascaderView.optionSkeleton` 作为 `CascaderOption[]` 传入到 CascaderView 的 `options` 属性或者是 `CascaderOption` 的 `children` 中。CascaderView 会将其识别并显示出骨架屏效果。

### CSS 变量

| 属性     | 说明 | 默认值  |
| -------- | ---- | ------- |
| --height | 高度 | `240px` |

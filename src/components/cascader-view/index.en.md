# CascaderView

CascaderView is the content area of [Cascader](./cascader).

## Demos

<code src="./demos/demo1.tsx"></code>

## CascaderView

### Props

| Name         | Description                                     | Type                                                            | Default    |
| ------------ | ----------------------------------------------- | --------------------------------------------------------------- | ---------- |
| defaultValue | Default selected options                        | `CascaderValue[]`                                               | `[]`       |
| onChange     | Triggered when the selected options are changed | `(value: CascaderValue[], extend: CascaderValueExtend) => void` | -          |
| onTabsChange | Callback when switching panel                   | `(index: number) => void`                                       | -          |
| options      | Data of the cascade options                     | `CascaderOption[]`                                              | -          |
| placeholder  | Hint text                                       | `string`                                                        | `'请选择'` |
| value        | Selected options                                | `CascaderValue[]`                                               | -          |

For the type definition of `CascaderValue` `CascaderOption` `CascaderValueExtend`, please refer to the document of [Cascader](./cascader#api).

### Loading <Experimental></Experimental>

You can pass `CascaderView.optionSkeleton` as `CascaderOption[]` to the `options` property of CascaderView or the `children` of `CascaderOption`. CascaderView will recognize it and display the skeleton screen effect.

### CSS Variables

| Name     | Description                | Default |
| -------- | -------------------------- | ------- |
| --height | height of the CascaderView | `auto`  |

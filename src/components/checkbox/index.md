# Checkbox 勾选框

<code src="./demos/index.tsx"></code>

## API

```ts | pure
type CheckboxValue = string | number
```

### Checkbox

| 参数           | 说明                                    | 类型                                                          | 默认值 |
| -------------- | --------------------------------------- | ------------------------------------------------------------- | ------ |
| checked        | 指定当前是否选中                        | boolean                                                       | false  |
| defaultChecked | 初始是否选中                            | boolean                                                       | false  |
| disabled       | 失效状态                                | boolean                                                       | false  |
| onChange       | 变化时回调函数                          | (val: boolean) => void                                        | -      |
| value          | 携带的标识值，用于 Group 模式           | CheckboxValue                                                 | -      |
| indeterminate  | 设置 indeterminate 状态，只负责样式控制 | boolean                                                       | false  |
| block          | 是否渲染为块级元素                      | boolean                                                       | false  |
| id             | input 元素的 id，常用来配合 label 使用  | string                                                        | -      |
| icon           | 自定义 icon 图标                        | (checked: boolean, indeterminate: boolean) => React.ReactNode | -      |

### Checkbox.Group

| 参数         | 说明           | 类型                             | 默认值 |
| ------------ | -------------- | -------------------------------- | ------ |
| defaultValue | 默认选中的选项 | CheckboxValue[]                  | []     |
| disabled     | 整组失效       | boolean                          | false  |
| value        | 指定选中的选项 | CheckboxValue[]                  | []     |
| onChange     | 变化时回调函数 | (value: CheckboxValue[]) => void | -      |

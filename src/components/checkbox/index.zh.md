# Checkbox 复选框

在一组可选项中进行多选。

## 何时使用

- 在一组可选项中进行多项选择时。
- 单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。

## 示例

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

<code src="./demos/demo3.tsx"></code>

## Checkbox

### 属性

```ts | pure
type CheckboxValue = string | number
```

| 参数           | 说明                                         | 类型                                                            | 默认值  |
| -------------- | -------------------------------------------- | --------------------------------------------------------------- | ------- |
| block          | 是否渲染为块级元素                           | `boolean`                                                       | `false` |
| checked        | 指定当前是否选中                             | `boolean`                                                       | `false` |
| defaultChecked | 初始是否选中                                 | `boolean`                                                       | `false` |
| disabled       | 失效状态                                     | `boolean`                                                       | `false` |
| icon           | 自定义 `icon` 图标                           | `(checked: boolean, indeterminate: boolean) => React.ReactNode` | -       |
| id             | `input` 元素的 `id`，常用来配合 `label` 使用 | `string`                                                        | -       |
| indeterminate  | 设置 `indeterminate` 状态，只负责样式控制    | `boolean`                                                       | `false` |
| onChange       | 变化时回调函数                               | `(val: boolean) => void`                                        | -       |
| value          | 携带的标识值，用于 `Group` 模式              | `CheckboxValue`                                                 | -       |

### Ref

| 属性    | 说明                         | 类型         |
| ------- | ---------------------------- | ------------ |
| check   | 触发 Checkbox 的选中         | `() => void` |
| uncheck | 触发 Checkbox 的取消选中     | `() => void` |
| toggle  | 触发 Checkbox 的选中状态切换 | `() => void` |

### CSS 变量

| 属性        | 说明                     | 默认值 |
| ----------- | ------------------------ | ------ |
| --font-size | 右侧文字描述的大小       | `17px` |
| --gap       | 图标和文字描述之间的间距 | `8px`  |
| --icon-size | 勾选图标的大小           | `22px` |

## Checkbox.Group

### 属性

| 参数         | 说明           | 类型                               | 默认值  |
| ------------ | -------------- | ---------------------------------- | ------- |
| defaultValue | 默认选中的选项 | `CheckboxValue[]`                  | `[]`    |
| disabled     | 整组失效       | `boolean`                          | `false` |
| onChange     | 变化时回调函数 | `(value: CheckboxValue[]) => void` | -       |
| value        | 指定选中的选项 | `CheckboxValue[]`                  | `[]`    |

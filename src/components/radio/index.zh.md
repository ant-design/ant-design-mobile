# Radio 单选框

在一组可选项中进行单选。

## 何时使用

单选框所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。

## 示例

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

## Radio

### 属性

```ts | pure
type RadioValue = string | number
```

### Radio

| 参数           | 说明                                         | 类型                                    | 默认值  |
| -------------- | -------------------------------------------- | --------------------------------------- | ------- |
| block          | 是否渲染为块级元素                           | `boolean`                               | `false` |
| checked        | 指定当前是否选中                             | `boolean`                               | `false` |
| defaultChecked | 初始是否选中                                 | `boolean`                               | `false` |
| disabled       | 失效状态                                     | `boolean`                               | `false` |
| icon           | 自定义 `icon` 图标                           | `(checked: boolean) => React.ReactNode` | -       |
| id             | `input` 元素的 `id`，常用来配合 `label` 使用 | `string`                                | -       |
| onChange       | 变化时回调函数                               | `(val: boolean) => void`                | -       |
| value          | 携带的标识值，用于 `Group` 模式              | `RadioValue`                            | -       |

### Radio.Group

| 参数         | 说明           | 类型                          | 默认值  |
| ------------ | -------------- | ----------------------------- | ------- |
| defaultValue | 默认选中的选项 | `RadioValue \| null`          | `null`  |
| disabled     | 整组失效       | `boolean`                     | `false` |
| onChange     | 变化时回调函数 | `(value: RadioValue) => void` | -       |
| value        | 指定选中的选项 | `RadioValue \| null`          | -       |

### CSS 变量

### Radio

| 属性        | 说明                     | 默认值 |
| ----------- | ------------------------ | ------ |
| --font-size | 右侧文字描述的大小       | `17px` |
| --gap       | 图标和文字描述之间的间距 | `8px`  |
| --icon-size | 勾选图标的大小           | `22px` |

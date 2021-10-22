# ActionSheet 动作面板

<code src="./demos/index.tsx"></code>

## API

| 属性             | 说明                                                                        | 类型                                       | 默认值          |
| ---------------- | --------------------------------------------------------------------------- | ------------------------------------------ | --------------- |
| visible          | 显示隐藏                                                                    | `boolean`                                  | `false`         |
| actions          | 面板选项列表                                                                | `Action[]`                                 | `[]`            |
| extra            | 顶部的额外区域                                                              | `ReactNode`                                | -               |
| cancelText       | 取消按钮文字，如果设置为空则不显示取消按钮                                  | `ReactNode`                                | -               |
| onAction         | 点击选项时触发，禁用或加载状态下不会触发                                    | `(action: Action, index: number) => void`  | -               |
| onClose          | 关闭时触发                                                                  | `() => void`                               | -               |
| afterClose       | 完全关闭后触发                                                              | `() => void`                               | -               |
| onMaskClick      | 点击遮罩层时触发                                                            | `() => void`                               | -               |
| closeOnAction    | 点击选项后是否关闭                                                          | `boolean`                                  | `false`         |
| closeOnMaskClick | 点击遮罩层后是否关闭                                                        | `boolean`                                  | `true`          |
| getContainer     | 指定挂载的 `HTML` 节点，默认为 `body`，如果为 `null` 的话，会渲染到当前节点 | `HTMLElement \| () => HTMLElement \| null` | `document.body` |

### Action

| 属性        | 说明           | 类型               | 默认值  |
| ----------- | -------------- | ------------------ | ------- |
| key         | 唯一标记       | `string \| number` | -       |
| text        | 标题           | `string`           | -       |
| disabled    | 是否为禁用状态 | `boolean`          | `false` |
| danger      | 是否为危险状态 | `boolean`          | `false` |
| description | 描述           | `string`           | -       |
| onClick     | 点击时触发     | `() => void`       | -       |

### 指令式

可以通过指令式的方式使用 ActionSheet：

```ts | pure
const handler = ActionSheet.show(props)
```

可以通过调用 `ActionSheet` 上的 `show` 方法直接打开动作面板，其中 `props` 参数的类型同上表，但不支持传入 `visible` 属性。

当动作面板被关闭后，组件实例会自动销毁。

`show` 方法的返回值为一个组件控制器，包含以下属性：

| 属性  | 说明         | 类型         |
| ----- | ------------ | ------------ |
| close | 关闭动作面板 | `() => void` |

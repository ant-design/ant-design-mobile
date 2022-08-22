# ActionSheet 动作面板

从底部弹出的动作菜单面板。

## 何时使用

由用户操作触发，提供一组与当前场景操作相关的两个或多个选项，让用户在不离场的情况下完成操作。

## 示例

<code src="./demos/demo1.tsx"></code>

## ActionSheet

### 属性

| 属性             | 说明                                                                        | 类型                                       | 默认值          |
| ---------------- | --------------------------------------------------------------------------- | ------------------------------------------ | --------------- |
| actions          | 面板选项列表                                                                | `Action[]`                                 | `[]`            |
| afterClose       | 完全关闭后触发                                                              | `() => void`                               | -               |
| cancelText       | 取消按钮文字，如果设置为空则不显示取消按钮                                  | `ReactNode`                                | -               |
| closeOnAction    | 点击选项后是否关闭                                                          | `boolean`                                  | `false`         |
| closeOnMaskClick | 点击背景蒙层后是否关闭                                                      | `boolean`                                  | `true`          |
| destroyOnClose   | 不可见时卸载内容                                                            | `boolean`                                  | `false`         |
| forceRender      | 强制渲染内容                                                                | `boolean`                                  | `false`         |
| extra            | 顶部的额外区域                                                              | `ReactNode`                                | -               |
| getContainer     | 指定挂载的 `HTML` 节点，默认为 `body`，如果为 `null` 的话，会渲染到当前节点 | `HTMLElement \| () => HTMLElement \| null` | `document.body` |
| onAction         | 点击选项时触发，禁用或加载状态下不会触发                                    | `(action: Action, index: number) => void`  | -               |
| onClose          | 关闭时触发                                                                  | `() => void`                               | -               |
| onMaskClick      | 点击背景蒙层时触发                                                          | `() => void`                               | -               |
| popupClassName   | `ActionSheet` 弹出层类名                                                    | `string`                                   | -               |
| popupStyle       | `ActionSheet` 弹出层样式                                                    | `React.CSSProperties`                      | -               |
| safeArea         | 是否开启安全区适配                                                          | `boolean`                                  | `true`          |
| visible          | 显示隐藏                                                                    | `boolean`                                  | `false`         |

### Action

| 属性        | 说明           | 类型               | 默认值  |
| ----------- | -------------- | ------------------ | ------- |
| danger      | 是否为危险状态 | `boolean`          | `false` |
| description | 描述           | `ReactNode`        | -       |
| disabled    | 是否为禁用状态 | `boolean`          | `false` |
| key         | 唯一标记       | `string \| number` | -       |
| onClick     | 点击时触发     | `() => void`       | -       |
| text        | 标题           | `ReactNode`        | -       |
| bold        | 标题是否加粗   | `boolean`          | `false` |

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

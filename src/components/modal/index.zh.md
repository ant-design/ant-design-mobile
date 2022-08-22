# Modal 弹窗

用于重要信息的告知或操作的反馈，并附带少量的选项供用户进行操作。

## 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。

## 示例

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

<code src="./demos/demo3.tsx" debug></code>

## Modal

### 属性

| 属性              | 说明                         | 类型                                                       | 默认值      |
| ----------------- | ---------------------------- | ---------------------------------------------------------- | ----------- |
| actions           | 操作按钮列表                 | `Action[]`                                                 | `[]`        |
| afterClose        | `Modal` 完全关闭后的回调     | `() => void`                                               | -           |
| afterShow         | 完全展示后触发               | `() => void`                                               | -           |
| bodyClassName     | `Modal` 内容类名             | `string`                                                   | -           |
| bodyStyle         | `Modal` 内容样式             | `React.CSSProperties`                                      | -           |
| closeOnAction     | 点击操作按钮后后是否关闭     | `boolean`                                                  | `false`     |
| closeOnMaskClick  | 是否支持点击遮罩关闭弹窗     | `boolean`                                                  | `false`     |
| content           | 弹窗内容                     | `React.ReactNode`                                          | -           |
| destroyOnClose    | 不可见时卸载内容             | `boolean`                                                  | `false`     |
| disableBodyScroll | 背景蒙层是否禁用 `body` 滚动 | `boolean`                                                  | `true`      |
| forceRender       | 被隐藏时是否渲染 `DOM` 结构  | `boolean`                                                  | `false`     |
| getContainer      | 自定义弹窗的父容器           | `HTMLElement \| (() => HTMLElement) \| null`               | `null`      |
| header            | 顶部区域                     | `React.ReactNode`                                          | -           |
| image             | 图片 `url`                   | `string`                                                   | -           |
| maskClassName     | `Modal` 遮罩类名             | `string`                                                   | -           |
| maskStyle         | `Modal` 遮罩样式             | `React.CSSProperties`                                      | -           |
| onAction          | 点击操作按钮时触发           | `(action: Action, index: number) => void \| Promise<void>` | -           |
| onClose           | 关闭时触发                   | `() => void`                                               | -           |
| showCloseButton   | 是否在右上角显示关闭图标按钮 | `boolean`                                                  | `false`     |
| stopPropagation   | 阻止某些事件的冒泡           | `PropagationEvent[]`                                       | `['click']` |
| title             | 弹窗标题                     | `React.ReactNode`                                          | -           |
| visible           | 显示隐藏                     | `boolean`                                                  | `false`     |

### Action

| 属性      | 说明           | 类型                          | 默认值  |
| --------- | -------------- | ----------------------------- | ------- |
| className | `Action` 类名  | `string`                      | -       |
| danger    | 是否为危险状态 | `boolean`                     | `false` |
| disabled  | 是否为禁用状态 | `boolean`                     | `false` |
| key       | 唯一标记       | `string \| number`            | -       |
| onClick   | 点击时触发     | `() => void \| Promise<void>` | -       |
| primary   | 是否为主要状态 | `boolean`                     | `false` |
| style     | `Action` 样式  | `React.CSSProperties`         | -       |
| text      | 标题           | `React.ReactNode`             | -       |

## 指令式

可以通过指令式的方式使用 `Modal`：

### Modal.show

```ts | pure
const handler = Modal.show(props)
```

可以通过调用 `Modal` 上的 `show` 方法直接打开弹窗，其中 `props` 参数的类型同上表，但不支持传入 `visible` 属性。

当弹窗被关闭后，组件实例会自动销毁。

`show` 方法的返回值为一个组件控制器，包含以下属性：

| 属性  | 说明     | 类型         | 默认值 |
| ----- | -------- | ------------ | ------ |
| close | 关闭弹窗 | `() => void` | -      |

`show` 只是一个很基础的方法，在实际业务中，更为常用的是下面的 `alert` 和 `confirm` 方法：

### Modal.alert

`alert` 接受的参数同 `show`，但不支持 `closeOnAction` `actions` 属性，它的返回值不是一个控制器对象，而是 `Promise<void>`。

此外，它还额外支持以下属性：

| 属性        | 说明               | 类型                          | 默认值       |
| ----------- | ------------------ | ----------------------------- | ------------ |
| confirmText | 确认按钮的内容     | `ReactNode`                   | `'我知道了'` |
| onConfirm   | 点击确认按钮时触发 | `() => void \| Promise<void>` | -            |

### Modal.confirm

`confirm` 接受的参数同 `show`，但不支持 `closeOnAction` `actions` 属性，它的返回值不是一个控制器对象，而是 `Promise<boolean>`。

此外，它还额外支持以下属性：

| 属性        | 说明               | 类型                          | 默认值   |
| ----------- | ------------------ | ----------------------------- | -------- |
| cancelText  | 取消按钮的内容     | `ReactNode`                   | `'取消'` |
| confirmText | 确认按钮的内容     | `ReactNode`                   | `'确认'` |
| onCancel    | 点击取消按钮时触发 | `() => void \| Promise<void>` | -        |
| onConfirm   | 点击确认按钮时触发 | `() => void \| Promise<void>` | -        |

### Modal.clear

可以通过调用 `Modal` 上的 `clear` 方法关闭所有打开的弹窗，通常用于路由监听中，处理路由前进、后退不能关闭弹窗的问题。

## FAQ

### 有没有不含内容、不含各种按钮、不含边距的弹窗？

有，可以直接使用更底层的 [CenterPopup](/zh/components/popup#centerpopup) 组件。

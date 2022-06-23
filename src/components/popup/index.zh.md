# Popup 弹出层

从屏幕滑出或弹出一块自定义内容区。

## 何时使用

适用于展示弹窗、信息提示、选择输入、切换等内容，支持多个弹出层叠加展示。

## Popup

### 示例

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

### 属性

| 属性             | 说明                                                                        | 类型                                                               | 默认值                |
| ---------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------ | --------------------- |
| afterClose       | 完全关闭后触发                                                              | `() => void`                                                       | -                     |
| afterShow        | 完全展示后触发                                                              | `() => void`                                                       | -                     |
| bodyClassName    | 内容区域类名                                                                | `string`                                                           | -                     |
| bodyStyle        | 内容区域样式                                                                | `React.CSSProperties`                                              | -                     |
| className        | 容器类名                                                                    | `string`                                                           | -                     |
| closeOnMaskClick | 点击遮罩层后是否关闭                                                        | `boolean`                                                          | `false`               |
| destroyOnClose   | 不可见时卸载内容                                                            | `boolean`                                                          | `false`               |
| forceRender      | 强制渲染内容                                                                | `boolean`                                                          | `false`               |
| getContainer     | 指定挂载的 `HTML` 节点，默认为 `body`，如果为 `null` 的话，会渲染到当前节点 | `HTMLElement \| () => HTMLElement \| null`                         | `() => document.body` |
| mask             | 是否展示蒙层                                                                | `boolean`                                                          | `true`                |
| maskClassName    | 遮罩类名                                                                    | `string`                                                           | -                     |
| maskStyle        | 遮罩样式                                                                    | `React.CSSProperties`                                              | -                     |
| onClick          | 点击时触发，常用于阻止事件冒泡                                              | `(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void`    | -                     |
| onClose          | 关闭时触发                                                                  | `() => void`                                                       | -                     |
| onMaskClick      | 点击蒙层触发                                                                | `(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void` | -                     |
| position         | 指定弹出的位置                                                              | `'bottom' \| 'top' \| 'left' \| 'right'`                           | `'bottom'`            |
| showCloseButton  | 是否显示关闭按钮                                                            | `boolean`                                                          | `false`               |
| stopPropagation  | 阻止某些事件的冒泡                                                          | `PropagationEvent[]`                                               | `['click']`           |
| style            | 容器样式                                                                    | `React.CSSProperties`                                              | -                     |
| visible          | 是否可见                                                                    | `boolean`                                                          | `false`               |

### CSS 变量

| 属性      | 说明             | 默认值 | 全局变量              |
| --------- | ---------------- | ------ | --------------------- |
| --z-index | 元素的 `z-index` | `1000` | `--adm-popup-z-index` |

## CenterPopup

和 Popup 不同，CenterPopup 是从中间弹出的，Dialog 和 Modal 都是基于它实现的。

### 示例

<code src="../center-popup/demos/demo1.tsx"></code>

### 属性

CenterPopup 不支持 `position` 属性，并且 `getContainer` 的默认值是 `null`，其他属性同 Popup。

### CSS 变量

| 属性               | 说明             | 默认值    | 全局变量                              |
| ------------------ | ---------------- | --------- | ------------------------------------- |
| --background-color | 弹层的背景色     | `#ffffff` | `--adm-center-popup-background-color` |
| --border-radius    | 弹层的边框圆角   | `8px`     | `--adm-center-popup-border-radius`    |
| --max-width        | 弹层的最大宽度   | `75vw`    | `--adm-center-popup-max-width`        |
| --min-width        | 弹层的最小宽度   | `280px`   | `--adm-center-popup-min-width`        |
| --z-index          | 元素的 `z-index` | `1000`    | `--adm-center-popup-z-index`          |

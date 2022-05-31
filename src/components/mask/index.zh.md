# Mask 遮罩层

深色背景层。

## 何时使用

常用于模态窗口的背景层，使视觉焦点突出在模态窗口本身。

## 示例

<code src="./demos/demo1.tsx"></code>

## Mask

### 属性

| 属性              | 说明                                                         | 类型                                                            | 默认值      |
| ----------------- | ------------------------------------------------------------ | --------------------------------------------------------------- | ----------- |
| afterClose        | 完全关闭后触发                                               | `() => void`                                                    | -           |
| afterShow         | 完全展示后触发                                               | `() => void`                                                    | -           |
| color             | 遮罩层的颜色                                                 | `'black' \| 'white'`                                            | `'black'`   |
| destroyOnClose    | 不可见时卸载内容                                             | `boolean`                                                       | `false`     |
| disableBodyScroll | 是否禁用 `body` 滚动                                         | `boolean`                                                       | `true`      |
| forceRender       | 强制渲染内容                                                 | `boolean`                                                       | `false`     |
| getContainer      | 指定挂载的 `HTML` 节点，如果为 `null` 的话，会渲染到当前节点 | `HTMLElement \| () => HTMLElement \| null`                      | `null`      |
| onMaskClick       | 点击蒙层自身触发                                             | `(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void` | -           |
| opacity           | 透明度                                                       | `'default' \| 'thin' \| 'thick' \| number`                      | `'default'` |
| stopPropagation   | 阻止某些事件的冒泡                                           | `PropagationEvent[]`                                            | `['click']` |
| visible           | 是否可见                                                     | `boolean`                                                       | `true`      |

### CSS 变量

| 属性      | 说明             | 默认值 | 全局变量             |
| --------- | ---------------- | ------ | -------------------- |
| --z-index | 元素的 `z-index` | `1000` | `--adm-mask-z-index` |

# Popup 弹出层

<code src="./demos/index.tsx"></code>

### 属性

| 属性            | 说明                                                                        | 类型                                                               | 默认值          |
| --------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------ | --------------- |
| visible         | 是否可见                                                                    | `boolean`                                                          | `false`         |
| onMaskClick     | 点击蒙层触发                                                                | `(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void` | -               |
| destroyOnClose  | 不可见时卸载内容                                                            | `boolean`                                                          | `false`         |
| forceRender     | 强制渲染内容                                                                | `boolean`                                                          | `false`         |
| getContainer    | 指定挂载的 `HTML` 节点，默认为 `body`，如果为 `null` 的话，会渲染到当前节点 | `HTMLElement \| () => HTMLElement \| null`                         | `document.body` |
| afterClose      | 完全关闭后触发                                                              | `() => void`                                                       | -               |
| position        | 指定弹出的位置                                                              | `'bottom' \| 'top' \| 'left' \| 'right'`                           | `'bottom'`      |
| className       | 容器类名                                                                    | `string`                                                           | -               |
| style           | 容器样式                                                                    | `React.CSSProperties`                                              | -               |
| bodyClassName   | 内容区域类名                                                                | `string`                                                           | -               |
| bodyStyle       | 内容区域样式                                                                | `React.CSSProperties`                                              | -               |
| maskClassName   | 遮罩类名                                                                    | `string`                                                           | -               |
| maskStyle       | 遮罩样式                                                                    | `React.CSSProperties`                                              | -               |
| onClick         | 点击时触发，常用于阻止事件冒泡                                              | `(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void`    | -               |
| stopPropagation | 阻止某些事件的冒泡                                                          | `PropagationEvent[]`                                               | `['click']`     |

### CSS 变量

| 属性      | 说明             | 默认值 | 全局变量              |
| --------- | ---------------- | ------ | --------------------- |
| --z-index | 元素的 `z-index` | `1000` | `--adm-popup-z-index` |

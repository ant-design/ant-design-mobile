# Toast 轻提示

<code src="./demos/index.tsx"></code>

## 指令式 API

`Toast` 只支持指令式调用。

### Toast.show

`show` 方法支持传入一个 `props` 对象，它包含了以下这些属性：

| 属性            | 说明                                  | 类型                                                  | 默认值          |
| --------------- | ------------------------------------- | ----------------------------------------------------- | --------------- |
| afterClose      | `Dialog` 完全关闭后的回调             | `() => void`                                          | -               |
| maskStyle       | `Toast` 遮罩样式                      | `React.CSSProperties`                                 | -               |
| maskClassName   | `Toast` 遮罩类名                      | `string`                                              | -               |
| maskClickable   | 是否允许背景点击                      | `boolean`                                             | `true`          |
| content         | `Toast` 文本内容                      | `React.ReactNode`                                     | -               |
| icon            | `Toast` 图标                          | `'success' \| 'fail' \| 'loading' \| React.ReactNode` | -               |
| duration        | 提示持续时间，若为 `0` 则不会自动关闭 | `number`                                              | `2000`          |
| position        | 垂直方向显示位置                      | `'top' \| 'bottom' \| 'center'`                       | `'center'`      |
| getContainer    | 自定义轻提示的父容器                  | `HTMLElement \| (() => HTMLElement) \| null`          | `document.body` |
| stopPropagation | 阻止某些事件的冒泡                    | `PropagationEvent[]`                                  | `['click']`     |

> 同一时间只允许弹出一个轻提示，新出现的 `Toast` 会将之前正在显示中的 `Toast` 挤掉。

你也可以直接传入一个字符串，`Toast.show` 会自动把它作为 `content`。

### Toast.clear

关闭所有显示中的 `Toast`。

# Popover 气泡弹出框

点击元素，弹出气泡式的菜单。

## 何时使用

适用于功能的导航，只可由导航栏上图标唤起，通常用于收纳低频使用的功能。

## 示例

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

<code src="./demos/demo4.tsx"></code>

<code src="./demos/demo3.tsx" debug></code>

## Popover

### 属性

| 属性            | 说明                                 | 类型                                                                                                                                                                 | 默认值                |
| --------------- | ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| children        | 触发 `popover` 的元素                | `React.ReactElement`                                                                                                                                                 | -                     |
| content         | 弹出内容                             | `React.ReactNode`                                                                                                                                                    | -                     |
| defaultVisible  | 默认是否显隐                         | `boolean`                                                                                                                                                            | `false`               |
| destroyOnHide   | 隐藏时，是否销毁 `tooltip` 内容      | `boolean`                                                                                                                                                            | `false`               |
| getContainer    | 浮层渲染父节点，默认渲染到 `body` 上 | `() => HTMLElement`                                                                                                                                                  | `() => document.body` |
| mode            | 设置亮色模式或者黑色模式             | `'light' \| 'dark'`                                                                                                                                                  | `'light'`             |
| onVisibleChange | 显示隐藏的回调                       | `(visible: boolean) => void`                                                                                                                                         | -                     |
| placement       | 气泡框位置                           | `'top' \| 'top-start' \| 'top-end' \| 'right' \| 'right-start' \| 'right-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end'` | `'top'`               |
| stopPropagation | 阻止某些事件的冒泡                   | `PropagationEvent[]`                                                                                                                                                 | `['click']`           |
| trigger         | 触发方式                             | `'click'`                                                                                                                                                            | -                     |
| visible         | 受控模式下，是否展示弹出内容         | `boolean`                                                                                                                                                            | -                     |

在 5.5.0 版本之前，`placement` 的可选值是：

`top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom`

而在 5.5.0 及之后的版本中，`placement` 的写法发生了一些调整，变为了：

`top top-start top-end right right-start right-end bottom bottom-start bottom-end left left-start left-end`

为了保持兼容，我们仍然支持使用旧版的写法，但是如果你看到了这里的提示，请尽量使用新版的写法。

### CSS 变量

| 属性      | 说明             | 默认值 | 全局变量                |
| --------- | ---------------- | ------ | ----------------------- |
| --z-index | 元素的 `z-index` | `1030` | `--adm-popover-z-index` |

### Ref

| 属性    | 说明                       | 类型         |
| ------- | -------------------------- | ------------ |
| hide    | 隐藏气泡弹出框             | `() => void` |
| show    | 展示气泡弹出框             | `() => void` |
| visible | 气泡弹出框当前是否正在展示 | `boolean`    |

## Popover.Menu

### 属性

除 `content` 外，其余全部属性继承自 `Popover`，特有属性如下：

| 属性     | 说明                                 | 类型                     | 默认值 |
| -------- | ------------------------------------ | ------------------------ | ------ |
| actions  | 菜单列表，当弹出内容为标准菜单时使用 | `Action[]`               | -      |
| onAction | 当使用菜单列表时，选中菜单的回调     | `(item: Action) => void` | -      |

### Action

| 属性     | 说明                                 | 类型               | 默认值                   |
| -------- | ------------------------------------ | ------------------ | ------------------------ |
| disabled | 是否禁用                             | `boolean`          | `false`                  |
| icon     | 菜单项的图标                         | `ReactNode`        | `null`                   |
| key      | 菜单的唯一标识, 缺省时即为 `index`   | `string \| number` | `actions` 数组的 `index` |
| onClick  | 点击时触发                           | `() => void`       | -                        |
| text     | 菜单列表，当弹出内容为标准菜单时使用 | `ReactNode`        | -                        |

### CSS 变量

同 Popover。

### Ref

同 Popover。

## FAQ

### 为什么有些情况下 Popover 不显示？

点击 Popover 的时候会触发两次 click 事件，一次是 label 的，一次是 input 的。

```jsx
<label>
  <Popover content='hello' trigger='click'>
    <span>label</span>
  </Popover>
  <input />
</label>
```

可以通过 `e.preventDefault()` 来阻止默认行为。

```jsx
<label>
  <Popover content='hello' trigger='click'>
    <span onClick={e => e.preventDefault()}>label</span>
  </Popover>
  <input />
</label>
```

### 浏览器控制台中出现了 `findDOMNode is deprecated in StrictMode.` 这样的警告怎么办？

如果你的项目中开启了 React 的 StrictMode，那么可能会遇到下面这样的警告：

```text
Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Wrapper which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node
```

请不要惊慌，这是预期的行为，因为我们还没有找到更好的替代方案，所以只能继续用 `findDOMNode` 这个已经被弃用的 API，请忽略这个报错就好。

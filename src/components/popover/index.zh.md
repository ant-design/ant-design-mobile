# Popover 气泡弹出框

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

<code src="./demos/demo3.tsx" debug></code>

## Popover

### 属性

| 属性            | 说明                                 | 类型                                                                                                                                                                 | 默认值                |
| --------------- | ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| children        | 触发 `popover` 的元素                | `React.ReactElement`                                                                                                                                                 | -                     |
| placement       | 气泡框位置                           | `'top' \| 'top-start' \| 'top-end' \| 'right' \| 'right-start' \| 'right-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end'` | `'top'`               |
| defaultVisible  | 默认是否显隐                         | `boolean`                                                                                                                                                            | `false`               |
| visible         | 受控模式下，是否展示弹出内容         | `boolean`                                                                                                                                                            | -                     |
| onVisibleChange | 显示隐藏的回调                       | `(visible: boolean) => void`                                                                                                                                         | -                     |
| trigger         | 触发方式                             | `'click'`                                                                                                                                                            | -                     |
| getContainer    | 浮层渲染父节点，默认渲染到 `body` 上 | `() => HTMLElement`                                                                                                                                                  | `() => document.body` |
| destroyOnHide   | 隐藏时，是否销毁 `tooltip` 内容      | `boolean`                                                                                                                                                            | `false`               |
| content         | 弹出内容                             | `React.ReactNode`                                                                                                                                                    | -                     |
| mode            | 设置亮色模式或者黑色模式             | `'light' \| 'dark'`                                                                                                                                                  | `'light'`             |
| stopPropagation | 阻止某些事件的冒泡                   | `PropagationEvent[]`                                                                                                                                                 | `['click']`           |

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
| show    | 展示气泡弹出框             | `() => void` |
| hide    | 隐藏气泡弹出框             | `() => void` |
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
| text     | 菜单列表，当弹出内容为标准菜单时使用 | `ReactNode`        | -                        |
| icon     | 菜单项的图标                         | `ReactNode`        | `null`                   |
| key      | 菜单的唯一标识, 缺省时即为 `index`   | `string \| number` | `actions` 数组的 `index` |
| disabled | 是否禁用                             | `boolean`          | `false`                  |

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

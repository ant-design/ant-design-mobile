# Image 图片

可预览的图片。

## 何时使用

- 需要展示图片时使用。
- 加载大图时显示 loading 或加载失败时容错处理。

## 示例

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx" debug></code>

## Image

### 属性

| 属性             | 说明                                | 类型                                                             | 默认值   |
| ---------------- | ----------------------------------- | ---------------------------------------------------------------- | -------- |
| alt              | 图片描述                            | `string`                                                         | -        |
| draggable        | 是否允许用户拖拽图片                | `boolean`                                                        | `false`  |
| fallback         | 加载失败的占位                      | `ReactNode`                                                      | 默认占位 |
| fit              | 图片填充模式                        | `'contain' \| 'cover' \| 'fill' \| 'none' \| 'scale-down'`       | `'fill'` |
| height           | 图片高度，如果传入数字则单位为 `px` | `string \| number`                                               | -        |
| lazy             | 是否懒加载图片                      | `boolean`                                                        | `false`  |
| onClick          | 图片点击事件                        | `(event: React.MouseEvent<HTMLImageElement, Event>) => void`     | -        |
| onContainerClick | 容器点击事件                        | `(event: React.MouseEvent<HTMLDivElement, Event>) => void`       | -        |
| onError          | 加载失败时触发                      | `(event: React.SyntheticEvent<HTMLImageElement, Event>) => void` | -        |
| onLoad           | 图片加载完时触发                    | `(event: React.SyntheticEvent<HTMLImageElement, Event>) => void` | -        |
| placeholder      | 加载时的占位                        | `ReactNode`                                                      | 默认占位 |
| src              | 图片地址                            | `string`                                                         | -        |
| width            | 图片宽度，如果传入数字则单位为 `px` | `string \| number`                                               | -        |

此外，还支持以下 HTML 原生属性：`crossOrigin`、`decoding`、`loading`、`referrerPolicy`、`sizes`、`srcSet`、`useMap`

`width` `height` 属性其实和 CSS 变量 `--width` `--height` 并不冲突，这些组件属性其实就是基于 CSS 变量实现的，只是 CSS 变量的一种快捷设置方式。

### CSS 变量

| 属性     | 说明     | 默认值 | 全局变量             |
| -------- | -------- | ------ | -------------------- |
| --height | 图片高度 | `auto` | `--adm-image-height` |
| --width  | 图片宽度 | `auto` | `--adm-image-width`  |

## FAQ

### 如何让 Image 从 block 元素变为 inline-block 元素？

Image 默认是渲染为 block 元素的，如果你需要让它变为 inline-block 元素的话，可以在外层嵌套一层 inline-block 的容器，例如：

```jsx
<div style={{ display: 'inline-block' }}>
  <Image />
</div>
```

### `onContainerClick` 和 `onClick` 有什么区别？

`onContainerClick` 是容器点击事件，而 `onClick` 是图片点击事件。在图片加载成功之前或图片加载失败后，`onClick` 是不会触发的，但 `onContainerClick` 是可以正常触发的。

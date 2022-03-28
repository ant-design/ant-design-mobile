# ImageViewer 图片查看器

<code src="./demos/demo1.tsx"></code>

## ImageViewer

| 属性         | 说明                                                                      | 类型                                       | 默认值          |
| ------------ | ------------------------------------------------------------------------- | ------------------------------------------ | --------------- |
| image        | 图片资源的 `url`                                                          | `string`                                   | -               |
| maxZoom      | 最大缩放比例                                                              | `number`                                   | `3`             |
| getContainer | 指定挂载的 HTML 节点，默认为 `body`，如果为 `null` 的话，会渲染到当前节点 | `HTMLElement \| () => HTMLElement \| null` | `document.body` |
| visible      | 是否显示                                                                  | `boolean`                                  | `false`         |
| onClose      | 关闭时触发                                                                | `boolean`                                  | -               |
| afterClose   | 完全关闭后触发                                                            | `() => void`                               | -               |

## ImageViewer.Multi

在 `ImageViewer` 的基础上，增加了以下属性：

| 属性          | 说明                | 类型                      | 默认值 |
| ------------- | ------------------- | ------------------------- | ------ |
| images        | 图片资源的 url 列表 | `string[]`                | `[]`   |
| defaultIndex  | 默认显示第几张图片  | `number`                  | `0`    |
| onIndexChange | 切换图片时触发      | `(index: number) => void` | -      |

同时，去掉了 `image` 属性。

### Ref

| 属性    | 说明           | 类型                                          |
| ------- | -------------- | --------------------------------------------- |
| swipeTo | 切换到指定索引 | `(index: number, immediate: boolean) => void` |

## 指令式

相比于上文中组件式的使用方式，指令式更加方便也更加常用，在大多数情况下，都推荐使用这种方式：

```ts | pure
const handler = ImageViewer.show(props)
const handlerMulti = ImageViewer.Multi.show(props)
```

可以通过调用 `ImageViewer` 上的 `show` 方法直接进入图片查看。其中 `props` 参数的类型同上表，但不支持传入 `visible` 属性。当查看器被关闭后，组件实例会自动销毁。

`show` 方法的返回值为一个组件控制器，包含以下属性：

| 属性  | 说明           | 类型         |
| ----- | -------------- | ------------ |
| close | 关闭图片查看器 | `() => void` |

如果你想关闭全部通过指令式创建出来的 ImageViewer，可以调用 `ImageViewer.clear()`。

## FAQ

### 为什么我更新了 `defaultIndex` 的值，但是 ImageViewer.Multi 显示的图片并没有切换？

ImageViewer.Multi 是一个[非受控](https://reactjs.org/docs/glossary.html#controlled-vs-uncontrolled-components)的组件，`defaultIndex` 只会在组件加载的时候读取一次，在此之后，如果你修改了 `defaultIndex` 的值，并不会对组件有任何的影响。因此，下面这种写法并不能起到切换图片的效果：

```jsx
<Button
  onClick={() => {
    setIndex(i => i + 1)
  }}
>
  Next
</Button>

<ImageViewer.Multi
  images={images}
  defaultIndex={index}
/>
```

你可以使用 ref 来对 ImageViewer.Multi 进行手动的操作，也可以考虑使用 `ImageViewer.show()`。

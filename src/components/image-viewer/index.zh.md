# ImageViewer 图片查看器

通过放大查看图片全貌。

## 何时使用

需要点开图片查看细节，配合缩略图使用。

## 示例

<code src="./demos/demo1.tsx"></code>

## ImageViewer

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| afterClose | 完全关闭后触发 | `() => void` | - |  |
| classNames | 语义化 class | `{ mask?:string,body?:string }` | - | 5.33.1 |
| getContainer | 指定挂载的 HTML 节点，默认为 `null` 渲染到当前节点 | `HTMLElement \| () => HTMLElement \| null` | `null` |  |
| image | 图片资源的 `url` | `string` | - |  |
| maxZoom | 最大缩放比例 | `number \| 'auto'` | `3` |  |
| onClose | 关闭时触发 | `() => void` | - |  |
| renderFooter | 渲染底部额外内容 | `(image: string) => ReactNode` | - |  |
| imageRender | 自定义渲染内容 | `(image: string,{ ref, index }: { ref: RefObject<HTMLImageElement>; index: number }) => ReactNode` | - | 5.39.0 |
| visible | 是否显示 | `boolean` | `false` |  |
| mask | 遮罩层的属性 | `{onClick?:(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void}` | - |  |

## ImageViewer.Multi

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| classNames | 语义化 class | `{ mask?:string,body?:string }` | - | 5.33.1 |
| defaultIndex | 默认显示第几张图片 | `number` | `0` |  |
| images | 图片资源的 url 列表 | `string[]` | - |  |
| onIndexChange | 切换图片时触发 | `(index: number) => void` | - |  |
| renderFooter | 渲染底部额外内容 | `(image: string, index: number) => ReactNode` | - |  |
| imageRender | 自定义渲染内容 | `(image: string,{ ref, index }: { ref: RefObject<HTMLImageElement>; index: number }) => ReactNode` | - |  |

其他属性同 `ImageViewer`，但是去掉了 `image` 属性。

### Mask

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onClick | 点击蒙层自身触发 | `(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void` | - |

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

### 为什么我自定义的图片预览不支持手势？

由于在 ImageViewer 中使用了默认的图片预览机制，若需进行自定义渲染，可根据实际需求手动传入 ref，并在自定义渲染的标签元素上自行绑定该 ref。

```jsx
  <ImageViewer.Multi
        images={demoViewImages}
        visible={visible}
        imageRender={(image, info) => {
          if (info.index === 0)
            return (
              <div className={styles['image-render']} ref={info.ref}>
                <video muted width='100%' controls src={image} />
              </div>
            )
        }}
        defaultIndex={0}
        onClose={() => {
          setVisible(false)
        }}
      />
```

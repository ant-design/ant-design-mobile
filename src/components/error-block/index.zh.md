# ErrorBlock 异常

使用场景插画表示页面异常。

## 何时使用

适用于六种异常场景的反馈提示。

## ErrorBlock

### 示例

<code src="./demos/demo-basic.tsx"></code>

<code src="./demos/demo-full-page.tsx"></code>

<code src="./demos/demo2.tsx"></code>

### 属性

| 属性        | 说明           | 类型                                               | 默认值      |
| ----------- | -------------- | -------------------------------------------------- | ----------- |
| description | 描述           | `ReactNode`                                        | -           |
| fullPage    | 是否为整页异常 | `boolean`                                          | `false`     |
| image       | 图片           | `string \| ReactElement`                           | -           |
| status      | 默认错误类型   | `'default' \| 'disconnected' \| 'empty' \| 'busy'` | `'default'` |
| title       | 标题           | `ReactNode`                                        | -           |

### CSS 变量

| 属性                     | 说明                 | 默认值  | 全局变量                                   |
| ------------------------ | -------------------- | ------- | ------------------------------------------ |
| --image-height           | 图片的高度           | `100px` | `--adm-error-block-image-height`           |
| --image-height-full-page | 整页模式下的图片高度 | `200px` | `--adm-error-block-image-height-full-page` |
| --image-width            | 图片的宽度           | `auto`  | `--adm-error-block-image-width`            |
| --image-width-full-page  | 整页模式下的图片宽度 | `auto`  | `--adm-error-block-image-width-full-page`  |

## createErrorBlock

`ErrorBlock` 组件用起来非常简单，但是它不可避免的带来了一个问题：由于我们不知道你会用到哪些 `status`，所以我们只能把四种状态下的图片资源都打包进来，这会带来一些包体积上的问题。

为了能够尽可能少的引入资源，我们提供了一个工具函数 `createErrorBlock`，你可以使用它来创建一个定制化的 `ErrorBlock` 组件，其中只包含你需要的素材。

它的类型定义是：

```ts
declare function createErrorBlock(imageRecord: ImageRecord): React.ComponentType

type ImageRecord = Partial<Record<ErrorBlockStatus, string | ReactNode>>
type ErrorBlockStatus = 'default' | 'disconnected' | 'empty' | 'busy'
```

例如：

### 示例

如果在你的应用中，ErrorBlock 只需要支持 `default` 这种状态，那么你可以这样创建一个只打包了 `default` 图片素材的轻量化的 ErrorBlock：

```jsx
import {defaultImage} from 'antd-mobile/es/components/error-block/images'

const ErrorBlock = createErrorBlock({
  'default': defaultImage,
})
```

我们在 `antd-mobile/es/components/error-block/images` 中 export 了四种状态对应的图片，你可以直接使用它们：`defaultImage` `disconnectedImage` `emptyImage` `busyImage`。

甚至，你可以直接配置成在线 CDN 中的图片资源，这样就可以很大程度上降低打包体积：

```jsx
const ErrorBlock = createErrorBlock({
  'empty': 'https://gw.alipayobjects.com/zos/bmw-prod/7a2970f8-9247-4196-b3b3-2d0218c18b59.svg',
})
```

最终效果是：

<code src="./demos/demo-3.tsx"></code>

`createErrorBlock` 的作用不止于此，你还可以使用它配置自定义的图片预设，创建出一个定制版的 ErrorBlock。你可以把图片素材替换成符合你自己项目中视觉风格的，也可以像下面这样替换成极简风格的图标：

<code src="./demos/demo-4.tsx"></code>

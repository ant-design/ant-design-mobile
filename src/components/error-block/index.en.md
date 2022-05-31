# ErrorBlock

Use scene illustrations to indicate page exceptions.

## When to Use

Feedback prompts for six abnormal scenarios.

## ErrorBlock

### Demos

<code src="./demos/demo-basic.tsx"></code>

<code src="./demos/demo-full-page.tsx"></code>

<code src="./demos/demo2.tsx"></code>

### Props

| Name        | Description                          | Type                                               | Default     |
| ----------- | ------------------------------------ | -------------------------------------------------- | ----------- |
| description | Description                          | `ReactNode`                                        | -           |
| fullPage    | Whether it is a whole page exception | `boolean`                                          | `false`     |
| image       | Image                                | `string \| ReactElement`                           | -           |
| status      | The Default error type               | `'default' \| 'disconnected' \| 'empty' \| 'busy'` | `'default'` |
| title       | Title                                | `ReactNode`                                        | -           |

### CSS Variables

| Name                     | Description                            | Default | Global                                     |
| ------------------------ | -------------------------------------- | ------- | ------------------------------------------ |
| --image-height           | Height of the image                    | `100px` | `--adm-error-block-image-height`           |
| --image-height-full-page | Height of the image in `fullPage` mode | `200px` | `--adm-error-block-image-height-full-page` |
| --image-width            | Width of the image                     | `auto`  | `--adm-error-block-image-width`            |
| --image-width-full-page  | Width of the image in `fullPage` mode  | `auto`  | `--adm-error-block-image-width-full-page`  |

## createErrorBlock

The `ErrorBlock` component is very simple to use, but it inevitably brings a problem: since we don't know which `status` you will use, we can only package image resources in four states. There will be some package size problems.

In order to import as few resources as possible, we provide a utility function `createErrorBlock`, which you can use to create a custom `ErrorBlock` component that contains only the materials you need.

Its type definition is:

```ts
declare function createErrorBlock(imageRecord: ImageRecord): React.ComponentType

type ImageRecord = Partial<Record<ErrorBlockStatus, string | ReactNode>>
type ErrorBlockStatus = 'default' | 'disconnected' | 'empty' | 'busy'
```

For example:

### Demos

If in your application, the ErrorBlock only needs to support the `default` state, then you can create a lightweight ErrorBlock that only packs the `default` image material like this:

```jsx
import {defaultImage} from 'antd-mobile/es/components/error-block/images'

const ErrorBlock = createErrorBlock({
  'default': defaultImage,
})
```

We have exported images corresponding to four states in `antd-mobile/es/components/error-block/images`, you can use them directly: `defaultImage` `disconnectedImage` `emptyImage` `busyImage`.

Even, you can directly configure the image resources in the online CDN, which can greatly reduce the packaging size:

```jsx
const ErrorBlock = createErrorBlock({
  'empty': 'https://gw.alipayobjects.com/zos/bmw-prod/7a2970f8-9247-4196-b3b3-2d0218c18b59.svg',
})
```

The final effect is:

<code src="./demos/demo-3.tsx"></code>

`createErrorBlock` does more than that, you can also use it to configure custom image presets to create a custom version of ErrorBlock. You can replace the image material to match the visual style of your own project, or replace it with a minimalist icon like this:

<code src="./demos/demo-4.tsx"></code>

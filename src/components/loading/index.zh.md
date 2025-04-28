# Loading 加载中

用于页面和区块的加载中状态。

## 何时使用

页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

## DotLoading 点状加载中

<code src="../dot-loading/demos/demo1.tsx"></code>

### 属性

| 属性  | 说明 | 类型                                          | 默认值      |
| ----- | ---- | --------------------------------------------- | ----------- |
| color | 颜色 | `'default' \| 'primary' \| 'white' \| string` | `'default'` |

`DotLoading` 的大小会自动根据当前的文字大小进行调整。

## SpinLoading 转圈加载中

<code src="../spin-loading/demos/demo1.tsx"></code>

### 属性

| 属性  | 说明                                        | 类型                                          | 默认值      |
| ----- | ------------------------------------------- | --------------------------------------------- | ----------- |
| color | 线条颜色，等效于手动设置 `--color` CSS 变量 | `'default' \| 'primary' \| 'white' \| string` | `'default'` |

### CSS 变量

| 属性    | 说明     | 默认值                  |
| ------- | -------- | ----------------------- |
| --color | 线条颜色 | `var(--adm-color-weak)` |
| --size  | 大小     | `32px`                  |

## Loading

为了保持对旧版本用法的兼容，我们保留了 Loading 的引用，所以如果你继续使用 Loading，依旧是没有问题的。但由于未来的大版本升级中我们很有可能会移除掉 Loading 这个引用，所以如果你看到了这条提示，请尽快将项目中的 Loading 替换为 DotLoading。

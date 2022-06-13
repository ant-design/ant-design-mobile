# SafeArea 安全区

在全面屏下提供自适应的边距调整。

## 何时使用

当网页被全屏展示时，可借助安全区实现自动适配。

## 说明

SafeArea 组件是用来在全面屏下提供自适应的边距调整，它的底层实现其实是 `env(safe-area-inset-xxx)`。

当你的网页是被全屏展示时，可以借助它来实现自动的适配，下图中蓝色的部分是顶部 SafeArea 所占据的区域，而橙色的部分是底部 SafeArea 所占据的区域。

<img alt="safe-area-top" src="https://gw.alipayobjects.com/mdn/rms_25513e/afts/img/A*ATR3R5FOt9gAAAAAAAAAAAAAARQnAQ" width="500px" />

<img alt="safe-area-bottom" src="https://gw.alipayobjects.com/mdn/rms_25513e/afts/img/A*M9vOS5mUT_AAAAAAAAAAAAAAARQnAQ" width="500px" />

需要注意的是，下方的 demo 在桌面端浏览器下是看不到效果的：

## 示例

<code src="./demos/demo1.tsx"></code>

## SafeArea

### 属性

| 属性     | 说明         | 类型                | 默认值 |
| -------- | ------------ | ------------------- | ------ |
| position | 安全区的位置 | `'top' \| 'bottom'` | -      |

### CSS 变量

| 属性       | 说明       | 默认值 | 全局变量                   |
| ---------- | ---------- | ------ | -------------------------- |
| --multiple | 显示的倍数 | `1`    | `--adm-safe-area-multiple` |

## FAQ

### 在 rem 布局下，SafeArea 高度很小怎么办？

一些 rem 方案会通过 viewport meta 设置网页的整体缩放，这种情况下，SafeArea 也会被对应的缩放，从而很可能高度异常。这时你可以通过全局的 `--adm-safe-area-multiple` CSS 变量来调整 SafeArea 的显示倍数，例如，如果你的项目框架将页面整体缩放为了 0.5 倍，那么你可以设置 `--adm-safe-area-multiple: 2` 来做对应的补偿调整。

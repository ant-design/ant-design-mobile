# SafeArea 安全区

在全面屏下提供自适应的边距调整。

## 何时使用

当网页被全屏展示时，可借助安全区实现自动适配。

SafeArea 组件是用来在全面屏下提供自适应的边距调整，它的底层实现其实是 `env(safe-area-inset-xxx)`。

当你的网页是被全屏展示时，可以借助它来实现自动的适配，下图中蓝色的部分是顶部 SafeArea 所占据的区域，而橙色的部分是底部 SafeArea 所占据的区域。

<img alt="safe-area-top" src="https://gw.alipayobjects.com/mdn/rms_25513e/afts/img/A*ATR3R5FOt9gAAAAAAAAAAAAAARQnAQ" width="500px" />

<img alt="safe-area-bottom" src="https://gw.alipayobjects.com/mdn/rms_25513e/afts/img/A*M9vOS5mUT_AAAAAAAAAAAAAAARQnAQ" width="500px" />

需要注意的是，下方的 demo 在桌面端浏览器下是看不到效果的：

<code src="./demos/demo1.tsx"></code>

### 属性

| 属性     | 说明         | 类型                | 默认值 |
| -------- | ------------ | ------------------- | ------ |
| position | 安全区的位置 | `'top' \| 'bottom'` | -      |

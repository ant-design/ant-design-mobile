---
title: 标签栏
nav:
  title: 组件
  path: /components
---

标签栏组件。

通常配合 Swiper，作为页面栏目切换的导航使用

<code src="./demo/basic.tsx" />

## API

| 参数 | 说明 | 类型 | 默认值|
| --- | --- | --- | --- |
|children|标签元素|React.Element[]|
|index?|设置当前索引，用在设置默认索引和从外部手动修改索引时|number|0|
|maxTabCount?|最大完整显示的 tab 个数，超出时会在屏幕边缘渐隐|number|4.5|
|enableEdgeFadeOut?|开启超出 maxTabCount 时从边缘渐隐|boolean|true|
|activeClassName?|为选中态 tab 添加额外类名|string|
|onTabPress?|tab 点击的回调，当且仅当返回值为 false 时阻止点击事件|(currentIndex: int) => (boolean \| void)|
|onChange?|tab 切换的回调，在 tab 切换完成后才会触发|(currentIndex: int) => void|
|disabled?|禁止 swiper 手势切换|boolean|false|
|animateTransitions?|开启切换过渡动画|boolean|true|

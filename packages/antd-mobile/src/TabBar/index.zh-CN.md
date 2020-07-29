---
title: 底部标签栏
nav:
  title: 组件
  path: /components
---

### DEMO

<code src="./demo/basic.tsx" />

### API

| 参数 | 说明 | 类型 | 默认值|
| --- | --- | --- | --- |
|children|标签元素|TabBar.Item|
|maxTabBarCount?|最大完整显示的 tab 个数，超出时被隐藏|number|5|
|onChange?|tab 切换的回调，在 tab 切换完成后才会触发|(currentIndex: int) => void|


### TabBar.Item
| 参数 | 说明 | 类型 | 默认值|
| --- | --- | --- | --- |
|children|content元素|React.Element[]|
|activeClassName?|为选中态 tab 添加额外类名|string|
|title?|设置当前item的文字描述，|string|
|icon?|设置当前item的图标，|string|
|value?|设置当前item的value值，|any|
|activeIcon?|设置选中态item激活状态的图标，|string|
|onPress?|tab 点击的回调，当且仅当返回值为 false 时阻止点击事件|(currentIndex: int) => (boolean \| void)|


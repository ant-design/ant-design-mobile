---
title: TabBar
nav:
  title: Components
  path: /components
---

### DEMO

<code src="./demo/basic.tsx" />

### API

| param | describe | type | default |
| --- | --- | --- | --- |
|children|Tag element|TabBar.Item|
|maxTabBarCount?|Maximum tab items shown in one screen, which over it will be hiden|number|5|
|onChange?|Callback when tab item changed|(currentIndex: int) => void||


### TabBar.Item
| param | describe | type | default |
| --- | --- | --- | --- |
|children|Tag element|React.Element[]|
|activeClassName?|Add classname for active tab item|string||
|title?|设置当前item的文字描述，|string|
|icon?|设置当前item的图标，|string|
|value?|设置当前item的value值，|any|
|activeIcon?|设置选中态item激活状态的图标，|string|
|onPress?|tab 点击的回调，当且仅当返回值为 false 时阻止点击事件|(currentIndex: int) => (boolean \| void)|

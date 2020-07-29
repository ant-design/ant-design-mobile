---
title: Tabs
nav:
  title: Components
  path: /components
---

## Tabs

Usually use with Swiper, working as a lightly navigator


<code src="./demo/basic.tsx" />


## API

| param | describe | type | default |
| --- | --- | --- | --- |
|children|Tag element|React.Element[]||
|index?|Set index, usually use to set current index or default index|number|0|
|maxTabCount?|Maximum tab items shown in one screen, which over it will be faded near edge.|number|4.5|
|enableEdgeFadeOut?|Enable the fade near screen edge.|boolean|true|
|activeClassName?|Add classname for active tab item|string||
|onTabPress?|Callback when tab item be clicked, change will be prevented when return false|(currentIndex: int) => (boolean \| void)||
|onChange?|Callback when tab item changed|(currentIndex: int) => void||

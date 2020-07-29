---
title: Tips
nav:
  title: Components
  path: /components
---

### DEMO

<code src="./demo/basic.tsx" />

### API

| Properties | Description | Type | Default |
| --- | --- | --- | --- |
| content | content of tooltip | string | |
| show | visibility | boolean | false |
| opText? | text of right button | string |  |
| icon? | left icon | React.ReactNode or IconType |  |
| offset? | position of tooltip arrow | 'top' 、'top-start' 、 'top-end' 、 'right' 、 'bottom' 、 'bottom-start' 、 'bottom-end' 、'left' |  undefined |
| className? | custom classname | string|  |
| showClose? | show close button or not | boolean| false |
| onClosePress? | callback of close button | Event | - |
| onButtonPress | callback of right button | Event | - |

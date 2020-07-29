---
title: 向导提示
nav:
  title: 组件
  path: /components
---

### DEMO

<code src="./demo/basic.tsx" />

### API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 内容 | string | |
| show | 是否显示 | boolean | false |
| opText? | 右侧按钮文案 | string |  |
| icon? | 左侧图标 | React.ReactNode or IconType |  |
| offset? | 箭头方向 | 'top' 、'top-start' 、 'top-end' 、 'right' 、 'bottom' 、 'bottom-start' 、 'bottom-end' 、'left' |  undefined |
| className? | 自定义样式名 | string|  |
| showClose? | 是否显示关闭按钮 | boolean| false |
| onClosePress? | 关闭按钮回调 | Event | - |
| onButtonPress | 右侧按钮回调 | Event | - |

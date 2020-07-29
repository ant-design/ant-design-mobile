---
title: 红点
nav:
  title: 组件
  path: /components
---

### DEMO

<code src="./demo/basic.tsx" />

### API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 展示的数字或文案，当为数字时候，大于 overflowCount <br/> 时显示为 ${overflowCount}+，为 0 时隐藏 | string\|number | -
| overflowCount | 展示封顶的数字值 | number | `99`
| dot | 不展示数字，只有一个小红点 | boolean | `false`|
| bubble | 展示成气泡 | string | '' |
| placement | 气泡展示位置, 可选 `left` `right` `middle` | string | 'right' |
| stroke | 白边 | boolean | 'false' |

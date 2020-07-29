---
title: Tracker
nav:
  title: Components
  path: /components
---

### DEMO

<code src="./demo/button.tsx" />

### API

Tracker.setTracker(selfTracker: ITracker)

```typescript | pure
import { Tracker } from '@ant-design/mobile'

Tracker.setTracker({
  log(component, params, ext) {
    console.log(component) // 组件名
    console.log(params.version) // antd-mobile 版本号
    console.log(params.reactVersion) // react 版本号
    console.log(params.type) // 内置类型，分为 RENDERED(渲染), CUSTOM(组件自定义的上报)
    // 可选，组件额外的参数，比如 Button 会额外传 params.c1={type: props.type}
    console.log(params.c1)
    // 可选，当 params.type===CUSTOM 的时候，组件可能会传的对应的数据
    // 比如 Button 点击的时候会传 ext='onPress'
    console.log(ext)
  }
})
```

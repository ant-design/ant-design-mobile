---
order: 0
title: 基本
---

基本滑动条。当 `range` 为 `true` 时，渲染为双滑块。当 `disabled` 为 `true` 时，滑块处于不可用状态。


```jsx

import { Slider } from 'antm';


ReactDOM.render(<div>
 <Slider defaultValue={26} />
 <Slider range defaultValue={[20, 50]} />
 <Slider range defaultValue={[20, 50]} disabled />
</div>
, mountNode);
```

<style>
.code-box-demo .am-slider {
  margin-bottom: 80px;
}
.code-box-demo .am-slider:last-child {
  margin-bottom: 20px;
}
</style>

---
order: 0
title: 基本
---

数字输入框。

````jsx
import { List, Stepper } from 'antm';

function onChange(value) {
  console.log('changed', value);
}

ReactDOM.render(
  <div>
    <div>
      <Stepper mode="segment" disabled defaultValue={3} max={10} min={1} onChange={onChange} />
    </div>
    <div>
      <Stepper mode="segment" size="small" defaultValue={3} max={10} min={1} onChange={onChange} />
    </div>
    <div>
      <Stepper mode="segment" size="small" hideNumber defaultValue={3} max={10} min={1} onChange={onChange} />
    </div>
  </div>
, mountNode);
````


<style>
.code-box-demo {
}
.code-box-demo .am-stepper {
  width: 180px;
}
</style>

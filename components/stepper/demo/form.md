---
order: 1
title: 表单项
---

数字输入框。

````jsx
import { List, Stepper } from 'antm';

function onChange(value) {
  console.log('changed', value);
}

ReactDOM.render(
  <div>
    <List>
      <List.Header>表单</List.Header>
      <List.Body>
        <List.Item extra={<Stepper mode="segment" size="small" max={10} min={1} showNumber defaultValue={3} onChange={onChange} />}>
        </List.Item>
      </List.Body>
    </List>
  </div>
, mountNode);
````

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
    <List>
      <List.Header>表单</List.Header>
      <List.Body>
        <List.Item extra={<Stepper hideNumber={false} max={10} min={1} defaultValue={3} onChange={onChange} />}>
        预定座位
        </List.Item>
        <List.Item extra={<Stepper size="small" max={10} min={1} defaultValue={3} onChange={onChange} />}>
        不显示数值
        </List.Item>
        <List.Item extra={<Stepper disabled max={10} min={1} hideNumber={false} defaultValue={3} onChange={onChange} />}>
        禁用
        </List.Item>
      </List.Body>
    </List>
    <List>
      <List.Header>大号</List.Header>
      <List.Body>
        <List.Item>
          <Stepper size="large" hideNumber={false} max={10} min={1} defaultValue={3} onChange={onChange} />
        </List.Item>
      </List.Body>
    </List>
  </div>
, mountNode);
````

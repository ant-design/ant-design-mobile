---
order: 0
title: 基本
---

数字输入框。


````jsx
import { List, Stepper } from 'antd-mobile';

function onChange(value) {
  console.log('changed', value);
}

ReactDOM.render(
  <div>
    <List>
      <List.Header>表单</List.Header>
      <List.Body>
        <List.Item extra={<Stepper max={10} min={1} defaultValue={3} onChange={onChange} />}>
        默认
        </List.Item>
        <List.Item extra={<Stepper showNumber size="small" max={10} min={1} defaultValue={1} onChange={onChange} />}>
        显示数值
        </List.Item>
        <List.Item extra={<Stepper disabled max={10} min={1} defaultValue={3} onChange={onChange} />}>
        禁用
        </List.Item>
        <List.Item extra={<Stepper disabled max={10} min={1} showNumber defaultValue={3} onChange={onChange} />}>
        禁用
        </List.Item>
      </List.Body>
    </List>
    <List>
      <List.Header>大号</List.Header>
      <List.Body>
        <List.Item>
          <Stepper size="large" max={10} min={1} defaultValue={3} onChange={onChange} />
        </List.Item>
      </List.Body>
    </List>
    <List>
      <List.Header>大号带数字</List.Header>
      <List.Body>
        <List.Item>
          <Stepper size="large" showNumber max={10} min={1} defaultValue={1} onChange={onChange} />
        </List.Item>
      </List.Body>
    </List>
  </div>
, mountNode);
````

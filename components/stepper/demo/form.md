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
    <List renderHeader={() => '表单'} >
      <List.Item extra={<Stepper max={10} min={1} defaultValue={3} onChange={onChange} />}>
      默认
      </List.Item>
      <List.Item extra={<Stepper showNumber max={10} min={1} defaultValue={1} onChange={onChange} />}>
      显示数值
      </List.Item>
      <List.Item extra={<Stepper disabled max={10} min={1} defaultValue={3} onChange={onChange} />}>
      禁用
      </List.Item>
      <List.Item extra={<Stepper disabled max={10} min={1} showNumber defaultValue={3} onChange={onChange} />}>
      禁用
      </List.Item>
    </List>
    <List renderHeader={() => '步进器'} >
      <List.Item extra={<Stepper showNumber max={10} min={1} defaultValue={3} onChange={onChange} />}>
        预定人数
      </List.Item>
    </List>
  </div>
, mountNode);
````

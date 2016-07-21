---
order: 0
title: 基本
---

滑动开关。

````jsx
import { List, Switch } from 'antm';
import { createForm } from 'rc-form';

let SwitchExample = React.createClass({
  onClick() {
    console.log(this.props.form.getFieldsValue());
  },
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <List >
        <List.Body>
          <List.Item
            extra={<Switch
              {...getFieldProps('1', {
                initialValue: true,
                valuePropName: 'checked',
              })}
            />}
          >默认开</List.Item>
          <List.Item
            extra={<Switch
              {...getFieldProps('2', {
                initialValue: false,
                valuePropName: 'checked',
              })}
            />}
          >默认关</List.Item>
          <List.Item
            needActive={false}
            extra={<Switch
              {...getFieldProps('3', {
                initialValue: false,
                valuePropName: 'checked',
              })}
              disabled
            />}
          >默认关不可修改</List.Item>
          <List.Item
            needActive={false}
            extra={<Switch
              {...getFieldProps('4', {
                initialValue: true,
                valuePropName: 'checked',
              })}
              disabled
            />}
          >默认开不可修改</List.Item>
        </List.Body>
      </List>
    );
  },
});

SwitchExample = createForm()(SwitchExample);

ReactDOM.render(<SwitchExample />, mountNode);

---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

滑动开关. ([rc-form 文档](https://github.com/react-component/form))

````jsx
import { List, Switch } from 'antd-mobile';
import { createForm } from 'rc-form';

let SwitchExample = (props) => {
  const { getFieldProps } = props.form;
  return (
    <List
      renderHeader={() => '表单开关项'}
    >
      <List.Item
        extra={<Switch
          {...getFieldProps('Switch1', {
            initialValue: true,
            valuePropName: 'checked',
          })}
          onClick={(checked) => { console.log(checked); }}
        />}
      >默认开</List.Item>
      <List.Item
        extra={<Switch
          {...getFieldProps('Switch2', {
            initialValue: false,
            valuePropName: 'checked',
          })}
          onClick={(checked) => { console.log(checked); }}
        />}
      >默认关</List.Item>
      <List.Item
        extra={<Switch
          {...getFieldProps('Switch3', {
            initialValue: false,
            valuePropName: 'checked',
          })}
          onClick={(checked) => { console.log(checked); }}
          disabled
        />}
      >默认关不可修改</List.Item>
      <List.Item
        extra={<Switch
          {...getFieldProps('Switch4', {
            initialValue: true,
            valuePropName: 'checked',
          })}
          onClick={(checked) => { console.log(checked); }}
          disabled
        />}
      >默认开不可修改</List.Item>
      <List.Item
        extra={<Switch
          {...getFieldProps('Switch5', {
            initialValue: false,
            valuePropName: 'checked',
          })}
          platform="android"
        />}
      >Android平台样式</List.Item>
      <List.Item
        extra={<Switch
          {...getFieldProps('Switch6', {
            initialValue: true,
            valuePropName: 'checked',
          })}
          platform="ios"
        />}
      >iOS平台样式</List.Item>
    </List>
  );
};

SwitchExample = createForm()(SwitchExample);

ReactDOM.render(<SwitchExample />, mountNode);

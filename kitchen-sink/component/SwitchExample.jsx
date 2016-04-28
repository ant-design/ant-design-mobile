/* eslint no-console:0 */

import React from 'react';
import Page from '../common/Page';
import { createForm } from 'rc-form';
// import { List, Switch } from 'antm';
import { List, Switch } from 'antm';

let SwitchExample = React.createClass({
  onClick() {
    console.log(this.props.form.getFieldsValue());
  },
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <Page title="滑动开关" subtitle="&lt;Switch value={true} /&gt;">
        <List >
          <List.Header>表单开关项</List.Header>
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
                  valuePropName: 'checked'
                })}
              />}
            >默认关</List.Item>
            <List.Item
              extra={<Switch
                {...getFieldProps('3', {
                  initialValue: false,
                  valuePropName: 'checked'
                })}
                disabled={true}
              />}
            >默认关不可修改</List.Item>
            <List.Item
              extra={<Switch
                {...getFieldProps('4', {
                  initialValue: true,
                  valuePropName: 'checked'
                })}
                disabled={true}
              />}
            >默认开不可修改</List.Item>
          </List.Body>
        </List>
      </Page>
    );
  },
});

SwitchExample = createForm()(SwitchExample);

export default SwitchExample;

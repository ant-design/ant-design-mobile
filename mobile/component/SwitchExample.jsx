/* eslint no-console:0 */

import React from 'react';
import Page from '../common/Page';
import { createForm } from 'rc-form';
import { List, SwitchItem } from '../../index.js';

let SwitchExample = React.createClass({
  onClick() {
    console.log(this.props.form.getFieldsValue());
  },
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <Page title="滑动开关" subtitle="&lt;SwitchItem value={true} /&gt;">
        <List >
          <List.Body>
            <SwitchItem
              {...getFieldProps('yyy', {
                initialValue: true,
                valuePropName: 'checked',
              })}
              name="yyy"
            >默认开</SwitchItem>
            <SwitchItem
              {...getFieldProps('2', {
                initialValue: false,
                valuePropName: 'checked'
              })}
              name="2"
            >默认关</SwitchItem>
            <SwitchItem
              {...getFieldProps('3', {
                initialValue: false,
                valuePropName: 'checked'
              })}
              name="2"
              disabled={true}
            >不可修改</SwitchItem>
          </List.Body>
        </List>
      </Page>
    );
  },
});

SwitchExample = createForm()(SwitchExample);

export default SwitchExample;

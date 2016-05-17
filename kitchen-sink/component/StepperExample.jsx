/* eslint no-console:0 */

import React from 'react';
import Page from '../common/Page';
import { Stepper, List, WhiteSpace, WingBlank } from 'antm';

let StepperExample = React.createClass({

  onChange(value) {
    console.log('changed', value);
  },

  render() {
    return (
      <Page title="步进器" subtitle="&lt;Stepper max={10} min={1} defaultValue={3} /&gt;">
        <List>
          <List.Header>表单</List.Header>
          <List.Body>
            <List.Item extra={<Stepper max={10} min={1} defaultValue={3} onChange={this.onChange} />}>
            默认
            </List.Item>
            <List.Item extra={<Stepper showNumber size="small" max={10} min={1} defaultValue={1} onChange={this.onChange} />}>
            显示数值
            </List.Item>
            <List.Item extra={<Stepper disabled max={10} min={1} defaultValue={3} onChange={this.onChange} />}>
            禁用
            </List.Item>
            <List.Item extra={<Stepper disabled max={10} min={1} showNumber defaultValue={3} onChange={this.onChange} />}>
            禁用
            </List.Item>
          </List.Body>
        </List>
        <WhiteSpace mode={32} />
      </Page>
    )
  }
});

export default StepperExample;

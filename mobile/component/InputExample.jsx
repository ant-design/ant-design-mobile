/* eslint no-console:0 */

import React from 'react';
import Page from '../common/Page';
import { List, InputItem } from '../../index.js';
import { createForm } from 'rc-form';

let InputExample = React.createClass({
  onClick() {
    console.log(this.props.form.getFieldsValue());
  },
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <Page title="输入框" subtitle="&lt;InputItem clear={true} maxLength={10} /&gt;">
        <List>
          <List.Body>
            <InputItem
              {...getFieldProps('yyy', {
                initialValue: '输入框',
                valuePropName: 'value'
              })}
              placeholder="placeholder"
              clear={true}
              maxLength={10}
              onBlur={function(e){console.log('onBlur'); console.log(e);}}
              onFocus={function(e){console.log('onFocus'); console.log(e);}}
            >Label</InputItem>
            <InputItem
              value="不可编辑"
              editable={false}
            >输入说明</InputItem>
            <InputItem
              {...getFieldProps('222', {
                initialValue: '无Label',
                valuePropName: 'value'
              })}
              error={true}
              clear={true}
              placeholder="placeholder"
              extra="元"
            />
            <InputItem
              {...getFieldProps('3', {
                initialValue: '222',
                valuePropName: 'value'
              })}
              error={true}
              placeholder="placeholder"
            >输入说明</InputItem>
            <InputItem
              {...getFieldProps('4', {
                initialValue: '222',
                valuePropName: 'value'
              })}
              placeholder="placeholder"
              clear={true}
            >所属门店</InputItem>
            <InputItem
              {...getFieldProps('5', {
                initialValue: '222',
                valuePropName: 'value'
              })}
              error={true}
              placeholder="placeholder"
            >输入说明说明</InputItem>
          </List.Body>
        </List>
        <List>
          <List.Body>
            <InputItem
              name="camera"
              placeholder="camera"
              clear={true}
              icon="camera"
              onIconClick={() => {console.log('点击了icon');}}
              onChange={() => {}}
            >我是相机</InputItem>
            <InputItem
              name="list"
              placeholder="list"
              clear={true}
              icon="list"
              onChange={() => {}}
            >列表</InputItem>
            <InputItem
              name="contacts-mobile"
              placeholder="contacts-mobile"
              clear={true}
              icon="contacts-mobile"
              onChange={() => {}}
            >通讯录</InputItem>
            <InputItem
              name="bill"
              placeholder="bill"
              clear={true}
              icon="bill"
              onChange={() => {}}
            >bill</InputItem>
            <InputItem
              name="contacts-alipay"
              placeholder="contacts-alipay"
              clear={true}
              icon="contacts-alipay"
              onChange={() => {}}
            >支付宝通讯录</InputItem>
            <InputItem
              name="cards"
              placeholder="cards"
              clear={true}
              icon="cards"
              onChange={() => {}}
            >卡片</InputItem>
            <InputItem
              name="calculator"
              placeholder="calculator"
              clear={true}
              icon="calculator"
              onChange={() => {}}
            >日历</InputItem>
            <InputItem
              name="scan"
              placeholder="scan"
              clear={true}
              icon="scan"
              onChange={() => {}}
            >扫码</InputItem>
          </List.Body>
        </List>
      </Page>
    );
  },
});

InputExample = createForm()(InputExample);

export default InputExample;

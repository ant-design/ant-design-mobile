/* eslint no-console:0 */

import React from 'react';
import Page from '../common/Page';
import { List, CheckboxItem, Button, WingBlank, WhiteSpace } from 'antm';
import { createForm } from 'rc-form';

let CheckboxExample = React.createClass({
  onClick() {
    console.log(this.props.form.getFieldsValue());
  },
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <Page title="Checkbox" subtitle="&lt;CheckboxItem /&gt;">
        <List >
          <List.Header>表单多选项，普通列表中多选项</List.Header>
          <List.Body>
            <CheckboxItem
              {...getFieldProps('f1', {
                initialValue: true,
                valuePropName: 'checked'
              })}
            >使用 Ant Desgin Component</CheckboxItem>
            <CheckboxItem
              {...getFieldProps('f2', {
                initialValue: false,
                valuePropName: 'checked'
              })}
            >个性化调整</CheckboxItem>
            <CheckboxItem
              disabled={true}
              {...getFieldProps('f3', {
                initialValue: false,
                valuePropName: 'checked'
              })}
            >个性化调整disabled</CheckboxItem>
            <CheckboxItem
              disabled={true}
              {...getFieldProps('f4', {
                initialValue: true,
                valuePropName: 'checked'
              })}
            >个性化调整disabled</CheckboxItem>
          </List.Body>
        </List>
        <CheckboxItem
          mode="agree"
          {...getFieldProps('f5', {
            initialValue: false,
            valuePropName: 'checked'
          })}
        >同意<a href="http://www.alipay.com" target="_blank">《信用支付服务合同》</a>
        </CheckboxItem>
        <CheckboxItem
          mode="agree"
          {...getFieldProps('f6', {
            initialValue: true,
            valuePropName: 'checked'
          })}
        >同意<a href="http://www.alipay.com" target="_blank">《信用支付服务合同》</a>
        </CheckboxItem>
        <CheckboxItem
          disabled={true}
          mode="agree"
          {...getFieldProps('f7', {
            initialValue: true,
            valuePropName: 'checked'
          })}
        >强制选中,无法取消勾选<a href="http://www.alipay.com" target="_blank">《信用支付服务合同》</a>
        </CheckboxItem>

        <WhiteSpace mode={12}/>
        <div className="button-container">
          <WingBlank>
            <Button onClick={this.onClick}>Submit</Button>
          </WingBlank>
        </div>
      </Page>
    );
  },
});


CheckboxExample = createForm()(CheckboxExample);

export default CheckboxExample;

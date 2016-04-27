/* eslint no-console:0 */

import React from 'react';
import Page from '../common/Page';
import { List, InputItem } from 'antm';
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
          <List.Header>线型</List.Header>
          <List.Body>
            <InputItem
              {...getFieldProps('normal', {
                initialValue: '',
                valuePropName: 'value'
              })}
              placeholder="placeholder"
              clear={true}
              maxLength={10}
              onBlur={function(e){console.log('onBlur'); console.log(e);}}
              onFocus={function(e){console.log('onFocus'); console.log(e);}}
            >五个字标签</InputItem>
            <InputItem
              {...getFieldProps('name', {
                initialValue: '',
                valuePropName: 'value'
              })}
              placeholder="你的姓名"
            ><div style={{ backgroundImage: "url(https://os.alipayobjects.com/rmsportal/zumwvwrngNMGSWe.png)",   backgroundSize: "cover", height: "22px", width: "22px" }} /></InputItem>
            <InputItem
              value="不可编辑"
              editable={false}
            ><div style={{ backgroundImage: "url(https://os.alipayobjects.com/rmsportal/zumwvwrngNMGSWe.png)",   backgroundSize: "cover", height: "22px", width: "22px" }} /></InputItem>
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
            <InputItem
              {...getFieldProps('6', {
                initialValue: '222',
                valuePropName: 'value'
              })}
              name="camera"
              placeholder="camera"
              clear={true}
              extra={<img src="https://os.alipayobjects.com/rmsportal/zumwvwrngNMGSWe.png" height="22" />}
            >我是相机</InputItem>
          </List.Body>
        </List>
        <List>
          <List.Header>格式</List.Header>
          <List.Body>
            <InputItem
              {...getFieldProps('bankCard', {
                initialValue: '',
                valuePropName: 'value'
              })}
              format="bankCard"
              placeholder="8888 8888 8888 8888"
              clear={true}
              maxLength={22}
              onBlur={function(e){console.log('onBlur'); console.log(e);}}
              onFocus={function(e){console.log('onFocus'); console.log(e);}}
            >银行卡</InputItem>
            <InputItem
              {...getFieldProps('phone', {
                initialValue: '',
                valuePropName: 'value'
              })}
              format="phone"
              placeholder="186 1234 1234"
              clear={true}
              maxLength={22}
              onBlur={function(e){console.log('onBlur'); console.log(e);}}
              onFocus={function(e){console.log('onFocus'); console.log(e);}}
            >电话号码</InputItem>
            <InputItem
              {...getFieldProps('password', {
                initialValue: '',
                valuePropName: 'value'
              })}
              format="password"
              placeholder="****"
              clear={true}
              maxLength={22}
              onBlur={function(e){console.log('onBlur'); console.log(e);}}
              onFocus={function(e){console.log('onFocus'); console.log(e);}}
            >密码</InputItem>
          </List.Body>
        </List>
        <List>
          <List.Header>有边框 暂缓</List.Header>
          <List.Body>
            <InputItem
              {...getFieldProps('zzzz', {
                initialValue: '',
                valuePropName: 'value'
              })}
              placeholder="placeholder"
              clear={true}
              maxLength={10}
              onBlur={function(e){console.log('onBlur'); console.log(e);}}
              onFocus={function(e){console.log('onFocus'); console.log(e);}}
            >五个字标签</InputItem>
          </List.Body>
        </List>
      </Page>
    );
  },
});

InputExample = createForm()(InputExample);

export default InputExample;

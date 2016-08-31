---
order: 1
title: 格式
---

支持银行卡(type="bankCard"), 手机号码(type="phone"), 密码(type="password"),
数字(type="number") 四种类型的格式. ([rc-form 文档](https://github.com/react-component/form))

````jsx
import { List, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';

let FormatExample = React.createClass({
  render() {
    const { getFieldProps } = this.props.form;
    return (<List>
      <List.Header>格式</List.Header>
      <List.Body>
        <InputItem
          {...getFieldProps('bankCard', {
            initialValue: '8888 8888 8888 8888',
          })}
          type="bankCard"
          placeholder="8888 8888 8888 8888"
          clear
          onBlur={function (e) { console.log('onBlur'); console.log(e); }}
          onFocus={function (e) { console.log('onFocus'); console.log(e); }}
        >银行卡</InputItem>
        <InputItem
          {...getFieldProps('phone', {
            initialValue: '186 1234 1234',
          })}
          type="phone"
          placeholder="186 1234 1234"
          clear
          onBlur={function (e) { console.log('onBlur'); console.log(e); }}
          onFocus={function (e) { console.log('onFocus'); console.log(e); }}
        >手机号码</InputItem>
        <InputItem
          {...getFieldProps('password', {
            initialValue: '123131',
          })}
          type="password"
          placeholder="****"
          clear
          onBlur={function (e) { console.log('onBlur'); console.log(e); }}
          onFocus={function (e) { console.log('onFocus'); console.log(e); }}
        >密码</InputItem>
        <InputItem
          {...getFieldProps('number', {
            initialValue: '123131',
          })}
          type="number"
          placeholder="123131"
          clear
          onBlur={function (e) { console.log('onBlur'); console.log(e); }}
          onFocus={function (e) { console.log('onFocus'); console.log(e); }}
        >数字键盘</InputItem>
      </List.Body>
    </List>);
  },
});

FormatExample = createForm()(FormatExample);

ReactDOM.render(<FormatExample />, mountNode);

````

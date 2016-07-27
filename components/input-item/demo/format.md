---
order: 1
title: 格式
---

支持银行卡（format="bankCard"）,手机号码（format="phone"）,密码（format="password"）,数字（format="number",尽量唤起数字键盘）四种类型的格式

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
          format="bankCard"
          placeholder="8888 8888 8888 8888"
          clear
          maxLength={22}
          onBlur={function (e) { console.log('onBlur'); console.log(e); }}
          onFocus={function (e) { console.log('onFocus'); console.log(e); }}
        >银行卡</InputItem>
        <InputItem
          {...getFieldProps('phone', {
            initialValue: '186 1234 1234',
          })}
          format="phone"
          placeholder="186 1234 1234"
          clear
          maxLength={22}
          onBlur={function (e) { console.log('onBlur'); console.log(e); }}
          onFocus={function (e) { console.log('onFocus'); console.log(e); }}
        >手机号码</InputItem>
        <InputItem
          {...getFieldProps('password', {
            initialValue: '123131',
          })}
          format="password"
          placeholder="****"
          clear
          maxLength={22}
          onBlur={function (e) { console.log('onBlur'); console.log(e); }}
          onFocus={function (e) { console.log('onFocus'); console.log(e); }}
        >密码</InputItem>
        <InputItem
          {...getFieldProps('number', {
            initialValue: '123131',
          })}
          format="number"
          placeholder="123131"
          clear
          maxLength={22}
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

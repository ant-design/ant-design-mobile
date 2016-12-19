---
order: 0
title: 示例集合
---

受控组件建议使用([rc-form 文档](https://github.com/react-component/form))

````jsx
import { List, InputItem, Button } from 'antd-mobile';
import { createForm } from 'rc-form';

let BasicInputExample = React.createClass({
  getInitialState() {
    return {
      focused: false,
    };
  },
  render() {
    const { getFieldProps } = this.props.form;
    return (<List>
      <InputItem
        placeholder="请输入"
        data-seed="logId"
      >标题</InputItem>
      <InputItem
        {...getFieldProps('control')}
        placeholder="请输入（受控）"
      >标题</InputItem>
      <InputItem
        {...getFieldProps('inputclear')}
        clear
        placeholder="输入会显示清除按钮"
      >标题</InputItem>
      <InputItem
        {...getFieldProps('autofocus')}
        clear
        placeholder="自动获取光标"
        autoFocus
      >标题</InputItem>
      <InputItem
        {...getFieldProps('focus')}
        clear
        placeholder="点击下方按钮该输入框会获取光标"
        focused={this.state.focused}
        onFocus={() => {
          this.setState({
            focused: false,
          });
        }}
      >标题</InputItem>
      <List.Item>
        <Button
          onClick={() => {
            this.setState({
              focused: true,
            });
          }}
          type="primary"
        >点击获取光标</Button>
      </List.Item>
      <InputItem
        {...getFieldProps('input3')}
        placeholder="无 label"
      />
      <InputItem
        {...getFieldProps('inputtitle2')}
        placeholder="标题可自定义为icon，图片或文字"
      >
        <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '0.44rem', width: '0.44rem' }} />
      </InputItem>

      <InputItem
        {...getFieldProps('preice')}
        placeholder="0.00"
        extra="元"
      >价格</InputItem>

      <InputItem
        {...getFieldProps('bankCard', {
          initialValue: '8888 8888 8888 8888',
        })}
        type="bankCard"
      >银行卡</InputItem>
      <InputItem
        {...getFieldProps('phone')}
        type="phone"
        placeholder="186 1234 1234"
      >手机号码</InputItem>
      <InputItem
        {...getFieldProps('password')}
        type="password"
        placeholder="****"
      >密码</InputItem>
      <InputItem
        {...getFieldProps('number')}
        type="number"
        placeholder="点击会弹出数字键盘"
      >数字键盘</InputItem>

      <InputItem
        value="不可编辑"
        editable={false}
      >姓名</InputItem>
      <InputItem
        value="这个是禁用状态的样式"
        disabled
      >姓名</InputItem>

      <InputItem
        {...getFieldProps('label8')}
        placeholder="限制标题显示的长度"
        labelNumber={3}
      >标题过长</InputItem>
    </List>);
  },
});

BasicInputExample = createForm()(BasicInputExample);
ReactDOM.render(<BasicInputExample />, mountNode);
````

````css
.demoTitle:before,
.demoTitle:after {
  border-bottom: none;
}
````

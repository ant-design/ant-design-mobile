---
order: 0
title: 示例集合
---

受控组件建议使用([rc-form 文档](https://github.com/react-component/form))

````jsx
import { List, InputItem, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';

let BasicInputExample = React.createClass({
  getInitialState() {
    return {
      focused: false,
    };
  },
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <List renderHeader={() => '自定义获取光标'}>
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
            <div
              style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
              onClick={() => {
                this.setState({
                  focused: true,
                });
              }}
            >
          点击获取光标
        </div>
          </List.Item>
        </List>
        <List renderHeader={() => '受控 / 非受控'}>
          <InputItem
            {...getFieldProps('control')}
            placeholder="Hello World"
          >受控组件</InputItem>
          <InputItem
            placeholder="请输入内容"
            data-seed="logId"
          >非受控组件</InputItem>
        </List>
        <WhiteSpace />
        <List renderHeader={() => '带清除按钮'}>
          <InputItem
            {...getFieldProps('inputclear')}
            clear
            placeholder="带清除按钮，输入会显示"
          >标题</InputItem>
        </List>
        <WhiteSpace />
        <List renderHeader={() => '标题字数'}>
          <InputItem
            {...getFieldProps('label8')}
            placeholder="限制标题显示的长度"
            labelNumber={5}
          >标题过长超过默认的5个字</InputItem>
        </List>
        <WhiteSpace />
        <List renderHeader={() => '标题可自定义（文字 / 图片 / 无标题）'}>
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
        </List>
        <WhiteSpace />
        <List renderHeader={() => '右侧注释可自定义'}>
          <InputItem
            {...getFieldProps('preice')}
            placeholder="0.00"
            extra="元"
          >价格</InputItem>
        </List>
        <WhiteSpace />
        <List renderHeader={() => '格式'}>
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
        </List>
        <WhiteSpace />
        <List renderHeader={() => '不可编辑 / 禁用'}>
          <InputItem
            value="不可编辑"
            editable={false}
          >姓名</InputItem>
          <InputItem
            value="这个是禁用状态的样式"
            disabled
          >姓名</InputItem>
        </List>
      </div>
    );
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

---
order: 0
title: 基本
---

输入框  ([rc-form 文档](https://github.com/react-component/form))

````jsx
import { List, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';

let BasicInputExample = React.createClass({
  onClick() {
    console.log(this.props.form.getFieldsValue());
  },
  render() {
    const { getFieldProps } = this.props.form;

    return (<div>
      <List
        renderHeader={() => '受控、非受控、无标题'}
      >
        <InputItem
          placeholder="设置defaultValue,不设置value"
          clear
          maxLength={10}
          defaultValue=""
          onBlur={(value) => { console.log('onBlur'); console.log(value); }}
          onFocus={(value) => { console.log('onFocus'); console.log(value); }}
          onChange={(value) => { console.log('onChange'); console.log(value); }}
        >非受控</InputItem>
        <InputItem
          {...getFieldProps('input1', {
            initialValue: '',
          })}
          placeholder="设置value,不设置defaultValue"
          clear
          maxLength={10}
          onBlur={(value) => { console.log('onBlur'); console.log(value); }}
          onFocus={(value) => { console.log('onFocus'); console.log(value); }}
        >受控</InputItem>
        <InputItem
          {...getFieldProps('input3', {
            initialValue: '',
          })}
          clear
          placeholder="无标题"
        />
      </List>
      <List
        renderHeader={() => '清除'}
      >
        <InputItem
          {...getFieldProps('inputclear', {
            initialValue: '',
          })}
          clear
          placeholder="提供清除文字功能"
        >姓名</InputItem>
        <InputItem
          {...getFieldProps('inputclear2', {
            initialValue: '',
          })}
          placeholder="不提供清除文字功能"
        >姓名</InputItem>
      </List>
      <List
        renderHeader={() => '标题，可以自定义'}
      >
        <InputItem
          {...getFieldProps('inputtitle', {
            initialValue: '',
          })}
          placeholder="标题可以是文字"
        >
          姓名
        </InputItem>
        <InputItem
          {...getFieldProps('inputtitle2', {
            initialValue: '',
          })}
          placeholder="标题可自定义"
        >
          <div style={{ backgroundImage: 'url(https://os.alipayobjects.com/rmsportal/zumwvwrngNMGSWe.png)', backgroundSize: 'cover', height: '0.44rem', width: '0.44rem' }} />
        </InputItem>
      </List>
      <List
        renderHeader={() => '标题字数'}
      >
        <InputItem
          {...getFieldProps('label2', {
            initialValue: '',
          })}
          labelNumber={2}
        >姓名</InputItem>
        <InputItem
          {...getFieldProps('label3', {
            initialValue: '',
          })}
          labelNumber={3}
        >校验码</InputItem>
        <InputItem
          {...getFieldProps('label4', {
            initialValue: '',
          })}
        >手机号码</InputItem>
        <InputItem
          {...getFieldProps('label7', {
            initialValue: '',
          })}
          labelNumber={7}
        >我是七个字标题</InputItem>
        <InputItem
          {...getFieldProps('label8', {
            initialValue: '',
          })}
          labelNumber={7}
        >超出七个字标题标题</InputItem>
      </List>
      <List
        renderHeader={() => '右侧注释'}
      >
        <InputItem
          {...getFieldProps('preice', {
            initialValue: '',
          })}
          clear
          placeholder="0.00"
          extra="元"
        >价格</InputItem>
        <InputItem
          {...getFieldProps('email', {
            initialValue: '',
          })}
          extra="@163.com"
        >网易邮箱</InputItem>
        <InputItem
          {...getFieldProps('upload', {
            initialValue: '',
          })}
          extra={<img src="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png" />}
        >上传照片</InputItem>
      </List>
      <List renderHeader={() => '格式'}>
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
      </List>
      <List renderHeader={() => '不可编辑 禁用'}>
        <InputItem
          value="不可编辑"
          editable={false}
        >姓名</InputItem>
        <InputItem
          value="这个是禁用状态的样式"
          disabled
        >姓名</InputItem>
      </List>
      <List renderHeader={() => '校验'}>
        <InputItem
          {...getFieldProps('input7', {
            initialValue: '校验出错',
          })}
          error
          onErrorClick={() => { alert('点击报错'); }}
          errorMsg="校验出错"
          clear
          placeholder="内容"
        >报错样式</InputItem>
      </List>
    </div>);
  },
});

BasicInputExample = createForm()(BasicInputExample);
ReactDOM.render(<BasicInputExample />, mountNode);

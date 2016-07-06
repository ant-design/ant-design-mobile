---
order: 0
title: 基本
---

输入框。

````jsx
import { List, InputItem } from 'antm';
import { createForm } from 'rc-form';

let BasicInput = React.createClass({
  onClick() {
    console.log(this.props.form.getFieldsValue());
  },
  render() {
    const { getFieldProps } = this.props.form;

    return (<div>
      <List>
        <List.Header>线型</List.Header>
        <List.Body>
          <InputItem
            {...getFieldProps('input1')}
            placeholder="内容"
            clear
            maxLength={10}
            onBlur={function (e) { console.log('onBlur'); console.log(e); }}
            onFocus={function (e) { console.log('onFocus'); console.log(e);}}
          >基本</InputItem>
          <InputItem
            {...getFieldProps('input2', {
              initialValue: '标签可以是node',
            })}
            placeholder="标签可以是node"
          ><div style={{ backgroundImage: 'url(https://os.alipayobjects.com/rmsportal/zumwvwrngNMGSWe.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} /></InputItem>
          <InputItem
            value="仅供展示:editable={false}"
            editable={false}
          >不可编辑</InputItem>
          <InputItem
            {...getFieldProps('input3', {
              initialValue: '无标签',
            })}
            clear
            placeholder="内容"
          />
          <InputItem
            {...getFieldProps('input4')}
            clear
            placeholder="extra"
            extra="元"
          >带注释</InputItem>
          <InputItem
            {...getFieldProps('input5')}
            name="camera"
            placeholder="注释可以是node"
            clear
            extra={<img src="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png" width="22" height="22" />}
          >带注释</InputItem>
          <InputItem
            {...getFieldProps('input6', {
              initialValue: '输入框',
            })}
            clear
            placeholder="clear"
          >带清除</InputItem>
          <InputItem
            {...getFieldProps('input7', {
              initialValue: '校验出错',
            })}
            error
            errorMsg="校验出错"
            clear
            placeholder="内容"
          >报错样式</InputItem>
          <InputItem
            {...getFieldProps('input8', {
              initialValue: '',
            })}
            error
            onErrorClick={() => {alert(111);}}
            placeholder="内容"
            clear
            extra={<img src="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png" width="22" height="22" />}
          >报错样式</InputItem>
        </List.Body>
      </List>
      <List>
        <List.Header>两个字标签</List.Header>
        <List.Body>
          <InputItem
            {...getFieldProps('label3')}
            placeholder="内容"
            clear
            maxLength={10}
            labelNumber={2}
            onBlur={function (e) {console.log('onBlur'); console.log(e);}}
            onFocus={function (e) {console.log('onFocus'); console.log(e);}}
          >姓名</InputItem>
        </List.Body>
      </List>
      <List>
        <List.Header>三个字标签</List.Header>
        <List.Body>
          <InputItem
            {...getFieldProps('label3')}
            placeholder="内容"
            clear
            maxLength={10}
            labelNumber={3}
            onBlur={function (e) {console.log('onBlur'); console.log(e);}}
            onFocus={function (e) {console.log('onFocus'); console.log(e);}}
          >校验码</InputItem>
        </List.Body>
      </List>
      <List>
        <List.Header>四个字标签(默认)</List.Header>
        <List.Body>
          <InputItem
            {...getFieldProps('label4')}
            placeholder="内容"
            clear
            maxLength={10}
            onBlur={function (e) {console.log('onBlur'); console.log(e);}}
            onFocus={function (e) {console.log('onFocus'); console.log(e);}}
          >四字标签</InputItem>
        </List.Body>
      </List>
      <List>
        <List.Header>五个字标签</List.Header>
        <List.Body>
          <InputItem
            {...getFieldProps('label5')}
            placeholder="内容"
            clear
            maxLength={10}
            labelNumber={5}
            onBlur={function (e) {console.log('onBlur'); console.log(e);}}
            onFocus={function (e) {console.log('onFocus'); console.log(e);}}
          >五个字标签</InputItem>
        </List.Body>
      </List>
      <List>
        <List.Header>六个字标签</List.Header>
        <List.Body>
          <InputItem
            {...getFieldProps('label6')}
            placeholder="内容"
            clear
            maxLength={10}
            labelNumber={6}
            onBlur={function (e) {console.log('onBlur'); console.log(e);}}
            onFocus={function (e) {console.log('onFocus'); console.log(e);}}
          >六个字标签六</InputItem>
        </List.Body>
      </List>
      <List>
        <List.Header>七个字标签</List.Header>
        <List.Body>
          <InputItem
            {...getFieldProps('label6')}
            placeholder="内容"
            clear
            maxLength={10}
            labelNumber={7}
            onBlur={function (e) {console.log('onBlur'); console.log(e);}}
            onFocus={function (e) {console.log('onFocus'); console.log(e);}}
          >七个字标签七个</InputItem>
        </List.Body>
      </List>
      <List>
        <List.Header>有边框,本期不实现</List.Header>
        <List.Body>
          <InputItem
            {...getFieldProps('zzzz', {
              initialValue: '',
              valuePropName: 'value'
            })}
            placeholder="内容"
            clear
            maxLength={10}
            onBlur={function (e) {console.log('onBlur'); console.log(e);}}
            onFocus={function (e) {console.log('onFocus'); console.log(e);}}
          >五个字标签</InputItem>
        </List.Body>
      </List>
    </div>);
  }
});

BasicInput = createForm()(BasicInput);
ReactDOM.render(<BasicInput />, mountNode);

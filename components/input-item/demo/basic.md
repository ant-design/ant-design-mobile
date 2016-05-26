---
order: 0
title: 基本
---

输入框。

---

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
            {...getFieldProps('input1', {
              initialValue: '',
              valuePropName: 'value'
            })}
            placeholder="placeholder"
            clear
            maxLength={10}
            onBlur={function (e) { console.log('onBlur'); console.log(e); }}
            onFocus={function (e) { console.log('onFocus'); console.log(e);}}
          >基本</InputItem>
          <InputItem
            {...getFieldProps('input2', {
              initialValue: '',
              valuePropName: 'value'
            })}
            placeholder="标题可以是node"
          ><div style={{ backgroundImage: 'url(https://os.alipayobjects.com/rmsportal/zumwvwrngNMGSWe.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} /></InputItem>
          <InputItem
            value="仅供展示:editable={false}"
            editable={false}
          >不可编辑</InputItem>
          <InputItem
            {...getFieldProps('input3', {
              initialValue: '无标题',
              valuePropName: 'value'
            })}
            clear
            placeholder="placeholder"
          />
          <InputItem
            {...getFieldProps('input4', {
              initialValue: '',
              valuePropName: 'value'
            })}
            clear
            placeholder="extra"
            extra="元"
          >右边带注释</InputItem>
          <InputItem
            {...getFieldProps('input5', {
              initialValue: '',
              valuePropName: 'value'
            })}
            name="camera"
            placeholder="camera"
            clear
            extra={<img src="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png" width="22" height="22" />}
          >注释可以是node</InputItem>
          <InputItem
            {...getFieldProps('input6', {
              initialValue: '输入框',
              valuePropName: 'value'
            })}
            clear
            placeholder="clear"
          >带清除功能</InputItem>
          <InputItem
            {...getFieldProps('input7', {
              initialValue: '',
              valuePropName: 'value'
            })}
            error
            placeholder="placeholder"
          >报错样式</InputItem>
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
            placeholder="placeholder"
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

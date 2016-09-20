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
        renderHeader={() => '基本'}
      >
        <List.Body>
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
            value="editable={false}"
            editable={false}
          >不可编辑</InputItem>
          <InputItem
            value="disabled={true}"
            disabled
          >禁用状态</InputItem>
          <InputItem
            {...getFieldProps('input2', {
              initialValue: '标签可以是node',
            })}
            placeholder="标签可以是node"
          >
            <div style={{ backgroundImage: 'url(https://os.alipayobjects.com/rmsportal/zumwvwrngNMGSWe.png)', backgroundSize: 'cover', height: '0.44rem', width: '0.44rem' }} />
          </InputItem>
          <InputItem
            {...getFieldProps('input3', {
              initialValue: '',
            })}
            clear
            placeholder="无标签"
          />
          <InputItem
            {...getFieldProps('input4', {
              initialValue: '',
            })}
            clear
            placeholder="extra"
            extra="元"
          >带注释</InputItem>
          <InputItem
            {...getFieldProps('input5', {
              initialValue: '',
            })}
            placeholder="注释可以是node"
            clear
            extra={<img src="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png" />}
          >带注释</InputItem>
          <InputItem
            {...getFieldProps('input6', {
              initialValue: '输入框',
            })}
            clear
            placeholder="clear"
          >清除功能</InputItem>
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
        </List.Body>
      </List>
      <List
        renderHeader={() => '固定标签字数'}
      >
        <List.Body>
          <InputItem
            {...getFieldProps('label2', {
              initialValue: '',
            })}
            placeholder="内容"
            clear
            maxLength={10}
            labelNumber={2}
            onBlur={(value) => { console.log('onBlur'); console.log(value); }}
            onFocus={(value) => { console.log('onFocus'); console.log(value); }}
          >姓名</InputItem>
          <InputItem
            {...getFieldProps('label3', {
              initialValue: '',
            })}
            placeholder="内容"
            clear
            maxLength={10}
            labelNumber={3}
            onBlur={(value) => { console.log('onBlur'); console.log(value); }}
            onFocus={(value) => { console.log('onFocus'); console.log(value); }}
          >校验码</InputItem>
          <InputItem
            {...getFieldProps('label4', {
              initialValue: '',
            })}
            placeholder="默认"
            clear
            maxLength={10}
            onBlur={(value) => { console.log('onBlur'); console.log(value); }}
            onFocus={(value) => { console.log('onFocus'); console.log(value); }}
          >四字标签</InputItem>
          <InputItem
            {...getFieldProps('label5', {
              initialValue: '',
            })}
            placeholder="内容"
            clear
            maxLength={10}
            labelNumber={5}
            onBlur={(value) => { console.log('onBlur'); console.log(value); }}
            onFocus={(value) => { console.log('onFocus'); console.log(value); }}
          >五个字标签</InputItem>
          <InputItem
            {...getFieldProps('label6', {
              initialValue: '',
            })}
            placeholder="内容"
            clear
            maxLength={10}
            labelNumber={6}
            onBlur={(value) => { console.log('onBlur'); console.log(value); }}
            onFocus={(value) => { console.log('onFocus'); console.log(value); }}
          >六个字标签六</InputItem>
          <InputItem
            {...getFieldProps('label7', {
              initialValue: '',
            })}
            placeholder="内容"
            clear
            maxLength={10}
            labelNumber={7}
            onBlur={(value) => { console.log('onBlur'); console.log(value); }}
            onFocus={(value) => { console.log('onFocus'); console.log(value); }}
          >七个字标签七个</InputItem>
        </List.Body>
      </List>
    </div>);
  },
});

BasicInputExample = createForm()(BasicInputExample);
ReactDOM.render(<BasicInputExample />, mountNode);

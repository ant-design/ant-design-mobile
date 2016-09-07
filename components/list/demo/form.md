---
order: 0
title: 列表项类表单组件大集合
---

表单集合. ([rc-form 文档](https://github.com/react-component/form))

````jsx
import { List, InputItem, Switch, Stepper, Slider, Radio, TextareaItem, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import { createForm } from 'rc-form';

let BasicInput = React.createClass({
  getInitialState() {
    return {
      disabled: false,
      value: 1,
    };
  },
  handleChange(e) {
    if (e.target.checked) {
      this.setState({
        value: 1,
      });
    }
  },
  handleChange2(e) {
    if (e.target.checked) {
      this.setState({
        value: 2,
      });
    }
  },
  onClick() {
    console.log(this.props.form.getFieldsValue());
  },
  render() {
    const { getFieldProps } = this.props.form;

    return (<div>
      <List title="表单输入项">
        <List.Body>
          <InputItem
            {...getFieldProps('input3', {
              initialValue: '小蚂蚁',
            })}
            clear
          >帐号</InputItem>
          <InputItem
            {...getFieldProps('input4')}
            clear
            placeholder="请输入密码"
            type="password"
          >密码</InputItem>
          <InputItem
            {...getFieldProps('input1', {
              initialValue: '1245',
            })}
            clear
            error
            placeholder="校验样式"
            type="password"
          >密码</InputItem>
        </List.Body>
      </List>
      <List
        title="表单展示项"
      >
        <List.Body>
          <List.Item
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            arrow="horizontal"
          >我的钱包</List.Item>
          <List.Item
            thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
            arrow="horizontal"
          >我的花销占比</List.Item>
        </List.Body>
      </List>
      <List
        title="表单控件"
      >
        <List.Body>
          <List.Item
            extra={<Switch
              {...getFieldProps('1', {
                initialValue: true,
                valuePropName: 'checked',
              })}
            />}
          >使用 Ant Desgin Component</List.Item>
          <List.Item>
            <Slider range defaultValue={[20, 50]} />
          </List.Item>
          <List.Item
            extra={<Stepper showNumber size="small" max={10} min={1} defaultValue={20} onChange={() => {}} />}
          >预定人数</List.Item>
        </List.Body>
      </List>
      <List>
        <List.Body>
          <TextareaItem
            {...getFieldProps('note7', {
              initialValue: '如果你有什么建议意见,欢迎你来吐槽',
            })}
            labelNumber={4}
            name="yyy"
            rows={5}
            placeholder="计数功能"
            clear
            count={100}
            onBlur={() => { console.log('onBlur'); }}
            onFocus={(e) => { console.log('onFocus'); console.log(e); }}
          />
        </List.Body>
      </List>
      <List
        title="列表单选"
      >
        <List.Body>
          <Radio.RadioItem
            checked={this.state.value === 1}
            onChange={this.handleChange}
            disabled={this.state.disabled}
          >
            选项一
          </Radio.RadioItem>
          <Radio.RadioItem
            checked={this.state.value === 2}
            onChange={this.handleChange2}
            disabled={this.state.disabled}
          >
            选项二
          </Radio.RadioItem>
          <Radio.RadioItem
            checked
            onChange={this.handleChange}
            disabled
          >
            选项三
          </Radio.RadioItem>
          <Radio.RadioItem
            checked={false}
            onChange={this.handleChange}
            disabled
          >
            选项四
          </Radio.RadioItem>
        </List.Body>
      </List>
      <WhiteSpace />
      <WingBlank size="lg">
        <Button type="primary">通栏按钮</Button>
      </WingBlank>
      <WhiteSpace />
      <WhiteSpace />
    </div>);
  },
});

BasicInput = createForm()(BasicInput);
ReactDOM.render(<BasicInput />, mountNode);

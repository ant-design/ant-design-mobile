---
order: 0
title: 列表项类表单组件大集合
----

表单集合

````jsx
import { List, InputItem, Switch, Stepper, Slider, Radio, Checkbox, TextareaItem, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import { createForm } from 'rc-form';

let BasicInput = React.createClass({
  getInitialState() {
    return {
      disabled: false,
      checked: null,
      r: 'a',
      s: 'e',
    };
  },
  handleChange(e) {
    this.setState({
      r: e.target.value,
    });
  },
  handleChange2(e) {
    this.setState({
      s: e.target.value,
    });
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
            format="password"
          >密码</InputItem>
        </List.Body>
      </List>
      <List
        title="表单展示项"
      >
        <List.Body>
          <List.Item
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          >我的钱包</List.Item>
          <List.Item
            thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
          >我的花销占比</List.Item>
        </List.Body>
      </List>
      <List
        title="表单开关项"
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
          <List.Item
            extra="大尺寸"
            arrow="horizontal"
          >个性化调整</List.Item>
          <List.Item
            extra={<img src="https://zos.alipayobjects.com/rmsportal/zvUHiplIUVXxLwr.png" />}
            arrow="horizontal"
          >个性化调整</List.Item>
        </List.Body>
      </List>
      <List
        title="表单计数项"
      >
        <List.Body>
          <List.Item
            extra={<Stepper showNumber size="small" max={10} min={1} defaultValue={1} onChange={() => {}} />}
          >显示数值</List.Item>
          <List.Item>
            <Slider range defaultValue={[20, 50]} />
          </List.Item>
        </List.Body>
      </List>
      <List
        title="表单单选项"
      >
        <List.Body>
          <Radio.RadioItem
            value="a"
            checked={this.state.r === 'a'}
            onChange={this.handleChange}
            disabled={this.state.disabled}
          >
            使用 Ant Desgin Component
          </Radio.RadioItem>
          <Radio.RadioItem
            value="b"
            checked={this.state.r === 'b'}
            onChange={this.handleChange}
            disabled={this.state.disabled}
          >
            使用 Ant Desgin Component
          </Radio.RadioItem>
          <Radio.RadioItem
            value="c"
            checked
            onChange={this.handleChange}
            disabled
          >
            个性化调整disabled
          </Radio.RadioItem>
          <Radio.RadioItem
            value="d"
            checked={false}
            onChange={this.handleChange}
            disabled
          >
            个性化调整disabled
          </Radio.RadioItem>
        </List.Body>
      </List>
      <List
        title="表单多选项，普通列表中多选项"
      >
        <List.Body>
          <Checkbox.CheckboxItem
            {...getFieldProps('f1', {
              initialValue: true,
              valuePropName: 'checked',
            })}
          >
            使用 Ant Desgin Component
          </Checkbox.CheckboxItem>
          <Checkbox.CheckboxItem
            {...getFieldProps('f2', {
              initialValue: false,
              valuePropName: 'checked',
            })}
          >
            使用 Ant Desgin Component
          </Checkbox.CheckboxItem>
          <Checkbox.CheckboxItem
            disabled
            {...getFieldProps('f3', {
              initialValue: false,
              valuePropName: 'checked',
            })}
          >
            未选中，不可编辑
          </Checkbox.CheckboxItem>
          <Checkbox.CheckboxItem
            disabled
            {...getFieldProps('f4', {
              initialValue: true,
              valuePropName: 'checked',
            })}
          >
            强制选中,不可编辑
          </Checkbox.CheckboxItem>
        </List.Body>
      </List>
      <List
        title="多行输入,TextareaItem"
      >
        <List.Body>
          <TextareaItem
            {...getFieldProps('note7', {
              initialValue: '多行输入,带计数功能,count+rows',
              valuePropName: 'value',
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
      <WhiteSpace />
      <WingBlank>
        <Button type="primary">通栏按钮</Button>
      </WingBlank>
      <WhiteSpace />
    </div>);
  },
});

BasicInput = createForm()(BasicInput);
ReactDOM.render(<BasicInput />, mountNode);

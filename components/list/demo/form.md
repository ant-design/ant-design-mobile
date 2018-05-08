---
order: 1
title:
  zh-CN: 可输入列表
  en-US: 'Input List'
---

Form Collection. (Use [rc-form](https://github.com/react-component/form) to validate form fields)

````jsx
import { List, InputItem, Switch, Stepper, Range, Button } from 'antd-mobile';
import { createForm } from 'rc-form';

const Item = List.Item;

class BasicInput extends React.Component {
  state = {
    value: 1,
  }
  onSubmit = () => {
    this.props.form.validateFields({ force: true }, (error) => {
      if (!error) {
        console.log(this.props.form.getFieldsValue());
      } else {
        alert('Validation failed');
      }
    });
  }
  onReset = () => {
    this.props.form.resetFields();
  }
  validateAccount = (rule, value, callback) => {
    if (value && value.length > 4) {
      callback();
    } else {
      callback(new Error('At least four characters for account'));
    }
  }
  render() {
    const { getFieldProps, getFieldError } = this.props.form;

    return (<form>
      <List
        renderHeader={() => 'Form Validation'}
        renderFooter={() => getFieldError('account') && getFieldError('account').join(',')}
      >
        <InputItem
          {...getFieldProps('account', {
            // initialValue: 'little ant',
            rules: [
              { required: true, message: 'Please input account' },
              { validator: this.validateAccount },
            ],
          })}
          clear
          error={!!getFieldError('account')}
          onErrorClick={() => {
            alert(getFieldError('account').join('、'));
          }}
          placeholder="please input account"
        >Account</InputItem>
        <InputItem {...getFieldProps('password')} placeholder="please input password" type="password">
          Password
        </InputItem>
        <Item
          extra={<Switch {...getFieldProps('1', { initialValue: true, valuePropName: 'checked' })} />}
        >Confirm Infomation</Item>
        <Item><div style={{ padding: 7 }}><Range defaultValue={[20, 80]} /></div></Item>
        <Item extra={<Stepper style={{ width: '100%', minWidth: '100px' }} showNumber size="small" defaultValue={20} />}>Number of Subscribers</Item>
        <Item>
          <Button type="primary" size="small" inline onClick={this.onSubmit}>Submit</Button>
          <Button size="small" inline style={{ marginLeft: '2.5px' }} onClick={this.onReset}>Reset</Button>
        </Item>
      </List>
    </form>);
  }
}

const BasicInputWrapper = createForm()(BasicInput);
ReactDOM.render(<BasicInputWrapper />, mountNode);
````

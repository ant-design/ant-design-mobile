---
order: 0
title: 基本
---

Radio

---

````jsx
import { List, Radio, Button, WingBlank, WhiteSpace } from 'antm';
import { createForm } from 'rc-form';

let Test = React.createClass({
  onClick() {
    console.log(this.props.form.getFieldsValue());
  },
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <List >
          <List.Header>表单多选项，普通列表中多选项</List.Header>
          <List.Body>
            <List.Item
              thumb={<Radio
                {...getFieldProps('f1', {
                  initialValue: true,
                  valuePropName: 'checked'
                })}
              />}
            >
              使用 Ant Desgin Component
            </List.Item>
            <List.Item
              thumb={<Radio
                {...getFieldProps('f2', {
                  initialValue: false,
                  valuePropName: 'checked'
                })}
              />}
            >
              使用 Ant Desgin Component
            </List.Item>
            <List.Item
              thumb={<Radio
                disabled
                {...getFieldProps('f3', {
                  initialValue: false,
                  valuePropName: 'checked'
                })}
              />}
            >
              个性化调整disabled
            </List.Item>
            <List.Item
              thumb={<Radio
                disabled
                {...getFieldProps('f4', {
                  initialValue: true,
                  valuePropName: 'checked'
                })}
              />}
            >
              个性化调整disabled
            </List.Item>
          </List.Body>
        </List>
        <Radio
          type="agree"
          {...getFieldProps('f5', {
            initialValue: false,
            valuePropName: 'checked'
          })}
        >同意<a href="http://www.alipay.com" target="_blank">《信用支付服务合同》</a>
        </Radio>
        <Radio
          type="agree"
          {...getFieldProps('f6', {
            initialValue: true,
            valuePropName: 'checked'
          })}
        >同意<a href="http://www.alipay.com" target="_blank">《信用支付服务合同》</a>
        </Radio>
        <Radio
          disabled
          type="agree"
          {...getFieldProps('f7', {
            initialValue: false,
            valuePropName: 'checked'
          })}
        >强制选中,无法取消勾选<a href="http://www.alipay.com" target="_blank">《信用支付服务合同》</a>
        </Radio>
        <Radio
          disabled
          type="agree"
          {...getFieldProps('f8', {
            initialValue: true,
            valuePropName: 'checked'
          })}
        >强制选中,无法取消勾选<a href="http://www.alipay.com" target="_blank">《信用支付服务合同信用支付服务合同信用支付服务合同》</a>
        </Radio>
      <WhiteSpace mode={12} />
      <div className="button-container">
        <WingBlank>
          <Button onClick={this.onClick}>Submit</Button>
        </WingBlank>
      </div>
    </div>);
  }
});

Test = createForm()(Test);

ReactDOM.render(<Test />, mountNode);
````

---
order: 2
title: 协议复选框
---

Checkbox.AgreeItem

````jsx
import { Checkbox } from 'antm';
import { createForm } from 'rc-form';
const AgreeItem = Checkbox.AgreeItem;

let Test = React.createClass({
  onClick() {
    console.log(this.props.form.getFieldsValue());
  },
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <AgreeItem
          {...getFieldProps('f5', {
            initialValue: false,
            valuePropName: 'checked'
          })}
        >同意同意同意同意同意同意同意同意同意同意同意同意同意同意同意同意同意同意同意同意同意
        </AgreeItem>
        <AgreeItem
          {...getFieldProps('f6', {
            initialValue: true,
            valuePropName: 'checked'
          })}
        >同意<a href="http://www.alipay.com" target="_blank">《信用支付服务合同》</a>
        </AgreeItem>
        <AgreeItem
          disabled
          {...getFieldProps('f7', {
            initialValue: false,
            valuePropName: 'checked'
          })}
        >未选中，不可编辑<a href="http://www.alipay.com" target="_blank">《信用支付服务合同》</a>
        </AgreeItem>
        <AgreeItem
          disabled
          {...getFieldProps('f8', {
            initialValue: true,
            valuePropName: 'checked'
          })}
        >强制选中,不可编辑<a href="http://www.alipay.com" target="_blank">《信用支付服务合同信用支付服务合同信用支付服务合同》</a>
        </AgreeItem>
      </div>
    );
  }
});

Test = createForm()(Test);

ReactDOM.render(<Test />, mountNode);
````

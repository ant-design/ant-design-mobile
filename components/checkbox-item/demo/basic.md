# 基本

- order: 0

Checkbox

---

````jsx
import { List, CheckboxItem, Button} from 'antm';
import { createForm } from 'rc-form';

let Test = React.createClass({
  onClick() {
    console.log(this.props.form.getFieldsValue());
  },
  render() {
    const {getFieldProps} = this.props.form;
    return (<div>
      <List >
        <List.Body>
          <CheckboxItem
            {...getFieldProps('f1', {
              initialValue: false,
              valuePropName: 'checked'
            })}
            extra="额外信息"
          >使用优惠</CheckboxItem>
          <CheckboxItem
            {...getFieldProps('f2', {
              initialValue: true,
              valuePropName: 'checked'
            })}
          >默认选择</CheckboxItem>
          <CheckboxItem
            disabled={true}
            {...getFieldProps('f3', {
              initialValue: false,
              valuePropName: 'checked'
            })}
            name="f3"
          >disabled</CheckboxItem>
        </List.Body>
      </List>
      <CheckboxItem
        mode="agree"
        {...getFieldProps('f4', {
          initialValue: false,
          valuePropName: 'checked'
        })}
        name="f4"
        >同意<a href="http://www.alipay.com" target="_blank">《信用支付服务合同》</a></CheckboxItem>
      <CheckboxItem
        disabled={true}
        mode="agree"
        {...getFieldProps('f5', {
          initialValue: true,
          valuePropName: 'checked'
        })}
        name="f5"
        >强制选中,无法取消勾选<a href="http://www.alipay.com" target="_blank">《信用支付服务合同》</a></CheckboxItem>
      <div className="am-whitespace am-whitespace-12"></div>
      <div className="am-wingblank am-wingblank-10">
        <Button
          mode="white"
          type="submit"
          onClick={this.onClick}
        >Submit</Button>
      </div>
    </div>);
  }
});

Test = createForm()(Test);

ReactDOM.render(<Test />, document.getElementById('components-checkbox-item-demo-basic'));
````

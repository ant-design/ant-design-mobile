# 基本

- order: 0

Checkbox

---

````jsx
import { ListWrap, ListBody, CheckboxItem, Button} from 'antm';
import { createForm } from 'rc-form';

let Test = React.createClass({
  onClick() {
    console.log(this.props.form.getFieldsValue());
  },
  render() {
    const {getFieldProps} = this.props.form;
    return (<div>
      <ListWrap >
        <ListBody>
          <CheckboxItem
            {...getFieldProps('f1', {
              initialValue: false,
              valuePropName: 'checked'
            })}
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
          >disabled</CheckboxItem>
        </ListBody>
      </ListWrap>
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

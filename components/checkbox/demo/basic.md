---
order: 0
title: 基本
---

Checkbox

---

````jsx
import { Checkbox } from 'antm';
import { createForm } from 'rc-form';

let Test = React.createClass({
  onClick() {
    console.log(this.props.form.getFieldsValue());
  },
  render() {
    const { getFieldProps } = this.props.form;
    return (<div>
      <Checkbox
        {...getFieldProps('a0', {
          initialValue: true,
          valuePropName: 'checked'
        })}
      />
      <Checkbox
        {...getFieldProps('a1', {
          initialValue: false,
          valuePropName: 'checked'
        })}
      />
      <Checkbox
        disabled
        {...getFieldProps('a2', {
          initialValue: true,
          valuePropName: 'checked'
        })}
      />
      <Checkbox
        disabled
        {...getFieldProps('a3', {
          initialValue: false,
          valuePropName: 'checked'
        })}
      />
    </div>);
  }
});

Test = createForm()(Test);

ReactDOM.render(<Test />, mountNode);
````

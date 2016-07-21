---
order: 0
title: 基本
---

纯粹的Checkbox

````jsx
import { Checkbox, WhiteSpace, WingBlank } from 'antm';
import { createForm } from 'rc-form';

let Test = React.createClass({
  onClick() {
    console.log(this.props.form.getFieldsValue());
  },
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <WingBlank>
          <WhiteSpace />
          <Checkbox
            {...getFieldProps('a0', {
              initialValue: true,
              valuePropName: 'checked',
            })}
          />
          <WhiteSpace />
          <Checkbox
            {...getFieldProps('a1', {
              initialValue: false,
              valuePropName: 'checked',
            })}
          />
          <WhiteSpace />
          <Checkbox
            disabled
            {...getFieldProps('a2', {
              initialValue: true,
              valuePropName: 'checked',
            })}
          />
          <WhiteSpace />
          <Checkbox
            disabled
            {...getFieldProps('a3', {
              initialValue: false,
              valuePropName: 'checked',
            })}
          />
          <WhiteSpace />
        </WingBlank>
      </div>
    );
  },
});

Test = createForm()(Test);

ReactDOM.render(<Test />, mountNode);
````

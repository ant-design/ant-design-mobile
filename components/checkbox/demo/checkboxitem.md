---
order: 0
title: 列表项复选框
---

Checkbox.CheckboxItem

[rc-form API](https://github.com/react-component/form)

````jsx
import { List, Checkbox } from 'antd-mobile';
import { createForm } from 'rc-form';

const CheckboxItem = Checkbox.CheckboxItem;

let CheckboxItemExample = React.createClass({
  onClick() {
    console.log(this.props.form.getFieldsValue());
  },
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <List title="多项选择操作">
          <List.Body>
            <CheckboxItem
              {...getFieldProps('checkboxitem1', {
                initialValue: true,
                valuePropName: 'checked',
              })}
            >
              使用Ant Design Component
            </CheckboxItem>
            <CheckboxItem
              {...getFieldProps('checkboxitem2', {
                initialValue: false,
                valuePropName: 'checked',
              })}
            >
              个性化调整
            </CheckboxItem>
            <CheckboxItem
              disabled
              {...getFieldProps('checkboxitem3', {
                initialValue: true,
                valuePropName: 'checked',
              })}
            >
              个性化调整
            </CheckboxItem>
          </List.Body>
        </List>
      </div>
    );
  },
});

CheckboxItemExample = createForm()(CheckboxItemExample);

ReactDOM.render(<CheckboxItemExample />, mountNode);
````

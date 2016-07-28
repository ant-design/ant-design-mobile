---
order: 1
title: 列表项复选框
---

Checkbox.CheckboxItem

````jsx
import { List, Checkbox } from 'antd-mobile';
import { createForm } from 'rc-form';
const CheckboxItem = Checkbox.CheckboxItem;

let Test = React.createClass({
  onClick() {
    console.log(this.props.form.getFieldsValue());
  },
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <List>
          <List.Header>表单多选项，普通列表中多选项</List.Header>
          <List.Body>
            <CheckboxItem
              {...getFieldProps('f1', {
                initialValue: true,
                valuePropName: 'checked',
              })}
            >
              签约
            </CheckboxItem>
            <CheckboxItem
              {...getFieldProps('f2', {
                initialValue: false,
                valuePropName: 'checked',
              })}
            >
              物料铺设
            </CheckboxItem>
            <CheckboxItem
              disabled
              {...getFieldProps('f3', {
                initialValue: false,
                valuePropName: 'checked',
              })}
            >
              机具维护（不能选）
            </CheckboxItem>
            <CheckboxItem
              disabled
              {...getFieldProps('f4', {
                initialValue: true,
                valuePropName: 'checked',
              })}
            >
              产品问题解决（必选）
            </CheckboxItem>
          </List.Body>
        </List>
      </div>
    );
  },
});

Test = createForm()(Test);

ReactDOM.render(<Test />, mountNode);
````

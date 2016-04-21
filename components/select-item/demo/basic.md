---
order: 0
title: 基本
---

下拉框

---

````jsx
import { List, SelectItem } from 'antm';
import { createForm } from 'rc-form';

let SelectItemExample = React.createClass({
  onClick() {
    console.log(this.props.form.getFieldsValue());
  },
  render() {
    const {getFieldProps} = this.props.form;
    return (<div >
      <List>
        <List.Body>
          <SelectItem
            {...getFieldProps('select1', {
              initialValue: '2',
              valuePropName: 'value'
            })}
            label="下拉框"
            align="right"
            options={[{val: '1', txt: '文本内容1'}, {val: '2', txt: '文本内容2'}, {val: '3', txt: '文本内容3'}]}
          />
          <SelectItem
            {...getFieldProps('select2', {
              initialValue: '2',
              valuePropName: 'value'
            })}
            label="下拉框"
            align="right"
            options={[{val: '1', txt: '文本内容1'}, {val: '2', txt: '文本内容2'}, {val: '3', txt: '文本内容3'}]}
            arrow="down"
          />
          <SelectItem
            {...getFieldProps('select3', {
              initialValue: '2',
              valuePropName: 'value'
            })}
            label="下拉框"
            align="right"
            options={[{val: '1', txt: '文本内容1'}, {val: '2', txt: '文本内容2'}, {val: '3', txt: '文本内容3'}]}
            error
          />
          <SelectItem
            {...getFieldProps('select4', {
              initialValue: '3',
              valuePropName: 'value'
            })}
            options={[{val: '1', txt: '文本内容1'}, {val: '2', txt: '文本内容2'}, {val: '3', txt: '文本内容3'}]}
          />
          <SelectItem
            {...getFieldProps('select5', {
              initialValue: '3',
              valuePropName: 'value'
            })}
            options={[{val: '1', txt: '文本内容1'}, {val: '2', txt: '文本内容2'}, {val: '3', txt: '文本内容3'}]}
            arrow="down"
          />
        </List.Body>
      </List>
    </div>);
  }
});

SelectItemExample = createForm()(SelectItemExample);

ReactDOM.render(<SelectItemExample />, document.getElementById('components-select-item-demo-basic'));


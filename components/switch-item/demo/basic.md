# 基本

- order: 0

滑动开关。

---

````jsx
import { List, SwitchItem, Button, WingBlank, WhiteSpace } from 'antm';
import { createForm } from 'rc-form';

let SwitchItemExample = React.createClass({
  onClick() {
    console.log(this.props.form.getFieldsValue());
  },
  render() {
    const {getFieldProps} = this.props.form;
    return (<div>
      <List >
        <List.Body>
          <SwitchItem
            {...getFieldProps('yyy', {
              initialValue: true,
              valuePropName: 'checked',
            })}
            name="yyy"
          >默认开</SwitchItem>
          <SwitchItem
            {...getFieldProps('2', {
              initialValue: false,
              valuePropName: 'checked'
            })}
            name="2"
          >默认关</SwitchItem>
          <SwitchItem
            {...getFieldProps('3', {
              initialValue: false,
              valuePropName: 'checked'
            })}
            name="2"
            disabled={true}
          >不可修改</SwitchItem>
        </List.Body>
      </List>
      <WhiteSpace/>
      <WingBlank>
        <Button onClick={this.onClick}>确认添加</Button>
      </WingBlank>
    </div>);
  }
});

SwitchItemExample = createForm()(SwitchItemExample);


ReactDOM.render(<SwitchItemExample/>, document.getElementById('components-switch-item-demo-basic'));
````

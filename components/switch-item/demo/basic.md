# 基本

- order: 0

列表主体内容的容器。

---

````jsx
import { List, SwitchItem, Button } from 'antm';
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
      <div className="am-whitespace am-whitespace-12"></div>
      <div className="am-wingblank am-wingblank-10">
        <Button onClick={this.onClick}
        >Submit</Button>
      </div>
    </div>);
  }
});

SwitchItemExample = createForm()(SwitchItemExample);


ReactDOM.render(<SwitchItemExample/>, document.getElementById('components-switch-item-demo-basic'));
````

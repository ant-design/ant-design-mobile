# 基本

- order: 0

输入框。

---

````jsx
import { List, InputItem } from 'antm';
import { createForm } from 'rc-form';

let BasicInput = React.createClass({
  onClick() {
    console.log(this.props.form.getFieldsValue());
  },
  render() {
    const {getFieldProps} = this.props.form;

    return (<div>
      <List>
        <List.Body>
          <InputItem
            {...getFieldProps('yyy', {
              initialValue: '输入框',
              valuePropName: 'value'
            })}
            placeholder="placeholder"
            clear={true}
            maxLength={10}
            onBlur={function(e){console.log('onBlur'); console.log(e);}}
            onFocus={function(e){console.log('onFocus'); console.log(e);}}
          >Label</InputItem>
          <InputItem
            value="不可编辑"
            editable={false}
          >输入说明</InputItem>
          <InputItem
            value="不可编辑不可编辑不可编辑不可编辑不可编辑不可编辑"
            editable={false}
          >输入说明</InputItem>
          <InputItem
            {...getFieldProps('222', {
              initialValue: '无Label',
              valuePropName: 'value'
            })}
            error={true}
            clear={true}
            placeholder="placeholder"
          />
          <InputItem
            {...getFieldProps('3', {
              initialValue: '222',
              valuePropName: 'value'
            })}
            error={true}
            placeholder="placeholder"
          >输入说明</InputItem>
          <InputItem
            {...getFieldProps('4', {
              initialValue: '222',
              valuePropName: 'value'
            })}
            placeholder="placeholder"
            clear={true}
          >所属门店</InputItem>
          <InputItem
            {...getFieldProps('5', {
              initialValue: '222',
              valuePropName: 'value'
            })}
            error={true}
            placeholder="placeholder"
          >输入说明说明</InputItem>
        </List.Body>
      </List>
      <List>
        <List.Body>
          <InputItem
            name="camera"
            placeholder="camera"
            clear={true}
            icon="camera"
            onIconClick={() => {console.log('点击了icon');}}
            onChange={() => {}}
          >我是相机</InputItem>
          <InputItem
            name="list"
            placeholder="list"
            clear={true}
            icon="list"
            onChange={() => {}}
          >列表</InputItem>
          <InputItem
            name="contacts-mobile"
            placeholder="contacts-mobile"
            clear={true}
            icon="contacts-mobile"
            onChange={() => {}}
          >通讯录</InputItem>
          <InputItem
            name="bill"
            placeholder="bill"
            clear={true}
            icon="bill"
            onChange={() => {}}
          >bill</InputItem>
          <InputItem
            name="contacts-alipay"
            placeholder="contacts-alipay"
            clear={true}
            icon="contacts-alipay"
            onChange={() => {}}
          >支付宝通讯录</InputItem>
          <InputItem
            name="cards"
            placeholder="cards"
            clear={true}
            icon="cards"
            onChange={() => {}}
          >卡片</InputItem>
          <InputItem
            name="calculator"
            placeholder="calculator"
            clear={true}
            icon="calculator"
            onChange={() => {}}
          >日历</InputItem>
          <InputItem
            name="scan"
            placeholder="scan"
            clear={true}
            icon="scan"
            onChange={() => {}}
          >扫码</InputItem>
        </List.Body>
      </List>
    </div>);
  }
});

BasicInput = createForm()(BasicInput);
ReactDOM.render(<BasicInput/>, document.getElementById('components-input-item-demo-basic'));
````

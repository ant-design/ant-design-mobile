# 基本

- order: 0

列表主体内容的容器。

---

````jsx
import { ListWrap, ListBody, InputItem} from 'antm';
import { createForm } from 'rc-form';

let BasicInput = React.createClass({
  onClick() {
    console.log(this.props.form.getFieldsValue());
  },
  render() {
    const {getFieldProps} = this.props.form;

    return (<div>
      <ListWrap>
        <ListBody>
          <InputItem
            {...getFieldProps('yyy', {
              initialValue: 'dada22',
              valuePropName: 'value'
            })}
            name="shop4"
            placeholder="dadads"
            clear={true}
            onBlur={function(e){console.log('onBlur'); console.log(e);}}
            onFocus={function(e){console.log('onFocus'); console.log(e);}}
          >我是</InputItem>
          <InputItem
            {...getFieldProps('222', {
              initialValue: 'dada22',
              valuePropName: 'value'
            })}
            name="shop3"
            clear={true}
            placeholder="dadads"
          />
          <InputItem
            {...getFieldProps('3', {
              initialValue: '222',
              valuePropName: 'value'
            })}
            name="shop2"
            placeholder="dadads"
          >我是内内</InputItem>
          <InputItem
            {...getFieldProps('4', {
              initialValue: '222',
              valuePropName: 'value'
            })}
            name="shop1"
            placeholder="dadads"
            clear={true}
          >所属门店</InputItem>
          <InputItem
            {...getFieldProps('5', {
              initialValue: '222',
              valuePropName: 'value'
            })}
            name="shop"
            placeholder="dadads"
          >我是内内内内</InputItem>
        </ListBody>
      </ListWrap>
      <ListWrap>
        <ListBody>
          <InputItem
            name="camera"
            placeholder="camera"
            clear={true}
            icon="camera"
            onIconClick={function(){console.log('点击了icon');}}
            onChange={function(){}}
          >我是相机</InputItem>
          <InputItem
            name="list"
            placeholder="list"
            clear={true}
            icon="list"
            onChange={function(){}}
          >列表</InputItem>
          <InputItem
            name="contacts-mobile"
            placeholder="contacts-mobile"
            clear={true}
            icon="contacts-mobile"
            onChange={function(){}}
          >通讯录</InputItem>
          <InputItem
            name="bill"
            placeholder="bill"
            clear={true}
            icon="bill"
            onChange={function(){}}
          >bill</InputItem>
          <InputItem
            name="contacts-alipay"
            placeholder="contacts-alipay"
            clear={true}
            icon="contacts-alipay"
            onChange={function(){}}
          >支付宝通讯录</InputItem>
          <InputItem
            name="cards"
            placeholder="cards"
            clear={true}
            icon="cards"
            onChange={function(){}}
          >卡片</InputItem>
          <InputItem
            name="calculator"
            placeholder="calculator"
            clear={true}
            icon="calculator"
            onChange={function(){}}
          >日历</InputItem>
          <InputItem
            name="scan"
            placeholder="scan"
            clear={true}
            icon="scan"
            onChange={function(){}}
          >扫码</InputItem>
        </ListBody>
      </ListWrap>
    </div>);
  }
});

BasicInput = createForm()(BasicInput);
ReactDOM.render(<BasicInput/>, document.getElementById('components-input-item-demo-basic'));
````

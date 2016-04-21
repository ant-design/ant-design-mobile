---
order: 1
title: 添加收银员
---

添加员工的表单例子。

---

````jsx
import { List, InputItem, Button, SelectItem, WingBlank } from 'antm';

ReactDOM.render(
  <div>
  <List>
    <List.Body>
      <List.Item
        extra="请选择"
        arrow="horizontal"
      >所属门店</List.Item>
      <InputItem
        name="yyy"
        clear
        placeholder="真实姓名或昵称"
      >员工姓名</InputItem>
    </List.Body>
    <List.Footer onClick={(e) => {alert('点击了footer'); console.log(e);}}>
      账户名：<span style={{'color': 'red'}}>zhifubao@alipay.com#001</span>
    </List.Footer>
  </List>
  <List>
    <List.Body>
      <InputItem
        label="员工手机"
        name="yyy"
        clear
        placeholder="请填写该员工的手机号码"
      >所属门店</InputItem>
      <SelectItem
        label="退款权限"
        name="yyy"
        align="right"
        value="0"
        options={[{val: '0', txt: '请选择'}, {val: '1', txt: '不允许退款'}, {val: '2', txt: '可退门店所有交易'}, {val: '3', txt: '只可退自己收的'}]}
        onChange={(e) => {console.log('onChange'); console.log(e);}}
      />
      <List.Item
        arrow="horizontal"
      >其他权限</List.Item>
    </List.Body>
    <List.Footer onClick={(e) => {alert('点击了footer'); console.log(e);}} style={{'textAlign': 'center'}}>拥有退款权限的员工可在交易创建后3天内发起退款</List.Footer>
  </List>
  <div className="button-container">
    <WingBlank>
      <Button>确认添加</Button>
    </WingBlank>
  </div>
  </div>
, document.getElementById('components-input-item-demo-addmember'));
````

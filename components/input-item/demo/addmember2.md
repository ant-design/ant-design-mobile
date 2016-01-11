# 添加店长

- order: 2

列表主体内容的容器。

---

````jsx
import { List, InputItem, Button, WingBlank } from 'antm';

ReactDOM.render(<div>
  <List>
    <List.Body>
      <List.Item
        extra="请选择"
        arrow="horizontal"
      >所属门店</List.Item>
      <InputItem
        name="yyy"
        clear={true}
        placeholder="真实姓名或昵称"
      >员工姓名</InputItem>
      <InputItem
        name="yyy"
        clear={true}
        placeholder="用作账户名的后缀名"
      >用户名</InputItem>
    </List.Body>
    <List.Footer onClick={function(e){console.log(e);}}>
      账户名：<span style={{'color':'red'}}>zhifubao@alipay.com#用户名</span>
    </List.Footer>
  </List>
  <List>
    <List.Body>
      <InputItem
        name="yyy"
        clear={true}
        placeholder="请填写该员工的手机号码"
      >员工手机</InputItem>
      <InputItem
        name="yyy"
        clear={true}
        placeholder="选填"
      >邮箱地址</InputItem>
      <List.Item
        arrow="horizontal"
      >员工权限</List.Item>
    </List.Body>
    <List.Footer onClick={function(e){console.log(e);}} style={{'textAlign':'center'}}>拥有退款权限的员工可在交易创建后3天内发起退款</List.Footer>
  </List>
  <WingBlank>
    <Button>确认添加</Button>
  </WingBlank>
</div>
, document.getElementById('components-input-item-demo-addmember2'));
````

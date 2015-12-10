# 员工详情

- order: 1

最简单的用法。

---

````jsx
import { ListWrap, ListBody, ListItem} from 'antm';

ReactDOM.render(
  <div>
  <ListWrap >
    <ListBody>
      <ListItem
        link="http://www.baidu.com"
        content="所属门店"
        extra="鹿港小镇"
        arrow="horizontal"
      />
      <ListItem
        content="员工姓名"
        extra="张三"
      />
      <ListItem
        content="员工角色"
        extra="收银员"
      />
      <ListItem
        content="员工手机"
        extra="13838383756"
      />
      <ListItem
        content="退款权限"
        extra="只可退自己的"
      />
      <ListItem
        content="其他权限"
        arrow="horizontal"
      />
      <ListItem
        content="员工二维码"
        extra={<img src="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg" width="29" height="29"/>}
        arrow="horizontal"
      />
      <ListItem
        content="账户名"
        extra={<div><div className="am-list-title">zhifubao@alipay.com#</div><div className="am-list-brief">001</div></div>}
        arrow="horizontal"
      />
    </ListBody>
  </ListWrap>
  </div>
, document.getElementById('components-list-item-demo-memberdetail'));
````

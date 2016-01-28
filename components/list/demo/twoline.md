# 双行列表

- order: 1

双行列表，设置`line`为2，例如`line={2}`。

---

````jsx
import { List, Button } from 'antm';

ReactDOM.render(
  <div>
  <List >
    <List.Body>
      <List.Item
        thumb="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg"
        line={2}
        arrow="horizontal"
      ><div className="am-list-title">收银员</div><div className="am-list-brief">仅可进行收款、退款及查账操作</div></List.Item>
      <List.Item
        extra={<div><div className="am-list-title">财务</div><div className="am-list-brief">财务</div></div>}
        line={2}
        arrow="horizontal"
      ><div className="am-list-title">title</div><div className="am-list-brief">brief</div></List.Item>
      <List.Item
        line={2}
      ><div className="am-list-title">运营</div><div className="am-list-brief">可进行收款、退款、折扣管理、查看数据等操作</div></List.Item>
      <List.Item
        needActive={false}
        line={2}
        extra={<Button
        mode="light"
        size="tiny"
        inline={true}
        onClick={(e) => {alert(111);}}
      >按钮</Button>}
      ><div><div className="am-list-title">区域经理</div><div className="am-list-brief">可进行收款、退款、折扣管理、查看数据等操作</div></div></List.Item>
      <List.Item line={2} arrow="down">
        <div><div className="am-list-title">客服经理</div><div className="am-list-brief">自定义权限</div></div>
      </List.Item>
      <List.Item
        line={2}
        arrow="horizontal"
      >dada</List.Item>
    </List.Body>
  </List>
  </div>
, document.getElementById('components-list-demo-twoline'));
````

# 双行列表

- order: 1

双行列表，设置`line`为2，例如`line={2}`。

---

````jsx
import { ListWrap, ListBody, ListItem} from 'antm';

ReactDOM.render(
  <div>
  <ListWrap >
    <ListBody>
      <ListItem
        thumb="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg"
        line={2}
        arrow="horizontal"
      ><div className="am-list-title">收银员</div><div className="am-list-brief">仅可进行收款、退款及查账操作</div></ListItem>
      <ListItem
        extra={<div><div className="am-list-title">财务</div><div className="am-list-brief">财务</div></div>}
        line={2}
        arrow="horizontal"
      ><div className="am-list-title">title</div><div className="am-list-brief">brief</div></ListItem>
      <ListItem
        line={2}
      ><div className="am-list-title">运营</div><div className="am-list-brief">可进行收款、退款、折扣管理、查看数据等操作</div></ListItem>
      <ListItem
        line={2}
        extra={<a type="button" className="am-button am-button-tiny am-button-light am-button-inline">按钮</a>}
      ><div><div className="am-list-title">区域经理</div><div className="am-list-brief">可进行收款、退款、折扣管理、查看数据等操作</div></div></ListItem>
      <ListItem
        line={2}
        arrow="down"
      ><div><div className="am-list-title">客服经理</div><div className="am-list-brief">自定义权限</div></div></ListItem>
      <ListItem
        line={2}
        arrow="horizontal"
      >dada</ListItem>
    </ListBody>
  </ListWrap>
  </div>
, document.getElementById('components-list-item-demo-twoline'));
````

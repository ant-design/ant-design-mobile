# 选择角色

- order: 3

列表主体内容的容器。

---

````jsx
import { ListWrap, ListBody, ListItem} from 'antm';

ReactDOM.render(
  <div>
  <ListWrap >
    <ListBody>
      <ListItem
        content={<div><div className="am-list-title">收银员</div><div className="am-list-brief">仅可进行收款、退款及查账操作</div></div>}
        arrow="horizontal"
      />
      <ListItem
        content={<div><div className="am-list-title">财务</div><div className="am-list-brief">可进行收款、退款、折扣管理、查看数据等操作</div></div>}
        arrow="horizontal"
      />
      <ListItem
        content={<div><div className="am-list-title">运营</div><div className="am-list-brief">可进行收款、退款、折扣管理、查看数据等操作</div></div>}
        arrow="horizontal"
      />
      <ListItem
        content={<div><div className="am-list-title">区域经理</div><div className="am-list-brief">可进行收款、退款、折扣管理、查看数据等操作</div></div>}
        arrow="horizontal"
      />
      <ListItem
        content={<div><div className="am-list-title">客服经理</div><div className="am-list-brief">自定义权限</div></div>}
        arrow="horizontal"
      />
    </ListBody>
  </ListWrap>
  </div>
, document.getElementById('components-list-item-demo-selectrole'));
````

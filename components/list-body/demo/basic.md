# 基本

- order: 0

列表主体内容的容器。

---

````jsx
import { ListWrap, ListBody, ListItem} from 'antm';

ReactDOM.render(
  <div>
    <ListWrap >
      <ListBody>
        <ListItem>内容</ListItem>
        <ListItem extra="额外信息" arrow="horizontal">内容</ListItem>
      </ListBody>
    </ListWrap>
  </div>
, document.getElementById('components-list-body-demo-basic'));
````

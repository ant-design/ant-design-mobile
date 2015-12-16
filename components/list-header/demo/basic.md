# 基本

- order: 0

最简单的用法。

---

````jsx
import { ListWrap, ListHeader, ListBody, ListItem} from 'antm';

ReactDOM.render(
  <div>
  <ListWrap >
    <ListHeader>列表头部</ListHeader>
    <ListBody>
      <ListItem extra="额外信息" arrow="horizontal">内容</ListItem>
      <ListItem>内容</ListItem>
    </ListBody>
  </ListWrap>
  <ListWrap >
      <ListHeader style={{color:'red'}}>列表头部,传入样式</ListHeader>
      <ListBody>
        <ListItem>内容</ListItem>
        <ListItem>内容</ListItem>
      </ListBody>
    </ListWrap>
  </div>
, document.getElementById('components-list-header-demo-basic'));
````

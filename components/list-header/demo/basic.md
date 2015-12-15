# 基本

- order: 0

最简单的用法。

---

````jsx
import { ListWrap, ListHeader, ListFooter, ListBody, ListItem} from 'antm';

ReactDOM.render(
  <div>
  <ListWrap >
    <ListHeader style={{color:'red'}}>我是表头</ListHeader>
    <ListBody>
      <ListItem extra="我是额外信息" arrow="horizontal">我是内容</ListItem>
      <ListItem>我是内容22</ListItem>
    </ListBody>
    <ListFooter>我是表尾</ListFooter>
  </ListWrap>
  <ListWrap >
      <ListHeader>我是表头</ListHeader>
      <ListBody>
        <ListItem>我是内容</ListItem>
        <ListItem>我是内容22</ListItem>
      </ListBody>
    </ListWrap>
  </div>
, document.getElementById('components-list-header-demo-basic'));
````

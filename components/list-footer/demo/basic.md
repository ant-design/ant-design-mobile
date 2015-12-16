# 基本

- order: 0

最简单的用法。

---

````jsx
import { ListWrap, ListHeader, ListFooter, ListBody, ListItem} from 'antm';

ReactDOM.render(
  <div>
  <ListWrap >
    <ListBody>
      <ListItem extra="额外信息" arrow="horizontal">内容</ListItem>
    </ListBody>
    <ListFooter>列表尾部</ListFooter>
  </ListWrap>
  <ListWrap >
      <ListBody>
        <ListItem extra="额外信息" arrow="horizontal">内容</ListItem>
      </ListBody>
      <ListFooter onClick={function(e){console.log(e); alert('点击了footer!');}} style={{color:'red'}} align="right">
        <a id="ddd">超链接</a>,改了样式,右对齐,快点我
      </ListFooter>
    </ListWrap>
  </div>
, document.getElementById('components-list-footer-demo-basic'));
````

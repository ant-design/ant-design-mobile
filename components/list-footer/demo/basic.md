# 基本

- order: 0

最简单的用法。

---

````jsx
import { ListWrap, ListHeader, ListFooter, ListBody, ListItem} from 'antm';

ReactDOM.render(
  <div>
  <ListWrap >
    <ListHeader>我是表头</ListHeader>
    <ListBody>
      <ListItem extra="我是额外信息" arrow="horizontal">我是内容</ListItem>
    </ListBody>
    <ListFooter>我是表尾</ListFooter>
  </ListWrap>
  <ListWrap >
      <ListBody>
        <ListItem extra="我是额外信息" arrow="horizontal">我是内容22</ListItem>
      </ListBody>
      <ListFooter onClick={function(e){console.log(e); alert('点击了footer!');}} style={{color:'red'}} align="right">
        <a id="ddd">我是链接</a>,我改了样式,还右对齐,快点我
      </ListFooter>
    </ListWrap>
  </div>
, document.getElementById('components-list-footer-demo-basic'));
````

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
      <ListItem
        type="双行"
        icon=""
        extra="我是额外信息"
        arrow="horizontal"
        onClick={function(){}}
      >我是内容</ListItem>
      <ListItem
        type="双行"
        icon=""
        extra="我是额外信息"
        arrow="horizontal"
        onClick={function(){}}
      >我是内容22</ListItem>
    </ListBody>
    <ListFooter>我是表尾</ListFooter>
  </ListWrap>
  <ListWrap >
      <ListHeader>我是表头</ListHeader>
      <ListBody>
        <ListItem
          type="双行"
          icon=""
          extra="我是额外信息"
          arrow="horizontal"
          onClick={function(){}}
        >我是内容</ListItem>
        <ListItem
          type="双行"
          icon=""
          extra="我是额外信息"
          arrow="horizontal"
          onClick={function(){}}
        >我是内容22</ListItem>
      </ListBody>
      <ListFooter onClick={function(e){console.log(e);}} style={{color:'red'}} align="right">
        <a id="ddd">我是链接</a>,我改了样式,还右对齐,快点我
      </ListFooter>
    </ListWrap>
  </div>
, document.getElementById('components-list-footer-demo-basic'));
````

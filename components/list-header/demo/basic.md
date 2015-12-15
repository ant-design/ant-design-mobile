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
      <ListFooter style={{color:'blue'}}>
        我是表尾
      </ListFooter>
    </ListWrap>
  </div>
, document.getElementById('components-list-header-demo-basic'));
````

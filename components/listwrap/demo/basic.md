# 基本

- order: 0

最简单的用法。

---

````jsx
import { ListWrap, ListHeader, ListFooter, ListBody,ListItem} from 'antm';

ReactDOM.render(
  <ListWrap >
    <ListHeader label="我是表头"/>
    <ListBody>
      <ListItem
        type="双行"
        icon=""
        content="我是内容"
        extra="我是额外信息"
        arrow="horizontal"
        onClick={function(){}}
      />
      <ListItem
        type="双行"
        icon=""
        content="我是内容22"
        extra="我是额外信息"
        arrow="horizontal"
        onClick={function(){}}
      />
    </ListBody>
    <ListFooter content="我是表尾"/>
  </ListWrap>
, document.getElementById('components-listwrap-demo-basic'));

````

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
      <ListItem
        type="双行"
        icon=""
        extra="我是额外信息"
        arrow="horizontal"
        onClick={function(){}}
      >我是内容</ListItem>
    </ListBody>
  </ListWrap>
  <ListWrap >
      <ListBody>
        <ListItem
          type="双行"
          icon=""
          content=""
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
    </ListWrap>
  </div>
, document.getElementById('components-list-body-demo-basic'));
````

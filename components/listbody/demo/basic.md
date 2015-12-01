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
        content="我是内容"
        extra="我是额外信息"
        arrow="horizontal"
        onClick={function(){}}
      />
    </ListBody>
  </ListWrap>
  <ListWrap >
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
    </ListWrap>
  </div>
, document.getElementById('components-listbody-demo-basic'));
````

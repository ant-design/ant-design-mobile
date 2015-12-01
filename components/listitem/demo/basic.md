# 基本

- order: 0

最简单的用法。

---

````jsx
import { ListWrap, ListHeader, ListFooter, ListBody,ListItem} from 'antm';

ReactDOM.render(
  <div>
  <ListWrap >
    <ListHeader label="我是表头"/>
    <ListBody>
      <ListItem
        type="双行"
        icon=""
        content="我是内容"
        extra="我是额外信息"
        arrow={true}
        onClick={function(){}}
      />
      <ListItem
        type="双行"
        icon=""
        content="我是内容22"
        extra="我是额外信息"
        arrow={true}
        onClick={function(){}}
      />
    </ListBody>
    <ListFooter label="我是表尾"/>
  </ListWrap>
  <ListWrap >
      <ListHeader label="我是表头"/>
      <ListBody>
        <ListItem
          type="双行"
          icon=""
          content="我是内容"
          extra="我是额外信息"
          arrow={true}
          onClick={function(){}}
        />
        <ListItem
          type="双行"
          icon=""
          content="我是内容22"
          extra="我是额外信息"
          arrow={true}
          onClick={function(){}}
        />
      </ListBody>
      <ListFooter label="我是表尾"/>
    </ListWrap>
  </div>
, document.getElementById('components-listitem-demo-basic'));
````

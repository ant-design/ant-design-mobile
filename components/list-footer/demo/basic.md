# 基本

- order: 0

最简单的用法。

---

````jsx
import { ListWrap, ListHeader, ListFooter, ListBody, ListItem} from 'antm';

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
    <ListFooter>我是表尾</ListFooter>
  </ListWrap>
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
      <ListFooter onClick={function(e){}} style={{color:'red'}} align="right">
        <div><a id="ddd">我是链接</a>,我改了样式,还右对齐,快点我</div>
      </ListFooter>
    </ListWrap>
  </div>
, document.getElementById('components-list-footer-demo-basic'));
````

# 基本

- order: 0

最简单的用法。

---

````jsx
import { ListWrap, ListHeader, ListFooter, ListBody,ListItem} from 'antm';

window.clickItem = function(e) {
  console.log(e);
};
window.openurl = function(e) {
  console.log(e);
  window.location.href=e.target.href;
};
ReactDOM.render(
  <div>
  <ListWrap >
    <ListHeader label="我是表头"/>
    <ListBody>
      <ListItem
        type="双行"
        link="http://www.baidu.com"
        icon=""
        content="我是内容"
        arrow="horizontal"
        onClick={window.openurl}
      />
      <ListItem
        type="双行"
        icon=""
        content="我是内容22"
        extra="我是额外信息"
        arrow="horizontal"
        onClick={window.clickItem}
      />
      <ListItem
        type="双行"
        icon=""
        content="我是内容22"
        extra="我是额外信息"
        arrow="placeholder"
        onClick={window.clickItem}
      />
      <ListItem
        type="双行"
        icon=""
        content="我是内容"
        extra="我是额外信息"
        arrow="vertical"
        onClick={function(){}}
      />
    </ListBody>
    <ListFooter content="我是表尾"/>
  </ListWrap>
  <ListWrap >
      <ListHeader label="我是表头"/>
      <ListBody>
        <ListItem
          type="双行"
          icon=""
          content="我是内容"
          extra="我是额外信息"
          arrow="vertical"
          onClick={function(){}}
        />
      </ListBody>
      <ListFooter content="我是表尾"/>
    </ListWrap>
  </div>
, document.getElementById('components-listitem-demo-basic'));
````

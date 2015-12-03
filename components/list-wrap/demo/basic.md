# 基本

- order: 0

最简单的用法。

---

````jsx
import { ListWrap, ListHeader, ListFooter, ListBody,ListItem} from 'antm';

ReactDOM.render(
  <form>
    <ListWrap >
      <ListHeader label="单行列表"/>
      <ListBody>
        <ListItem
          content="文本内容"
          arrow="horizontal"
          onClick={function(){}}
        />
      </ListBody>
      <ListFooter content="文本说明文本说明"/>
    </ListWrap>
    <ListWrap >
      <ListBody>
        <ListItem
          content="文本信息"
          extra="内容内容"
          onClick={function(){}}
        />
      </ListBody>
      <ListFooter content="文本说明文本说明"/>
    </ListWrap>
    <ListWrap >
      <ListHeader label="单行组合"/>
      <ListBody>
        <ListItem
          content="文本信息"
          extra="内容内容"
          onClick={function(){}}
        />
        <ListItem
          content="文本内容"
          arrow="horizontal"
          onClick={function(){}}
        />
        <ListItem
          content="文本信息"
          extra="文本内容"
          arrow="horizontal"
          onClick={function(){}}
        />
      </ListBody>
    </ListWrap>
  </form>
, document.getElementById('components-list-wrap-demo-basic'));

````

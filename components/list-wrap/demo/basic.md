# 基本

- order: 0

最简单的用法。

---

````jsx
import { ListWrap, ListHeader, ListFooter, ListBody, ListItem, InputItem} from 'antm';

ReactDOM.render(
  <form>
    <ListWrap>
      <ListHeader>单行列表</ListHeader>
      <ListBody>
        <ListItem
          arrow="horizontal"
          onClick={function(){}}
        >文本内容</ListItem>
        <ListItem
          extra="内容内容"
          arrow="down"
          onClick={function(){}}
        >文本信息</ListItem>
        <ListItem
          arrow="up"
          extra="内容内容"
          onClick={function(){}}
        >文本信息</ListItem>
        <ListItem
          extra="内容内容"
          arrow="ss"
          onClick={function(){}}
        >文本内容</ListItem>
        <ListItem
          extra="内容内容"
          onClick={function(){}}
        >文本内容</ListItem>
        <ListItem
          extra="文本内容"
          arrow="horizontal"
          onClick={function(){}}
        >文本信息</ListItem>
      </ListBody>
      <ListFooter>文本说明文本说明</ListFooter>
    </ListWrap>
    <ListWrap isIconList={true}>
      <ListHeader>带icon</ListHeader>
       <ListBody>
        <ListItem
          link="http://www.baidu.com"
          thumb="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg"
          arrow="horizontal"
          onClick={window.openurl}
        >我有thumb</ListItem>
        <ListItem
          thumb="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg"
          extra="写点就有剪头坑位"
          arrow="aaa"
          onClick={window.clickItem}
        >我有thumb</ListItem>
        <ListItem
          icon="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg"
          extra="不写没有剪头坑位"
          onClick={window.clickItem}
        >我有icon</ListItem>
        <ListItem
          icon="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg"
          extra="向下箭头"
          arrow="vertical"
          onClick={function(){}}
        >我有icon</ListItem>
        <ListItem
          icon=""
          extra={<img src="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg" width="29" height="29"/>}
          arrow="horizontal"
          onClick={window.clickItem}
        >我是内容22</ListItem>
      </ListBody>
    </ListWrap>
    <ListWrap>
      <ListHeader>form列表</ListHeader>
      <ListBody>
        <InputItem
          label="我是"
          name="yyy"
          defaultValue="dada22"
          placeholder="dadads"
          clear={true}
          onChange={function(e){console.log('onChange'); console.log(e);}}
          onBlur={function(e){console.log('onBlur'); console.log(e);}}
          onFocus={function(e){console.log('onFocus'); console.log(e);}}
        />
        <InputItem
          label="我是内"
          name="yyy"
          defaultValue="dada22"
          placeholder="dadads"
          onChange={function(){}}
        />
        <InputItem
          name="yyy"
          defaultValue="dada22"
          placeholder="dadads"
          clear={true}
          onChange={function(){}}
        />
      </ListBody>
    </ListWrap>
  </form>
, document.getElementById('components-list-wrap-demo-basic'));
````

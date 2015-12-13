# 基本

- order: 0

最简单的用法。

---

````jsx
import { ListWrap, ListHeader, ListFooter, ListBody, ListItem, InputItem} from 'antm';

ReactDOM.render(
  <form>
    <ListWrap>
      <ListHeader label="单行列表"/>
      <ListBody>
        <ListItem
          content="文本内容"
          arrow="horizontal"
          onClick={function(){}}
        />
        <ListItem
          content="文本信息"
          extra="内容内容"
          arrow="down"
          onClick={function(){}}
        />
        <ListItem
          content="文本信息"
          arrow="up"
          extra="内容内容"
          onClick={function(){}}
        />
        <ListItem
          content="文本内容"
          extra="内容内容"
          arrow="ss"
          onClick={function(){}}
        />
        <ListItem
          content="文本内容"
          extra="内容内容"
          onClick={function(){}}
        />
        <ListItem
          content="文本信息"
          extra="文本内容"
          arrow="horizontal"
          onClick={function(){}}
        />
      </ListBody>
      <ListFooter>文本说明文本说明</ListFooter>
    </ListWrap>
    <ListWrap isIconList={true}>
      <ListHeader label="带icon"/>
       <ListBody>
        <ListItem
          link="http://www.baidu.com"
          thumb="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg"
          content="我有thumb"
          arrow="horizontal"
          onClick={window.openurl}
          extraFormData={{'pic1':'22', 'pic2':'222'}}
        />
        <ListItem
          thumb="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg"
          content="我有thumb"
          extra="写点就有剪头坑位"
          arrow="aaa"
          onClick={window.clickItem}
        />
        <ListItem
          icon="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg"
          content="我有icon"
          extra="不写没有剪头坑位"
          onClick={window.clickItem}
        />
        <ListItem
          icon="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg"
          content="我有icon"
          extra="向下箭头"
          arrow="vertical"
          onClick={function(){}}
        />
        <ListItem
          icon=""
          content="我是内容22"
          extra={<img src="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg" width="29" height="29"/>}
          arrow="horizontal"
          didMount={window.didMount}
          onClick={window.clickItem}
          extraFormData={{'pic1':'22', 'pic2':'222'}}
        />
      </ListBody>
    </ListWrap>
    <ListWrap>
      <ListHeader label="form列表"/>
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
          didMount={function(){}}
          extraFormData={{'pic1':'22', 'pic2':'222'}}
        />
        <InputItem
          label="我是内"
          name="yyy"
          defaultValue="dada22"
          placeholder="dadads"
          onChange={function(){}}
          didMount={function(){}}
          extraFormData={{'pic1':'22', 'pic2':'222'}}
        />
        <InputItem
          name="yyy"
          defaultValue="dada22"
          placeholder="dadads"
          clear={true}
          onChange={function(){}}
          didMount={function(){}}
          extraFormData={{'pic1':'22', 'pic2':'222'}}
        />
      </ListBody>
    </ListWrap>
  </form>
, document.getElementById('components-list-wrap-demo-basic'));
````
